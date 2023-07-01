import React from 'react'
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

import {app} from '../../firebase'

const auth = getAuth(app);

const Authentication = () => {

    const signupUser = () => {
        createUserWithEmailAndPassword(auth,'user1@gmail.com','User@123')
        .then((response) => console.log("USER : ",response))
    }

  return (
    <div>
        <h2>Authentication</h2>
        <button type='button' onClick={signupUser}>Create User</button>
    </div>
  )
}

export default Authentication