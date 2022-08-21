import { signInWithGoogle } from '../../firebase';
import googleIcon from '../../assets/google.svg';

import './Login.scss';

const Login = () => {
  const singIn = () => {
    signInWithGoogle().catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="login">
      <button className="login__button" onClick={singIn}>
        <img className="login__icon" src={googleIcon} alt=""></img>
        <span className="login__text">Sign in with google</span>
      </button>
    </div>
  );
};

export default Login;
