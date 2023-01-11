import React,  { useState } from 'react'

const SearchBar = () => {
  
  const inputsInitialState = {
    author: '',
    tag: 'all',
  }

  const [inputs, setInputs] = useState(inputsInitialState)

  const [dataAuthor, setDataAuthor] = useState([])
  const [dataQuotes, setDataQuotes] = useState([])



  const handleSubmit = (e) => {
    e.preventDefault()
    searchAuthor()

}
  
  const handleChange = e => {
    // console.log(e.target.value)
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })

  }

  function searchAuthor() {
        APIcall(inputs)
  }
  
  function APIcall(inputs) {
    let urlAuthor = `https://api.quotable.io/search/authors?query=${inputs.author}`;
    let urlQuotes = `https://api.quotable.io/quotes?author=${inputs.author}`;

  
    //mostrarSpinner()
    fetch(urlAuthor)
      .then(respuesta =>
        respuesta.json()
      )
      .then(data => 
        //limpiarHTML()
        setDataAuthor(data.results[0])
      )
      fetch(urlQuotes)
      .then(respuesta =>
        respuesta.json()
      )
      .then(data => 
        //limpiarHTML()
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
      </select>
      
    </form>
    <div className='searchBar__result'>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <p>{bio}</p>
      <ul>{
          inputs.tag === 'all'  
          ? dataQuotes.map(quote => 
            ( <li key={quote._id} className="authorMain__qoute">{quote.content}</li> ) 
            )
          : dataQuotes
            .filter(quote => 
              (quote.tags.some(tag => 
                tag === inputs.tag)
              ))
            .map(quote => 
                ( <li key={quote._id} className="authorMain__qoute">{quote.content}</li> ) 
              )
      }
      </ul>
    </div></>
  )
}

export default SearchBar