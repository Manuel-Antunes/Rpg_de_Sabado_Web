/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useEffect, useState, useMemo } from 'react';
import firebase from 'firebase';
import { io } from 'socket.io-client/build/index';
import { ImExit } from 'react-icons/im';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom/server';
import { useSelector } from 'react-redux';

import {
  Container,
  Fichas,
  GameDiv,
  Jogadores,
  Main,
  MenuBar,
  Categorias,
  Chat,
  Dices,
  Title,
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
import { store, ApplicationState } from '../../tsstore';

const Game: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>();
  const [mesa, setMesa] = useState<Mesa>({
    id: '1',
    nome: 'Dungeons&Dragons',
    logo: ded,
    players: 3,
    maxPlayers: 10,
  });
  const user = useSelector<ApplicationState>((state) => state.user.data.user);
  const socket = useMemo(
    () =>
      io('http://localhost:3333', {
        withCredentials: true,
      }),
    [],
  );

  // const [users, setUsers] = useState();
  function getMinNome(nome: string): string {
    const [a, b] = nome.split(' ');
    return `${a} ${b}`;
  }

  function handleSubmitChatMessage(
    e: React.KeyboardEvent<HTMLTextAreaElement>,
  ) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const area = e.target as HTMLTextAreaElement;
      area.value = '';
    }
  }

  const [categorias, setCategorias] = useState([
    {
      name: 'a',
      fichas: [
        { owner: 'a', name: 'Legolas o Elfo', image: legolas, File: Ficha },
        { owner: 'a', name: 'a', image: legolas, File: Ficha },
        { owner: 'a', name: 'a', image: legolas, File: Ficha },
      ],
    },
    {
      name: 'a',
      fichas: [
        { owner: 'a', name: 'Legolas o Elfo', image: legolas, File: Ficha },
        { owner: 'a', name: 'a', image: legolas, File: Ficha },
        { owner: 'a', name: 'a', image: legolas, File: Ficha },
      ],
    },
    {
      name: 'a',
      fichas: [
        { owner: 'a', name: 'Legolas o Elfo', image: legolas, File: Ficha },
        { owner: 'a', name: 'a', image: legolas, File: Ficha },
        { owner: 'a', name: 'a', image: legolas, File: Ficha },
      ],
    },
  ]);
  const [jogadores, setJogadores] = useState<
    Array<firebase.User | null | undefined>
  >([store.getState().user.data.user]);
  const [tabs, setTabs] = useState<{
    currentTable: number;
    tabs: React.FC[];
  }>({ currentTable: 0, tabs: [] });

  const [messages, setMessages] = useState([
    {
      owner: 'Jorge',
      text: 'pimba',
      time: new Date().getTime() + Math.random(),
    },
    {
      owner: 'Jorge',
      text: 'pimba',
      time: new Date().getTime() + Math.random(),
    },
    {
      owner: 'Jorge',
      text: 'pimba',
      time: new Date().getTime() + Math.random(),
    },
    {
      owner: 'Jorge',
      text: 'pimba',
      time: new Date().getTime() + Math.random(),
    },
    {
      owner: 'Jorge',
      text: 'pimba',
      time: new Date().getTime() + Math.random(),
    },
    {
      owner: 'Jorge',
      text: 'pimba',
      time: new Date().getTime() + Math.random(),
    },
    {
      owner: 'Jorge',
      text: 'pimba',
      time: new Date().getTime() + Math.random(),
    },
    {
      owner: 'Jorge',
      text: 'pimba',
      time: new Date().getTime() + Math.random(),
    },
    {
      owner: 'Jorge',
      text: 'pimba',
      time: new Date().getTime() + Math.random(),
    },
    {
      owner: 'Jorge',
      text: 'pimba',
      time: new Date().getTime() + Math.random(),
    },
    {
      owner: 'Jorge',
      text: 'pimba',
      time: new Date().getTime() + Math.random(),
    },
    {
      owner: 'Jorge',
      text: 'pimba',
      time: new Date().getTime() + Math.random(),
    },
    {
      owner: 'Jorge',
      text: 'pimba',
      time: new Date().getTime() + Math.random(),
    },
    {
      owner: 'Jorge',
      text: 'pimba',
      time: new Date().getTime() + Math.random(),
    },
    {
      owner: 'Jorge',
      text: 'pimba',
      time: new Date().getTime() + Math.random(),
    },
    {
      owner: 'Jorge',
      text: 'pimba',
      time: new Date().getTime() + Math.random(),
    },
    {
      owner: 'Jorge',
      text: 'pimba',
      time: new Date().getTime() + Math.random(),
    },
    {
      owner: 'Jorge',
      text: 'pimba',
      time: new Date().getTime() + Math.random(),
    },
    {
      owner: 'Jorge',
      text: 'pimba',
      time: new Date().getTime() + Math.random(),
    },
    {
      owner: 'Jorge',
      text: 'pimba',
      time: new Date().getTime() + Math.random(),
    },
  ]);

  function handleAddTab(file: React.FC) {
    setTabs({
      currentTable: tabs.tabs.length === 0 ? 0 : tabs.tabs.length,
      tabs: [...tabs?.tabs, file],
    });
  }

  function handleChangeTab(index: number) {
    setTabs({ currentTable: index, tabs: tabs.tabs });
  }

  function handleRemoveTab(index: number) {
    const newTabList = tabs.tabs.filter((tab, id) => id !== index && tab);

    setTabs({
      currentTable: tabs.currentTable,
      tabs: newTabList,
    });
  }

  useEffect(() => {
    const page = Ficha({});
    if (page !== null) {
      setCurrentTab(ReactDOM.renderToString(page));
    }
  }, []);

  return (
    <Container>
      <Title>
        <div>
          <img src={mesa.logo} alt="" />
          <h1>{mesa.nome}</h1>
        </div>
        <Link to="/">
          <ImExit size={25} color="#e65100" />
        </Link>
      </Title>
      <GameDiv>
        <Categorias>
          <span>Fichas</span>
          <ul>
            {categorias.map((element, index) => (
              <li key={`${index}${element.name}`}>
                <span>{element.name}</span>
                <Fichas>
                  {element.fichas.map((ficha) => (
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    <li onClick={() => {}}>
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
            {tabs.tabs.map((tab, index) => (
              <li>
                <div onClick={() => handleChangeTab(index)}>
                  <span>{tab.name}</span>
                </div>
                <IoMdCloseCircleOutline
                  size={20}
                  onClick={() => handleRemoveTab(index)}
                />
              </li>
            ))}
          </ul>
          <div>{currentTab}</div>
        </Main>
        <Jogadores>
          <span>Jogadores</span>
          <ul>
            {jogadores?.map((u) => (
              <li>
                <div className="profile">
                  <img src={u?.photoURL ? u?.photoURL : ''} alt="" />
                  <span>
                    {getMinNome(u?.displayName ? u?.displayName : '')}
                  </span>
                </div>
                <div className="campos">
                  <span>Campos</span>
                  <p>HP</p>
                  <progress max={100} value={50} />
                  <p>SP</p>
                  <progress max={100} value={50} />
                </div>
              </li>
            ))}
          </ul>
        </Jogadores>
        <MenuBar>
          <Dices>
            <span>Rolar Dado</span>

            <div>
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
          <Chat>
            <div>
              <ul>
                {messages.map((message) => (
                  <li key={message.time}>
                    <span>{`${message.owner}: ${message.text}`}</span>
                  </li>
                ))}
              </ul>
            </div>
            <textarea
              onKeyPress={handleSubmitChatMessage}
              name="message"
              id="message"
              placeholder="  type here..."
            />
          </Chat>
        </MenuBar>
      </GameDiv>
    </Container>
  );
};

export default Game;
