import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container, Wrapper, Header } from './styled';
//import api from '../../services/api';

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('E-mail obrigatório'),
  password: Yup.string().min(6, 'Minímo 6 caracteres').required('A senha é obrigatória'),
});

export default function Login() {

  function handleSubmit(data) {
    console.tron.log(data);
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
          />

        <Input 
          name="password"
          type='password' 
          placeholder='Sua senha'
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
