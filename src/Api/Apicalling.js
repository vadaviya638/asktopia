import axios from 'axios';
import React from 'react'

export const Apicalling = () => {

const getData=()=>{
    axios.get("http://localhost:3100/roles").then(res=>{
        console.log(res.data.data);
    }).catch(err=>{
        console.log(err);
    })
}

const postData=()=>{
    var data={
        roleName: "vadavuya"

    }
    axios.post("http://localhost:3100/roles",data).then(res=>{
        console.log(res.data.data);
    }).catch(err=>{
        console.log(err);
    }) 
}

const deleteData=()=>{
    var roleId='62273cf26442dc71d8628578'
    
    axios.delete("http://localhost:3100/roles/"+roleId).then(res=>{
        console.log(res.status);
        if(res.status==200){
            alert('delete successfully')
        }else{
            alert('not delete')
        }
    })
    
}

const updateData=()=>{
    //  roleId="6226f1176442dc71d8628563";
    var data={
        roleId:"62273cf26442dc71d8628578",
        roleName:"nurul"
    }
    axios.put("http://localhost:3100/roles" ,data).then(res=>{
        console.log(res.data);
        if(res.status==200){
            alert('update successfully')
        }else{
            alert('not update')
        }
    })
}

  return (
    <div>Apicalling
        <button onClick={getData}>Get Data</button>
        <button onClick={postData}>Post Data</button>
        <button onClick={deleteData}>Delete Data</button>
        <button onClick={updateData}>Update Data</button>
    </div>
  )
}
