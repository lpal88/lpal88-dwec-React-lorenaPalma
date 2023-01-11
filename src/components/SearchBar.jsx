import React,  { useState } from 'react'

const SearchBar = () => {

  const [author, setAuthor] = useState("")
  const [dataAuthor, setDataAuthor] = useState([])
  const [dataQuotes, setDataQuotes] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    searchAuthor()

}
  
  const handleChange = e => {
    // console.log(e.target.value)
    setAuthor(e.target.value)
  }

  function searchAuthor() {
        APIcall(author)
  }
  
  function APIcall(author) {
    let urlAuthor = `https://api.quotable.io/search/authors?query=${author}`;
    let urlQuotes = `https://api.quotable.io/quotes?author=${author}`;
  
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
  console.log(dataQuotes)


  return (
    <><form className="section__searchBar" onSubmit={handleSubmit} action="#" method="POST">
      <h1>Busca tus autorxs favoritxs</h1>
      <input
        className="searchBar__box"
        name='search'
        type="text"
        placeholder="Aristotle, Confucius..."
        onChange={e => handleChange(e)}
        value={author} />
      <button type='submit' className="searchBar__link">Buscar</button>

      <select name="topics" className='searchBar__options'>
        <option value="1" selected>Elige un tema</option>
        <option value="2">Freedom</option> 
        <option value="3">Happiness</option>
      </select>
      
    </form>
    <div className='searchBar__result'>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <p>{bio}</p>
      <ul>{
        dataQuotes.map(quote =>
          ( <li key={quote._id} className="authorMain__qoute">{quote.content}</li> ) 
        )
      }
      </ul>
    </div></>
  )
}

export default SearchBar