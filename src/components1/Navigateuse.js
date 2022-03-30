import React from 'react'
import { useNavigate } from 'react-router-dom'



const Navigateuse = () => {
    
    var navigate=useNavigate()
  return (
    <div>
        <button onClick={()=>navigate('/login')}>click</button>
    </div>
  )
}

export default Navigateuse