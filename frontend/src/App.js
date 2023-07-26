import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';
import{useLocalStorage} from './util/useLocalStorage'
import { Navigate, Route, Routes } from 'react-router-dom';

import Login from './Components/Login';
import HomePage from './Components/Homepage';
import Dashboard from './Components/Dashboard';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {

  //The React useState Hook allows us to track(store) state in a function component.
  //State generally refers to data or properties that need to be tracking in an application.
  //useState accepts an initial state and returns two values: 
  //The current state.
  //A function that updates the state.

  //intial value is ""
  const [jwt, setJwt] = useLocalStorage("","jwt");

  

  //通过使用useEffect钩子，您可以在函数组件中执行副作用逻辑，该逻辑在每次渲染时都会触发（默认情况下），或者在特定依赖项发生变化时触发。
  //useEffect(<function>, <dependency>)
  useEffect(() => {

    if(!jwt){
      //declare a variable, cannot be changed
      const reqBody = {
      "username" : "A",
      "password" : "A"
      };

      //hashmap, key + value
      fetch("api/auth/login",{
        headers: {
          "Content-Type" : "application/json",
        },
        method: "post",
        body: JSON.stringify(reqBody),
      }).then((response) => Promise.all([response.json(),response.headers]))
        .then(([body,headers]) => {
          setJwt(headers.get("authorization"));
          console.log(jwt);
          console.log(body);
          console.log(`jwt is:  ${jwt}`);
        });
    }
      
  }, []);  //when [sth] is not same as original value of sth, re-fetch

  //show on the interface
  return(
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={
        <PrivateRoute>
          <Dashboard/>
        </PrivateRoute>
      }/> 
      <Route path='/' element={<HomePage/>}/>
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
