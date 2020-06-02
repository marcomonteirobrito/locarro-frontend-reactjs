import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container, Wrapper, Header } from './styled';
import api from '../../services/api';

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('E-mail obrigatório'),
  password: Yup.string().min(6, 'Minímo 6 caracteres').required('A senha é obrigatória'),
});

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
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
    <>
    <Header>
        <h1>Locarro</h1>
        <div>
        <a href="https://github.com/marcomonteirobrito" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/marco-antonio-monteiro-de-brito-541ba0144/" target="_blank">Linkedin</a>
        </div>
    </Header>
    <Wrapper>
      <Container>
        <Form schema={schema} onSubmit={handleSubmit}>
        <Input 
          name="email"
          type='email' 
          placeholder='Digite seu e-mail' 
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          />

        <Input 
          name="password"
          type='password' 
          placeholder='Sua senha'
          value={password}
          onChange={(event) => setPassword(event.target.value)}  
          />

        <button type='submit'>Entrar</button>
        <Link to='/register'>
          <h2>Registrar conta</h2>
        </Link>
        </Form>
      </Container>
    </Wrapper>
    </>
  );
}
