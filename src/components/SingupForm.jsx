import React,  { useState, useEffect } from 'react'

/* A function that returns a form. */
const SingupForm = () => {

 /* The initial state of the form. */
  const initialState = {
      name: "",
      email: "", 
      pass: "", 
      passConf: "",
      brth: "",
      interest: null,
      check: false
    }
  
/* Setting the initial state of the application. */
  const dataStoragedInitialState = JSON.parse(localStorage.getItem('dataStoraged')) || []
  const [personalData, setPersonalData] = useState(initialState)
  const [dataStoraged, setDataStoraged] = useState(dataStoragedInitialState)
  const [error, setError] = useState(false)

/* Saving the data in the local storage. */
  useEffect(() => {
    localStorage.setItem('dataStoraged', JSON.stringify(dataStoraged))
  }, [dataStoraged])
  //console.log(personalData)


/**
 * A function that is called when the form is submitted. It prevents the default action of the form,
 * which is to reload the page. It then checks if the form is valid. If it is not valid, it sets the
 * error state to true. If the form is valid, sets the dataStoraged state to the personalData state and
 * it sets the personalData state to the initialState.
 */
  const handleSubmit = (e) => {
    e.preventDefault()
    const {name, email, pass, passConf, check, brth, interest} = personalData
    const regExpName = /^[a-zA-Z]{2,50}$/ 
    const regExpPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,12}$/
    // console.log(regExpName.test(name))
    // console.log(regExpPass.test(pass))
    if (
      !regExpName.test(name) ||
      !regExpPass.test(pass) ||
      !email.trim() || 
      pass.trim() != passConf.trim() ||
      !check || 
      !brth.trim() ||
      interest === null
      ) {
      setError(true);
      setDataStoraged(personalData)
      console.log(personalData)
      console.log(dataStoraged)
      return
    } 
    
    setPersonalData(initialState)
  }



/**
 * The function takes an event as an argument, and then uses the event's target to set the state of the
 * personalData object.
 */
  const handleChange = e => {
    const {name, value, checked, type} = e.target 
    setPersonalData({
        ...personalData,
        [name]: type === 'checkbox' ? true : value
    })
    console.log(personalData);
  }

  return (
    <>

    <form onSubmit={handleSubmit} className="logForm">
      <h1>Sing Up</h1>
      <section className="logForm__input">
        <input 
        name='name'
        type="text" 
        className="input__box" 
        placeholder="Nombre"
        onChange={e =>handleChange(e)}
        value={personalData.name} />

        <input 
        name='email'
        type="email" 
        className="input__box" 
        placeholder="Correo electr??nico"
        onChange={e =>handleChange(e)}
        value={personalData.email} />

        <input 
        name='pass'
        type="password" 
        className="input__box" 
        placeholder="Contrase??a"
        onChange={e =>handleChange(e)}
        value={personalData.pass} />

        <input 
        name='passConf'
        type="password"
        className="input__box" 
        placeholder="Confirmar contrase??a" 
        onChange={e =>handleChange(e)}
        value={personalData.passConf}/>

        <label htmlFor="brth">Fecha de Nacimiento:</label>
        <input 
        name='brth'
        type="date" 
        className="input__box" 
        onChange={e =>handleChange(e)}
        value={personalData.brth} />
        
        <p>??rea de Inter??s:</p>
        <label htmlFor="Filosof??a">Filosof??a</label>
        <input 
        name='interest'
        type="radio" 
        onChange={e =>handleChange(e)}
        value="Filosof??a" />
        <label htmlFor="Historia">Historia</label>
        <input 
        name='interest'
        type="radio" 
        onChange={e =>handleChange(e)}
        value="Historia" />
        <label htmlFor="Psicolog??a">Psicolog??a</label>
        <input 
        name='interest'
        type="radio" 
        onChange={e =>handleChange(e)}
        value="Psicolog??a" /><br></br>

        <input 
        className="form-check-input" //pendiente cambiar estilo
        type="checkbox" 
        name="check"
        checked={personalData.check}
        onChange={e => handleChange(e)}/>
        <label htmlFor="check">Acepto los T??rminos del servicio; Abre una nueva pesta??a y confirmas que has le??do nuestra Pol??tica de privacidad; Abre una nueva pesta??a. Aviso de recogida de datos.
        </label>
        
        <button type="submit" className="logForm__submit">Registrar</button>
      </section>
    </form>
    {
            error 
            ? (<div className="alert alert-danger">
              Rellene todos los campos y aseg??rese de que los datos tienen el formato correcto.<br></br>
              La contrase??a debe tener:<br />
              8-12 caracteres,
              al menos 1 letra may??scula y 1 min??scula,
              alg??n d??gito,
              alg??n caracter especial
              y no tener espacios vac??os</div>, 
              setTimeout( () => {
                setError(false)
              },10000))
            : null         
    }

    { 
   
   
    }
          
    </>
  )

}

export default SingupForm