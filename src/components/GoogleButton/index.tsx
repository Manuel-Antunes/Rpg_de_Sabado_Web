/* eslint-disable no-console */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import google from '../../resources/images/XD/google.svg';
import firebase from '../../services/firebase';
import { store } from '../../tsstore';
import { AuthTypes } from '../../tsstore/ducks/auth/types';
import { User } from '../../tsstore/ducks/user/types';
// import { Container } from './styles';

const GoogleButton: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <button
      type="button"
      style={{ background: 'none', border: 'none' }}
      onClick={(e) => {
        e.preventDefault();
        const provider = firebase().auth;
        const a = new provider.GoogleAuthProvider();
        firebase()
          .auth()
          .signInWithPopup(a)
          .then(async (eThen) => {
            eThen.user?.getIdToken().then((aThen) => {
              console.log(aThen);
            });
            const payload: User = { user: eThen.user };
            dispatch({
              type: AuthTypes.SIGN_IN_SUCCESS,
              payload,
            });
            history.push('/');
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
