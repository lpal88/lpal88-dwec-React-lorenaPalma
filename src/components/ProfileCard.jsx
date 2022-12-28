import React from 'react'

const ProfileCard = () => {
  return (
    <>
    <section class="profile">
        <article class="profile__me">
            <img class="me__image" /* src="assets/images/imageprofile.jpeg" */ alt="" />
            <span class="me__name">{/* David */}</span>
        </article>
        <article class="profile__places">
            <a href="#" class="places__authors">Mis autorxs</a>
            <a href="#" class="places__topics">Mis temáticas</a>
            <a href="#" class="places__quotes">Mis citas</a>
        </article>
    </section>
    <section class="action">
        <img class="action__modify" src="assets/images/iconModify.png" alt="" />
    </section>
    </>
  )
}

export default ProfileCard