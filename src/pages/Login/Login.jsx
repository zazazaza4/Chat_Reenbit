import { signInWithFacebook, signInWithGoogle } from '../../firebase';
import googleIcon from '../../assets/google.svg';
import facebookIcon from '../../assets/facebook.svg';

import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <button className="login__button" onClick={signInWithGoogle}>
        <img className="login__icon" src={googleIcon} alt=""></img>
        <span className="login__text">Sign in with google</span>
      </button>
      <button className="login__button" onClick={signInWithFacebook}>
        <img className="login__icon" src={facebookIcon} alt=""></img>
        <span className="login__text">Sign in with facebook</span>
      </button>
    </div>
  );
};

export default Login;
