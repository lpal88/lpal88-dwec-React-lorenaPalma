import React,  { useState, useEffect } from 'react'
import { useFetch } from './hooks/UseFetch'

const SearchBar = () => {
  
/* The initial state of the quote. */
  const quoteSavedInitialState = {
    author : "",
    authorSlug : "",
    content : "",
    dateAdded: "",
    dateModified: "",
    length: 0,
    tags: [],
     _id : "",   
  }

  const quotesSavedInitialState = JSON.parse(localStorage.getItem('quotes')) || []
  const [quote, setQuote] = useState(quoteSavedInitialState)
  const [quotes, setQuotes] = useState(quotesSavedInitialState)


/* Saving the quotes in the local storage. */
  useEffect(() => {
    localStorage.setItem('quotes', JSON.stringify(quotes))
  }, [quotes])

  const inputsInitialState = {
    author: '',
    tag: 'all',
    keyWord: '',
  }
  const [inputs, setInputs] = useState(inputsInitialState)
  
  const authorInitialState = {
    name : '',
    description : '',
    bio : '',
  }
  const [author, setAuthor] = useState(authorInitialState)
  const [dataAuthor, setDataAuthor] = useState([])
  const [dataQuotes, setDataQuotes] = useState([])

  /* A hook that is fetching the data from the API. */
  const { data, loading, error } = useFetch(`https://api.quotable.io/authors?limit=150`
  );

  if (loading) return <p>cargando...</p>;
  if (error) return <p>{error}</p>;

  let iconFavourite = "../corazon.svg"

/**
 * The handleSubmit function is called when the form is submitted. It prevents the default action of
 * the form, which is to reload the page, and then calls the searchAuthor function
 */
  const handleSubmit = (e) => {
    e.preventDefault()
    searchAuthor()
}

 /**
  * The handleChange function is a React hook that takes in an event as an argument and sets the state
  * of the inputs object to the value of the event target
  */
  const handleChange = e => {
    const {name, value} = e.target 
    setInputs({
      ...inputs,
      [name]: value
    })
    //console.log(inputs.keyWord)
  }


  function handleClick(e) {
    e.preventDefault()
    console.log(dataQuotes)
    e.target.src= "../public/favorito.svg"
    dataQuotes.find(quote => quote._id === e.target.id ? setQuote(quote) : console.log("noexiste"))
    setQuotes([...quotes, quote])
    console.log(quotes) 

  }

  const handleClickAuthor = e => {
    e.preventDefault()
    const {name, value, id} = e.target 
    setAuthor({   
      name : id})
      
  }
  //console.log(author.name)

  function searchAuthor() {
        APIcall(inputs)
  }
  
/**
 * It makes an API call to the Quotable API and returns the author and quotes.
 */
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
        <option value="love">Amor</option>
        <option value="friendship">Amistad</option>  
        <option value="wisdom">Sabiduría</option>
        <option value="freedom">Libertad</option> 
        <option value="sports">Deportes</option>
        <option value="business">Negocios</option>
        <option value="future">Futuro</option>
        <option value="education">Educación</option>
        <option value="family">Familia</option>
        <option value="history">Historia</option>
        <option value="life">Vida</option>
        <option value="success">Éxito</option>
        <option value="technology">Tecnología</option>
        
      </select>
    
    <input onChange={e =>handleChange(e)}
    name="keyWord"
    type="text" 
    placeholder='Palabra clave...' 
    className='keyWord'
    value={inputs.keyWord}/>
    </form>

    <div className='searchBar__result'>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <p>{bio}</p>
      <ul className="result__list">
        {
          inputs.author === ''
            ? (data.map(author => 
            <li 
            onClick={e => handleClickAuthor(e)}
            id={author.name} 
            key={author._id}>{author.name}</li>))
            : null
        }
      </ul>
      <div>
      {
        author.name != ''
        ? data.map(author => (<><h1>{author.name}</h1><h2>{author.description}</h2><p>{author.bio}</p></>))
        : null
      }
      </div>
      
     {/* Filtering the quotes by tag and by keyWord. */}
      <ul>
        {
        inputs.tag === 'all'
          ? dataQuotes
          .filter(quote =>
            quote.content.toLowerCase().includes(inputs.keyWord.toLowerCase()))
          .map(quote => 
            (  <li key={quote._id} className="authorMain__qoute">{quote.content}
            <button onClick={e => handleClick(e)} className='searchResult__button'><img id={quote._id} src={iconFavourite} className='result__img'alt="" />
            </button>
            </li>)
            )
          :  
            dataQuotes.filter(quote => 
            (quote.tags.some(tag => 
              tag === inputs.tag)))
            .filter(quote =>
              quote.content.toLowerCase().includes(inputs.keyWord.toLowerCase()))
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