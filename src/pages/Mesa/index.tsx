import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { MesaComponentProps } from "../../routes/routeParams";
import { Container } from "./styles";
import { Form, Input, SubmitHandler } from "@rocketseat/unform";
import { FormContent } from "@rocketseat/unform/dist/Form";
interface formType extends FormContent {
  name: string;
}
const Mesas: React.FC<MesaComponentProps> = (props) => {
  useEffect(() => {
    console.log(props.match.params.id);
  }, []);
  const submitHandler: SubmitHandler<formType> = (data, helpers) => {
    return () => {
      console.log(data);
    };
  };
  return (
    <Container>
      <section>
        <Form onSubmit={submitHandler}>
          <div className="formGroup">
            <label htmlFor=""></label>
            <Input name="name" type="text" id="name" />
          </div>
          <button type="submit" />
        </Form>
      </section>
    </Container>
  );
};

export default Mesas;
