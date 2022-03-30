import axios from 'axios'
import React, { useState } from 'react'

export const Apicalling2 = () => {

const [rolename, setrolename]=useState('')

const namechangeHandler=(e)=>{
    setrolename(e.target.value)
}

var data={
    roleName:rolename
}
const submit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3100/roles",data).then(res=>{
        console.log(res.data.data);
        console.log(res.data);
        console.log(res.status);
    })


}
  return (
    <div className='container'>
<form onSubmit={submit}>
  <div class="form-group">
    <label for="exampleInputEmail1">rolename</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter rolename" 
    onChange={(e)=>namechangeHandler(e)}
    />
   
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>



    </div>
  )
}
