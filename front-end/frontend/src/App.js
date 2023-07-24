import logo from './logo.svg';
import './App.css';

function App() {

  fetch("http://localhost:8080/api/auth",{
    headers: {
      "Content-Type" : "application/json"
    },
    method: "post"
  });



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
