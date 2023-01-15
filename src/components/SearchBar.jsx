import React,  { useState, useEffect } from 'react'
import { useFetch } from './hooks/UseFetch'



const SearchBar = () => {

  const quotesSavedInitialState = JSON.parse(localStorage.getItem('quotes')) || []
  const [quote, setQuote] = useState("")
  const [quotes, setQuotes] = useState(quotesSavedInitialState)

  useEffect(() => {
    localStorage.setItem('quotes', JSON.stringify(quotes))
  }, [quotes])

  const inputsInitialState = {
    author: '',
    tag: 'all',
  }
  const [inputs, setInputs] = useState(inputsInitialState)

  const [dataAuthor, setDataAuthor] = useState([])
  const [dataQuotes, setDataQuotes] = useState([])

  const { data, loading, error } = useFetch(`https://api.quotable.io/authors?limit=150`
  );

  if (loading) return <p>cargando...</p>;
  if (error) return <p>{error}</p>;

  let iconFavourite = "../corazon.svg"

  const handleSubmit = (e) => {
    e.preventDefault()
    searchAuthor()
}

  const handleChange = e => {
    const {name, value} = e.target 
    setInputs({
      ...inputs,
      [name]: value
    })

  }

  function handleClick(e) {
    e.preventDefault()
    console.log(dataQuotes)
    e.target.src= "../public/favorito.svg"
    dataQuotes.find(quote => quote._id === e.target.id ? setQuote(quote.content) : console.log("noexiste"))
    setQuotes([...quotes, quote])
    console.log(quotes) 

  }
  
  function searchAuthor() {
        APIcall(inputs)
  }
  
  function APIcall(inputs) {
    let urlAuthor = `https://api.quotable.io/search/authors?query=${inputs.author}`;
    let urlQuotes = `https://api.quotable.io/quotes?author=${inputs.author}`;

    fetch(urlAuthor)
      .then(respuesta =>
        respuesta.json()
      )
      .then(data => 
        setDataAuthor(data.results[0])
      )
      fetch(urlQuotes)
      .then(respuesta =>
        respuesta.json()
      )
      .then(data => 
        setDataQuotes(data.results)
      )
  
  }

  const {name, description, bio} = dataAuthor

  return (
    <><form className="section__searchBar" onSubmit={handleSubmit} action="#" method="POST">
      <h1>Busca autorxs célebres y crea tu lista de citas favoritas</h1>
      <input
        className="searchBar__box"
        name='author'
        type="text"
        placeholder="Aristotle, Confucius..."
        onChange={e => handleChange(e)}
        value={inputs.author} />
      <button type='submit' className="searchBar__link">Buscar</button>
      

      <select 
      name="tag" 
      className='searchBar__options'
      onChange={e =>handleChange(e)}
      value={inputs.tag}>
        <option value="all">Cualquier tema</option>
        <option value="change">Cambio</option> 
        <option value="wisdom">Sabiduría</option>
        <option value="freedom">Libertad</option> 
        <option value="friendship">Amistad</option>
      </select><br></br>

    </form>

    <div className='searchBar__result'>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <p>{bio}</p>
      <ul className="result__list">
        {
          inputs.author === ''
        ? data.map(author => <li key={author._id}>{author.name}</li>)
        : console.log("lista ocultada")
      }</ul>
      
      <ul>
        {
        inputs.tag === 'all'
          ? dataQuotes.map(quote => 
            (  <li key={quote._id} className="authorMain__qoute">{quote.content}
            <button onClick={e => handleClick(e)} className='searchResult__button'><img id={quote._id} src={iconFavourite} className='result__img'alt="" />
            </button>
            </li> )
            )
          : dataQuotes.filter(quote => 
            (quote.tags.some(tag => 
              tag === inputs.tag)))
            .map(quote => 
              (  <li key={quote._id} className="authorMain__qoute">{quote.content}
              <button onClick={handleClick} className='searchResult__button'><img src={iconFavourite} className='result__img'alt="" />
              </button>
              </li>
               )
              )
        }
     
      </ul>

    </div></>
  )
}

export default SearchBar