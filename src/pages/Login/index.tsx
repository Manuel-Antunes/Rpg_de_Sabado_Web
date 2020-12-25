/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import { Form } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Container, MeuBotao } from './styles';
import Logo from '../../components/Logo';
import FormGroup from '../../components/FormGroup';
import SubmitButton from '../../components/SubmitButton';
import GoogleButton from '../../components/GoogleButton';
import firebase from '../../services/firebase';
import { AuthTypes } from '../../tsstore/ducks/auth/types';
import { store } from '../../tsstore';

interface formType {
  login: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Logo />
      <div>
        <Form
          onSubmit={(p) => {
            const { login, password } = p;
            firebase()
              .auth()
              .signInWithEmailAndPassword(login, password)
              .then((user) => {
                dispatch({
                  type: AuthTypes.SIGN_IN_REQUEST,
                  payload: { login, password },
                });
                console.log(store.getState);
              })
              .catch((err) => {
                toast.error(err.message, {
                  position: 'top-right',
                });
              });
          }}
        >
          <FormGroup labelContent="Username" type="text" name="login" />
          <FormGroup labelContent="Password" type="password" name="password" />
          <div className="buttons">
            <GoogleButton />
            <SubmitButton>Roll!</SubmitButton>
            <span />
          </div>
        </Form>
        <div className="footer">
          <div>
            <h4>Doesn&apos;t have an account?</h4>
          </div>
          <div>
            <Link to="/register">Sign Up</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
