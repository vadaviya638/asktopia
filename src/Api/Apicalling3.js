import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Apicalling3 = () => {
  const [userlist, setuserlist] = useState([])

  const getData = () => {
    axios.get("https://reqres.in/api/users?page=2").then(res => {
      console.log(res.data.data);
      setuserlist(res.data.data)
    })
  }
  useEffect(() => {
    getData()
  }, [])

  const deleteData=(id)=>{
axios.delete(`https://reqres.in/api/users/${id}`).then(res=>{
  alert(res.status)
})
  }
  return (
    <div className="container">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First_name</th>
            <th scope="col">Last_name</th>
            <th scope="col">email</th>
            <th scope="col">Avatar</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {

            userlist.map((user) => {

              return (
                <tr>
                  <th scope="row">{user.id}</th>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>
                    <img src={user.avatar}></img>
                  </td>
                  <td>
                    <button onClick={()=>{deleteData(user.id)}} className="btn btn-danger">DELETE</button>
                    <button className="btn btn-primary">UPDATE</button>
                  </td>

                </tr>
              )
            })


          }

        </tbody>
      </table>

    </div>
  )
}