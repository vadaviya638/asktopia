import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/profile">Profile</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/signup">Registration</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/adduser">Adduser</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/logiin">Logiin</Link>
        </li>
       
       
       
      </ul>
     
       
    </div>
  </div>
</nav>
  )
}

export default Navbar
