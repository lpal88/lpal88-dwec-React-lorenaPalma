import React from 'react'

const ProfileStorage = () => {
const favouriteQuotes = JSON.parse(localStorage.getItem('quotes')) || []
  return (
    <>{favouriteQuotes.map(quote => console.log(quote) /* (<li key={quote._id} className="authorMain__qoute">{quote.content}</li>) */)}</>
  )
}

export default ProfileStorage