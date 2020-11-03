import React from "react";

import google from "../../resources/images/XD/google.svg";
import firebase from "../../services/firebase";
// import { Container } from './styles';

const GoogleButton: React.FC = () => {
  return (
    <button
      style={{ background: "none", border: "none" }}
      onClick={(e) => {
        e.preventDefault();
        const provider = firebase().auth;
        const a = new provider.GoogleAuthProvider();
        firebase()
          .auth()
          .signInWithPopup(a)
          .then(async (e) => {
            e.user?.getIdToken().then((a) => {
              console.log(a);
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      <img src={google} alt="google" />
    </button>
  );
};

export default GoogleButton;
