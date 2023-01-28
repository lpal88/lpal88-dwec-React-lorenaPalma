import React, { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { useUserContext } from '../contexts/userContext'


const LayoutPrivate = () => {
  const navigate = useNavigate()
  const { user } = useUserContext()

  useEffect(() => {
    if(!user) {
      navigate("/login")
      }
  }, [user] )

    
  return (
    <>
    <Outlet />
    </>
  )
}

export default LayoutPrivate