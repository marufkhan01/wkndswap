import React from 'react';
import firebase from '../../db/firebase.js';
import  './Login.css';

let provider = new firebase.auth.GoogleAuthProvider();


    function signIn () {

        provider.addScope('profile');
        provider.addScope('email');
        // initiate login 

        firebase.auth()
        // open login popup
        .signInWithPopup(provider)
        .then((result) => {
            const token = result.credential.accessToken;
            const user = result.user;
            console.log('logged in', user);
        })
}

export default function Login(){
    return(
        <button className="login-button" onClick={signIn}>Sign in here</button>

    )
}


