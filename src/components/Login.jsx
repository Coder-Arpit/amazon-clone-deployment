import React from 'react'
import { useState } from 'react';
import './Login.css'
import {Link, useHistory} from "react-router-dom";
import { auth } from "../firebase"
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword  } from "firebase/auth";
import { useStateValue } from '../providers/StateProvider';
import { StateProvider } from '../providers/StateProvider';

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [{basket, user}, dispatch] = useStateValue();
    
    const signIn = e => {   
        const auth = getAuth();
        
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User Signed in :", user);
        
            dispatch({
              type: 'SET_USER',
              user: user,
            }); 

            history.push('/');
            
            // window.alert(user.email);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
          }
        
        
            const register = e => { 
              const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("User Signed Up :",user)
        
            dispatch({
              type: 'SET_USER',
              user: user,
            });
        
            history.push('/');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
        
            }

  return (
    
    <div className="login">

        <Link to='/' >
            <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
        </Link>

        <div className="login__container">
            <h1>Sign In</h1>

            <form>
                <h5>Email</h5>
                <input type="email" value={email} onChange={e=> setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange={e=> setPassword(e.target.value)} /> <br />
  
            </form>
            <button onClick={signIn} className='login__signInButton' >Sign In</button>

            <p>By Sign in you agree to view amazon clone terms and conditions of use of sales.
                Please see our privacy policies, our coolies Notice and our Internet Based Ads Notice.
            </p>

            <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>

        </div>

    </div>
    
  )
}

export default Login;