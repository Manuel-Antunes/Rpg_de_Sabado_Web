/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Form, Input, SubmitHandler } from '@rocketseat/unform';
// import { FormContent } from '@rocketseat/unform/dist/Form';
import { MesaComponentProps } from '../../routes/routeParams';
import { Container } from './styles';

// interface formType extends FormContent {
//   name: string;
// }
const Mesas: React.FC<MesaComponentProps> = (props) => {
  useEffect(() => {
    console.log(props.match.params.id);
  }, []);
  function submitHandler /*: SubmitHandler<formType> = */(
    data: any,
    helpers: any,
  ): void {
    // return () => {
    console.log(data);
    // };
  }
  return (
    <Container>
      <section>
        <Form onSubmit={submitHandler}>
          <div className="formGroup">
            <label htmlFor="" />
            <Input name="name" type="text" id="name" />
          </div>
          <button type="submit" />
        </Form>
      </section>
    </Container>
  );
};

export default Mesas;
