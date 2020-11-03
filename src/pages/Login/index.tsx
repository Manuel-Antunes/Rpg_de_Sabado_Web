import React from "react";
import { Form } from "@rocketseat/unform";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Container, MeuBotao } from "./styles";
import Logo from "../../components/Logo";
import FormGroup from "../../components/FormGroup";
import SubmitButton from "../../components/SubmitButton";
import GoogleButton from "../../components/GoogleButton";
import firebase from "../../services/firebase";

const Login: React.FC = () => {
  return (
    <Container>
      <Logo />
      <Form
        onSubmit={(p) => {
          const { login, password } = p;
          firebase()
            .auth()
            .signInWithEmailAndPassword(login, password)
            .then((user) => {
              console.log(user);
            })
            .catch((err) => {
              toast.error(err.message, {
                position: "top-right",
              });
            });
        }}
      >
        <FormGroup labelContent={"Username"} type={"text"} name={"login"} />
        <FormGroup
          labelContent={"Password"}
          type={"password"}
          name={"password"}
        />
        <div className="buttons">
          <GoogleButton />
          <SubmitButton>Roll</SubmitButton>
          <span></span>
        </div>
      </Form>
      <div className="footer">
        <div>
          <h4>Doesn't have an account?</h4>
        </div>
        <div>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </Container>
  );
};

export default Login;
