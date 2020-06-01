import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';
//import { FaEnvelope, FaKey } from 'react-icons/fa';
import { Container, Logo, SectionLogin } from './styled';
import api from '../../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await api.post('sessions', { email, password });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.user.id);
      localStorage.setItem('name', response.data.user.name);

    } catch (error) {
      alert('Falha no login, tente novamente');
    }

  }
  return (
    <Container>
        <Logo>Locarro</Logo>

        <SectionLogin>
          <form onSubmit={handleLogin}>
          <h1>Email</h1>
          <input type="text" placeholder="Digite seu melhor e-mail" />
          <h1>Senha</h1>
          <input type="password" placeholder="Digite sua senha" />
          <button className="button" type="submit">Entrar</button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02141" />
            Não tenho cadastro
          </Link>
          </form>   
        </SectionLogin>
    </Container>
  );
}
