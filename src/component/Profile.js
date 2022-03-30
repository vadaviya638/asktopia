import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    useEffect(()=>{
       setemail( localStorage.getItem('email'))
      setpassword( localStorage.getItem('password'))
        
      return()=>{

      }
    },)
  return (
    <div>
      {
          email ? <h1>{email}</h1> : <h1>please login first</h1>
      }
      
    </div>
  )
}

export default Profile