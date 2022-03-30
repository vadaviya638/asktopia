import React, { useState } from 'react'

export const Signup = () => {

    const [username,setuserName]=useState('')
    const [useremail,setuserEmail]=useState('')
    const [userpassword,setuserPassword]=useState('')
    const [rButton,setrButton]=useState('')

const userNameHandler = (e)=>{
    setuserName(e.target.value)
}
const userEmailHandler= (e)=>{
    setuserEmail(e.target.value)
}
const userPasswordHandler= (e)=>{
setuserPassword(e.target.value)
}
const rButtonHandler=(e)=>{
setrButton(e.target.value)
}
const submit=(e)=>{
    e.preventDefault()

    alert(`Name: ${username} \nEmail: ${useremail} \nPassword: ${userpassword} \nWho are you: ${rButton}`)
}   
  return (
  <div>
    <h1>User Registration</h1>
    <form onSubmit={submit}>
        <table>
            <tr>
                <td>Enter User Name</td>
                <td><input type="text" name="username" placeholder="enter user name"
                onChange={(e)=>{userNameHandler(e)}}></input></td>
            </tr>
            <tr>
                <td>Email</td>
                <td><input type="text" name="usereamil" placeholder="enter your email"
                onChange={(e)=>{userEmailHandler(e)}}></input></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="text" name="userpassword" placeholder="enter your password"
                onChange={(e)=>{userPasswordHandler(e)}}></input></td>
            </tr>
            <tr>
                <td>Who are you</td>
                <td> User<input type="radio" name="rbutton"
                onChange={(e)=>{rButtonHandler(e)}} ></input>
                <br/>
                 Developer<input type="radio" name="rbutton" 
                  onChange={(e)=>{rButtonHandler(e)}}></input></td>
            </tr>
            <tr>
                <button type="submit">Submit</button>
            </tr>
        </table>
    </form>
    </div>
    )
}
