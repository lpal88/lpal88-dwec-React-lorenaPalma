import React from 'react'

const ProfileStorage = () => {
  const favouriteQuotes = JSON.parse(localStorage.getItem('quotes')) || []
  console.log(favouriteQuotes)
    return (
      <>{favouriteQuotes
        .filter(quote => quote._id != "")
        .map(quote => 
          (<li key={quote._id} className="authorMain__qoute">{quote.content}<span className='authorMain__name'>{quote.author}</span></li>))}</>
    )
  }

export default ProfileStorage