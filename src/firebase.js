import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDSZ5_jWyxSF3iLvCSkQyTZMqw9tNhPK-c',

  authDomain: 'reenbit-react.firebaseapp.com',

  projectId: 'reenbit-react',

  storageBucket: 'reenbit-react.appspot.com',

  messagingSenderId: '5323880319',

  appId: '1:5323880319:web:5f0960ca9ca522b1964c4a',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
