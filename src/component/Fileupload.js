import React from 'react'

export const Fileupload = () => {
    const filechangeHandler=(e)=>{
        console.log("file change handler called....");
console.log(e);
    }
    const multipleFilechangeHandler=(e)=>{
        console.log(e.target.files);
    }
  return (
    <div>
        <form>
           <input type='file'  onChange={(e=>{multipleFilechangeHandler(e)})} multiple/>
            <input type="file" onChange={(e=>{filechangeHandler(e)})} />
        </form>
    </div>
  )
}
