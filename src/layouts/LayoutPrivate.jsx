import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from '../contexts/userContext'



const LayoutPrivate = () => {
    const navigate = useNavigate()
    
    const {user, setUser} = useContext(UserContext)

    useEffect(() => {if(!user) {
        navigate("/login")}
    }, [user] )

    
  return (
    <Outlet />
  )
}

export default LayoutPrivate