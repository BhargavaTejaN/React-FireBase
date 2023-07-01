import { firebaseAuth } from "../context/FireBase";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";

import Login from './Login';
import SignupPage from "./signup";

const MianPageForLoginAndSignin = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      onAuthStateChanged(firebaseAuth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
          console.log("You Are Logged out");
        }
      });
    }, []);
  
    if (user === null) {
      return (
        <div className="App">
          <SignupPage />
          <Login />
        </div>
      );
    }
  
    return (
      <div>
        <h1>Hello {user.email}</h1>
        <button onClick={() => signOut(firebaseAuth)} type="button">
          Logout
        </button>
      </div>
    );
}

export default MianPageForLoginAndSignin