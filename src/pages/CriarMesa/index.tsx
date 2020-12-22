/* eslint-disable react/style-prop-object */
import React from 'react';

import MainHeader from '../../components/MainHeader';
import TextInput from '../../components/TextInput';
import SubmitButton from '../../components/SubmitButton';
import dice from '../../resources/images/baixados.png';
import ded from '../../resources/images/dungeons.png';
import pupkin from '../../resources/images/jack-o-lantern.png';

import { Container, Form } from './styles';

const CriarMesa: React.FC = () => {
  return (
    <Container>
      <div>
        <MainHeader resize>
          <h1>Criar Mesa</h1>
          <img src={dice} alt="dado" />
        </MainHeader>
      </div>

      <Form>
        <img src={ded} alt="ded" />
        <div>
          <TextInput>Nome da Mesa</TextInput>
          <TextInput>Sistema</TextInput>
          <div style={{ flexDirection: 'row' }}>
            <TextInput width={50}>Versão</TextInput>
            <TextInput width={50}>Nº de participantes</TextInput>
          </div>
          <div style={{ padding: '0.5rem' }}>
            <label>Descrição</label>
            <textarea name="" cols={30} rows={10} />
          </div>

          <SubmitButton>Criar</SubmitButton>
        </div>
        <img src={pupkin} alt="pupkin" />
      </Form>
    </Container>
  );
};

export default CriarMesa;
