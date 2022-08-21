import { signInWithGoogle } from '../../firebase';
import googleIcon from '../../assets/google.svg';
import { useEffect, useState } from 'react';

import './Login.scss';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const singIn = () => {
    signInWithGoogle().catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <div className="login">
      <button disabled={isLoading} className="login__button" onClick={singIn}>
        <img className="login__icon" src={googleIcon} alt=""></img>
        <span className="login__text">Sign in with google</span>
      </button>
    </div>
  );
};

export default Login;
