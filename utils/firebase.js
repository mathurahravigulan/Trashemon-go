import Environment from "../config/environment";
import * as firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyBhZhOzmDzaGcIgqbLam1hfz4kArX16c5Y",
  authDomain: "trashemongo.firebaseapp.com",
  databaseURL: "https://trashemongo.firebaseio.com",
  projectId: "trashemongo",
  storageBucket: "trashemongo.appspot.com",
  messagingSenderId: "590022303317",
  appId: "1:590022303317:web:b899410c480922641b3edc",
  measurementId: "G-0YFQSC04BB"
});

export default firebase;

