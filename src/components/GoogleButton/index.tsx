import React from "react";
import { useDispatch } from "react-redux";
import google from "../../resources/images/XD/google.svg";
import firebase from "../../services/firebase";
import { store } from "../../tsstore";
import { AuthTypes } from "../../tsstore/ducks/auth/types";
import { User } from "../../tsstore/ducks/user/types";
import history from "../../services/history";
// import { Container } from './styles';

const GoogleButton: React.FC = () => {
  const dispatch = useDispatch();
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
            const payload: User = { user: e.user };
            dispatch({
              type: AuthTypes.SIGN_IN_SUCCESS,
              payload,
            });
            history.push("/");
            console.log(store.getState());
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
