import React, {useState} from 'react'
import ProfileStorage from './ProfileStorage';

const ProfileCard = () => {

  const [isShown, setIsShown] = useState(false);

  
  return (
    <div className='profile__all'>
    <section className="profile">
        <article className="profile__me">
            <img className="me__image" src="/usuaria.svg" alt="" />
            <span className="me__name">David</span>
        </article>
        <article className="profile__places">
  
            <button  
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className="places__button">Mis citas</button>
        </article>
    </section>
    {isShown && (
         <ProfileStorage className='profile__storage'/>

      )}
    </div>
  )
}

export default ProfileCard