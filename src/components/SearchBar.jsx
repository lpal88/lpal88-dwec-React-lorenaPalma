import React,  { useState } from 'react'

const SearchBar = () => {

  const [author, setAuthor] = useState("")

  const form = document.querySelector('#section__searchBar')
  const result = document.querySelector('#searchBar__result')


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
    let url = `https://api.quotable.io/search/authors?query=${author}`;
  
  
    //mostrarSpinner()
    fetch(url)
      .then(respuesta =>
        respuesta.json()
      )
      .then(data => 
        //limpiarHTML()
        printResult(data)
      )
  }

  function printResult(data) {
    console.log(data.results[0])
    const {name, description, bio} = data.results[0]
    console.log(name)
    const authorName = document.createElement('P')
    authorName.innerHTML = `El autor ${name}`

    result.appendChild(authorName)

  }




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
    </form><div className='searchBar__result'></div></>
  )
}

export default SearchBar