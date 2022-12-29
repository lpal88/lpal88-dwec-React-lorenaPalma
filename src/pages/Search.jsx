import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'

const Search = () => {
  return (
    <>
    <Header />
    <SearchBar />
    <section className='search__result'></section>
    <Footer />
    </>
  )
}

export default Search