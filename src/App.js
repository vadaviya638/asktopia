
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './component/AboutUs';
import { Apicalling } from './Api/Apicalling';
import { Apicalling2 } from './Api/Apicalling2';
import { Apicalling3 } from './Api/Apicalling3';
import { Apicalling4 } from './Api/Apicalling4';

import {ContactUs} from './component/ContactUs';
import { Fileupload } from './component/Fileupload';
import  Home  from './component/Home';
import Navbar from './component/Navbar';
import { SelectDemo } from './component/SelectDemo';
import { Signup} from './component/Signup';
import Login from './component/Login';
import Profile from './component/Profile';
import { UpdateData } from './Api/UpdateData';
import Props1 from './props/Props1';
import Formvalidation from './component/Formvalidation';
import Navigateuse from './components1/Navigateuse';
import { AddUser } from './components1/AddUser';
import { Dashboard } from './doubt/Dashboard';
import { Logiin } from './doubt/Logiin';


function App() {
  var tittle= "new props varibales"
  var name ='nurul'
  return (
    <div >
      {/* <Apicalling/> */}
      {/* <Apicalling2/> */}
      {/* <Apicalling3/> */}
      {/* <Apicalling4/> */}
      {/* <Fileupload/> */}
      {/* <SelectDemo/> */}
      <Navbar/>
      {/* <Formvalidation/> */}
      {/* <Props1 tittle={tittle} name={name} demo={demo}/>
      function demo() {
        <h3>demo function</h3>
      } */}
<Navigateuse/>
<Routes>
  <Route path='/home' element={<Home/>}></Route>
  <Route path='/about' element={<AboutUs/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
  <Route path='/contact' element={<ContactUs/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/profile' element={<Profile/>}></Route>
  <Route path='/adduser' element={<AddUser/>}></Route>
  <Route path='/dashboard' element={<Dashboard/>}></Route>
  <Route path='/logiin' element={<Logiin/>}></Route>
  <Route path = "table/update/:id" element = {<UpdateData/>}></Route>
</Routes>
    </div>
  );
}


export default App;
