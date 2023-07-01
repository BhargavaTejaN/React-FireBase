import React from "react";

import { useFireBaseContext } from "../customHooks/useFireBaseContext";
import useForm from '../customHooks/useForm'


const Login = () => {

  const {loginUserWithEmailAndPassword} = useFireBaseContext();

  const [formData, handleChange] = useForm({ email: "", password: "" });

  const loginUser = () => {
    loginUserWithEmailAndPassword(formData.email, formData.password)
    .then((response) => console.log("login success"))
    .catch((error) => console.log("Error While Login : ",error))
  }

  return (
    <div className="signup-page">
      <h1>Login page</h1>
      <label>Email</label>
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        required
        placeholder="enter email"
      />
      <br />
      <label>Password</label>
      <input
        name="password"
        value={formData.password}
        onChange={handleChange}
        type="password"
        required
        placeholder="enter password"
      />
      <br />
      <button onClick={loginUser} type="button">
        Login
      </button>
    </div>
  );
};

export default Login;
