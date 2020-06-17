import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Main } from './styled';

export default function Dashboard() {
  return (
    <>
      <Header>
        <Link to='/login'>Logout</Link>
      </Header>
  
      <Container>
        <div className='Rent'>
          <Link to='/rent'>
          <button>Alugar veículo</button>
          </Link>
        </div>

        <div className='GiveBack'>
          <Link to='/giveback'>
            <button>Devolver veículos</button>
          </Link>
          
        </div>

        <div className='List'>
          <Link to='/carlist'>
            <button>Listar veículos alugados</button>
          </Link>
        </div>

        <div className='Create'>
          <Link to='/carRegister'> 
            <button>Colocar um veículo para aluguel</button>
          </Link>
        </div>

        <div className='Perfil'>
          <Link>
            <button>Perfil</button>
          </Link>
        </div>
      </Container>
    </>
  );
}
