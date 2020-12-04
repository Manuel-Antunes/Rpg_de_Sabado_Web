import React from 'react';

import MainHeader  from "../../components/MainHeader";
import dice from "../../resources/images/baixados.png";
import ded from "../../resources/images/dungeons.png";

import { Container, Form } from './styles';


const CriarMesa: React.FC = () => {
  return (
    <Container>
      <div>
        <MainHeader>
          <h1>Criar Mesa</h1>
          <img src={dice} alt="dado"/>
        </MainHeader>
      </div>
      
      
      <Form>
        {/* criar componentes de label + input */}
        <img src={ded} alt="ded"/>
        <div>
          <label>Nome da Mesa</label>
          <input type="text" name="nomeDaMesa"/>
          <label>Sistema</label>
          <input type="text" name="sistema"/>
          <div>
            <div>
              <label>Versão</label>
              <input type="text" name="sistema"/>
            </div>
            <div>
              <label>Nº de participantes</label>
              <input type="text" name="sistema"/>
            </div>
          </div>
          <label>Descrição</label>
          <textarea name="" cols={30} rows={10}></textarea>
        </div>
      </Form>
      
    </Container>
  );
}

export default CriarMesa;