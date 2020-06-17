import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header } from './styled';

function RentCar() {
  return (
    <>
      <Header>
        <Link to='/dashboard'>Voltar</Link>
        <h1>Veículos disponíveis</h1>
        <h1>avatar</h1>
      </Header>

      <Container>
        <h1>veiculos</h1>
      </Container>
    </>
  );
}

export default RentCar;