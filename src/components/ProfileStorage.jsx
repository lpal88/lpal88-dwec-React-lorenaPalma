import React from 'react'

const ProfileStorage = () => {

  const favouriteQuotes = JSON.parse(sessionStorage.getItem('quotes')) || []
  //console.log(favouriteQuotes)
    return (
      <ul className='profile__storage'>
        {
       
      /* Filtering out the quotes that have no id and then mapping over the quotes and returning the
      quote content and author. */
        favouriteQuotes
        .filter(quote => quote._id != "")
        .map(quote => 
          (<li key={quote._id} className="authorMain__qoute">{quote.content}<span className='authorMain__name'>{quote.author}</span></li>))
          
          }
      </ul>
    )
  }

export default ProfileStorage