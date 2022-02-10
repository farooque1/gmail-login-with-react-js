import './App.css';
import React,{useState} from 'react';
import {GoogleLogin, GoogleLogout } from 'react-google-login';
import Nav from './Nav';
import Product from './Product';

const clientId ='501269022844-828ud9cmjh7uuv5ei33a7m243fcq6lnh.apps.googleusercontent.com';

function App() {

  const [showlogin, setShowlogin] = useState(true);
  const [showlogout, setShowlogout] = useState(false);

  const onLoginSuccess = (res) => {
    console.log('Login Success:', res.profileObj);
    setShowlogin(false);
    setShowlogout(true);
};

const onLoginFailure = (res) => {
    console.log('Login Failed:', res);
};
const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();

    setShowlogin(true);
    setShowlogout(false);
};

return (
    <div className="">
      <Nav />      
      <div className="mt-5 text-center">
      <h1>Login with Gmail</h1>
      </div>
      
      {showlogin ? (
        <>
        <div className="text-center">
        <GoogleLogin
        clientId={clientId}
        buttonText="Sign In"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        />
        </div>
      </>)
      :null
      
      }
      
      {showlogout ? (
          <>
          <Product />          
          <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
          />
         </>
      ): null }
    
    </div>
  );
}

export default App;
