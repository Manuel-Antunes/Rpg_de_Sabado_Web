import firebase from "firebase";

export default function () {
  if (!firebase.apps.length) {
    const firebaseConfig = {
      apiKey: "AIzaSyBYbm9hE-UQKB8rAy_keqO0QmJVtQWXogs",
      authDomain: "rpg-de-sexta.firebaseapp.com",
      databaseURL: "https://rpg-de-sexta.firebaseio.com",
      projectId: "rpg-de-sexta",
      storageBucket: "rpg-de-sexta.appspot.com",
      messagingSenderId: "168101280450",
      appId: "1:168101280450:web:7c3ed654f06deeb719595b",
      measurementId: "G-BQCF3EHVRV",
    };
    firebase.initializeApp(firebaseConfig);
  }else{
  }
  return firebase;
}
