/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import firebase from 'firebase';
import {
  Container,
  Fichas,
  Jogadores,
  Main,
  MenuBar,
  Categorias,
  Chat,
  Dices,
} from './styles';
import Ficha from '../Ficha';
import legolas from '../../resources/images/legolas.jpg';
import d4 from '../../resources/images/d4.svg';
import d6 from '../../resources/images/d6.svg';
import d8 from '../../resources/images/d8.svg';
import d10 from '../../resources/images/d10.svg';
import d12 from '../../resources/images/d12.svg';
import d20 from '../../resources/images/d20.svg';
import d100 from '../../resources/images/d100.svg';
import { Game as Mesa } from '../../types';
import ded from '../../resources/images/dungeons.png';
import { store } from '../../tsstore';

const Game: React.FC = () => {
  const [mesa, setMesa] = useState<Mesa>({
    id: '1',
    nome: 'Dungeons&Dragons',
    logo: ded,
    players: 3,
    maxPlayers: 10,
  });
  const [users, setUsers] = useState();
  function getMinNome(nome: string): string {
    const [a, b] = nome.split(' ');
    return `${a} ${b}`;
  }
  const [categorias, setCategorias] = useState([
    {
      name: 'a',
      fichas: [
        { owner: 'a', name: 'Legolas o Elfo', image: legolas },
        { owner: 'a', name: 'a', image: legolas },
        { owner: 'a', name: 'a', image: legolas },
      ],
    },
    {
      name: 'a',
      fichas: [
        { owner: 'a', name: 'Legolas o Elfo', image: legolas },
        { owner: 'a', name: 'a', image: legolas },
        { owner: 'a', name: 'a', image: legolas },
      ],
    },
    {
      name: 'a',
      fichas: [
        { owner: 'a', name: 'Legolas o Elfo', image: legolas },
        { owner: 'a', name: 'a', image: legolas },
        { owner: 'a', name: 'a', image: legolas },
      ],
    },
  ]);
  const [jogadores, setJogadores] = useState<
    Array<firebase.User | null | undefined>
  >([store.getState().user.data.user]);
  const [guias, setGias] = useState([
    { nome: 'ficha 1' },
    { nome: 'ficha 2' },
    { nome: 'ficha 3' },
  ]);
  return (
    <Container>
      <Categorias>
        <span>Fichas</span>
        <ul>
          {categorias.map((element) => (
            <li>
              <span>{element.name}</span>
              <Fichas>
                {element.fichas.map((ficha) => (
                  <li>
                    <img src={ficha.image} alt="" />
                    <label htmlFor="">{ficha.name}</label>
                  </li>
                ))}
              </Fichas>
            </li>
          ))}
        </ul>
      </Categorias>
      <Main>
        <ul>
          {guias.map((guia) => (
            <li>
              <span>{guia.nome}</span>
            </li>
          ))}
        </ul>
        <div className="wrapper">
          <Ficha />
        </div>
      </Main>
      <Jogadores>
        <span>Jogadores</span>
        <ul>
          {jogadores?.map((u) => (
            <li>
              <div className="profile">
                <img src={u?.photoURL ? u?.photoURL : ''} alt="" />
                <span>{getMinNome(u?.displayName ? u?.displayName : '')}</span>
              </div>
              <div className="campos" />
            </li>
          ))}
        </ul>
      </Jogadores>
      <MenuBar>
        <Dices>
          <span>Rolar Dado</span>

          <div className="dices">
            <button type="button">
              <img src={d4} alt="" />
              <span>D4</span>
            </button>
            <button type="button">
              <img src={d6} alt="" />
              <span>D6</span>
            </button>
            <button type="button">
              <img src={d8} alt="" />
              <span>D8</span>
            </button>
            <button type="button">
              <img src={d10} alt="" />
              <span>D10</span>
            </button>
            <button type="button">
              <img src={d12} alt="" />
              <span>D12</span>
            </button>
            <button type="button">
              <img src={d20} alt="" />
              <span>D20</span>
            </button>
            <button type="button">
              <img src={d100} alt="" />
              <span>D100</span>
            </button>
          </div>
        </Dices>
        <button type="button">
          <img src={mesa.logo} alt="" />
        </button>
        <Dices>
          <span>Rolar Dado</span>

          <div className="dices">
            <button type="button">
              <img src={d4} alt="" />
              <span>D4</span>
            </button>
            <button type="button">
              <img src={d6} alt="" />
              <span>D6</span>
            </button>
            <button type="button">
              <img src={d8} alt="" />
              <span>D8</span>
            </button>
            <button type="button">
              <img src={d10} alt="" />
              <span>D10</span>
            </button>
            <button type="button">
              <img src={d12} alt="" />
              <span>D12</span>
            </button>
            <button type="button">
              <img src={d20} alt="" />
              <span>D20</span>
            </button>
            <button type="button">
              <img src={d100} alt="" />
              <span>D100</span>
            </button>
          </div>
        </Dices>
      </MenuBar>
    </Container>
  );
};

export default Game;
