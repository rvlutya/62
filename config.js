import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDjJOfWMg4cV3Sth2g-5GxE4QkrQcX3wEU",
  authDomain: "school-17f9b.firebaseapp.com",
  databaseURL: "https://school-17f9b-default-rtdb.firebaseio.com",
  projectId: "school-17f9b",
  storageBucket: "school-17f9b.appspot.com",
  messagingSenderId: "832269958698",
  appId: "1:832269958698:web:e6b8710129ac2cc9f9cd53"
};



if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
 
  export default firebase.database()

