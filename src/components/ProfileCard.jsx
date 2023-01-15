import React from 'react'

const ProfileCard = () => {
  return (
    <>
    <section className="profile">
        <article className="profile__me">
            <img className="me__image" src="../public/usuaria.svg" alt="" />
            <span className="me__name">David</span>
        </article>
        <article className="profile__places">
            <a href="#" className="places__authors">Mis autorxs</a>
            <a href="#" className="places__topics">Mis temáticas</a>
            <a href="#" className="places__quotes">Mis citas</a>
        </article>
    </section>
    </>
  )
}

export default ProfileCard