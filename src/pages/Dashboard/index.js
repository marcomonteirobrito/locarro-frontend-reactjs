import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header';
import { Container } from './styles';

/* COLOCAR PARA TIRAR O TOKEN DO LOCAL STORAGE NO LOGOUT*/

export default function Dashboard() {
  function handleSubmit() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }


  return (
    <>
      <Header />
      <Container>
        <div className='List'>
          <Link to='/carlist'>
            <button>Listar meus veículos</button>
          </Link>
        </div>

        <div className='Create'>
          <Link to='/carRegister'> 
            <button>Alugue seu veículo</button>
          </Link>
        </div>

        <div className='Perfil'>
          <Link>
            <button>Perfil</button>
          </Link>
        </div>

        <div className='Logout'>
          <Link to='/login'>
            <button onClick={handleSubmit}>Sair</button>
          </Link>
        </div>
      </Container>
    </>
  );
}
