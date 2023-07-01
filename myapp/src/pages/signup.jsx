
import { useFireBaseContext } from '../customHooks/useFireBaseContext'; 

import useForm from '../customHooks/useForm'

const SignupPage = () => {

  const {signupUserWithEmailAndPassword,signupUserWithGoogle} = useFireBaseContext();

  const [formData, handleChange] = useForm({ email: "", password: "" });

  const createUser = () => {
    signupUserWithEmailAndPassword(
      formData.email,
      formData.password
    ).then((response) => console.log("NEW USER : ", response));
  };

  return (
    <div className="signup-page">
      <h1>Signup page</h1>
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
      <br/>
      <button onClick={createUser} type="button">
        Signup
      </button>
      <br/>
      <br />
      <button onClick={() => signupUserWithGoogle()} type='button'>Signup With Google</button>
    </div>
  );
};

export default SignupPage;
