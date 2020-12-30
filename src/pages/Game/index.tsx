/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef,
} from 'react';
import firebase from 'firebase';
// import { io } from 'socket.iro-client/build/index';
import { ImExit } from 'react-icons/im';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
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
  PortraitMain,
  PortraitCategorias,
  PortraitJogadores,
} from './styles';
import Ficha, { FichaProps, FichaState, INITIAL_STATE } from '../Ficha';
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
  const portraitCategoriasRef = useRef(null);
  const fichaState = useState<FichaState[][]>([]);
  const [mesa, setMesa] = useState<Mesa>({
    id: '1',
    nome: 'Dungeons&Dragons',
    logo: ded,
    players: 3,
    maxPlayers: 10,
  });
  const user = useSelector<ApplicationState>((state) => state.user.data.user);
  // const socket = useMemo(
  //   () =>
  //     io('http://localhost:3333', {
  //       withCredentials: true,
  //     }),
  //   [],
  // );

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
        {
          owner: 'a',
          name: 'Legolas o Elfo',
          image: legolas,
          File: Ficha,
          state: INITIAL_STATE,
        },
        {
          owner: 'a',
          name: 'a',
          image: legolas,
          File: Ficha,
          state: INITIAL_STATE,
        },
        {
          owner: 'a',
          name: 'a',
          image: legolas,
          File: Ficha,
          state: INITIAL_STATE,
        },
      ],
    },
    {
      name: 'b',
      fichas: [
        {
          owner: 'b',
          name: 'Legolas o Elfo',
          image: legolas,
          File: Ficha,
          state: INITIAL_STATE,
        },
        {
          owner: 'b',
          name: 'a',
          image: legolas,
          File: Ficha,
          state: INITIAL_STATE,
        },
        {
          owner: 'b',
          name: 'a',
          image: legolas,
          File: Ficha,
          state: INITIAL_STATE,
        },
      ],
    },
    {
      name: 'c',
      fichas: [
        {
          owner: 'c',
          name: 'Legolas o Elfo',
          image: legolas,
          File: Ficha,
          state: INITIAL_STATE,
        },
        {
          owner: 'c',
          name: 'a',
          image: legolas,
          File: Ficha,
          state: INITIAL_STATE,
        },
        {
          owner: 'c',
          name: 'a',
          image: legolas,
          File: Ficha,
          state: INITIAL_STATE,
        },
      ],
    },
  ]);
  const [jogadores, setJogadores] = useState<
    Array<firebase.User | null | undefined>
  >([store.getState().user.data.user]);
  const [tabs, setTabs] = useState<{
    currentTable: number;
    tabs: {
      name: string;
      categoriaIndex: number;
      fichaIndex: number;
      file: React.FC<FichaProps>;
    }[];
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

  function handleAddTab(
    name: string,
    file: typeof Ficha,
    categoriaIndex: number,
    fichaIndex: number,
  ) {
    setTabs({
      currentTable: tabs.tabs.length === 0 ? 0 : tabs.tabs.length,
      tabs: [...tabs.tabs, { name, categoriaIndex, fichaIndex, file }],
    });
  }

  function handleChangeTab(index: number) {
    setTabs({ currentTable: index, tabs: tabs.tabs });
  }

  function handleRemoveTab(index: number) {
    const newTabList = tabs.tabs.filter((tab, id) => id !== index && tab);

    setTabs({
      currentTable: tabs.currentTable - 1,
      tabs: newTabList,
    });
  }

  function handleChangeScreen(number: number) {
    if (number === 0) {
      document.getElementById('PortraitCategorias')!.style.display = 'flex';
      document.getElementById('Ficha')!.style.display = 'none';
      document.getElementById('PortraitJogadores')!.style.display = 'none';
    } else if (number === 1) {
      document.getElementById('PortraitCategorias')!.style.display = 'none';
      document.getElementById('Ficha')!.style.display = 'block';
      document.getElementById('PortraitJogadores')!.style.display = 'none';
    } else if (number === 2) {
      document.getElementById('PortraitCategorias')!.style.display = 'none';
      document.getElementById('Ficha')!.style.display = 'none';
      document.getElementById('PortraitJogadores')!.style.display = 'flex';
    }
  }

  useEffect(() => {
    const fichas = categorias.map((categoria) =>
      categoria.fichas.map((ficha) => ficha.state),
    );

    fichaState[1](fichas);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (tabs.tabs.length === 0) handleAddTab('Jorge', Ficha, 0, 0);
  // }, [fichaState, tabs]);

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
            {categorias.map((element, categoriaIndex) => (
              <li key={`${categoriaIndex}${element.name}`}>
                <span>{element.name}</span>
                <Fichas>
                  {element.fichas.map((ficha, fichaIndex) => (
                    <li
                      onClick={() => {
                        handleAddTab(
                          ficha.name,
                          ficha.File,
                          categoriaIndex,
                          fichaIndex,
                        );
                      }}
                    >
                      <img src={ficha.image} alt="" />
                      <label htmlFor="">{ficha.name}</label>
                    </li>
                  ))}
                </Fichas>
              </li>
            ))}
          </ul>
        </Categorias>

        <PortraitMain>
          <ul>
            <li onClick={() => handleChangeScreen(0)}>
              <span>Categorias</span>
            </li>
            <li onClick={() => handleChangeScreen(1)}>
              <span>Fichas</span>
            </li>
            <li onClick={() => handleChangeScreen(2)}>
              <span>Jogadores</span>
            </li>
          </ul>
          <PortraitCategorias id="PortraitCategorias">
            <span>Fichas</span>
            <ul>
              {categorias.map((element, categoriaIndex) => (
                <li key={`${categoriaIndex}${element.name}2`}>
                  <span>{element.name}</span>
                  <Fichas>
                    {element.fichas.map((ficha, fichaIndex) => (
                      <li
                        onClick={() => {
                          handleAddTab(
                            ficha.name,
                            ficha.File,
                            categoriaIndex,
                            fichaIndex,
                          );
                        }}
                      >
                        <img src={ficha.image} alt="" />
                        <label htmlFor="">{ficha.name}</label>
                      </li>
                    ))}
                  </Fichas>
                </li>
              ))}
            </ul>
          </PortraitCategorias>
          <div id="Ficha">
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
            <div>
              {tabs.tabs[tabs.currentTable] &&
                tabs.tabs[tabs.currentTable].file({
                  categoriaIndex: tabs.tabs[tabs.currentTable].categoriaIndex,
                  fichaIndex: tabs.tabs[tabs.currentTable].fichaIndex,
                  state: fichaState,
                })}
            </div>
          </div>
          <PortraitJogadores id="PortraitJogadores">
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
          </PortraitJogadores>
        </PortraitMain>
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
          <div>
            {tabs.tabs[tabs.currentTable] &&
              tabs.tabs[tabs.currentTable].file({
                categoriaIndex: tabs.tabs[tabs.currentTable].categoriaIndex,
                fichaIndex: tabs.tabs[tabs.currentTable].fichaIndex,
                state: fichaState,
              })}
          </div>
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
