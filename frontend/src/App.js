import logo from './logo.svg';
// import './App.css';
import { useEffect, useState} from 'react';
import{useLocalStorage} from './util/useLocalStorage';
import {Route, Routes } from 'react-router-dom';

import Login from './pages/Login/index';
import HomePage from './pages/Homepage/index';
import Dashboard from './pages/Dashboard/index';
import PrivateRoute from './privateRoute/index';
import PostAds from './pages/PostAds/index';
import Signup from './pages/Signup/index';
import PetInfo from './pages/petInfo/index';
import PetsView from './pages/PetsView/index';

import jwt_decode from "jwt-decode"




function App() {

  //The React useState Hook allows us to track(store) state in a function component.
  //State generally refers to data or properties that need to be tracking in an application.
  //useState accepts an initial state and returns two values: 
  //The current state.
  //A function that updates the state.

  //intial value is ""
  const [jwt, setJwt] = useLocalStorage("jwt","");
  const [roles, setRoles] = useState(getRolesFromJwt());
  
  function getRolesFromJwt(){

    if(jwt){

      const decodedJwt = jwt_decode(jwt);
      console.log(decodedJwt); 
      return decodedJwt.authority;
    }else{
      return [];
    }
    

  }

  console.log(roles);

  //通过使用useEffect钩子，您可以在函数组件中执行副作用逻辑，该逻辑在每次渲染时都会触发（默认情况下），或者在特定依赖项发生变化时触发。
  //useEffect(<function>, <dependency>)
  useEffect(() => {

  }, []);  //when [sth] is not same as original value of sth, re-fetch

  //show on the interface
  return(
    <Routes>
      <Route path='/' element={
        roles.find((role) => role.authority  === "ADMIN") ? (
          <PrivateRoute> 
            <Dashboard/>
          </PrivateRoute>
        ) : (
          <PrivateRoute> 
            <HomePage/>
          </PrivateRoute>)
      }/>

      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/petInfo' element={<PetInfo/>}/>

      <Route path='/dashboard' element={
        <PrivateRoute> 
          <Dashboard/>
        </PrivateRoute>
      }/> 
      <Route path='/postAds' element={
        <PrivateRoute> 
          <PostAds/>
        </PrivateRoute>
      }/> 
      <Route path='/petsView' element={
        <PrivateRoute> 
          <PetsView/>
        </PrivateRoute>
      }/> 
      
    </Routes>
  );




  // intial React interface
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Welcome to my PetCabin!
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
