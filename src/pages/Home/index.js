import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import { Container, Wrapper } from  './styled.js';

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <main>
          <h1>Aqui seu carro não fica parado.</h1>
          <p>Ajudamos pessoas que estejam com carros parados a ganharem uma renda extra.</p>

          <Link to="/register">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre-se, alugue já seu veículo</strong>
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