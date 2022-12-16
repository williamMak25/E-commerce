import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDwBEXyw6JGEEyCe6IVz7fuQeONWXxqxR4",
  authDomain: "auth-email-e-commerce.firebaseapp.com",
  projectId: "auth-email-e-commerce",
  storageBucket: "auth-email-e-commerce.appspot.com",
  messagingSenderId: "981275600027",
  appId: "1:981275600027:web:1fe33dc157e62a6d3a123e"
};
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app;