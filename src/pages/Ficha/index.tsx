/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React from 'react';

import logo from '../../resources/images/Daemon.png';
import {
  Container,
  Attributes,
  Cabecalho,
  Descricao,
  Experiencia,
  PericiasComArmas,
  Stats,
  Protecoes,
} from './styles';

export const INITIAL_STATE = {
  nomeDoPersonagem: '',
  religião: '',
  localDeNascimento: '',
  nome_do_jogador: '',
  kit: '',
  nivel: 0,
  religiao: '',
  nomeDoJogador: '',
  idiomas: '',
  sexo: '',
  altura: '',
  cabelos: '',
  olhos: '',
  idadeAparente: 0,
  idadeReal: 0,
  peso: '0 kg',
  xp: '',
  xpNl: '',
  pvAt: 0,
  ph: 0,
  phAt: 0,
  pm: 0,
  pmAt: 0,
  pf: 0,
  pfAt: 0,
  protecoes: {
    armaduara1: {
      name: '',
      value: 0,
    },
    armaduara2: {
      name: '',
      value: 0,
    },
    escudo: {
      name: '',
      value: 0,
    },
    outros: {
      name: '',
      value: 0,
    },
  },
  linhas: [
    { title: 'CON', full: 'Constituição', value: 0, mod: 0 },
    { title: 'FR', full: 'Força', value: 0, mod: 0 },
    { title: 'DEX', full: 'Destresa', value: 0, mod: 0 },
    { title: 'AGI', full: 'Agilidade', value: 0, mod: 0 },
    { title: 'INT', full: 'Inteligencia', value: 0, mod: 0 },
    { title: 'WILL', full: 'Força de Vontade', value: 0, mod: 0 },
    { title: 'PER', full: 'Percepção', value: 0, mod: 0 },
    { title: 'CAR', full: 'Carisma', value: 0, mod: 0 },
  ],
  aprimoramentos: [
    {
      nome: '',
      custo: '',
    },
    {
      nome: '',
      custo: '',
    },
    {
      nome: '',
      custo: '',
    },
    {
      nome: '',
      custo: '',
    },
    {
      nome: '',
      custo: '',
    },
    {
      nome: '',
      custo: '',
    },
    {
      nome: '',
      custo: '',
    },
    {
      nome: '',
      custo: '',
    },
  ],
  pericias: [
    {
      nome: 'Nome',
      atributo: 'atributo',
      gasto: 0,
    },
    {
      nome: 'Nome',
      atributo: 'atributo',
      gasto: 0,
    },
    {
      nome: 'Nome',
      atributo: 'atributo',
      gasto: 0,
    },
    {
      nome: 'Nome',
      atributo: 'atributo',
      gasto: 0,
    },
    {
      nome: 'Nome',
      atributo: 'atributo',
      gasto: 0,
    },
    {
      nome: 'Nome',
      atributo: 'atributo',
      gasto: 0,
    },
    {
      nome: 'Nome',
      atributo: 'atributo',
      gasto: 0,
    },
    {
      nome: 'Nome',
      atributo: 'atributo',
      gasto: 0,
    },
    {
      nome: 'Nome',
      atributo: 'atributo',
      gasto: 0,
    },
    {
      nome: 'Nome',
      atributo: 'atributo',
      gasto: 0,
    },
    {
      nome: 'Nome',
      atributo: 'atributo',
      gasto: 0,
    },
    {
      nome: 'Nome',
      atributo: 'atributo',
      gasto: 0,
    },
    {
      nome: 'Nome',
      atributo: 'atributo',
      gasto: 0,
    },
    {
      nome: 'Nome',
      atributo: 'atributo',
      gasto: 0,
    },
  ],
  periciasComArmas: [
    {
      nome: 'Briga',
      atributo: '',
      tipo: '',
      gastoAt: '',
      at: 0,
      def: '',
      gastoDef: '',
      dano: '',
    },
    {
      nome: 'Pistola',
      atributo: 'DEX  ',
      tipo: 'Ranged',
      gastoAt: '',
      at: 20,
      def: '',
      gastoDef: '',
      dano: '',
    },
    {
      nome: 'Armas de cano longo',
      atributo: 'DEX',
      tipo: 'Ranged',
      gastoAt: '',
      at: 20,
      def: '',
      gastoDef: '',
      dano: '',
    },
  ],
};

export interface FichaState {
  nomeDoPersonagem: string;
  religião: string;
  localDeNascimento: string;
  kit: string;
  nivel: number;
  religiao: string;
  nomeDoJogador: string;
  idiomas: string;
  sexo: string;
  altura: string;
  cabelos: string;
  olhos: string;
  idadeAparente: number;
  idadeReal: number;
  peso: string;
  xp: string;
  xpNl: string;
  pvAt: number;
  ph: number;
  phAt: number;
  pm: number;
  pmAt: number;
  pf: number;
  pfAt: number;
  protecoes: {
    armaduara1: {
      name: string;
      value: number;
    };
    armaduara2: {
      name: string;
      value: number;
    };
    escudo: {
      name: string;
      value: number;
    };
    outros: {
      name: string;
      value: number;
    };
  };
  linhas: { title: string; full: string; value: number; mod: number }[];
  aprimoramentos: {
    nome: string;
    custo: string;
  }[];

  pericias: {
    nome: string;
    atributo: string;
    gasto: number;
  }[];

  periciasComArmas: {
    nome: string;
    atributo: string;
    tipo: string;
    gastoAt: string;
    at: number;
    def: string;
    gastoDef: string;
    dano: string;
  }[];
}

export interface FichaProps<T = any> {
  categoriaIndex: number;
  fichaIndex: number;
  state: [T[][], React.Dispatch<React.SetStateAction<T[][]>>];
}

const Ficha: React.FC<FichaProps<FichaState>> = ({
  categoriaIndex,
  fichaIndex,
  state,
}) => {
  const [estado, setEstado] = state;

  function handleUpdate(
    e: React.ChangeEvent<HTMLInputElement>,
    limite: number,
    multiplicador: number,
  ) {
    if (parseInt(e.target.value, 10) < 0) {
      e.target.value = '0';
    }
    if (parseInt(e.target.value, 10) > limite) {
      e.target.value = `${limite}`;
    }
    const [, index] = e.target.id.split(' ');
    try {
      const b = document.getElementById(`percent ${index}`) as HTMLInputElement;
      b.value = b.value
        ? `${parseInt(e.target.value, 10) * multiplicador}`
        : `${parseInt(e.target.value, 10) * multiplicador}`;
    } catch (err) {
      console.log('asodasd');
    }
  }
  return (
    <>
      <img src={logo} alt="" />
      <Container>
        <Cabecalho>
          <div>
            <label htmlFor="name">Nome Do Personagem</label>
            <input type="text" id="name" value={categoriaIndex} />
          </div>
          <div>
            <label htmlFor="name">Religião</label>
            <input type="text" value={fichaIndex} />
          </div>
          <div>
            <label htmlFor="name">Local de Nascimento</label>
            <input type="text" id="born" />
          </div>
          <div>
            <label htmlFor="name">Nome do Jogador</label>
            <input type="text" id="player" />
          </div>

          <div>
            <label htmlFor="name">Kit</label>
            <input type="text" id="kit" />
          </div>
          <div>
            <label htmlFor="name">Idiomas</label>
            <input type="text" id="idiomas" />
          </div>
          <div>
            <label htmlFor="name">Nivel</label>
            <input
              type="number"
              onChange={(e) => {
                handleUpdate(e, 15, 1);
              }}
              id="idiomas"
            />
          </div>
        </Cabecalho>
        <img src="" alt="imagem da ficha" id="profile" />
        <div>
          <Attributes>
            {estado[categoriaIndex][fichaIndex].linhas.map((l, index) => (
              <tr key={index}>
                <td>
                  <div>
                    <h1>{l.title}</h1>
                    <h2>{l.full}</h2>
                  </div>
                </td>
                <td>
                  <input
                    onChange={(e) => {
                      handleUpdate(e, 100, 4);
                    }}
                    type="number"
                    id={`value ${index}`}
                  />
                </td>
                <td>
                  <input
                    onChange={(e) => {
                      handleUpdate(e, 100, 44);
                    }}
                    type="number"
                    id={`mod ${index}`}
                  />
                </td>
                <td>
                  <input
                    disabled
                    type="number"
                    name="percent"
                    id={`percent ${index}`}
                  />
                </td>
              </tr>
            ))}
          </Attributes>

          <PericiasComArmas>
            <header>Perícias com Armas(DEX)</header>
            <div className="content">
              <tr>
                <td>
                  <div>
                    <h1 style={{ width: '13rem' }}>Nome</h1>
                  </div>
                </td>
                <td>
                  <div>
                    <span>Atributo</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span>Tipo</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span>Gasto</span>
                  </div>
                </td>
                <td>
                  <div>
                    <h1>AT</h1>
                  </div>
                </td>
                <td>
                  <div>
                    <h1>DEF</h1>
                  </div>
                </td>
                <td>
                  <div>
                    <span>Gasto</span>
                  </div>
                </td>
                <td>
                  <div>
                    <h1>Dano</h1>
                  </div>
                </td>
              </tr>
              {estado[categoriaIndex][fichaIndex].periciasComArmas.map(
                (pComArmas, index) => (
                  <tr key={index}>
                    <td>
                      <input type="text" className="nome" />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="atributo"
                        onClick={(e) => {
                          console.log('Foi');
                          e.preventDefault();
                        }}
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="tipo"
                        onClick={(e) => {
                          console.log('Foi');
                          e.preventDefault();
                        }}
                      />
                    </td>
                    <td>
                      <input type="number" className="gasto" />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="atk"
                        onClick={(e) => {
                          console.log('Foi');
                          e.preventDefault();
                        }}
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="def"
                        onClick={(e) => {
                          console.log('Foi');
                          e.preventDefault();
                        }}
                      />
                    </td>
                    <td>
                      <input type="number" className="gasto" />
                    </td>
                    <td>
                      <input type="text" className="dano" />
                    </td>
                  </tr>
                ),
              )}
            </div>
          </PericiasComArmas>
          <PericiasComArmas>
            <header>Perícias</header>
            <div className="content">
              <tr>
                <td>
                  <div>
                    <h1 style={{ width: '15rem' }}>Nome (Valor Inicial)</h1>
                  </div>
                </td>
                <td>
                  <div>
                    <span>Atributo</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span>Gasto</span>
                  </div>
                </td>
                <td>
                  <div>
                    <h1>Total</h1>
                  </div>
                </td>
              </tr>
              {estado[categoriaIndex][fichaIndex].pericias.map(
                (pComArmas, index) => (
                  <tr key={index}>
                    <td>
                      <input type="text" className="nome" />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="atributo"
                        onClick={(e) => {
                          console.log('Foi');
                          e.preventDefault();
                        }}
                      />
                    </td>
                    <td>
                      <input type="number" className="gasto" />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="tipo"
                        onClick={(e) => {
                          console.log('Foi');
                          e.preventDefault();
                        }}
                      />
                    </td>
                  </tr>
                ),
              )}
            </div>
          </PericiasComArmas>
        </div>
        <div>
          <Descricao>
            <header>DESCRIÇÃO</header>
            <div className="content">
              <div>
                <label htmlFor="">Sexo</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Altura</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Cabelos</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Olhos</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Idade Aparente</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Real</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Peso</label>
                <input type="text" />
              </div>
            </div>
          </Descricao>
          <Experiencia>
            <header>EXPERIENCIA</header>
            <div className="content">
              <div>
                <label htmlFor="">Total</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Próximo nível</label>
                <input type="text" />
              </div>
            </div>
          </Experiencia>
          <Stats>
            <div className="list">
              <div className="field">
                <div className="label">
                  <h2>PV</h2>
                  <h3>pontos de vida</h3>
                </div>
                <div className="formGroup">
                  <label htmlFor="pv_total">TOTAL</label>
                  <input type="number" id="pv_total" />
                </div>
                <div className="formGroup">
                  <label htmlFor="pv_atual">PV ATUAL</label>
                  <input type="number" id="pv_atual" />
                </div>
              </div>
              <div className="field">
                <div className="label">
                  <h2>PF</h2>
                  <h3>pontos de fé</h3>
                </div>
                <div className="formGroup">
                  <label htmlFor="pf_total">TOTAL</label>
                  <input type="number" id="pf_total" />
                </div>
                <div className="formGroup">
                  <label htmlFor="pf_atual">PF ATUAL</label>
                  <input type="number" id="pf_atual" />
                </div>
              </div>
              <div className="field">
                <div className="label">
                  <h2>PH</h2>
                  <h3>pontos heroicos</h3>
                </div>
                <div className="formGroup">
                  <label htmlFor="ph_total">TOTAL</label>
                  <input type="number" id="ph_total" />
                </div>
                <div className="formGroup">
                  <label htmlFor="ph_atual">PH ATUAL</label>
                  <input type="number" id="ph_atual" />
                </div>
              </div>
              <div className="field">
                <div className="label">
                  <h2>PM</h2>
                  <h3>pontos de magia</h3>
                </div>
                <div className="formGroup">
                  <label htmlFor="pm_total">TOTAL</label>
                  <input type="number" id="pm_total" />
                </div>
                <div className="formGroup">
                  <label htmlFor="pm_atual">PM ATUAL</label>
                  <input type="number" id="pm_atual" />
                </div>
              </div>
              <div className="field">
                <div className="label">
                  <h2>IP</h2>
                  <h3>indice de proteção</h3>
                </div>
                <div className="formGroup">
                  <label htmlFor="pv_total">ESCUDOS</label>
                  <input type="number" disabled id="pv_total" />
                </div>
                <div className="formGroup">
                  <label htmlFor="pv_atual">ARMADURAS</label>
                  <input type="number" disabled id="pv_atual" />
                </div>
                <div className="formGroup">
                  <label htmlFor="pv_atual">OUTROS</label>
                  <input
                    type="number"
                    disabled
                    id="pv_atual"
                    value={
                      estado[categoriaIndex][fichaIndex].protecoes.outros.value
                    }
                  />
                </div>
              </div>
            </div>
          </Stats>
          <Protecoes>
            <span />
            <div>
              <label htmlFor="">1</label>
              <input type="text" id="" />
              <h4>armadura</h4>
              <input
                type="number"
                onChange={(e) => {
                  const novoEstado = estado;
                  if (e.target.value) {
                    novoEstado[categoriaIndex][
                      fichaIndex
                    ].protecoes.armaduara1.value = parseInt(e.target.value, 10);
                  }
                  setEstado(novoEstado);
                }}
              />
            </div>
            <div>
              <label htmlFor="">2</label>
              <input type="text" id="" />
              <h4>armadura</h4>
              <input
                type="number"
                onChange={(e) => {
                  const novoEstado = estado;
                  if (e.target.value) {
                    novoEstado[categoriaIndex][
                      fichaIndex
                    ].protecoes.armaduara2.value = parseInt(e.target.value, 10);
                  }
                  setEstado(novoEstado);
                }}
              />
            </div>
            <div>
              <label htmlFor="">3</label>
              <input type="text" id="" />
              <h4>escudo</h4>
              <input
                type="number"
                onChange={(e) => {
                  const novoEstado = estado;
                  if (e.target.value) {
                    novoEstado[categoriaIndex][
                      fichaIndex
                    ].protecoes.escudo.value = parseInt(e.target.value, 10);
                  }
                  setEstado(novoEstado);
                }}
              />
            </div>
            <div>
              <label htmlFor="">4</label>
              <input type="text" id="" />
              <h4>outros</h4>
              <input
                type="number"
                onChange={(e) => {
                  const novoEstado = estado;
                  if (e.target.value) {
                    novoEstado[categoriaIndex][
                      fichaIndex
                    ].protecoes.outros.value = parseInt(e.target.value, 10);
                  }
                  setEstado(novoEstado);
                  console.log(
                    estado[categoriaIndex][fichaIndex].protecoes.outros,
                  );
                }}
              />
            </div>
          </Protecoes>
          <PericiasComArmas>
            <div className="content">
              <tr>
                <td>
                  <div>
                    <header style={{ padding: '1rem', width: '40rem' }}>
                      Aprimoramentos
                    </header>
                  </div>
                </td>
                <td>
                  <div>
                    <h1>Custo</h1>
                  </div>
                </td>
              </tr>
              {estado[categoriaIndex][fichaIndex].aprimoramentos.map(
                (pComArmas, index) => (
                  <tr key={index}>
                    <td>
                      <input type="text" className="nome" />
                    </td>
                    <td>
                      <input type="number" />
                    </td>
                  </tr>
                ),
              )}
            </div>
          </PericiasComArmas>
        </div>
      </Container>
    </>
  );
};

export default Ficha;
