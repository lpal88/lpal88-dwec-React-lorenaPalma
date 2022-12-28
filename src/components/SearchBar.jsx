import React from 'react'

const SearchBar = () => {
  return (
    <section class="section__searchBar">
    <input class="searchBar__box" placeholder="Buscar" />
        <a class="searchBar__link" href="#"><img class="searchBar__image" src="/lupa.svg" /></a>          
    </section>
  )
}

export default SearchBar