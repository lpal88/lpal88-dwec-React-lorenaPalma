import React,  { useState, useEffect } from 'react'




const SingupForm = () => {

  const initialState = {
      name: "",
      email: "", 
      pass: "", 
      passConf: "",
      brth: "",
      interest: null,
      check: false
    }
  
  const dataStoragedInitialState = JSON.parse(localStorage.getItem('dataStoraged')) || []

  const [personalData, setPersonalData] = useState(initialState)
  const [dataStoraged, setDataStoraged] = useState(dataStoragedInitialState)

  const [error, setError] = useState(false)

  useEffect(() => {
    localStorage.setItem('dataStoraged', JSON.stringify(dataStoraged))
  }, [dataStoraged])
  //console.log(personalData)


  const handleSubmit = (e) => {
    e.preventDefault()
    const {name, email, pass, passConf, check, brth, interest} = personalData

    //El nombre debe estar formado sólo por letras.
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
        placeholder="Correo electrónico"
        onChange={e =>handleChange(e)}
        value={personalData.email} />

        <input 
        name='pass'
        type="password" 
        className="input__box" 
        placeholder="Contraseña"
        onChange={e =>handleChange(e)}
        value={personalData.pass} />

        <input 
        name='passConf'
        type="password"
        className="input__box" 
        placeholder="Confirmar contraseña" 
        onChange={e =>handleChange(e)}
        value={personalData.passConf}/>

        <label htmlFor="brth">Fecha de Nacimiento:</label>
        <input 
        name='brth'
        type="date" 
        className="input__box" 
        onChange={e =>handleChange(e)}
        value={personalData.brth} />
        
        <p>Área de Interés:</p>
        <label htmlFor="Filosofía">Filosofía</label>
        <input 
        name='interest'
        type="radio" 
        onChange={e =>handleChange(e)}
        value="Filosofía" />
        <label htmlFor="Historia">Historia</label>
        <input 
        name='interest'
        type="radio" 
        onChange={e =>handleChange(e)}
        value="Historia" />
        <label htmlFor="Psicología">Psicología</label>
        <input 
        name='interest'
        type="radio" 
        onChange={e =>handleChange(e)}
        value="Psicología" /><br></br>

        <input 
        className="form-check-input" //pendiente cambiar estilo
        type="checkbox" 
        name="check"
        checked={personalData.check}
        onChange={e => handleChange(e)}/>
        <label htmlFor="check">Acepto los Términos del servicio; Abre una nueva pestaña y confirmas que has leído nuestra Política de privacidad; Abre una nueva pestaña. Aviso de recogida de datos.
        </label>
        
        <button type="submit" className="logForm__submit">Registrar</button>
      </section>
    </form>
    {
            error 
            ? (<div className="alert alert-danger">
              Rellene todos los campos y asegúrese de que los datos tienen el formato correcto.<br></br>
              La contraseña debe tener:<br />
              8-12 caracteres,
              al menos 1 letra mayúscula y 1 minúscula,
              algún dígito,
              algún caracter especial
              y no tener espacios vacíos</div>, 
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