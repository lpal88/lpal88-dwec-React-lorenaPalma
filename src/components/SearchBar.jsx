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
    console.log("hola")
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
      <input
        className="searchBar__box"
        name='search'
        type="text"
        placeholder="Buscar"
        onChange={e => handleChange(e)}
        value={author} />
      <input type='submit' className="searchBar__image" />
    </form>
    <div className='searchBar__result'>
      <p>{name}</p>
      <p>{description}</p>
      <p>{bio}</p>
      <ul>{
        dataQuotes.map(quote =>
          ( <li key={quote._id}>{quote.content}</li> ) 
        )
      }
      </ul>
    </div></>
  )
}

export default SearchBar