import React,  { useState } from 'react'

const api_url ="https://zenquotes.io/api/quotes/";

/* const input = document.querySelector('.searchBar__box')
const result = document.querySelector('.search__result') */
/* 
window.addEventListener('load', () => {
  input.addEventListener('submit', buscarClima)
}) */

/* async function getapi(url)
{
  const response = await fetch(url, {mode: 'no-cors'});
  var data = await response.json()
  console.log(data);
}

getapi(api_url); */

/* var category = 'happiness'
const ajax =({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'orZlUHr3DHJf5rrnSM2vGw==DlcXXyyf69yPPkwq'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
console.log(ajax)
 */

fetch("https://api.quotable.io/search/authors?query=Einst")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });

const SearchBar = () => {
  const handleChange = e => {
    setTodo({
        ...todo,
        [e.target.name]: e.target.value
    })
  }

  const [todoSearch, setTodo] = useState("")

  return (
    <section className="section__searchBar">
      <input 
      className="searchBar__box" 
      name='todoSearch'
      type="text" 
      placeholder="Buscar"
      onChange={e =>handleChange(e)}
      value={todoSearch} />
      <input type='submit' className="searchBar__image"/>
    </section>
  )
}

export default SearchBar