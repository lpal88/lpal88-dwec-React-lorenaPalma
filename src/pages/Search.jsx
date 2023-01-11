import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'

const Search = () => {
  return (
    <>
    <Header />
    <SearchBar />
    <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a>
    <Footer />
    </>
  )
}

export default Search