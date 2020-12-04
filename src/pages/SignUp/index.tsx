/* eslint-disable no-console */
import React from 'react';
import { Form, SubmitHandler } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Container } from './styles';
import Logo from '../../components/Logo';
import FormGroup from '../../components/FormGroup';
import SubmitButton from '../../components/SubmitButton';
import GoogleButton from '../../components/GoogleButton';
import firebase from '../../services/firebase';

interface formType {
  email: string;
  login: string;
  password: string;
}

const SignUp: React.FC = () => {
  return (
    <Container>
      <Logo />
      <Form
        onSubmit={async (p) => {
          const { login, password, email } = p;
          firebase()
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
              user.user?.updateProfile({
                displayName: login,
              });
              console.log(user);
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
        <FormGroup labelContent="Email" type="email" name="email" />
        <div className="buttons">
          <GoogleButton />
          <SubmitButton>Roll</SubmitButton>
          <span />
        </div>
      </Form>
      <div className="footer">
        <div>
          <h4>Aready have an account?</h4>
        </div>
        <div>
          <Link to="/">Sign In</Link>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
