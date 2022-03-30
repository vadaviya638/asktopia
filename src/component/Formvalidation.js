import React, { useState } from 'react'

const Formvalidation = () => {
   const [name, setname]=useState('')
   const [email, setemail]=useState('')
   const [agevalidator, setagevalidator]=useState(true)

var isAgeValid=true
const ageBlurhandler=(e)=>{
    console.log("iiiiii",e.target.value);
    if(e.target.value.length<=0){
        setagevalidator(false)
    }
}

      return (
        <div>
        <form>
            <div>
                <label>Enter name</label>
                <input type="text" name="name"  onChange = {(e)=>setname(e.target.value)}/>
                {
                name.length > 0 &&  name.length< 3 ? "pls check len":null
                }
            </div>
            <div>
                <label>Enter email</label>
                <input type="text" name="email"  onChange = {(e)=>setemail(e.target.value)}/>
                {
                    email.length<=0 ? "pls check len":null
                }
            </div>
            <div>
                <label>Enter age</label>
                <input type="text" name="name"  onChange = {(e)=>setemail(e.target.value)} onBlur = {(e)=>{ageBlurhandler(e)}}/>
                {
                     agevalidator ? "":"pls enter age"       
                }
            </div>
            <div>
                <input type="submit" value="submit"/>
            </div>

        </form>

</div>
    
  )
}

export default Formvalidation