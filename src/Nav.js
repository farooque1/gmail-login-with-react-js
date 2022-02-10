import React,{useState} from 'react';
import {authentication} from './firebase/db';
import {signInWithPopup, GoogleAuthProvider, signOut ,getAuth} from "firebase/auth";

const Nav = () => {
  const [showlogin, setShowlogin] = useState(true);
  const [showlogout, setShowlogout] = useState(false);
  
  const [loading, setloading] = useState(false);

  const signin=()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication,provider)
    .then((res)=>{
      console.log(res);
      setShowlogin(false);
      setShowlogout(true);
    }).catch((err)=>{
      console.log(err);
    })
  }

//   const auth = getAuth();
//   signOut(auth).then((res) => {
//     console.log(res);
// }).catch((err) => {
//   console.log(err);
// });


//   const auth = getAuth();  
//   const signOut =()=> {
//     return signOut(auth);
// }
const auth = getAuth();

const handleLogout =()=> {

  signOut(auth);

  console.log("logout Success");
  console.clear();
    setShowlogin(true);
    setShowlogout(false);
}
  // const signOut = ()=>{  
  //   authentication.auth().signOut();
  //   setShowlogin(true);
  //   setShowlogout(false);
  //   }

    return(
     <div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="/">E-Store</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    </ul>
    {showlogin ?   <button class="btn btn-outline-light my-2 my-sm-0" onClick={signin}>Login</button> :null }
    {showlogout ?   <button class="btn btn-outline-light my-2 my-sm-0" onClick={handleLogout}>Logout</button> :null }
  </div>
</nav>
</div>

)}
export default Nav;