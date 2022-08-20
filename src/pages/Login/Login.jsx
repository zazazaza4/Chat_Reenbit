import { signInWithGoogle } from '../../firebase';
import googleIcon from '../../assets/google.svg';
import { useDispatch } from 'react-redux';

import './Login.scss';
import { signIn } from '../../redux/slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();

  const singIn = () => {
    signInWithGoogle()
      .then((result) => {
        const name = result.user.displayName;
        const profilePic = result.user.photoURL;

        dispatch(signIn({ name, profilePic }));
      })
      .catch((error) => {
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
