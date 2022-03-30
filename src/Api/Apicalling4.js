import React, { useRef } from 'react'

export const Apicalling4 = () => {
    var name=useRef('')
    const submit=(e)=>{
        e.preventDefault()
        console.log(name.current.value);
    }
  return (
    <div>
        <form>
            <tr>
                <td>Enter Name</td>
                <td><input type='text' ref={name}></input></td>
            </tr>
        </form>
    </div>
  )
}
