import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB5Dw3ucSBqovvZ3ddH5rs13vmQCHpYPAk",
  authDomain: "movie-hub-edf3b.firebaseapp.com",
  databaseURL: "https://movie-hub-edf3b.firebaseio.com",
  projectId: "movie-hub-edf3b",
  storageBucket: "movie-hub-edf3b.appspot.com",
  messagingSenderId: "552449296364",
  appId: "1:552449296364:web:39530ebb50ed9e418ee2c9"
};

export const createUserProfile = async (userAuth) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = userRef.get();
  console.log(snapShot);
  if(!snapShot.exists){
    const {email} = userAuth;
    const dateCreated = new Date();

    try {
      await userRef.set({
        email,
        dateCreated
      })
    } catch (error) {
      console.log('errror creating user', error.message);
    }

  }




  return userRef;


};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;