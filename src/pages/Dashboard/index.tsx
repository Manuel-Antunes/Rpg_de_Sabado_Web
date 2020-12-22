/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import React, { useEffect, useState, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import ded from '../../resources/images/dungeons.png';
import cyber from '../../resources/images/cyberpunk.png';
import daemon from '../../resources/images/Daemon.png';
import updateB from '../../resources/images/XD/update.png';
import deleteB from '../../resources/images/XD/delete.png';
import dice from '../../resources/images/baixados.png';
import {
  Container,
  FormControl,
  LogOutButton,
  TableList,
  UserContainer,
} from './styles';
import MainHeader from '../../components/MainHeader';
import { User } from '../../tsstore/ducks/user/types';
import { ApplicationState } from '../../tsstore';
import { Game } from '../../types';
import { signOutRequest } from '../../tsstore/ducks/auth/actions';

interface OwnProps {
  data: User;
}

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state: ApplicationState) => state.user.data.user);

  console.log(user);
  const [mesas, setMesas] = useState<Game[]>([]);
  const [finder, setFinder] = useState('');
  useEffect(() => {
    const teste = [
      {
        id: '1',
        nome: 'Dungeons&Dragons',
        logo: ded,
        players: 3,
        maxPlayers: 10,
      },
      {
        id: 2,
        nome: 'Cyberpunk 2077',
        logo: cyber,
        players: 5,
        maxPlayers: 10,
      },
      {
        id: 3,
        nome: 'Daemon Cyberpunk',
        logo: daemon,
        players: 10,
        maxPlayers: 13,
      },
      {
        id: 4,
        nome: 'Daemon Cyberpunk',
        logo: daemon,
        players: 10,
        maxPlayers: 13,
      },
      {
        id: 5,
        nome: 'Daemon Cyberpunk',
        logo: daemon,
        players: 10,
        maxPlayers: 13,
      },
      {
        id: 6,
        nome: 'Daemon Cyberpunk',
        logo: daemon,
        players: 10,
        maxPlayers: 13,
      },
      {
        id: 7,
        nome: 'Daemon Cyberpunk',
        logo: daemon,
        players: 10,
        maxPlayers: 13,
      },
    ];
    setMesas(teste);
  }, []);
  function addGame(game: Game) {
    const newMesas = [...mesas];
    newMesas.push(game);
    setMesas(newMesas);
    toast.success('Jogo Adicionado Com Sucesso', { position: 'top-right' });
  }
  function handleFindGame(id: string) {
    const games = [
      {
        id: '1',
        nome: 'Dungeons&Dragons',
        logo: ded,
        players: 3,
        maxPlayers: 10,
      },
      {
        id: '10',
        nome: 'Cyberpunk 2077',
        logo: cyber,
        players: 5,
        maxPlayers: 10,
      },
    ];
    const achado = mesas.find((elemen) => {
      return elemen.id === id;
    });
    console.log(achado);
    if (achado) {
      return toast.error('Esse Jogo Já foi Cadastrado', {
        position: 'top-right',
      });
    }
    const game = games.find((element) => {
      return element.id === id;
    });
    if (game) {
      addGame(game);
    } else {
      toast.error('Mesa não encontrada', { position: 'top-right' });
    }
  }
  function handleDelete(object: Game) {
    const newArray = [...mesas];
    newArray.splice(newArray.indexOf(object), 1);
    setMesas(newArray);
  }
  return (
    <Container>
      <MainHeader>
        <h1>Mesas</h1>
        <img src={dice} alt="dice" />
      </MainHeader>
      <FormControl>
        <label htmlFor="table_finder">Entrar em uma mesa</label>
        <input
          type="text"
          id="table_finder"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFinder(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            if (finder !== '') {
              handleFindGame(finder);
            } else {
              toast.error('insira um valor antes de pesquisar', {
                position: 'top-right',
              });
            }
          }}
        >
          Join
        </button>
      </FormControl>
      <UserContainer>
        <img src={user?.photoURL ? user.photoURL : ''} alt="" />
        <label>{user?.displayName}</label>
      </UserContainer>
      <section>
        <h3>Minhas Mesas</h3>
        <TableList>
          {mesas.map((game) => (
            <li key={game.id}>
              <button type="button" className="clicable">
                <img className="logo" src={game.logo} alt={game.nome} />
              </button>
              <Link to={`/game/${game.id}`}>{game.nome}</Link>
              <div>
                <span>
                  {game.players}/{game.maxPlayers}
                </span>
                <span>
                  <Link to="/mesa/">
                    <img src={updateB} alt="update" />
                  </Link>
                </span>
                <button
                  type="button"
                  onClick={() => {
                    handleDelete(game);
                  }}
                >
                  <img src={deleteB} alt="delete" />
                </button>
              </div>
            </li>
          ))}
        </TableList>
      </section>
      <LogOutButton
        type="button"
        onClick={() => dispatch(signOutRequest(history))}
      >
        LogOut
      </LogOutButton>
    </Container>
  );
};

export default Dashboard;
