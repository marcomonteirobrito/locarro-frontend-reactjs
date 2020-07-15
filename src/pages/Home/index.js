import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import { Container, Wrapper } from  './styles.js';

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <main>
          <h1>Não deixe seu carro parado.</h1>
          <p>Alugue já seu veículo.</p>

          <Link to="/register">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre-se</strong>
          </Link>
          <Link to="/login">
            <span>
              <FiLogIn />
            </span>
            <strong>Já tenho uma conta</strong>
          </Link>
        </main>
      </Wrapper>
    </Container>
  );
}
