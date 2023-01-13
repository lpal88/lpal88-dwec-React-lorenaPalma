import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <>
    <Header />
    <h1 className='contact__title'>CUÉNTANOS TU OPINIÓN</h1>
    <ContactForm />
    <Footer />
    </>
  )
}

export default Contact