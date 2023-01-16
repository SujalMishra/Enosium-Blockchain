import React, {useState} from "react";
import './App.css';
import AfterLoginBody from "./components/AfterLoginBody"
import NavBar from './components/NavBar';
import LoginBody from './components/LoginBody';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  
  let {isLogin,setIsLogin}=useState("false")
isLogin="true";
  return (
    <div className="App">
       <NavBar/>
     {isLogin==="false"? <LoginBody/> : <AfterLoginBody/>}
           
    </div>
  );
}

export default App;
