import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Container, Wrapper} from './styles';
import api from '../../services/api';



export default function Login() {
  const history = useHistory();

  const schema = Yup.object().shape({
    email: Yup.string().email('Insira um e-mail válido').required('E-mail obrigatório'),
    password: Yup.string().min(6, 'Minímo 6 caracteres').required('A senha é obrigatória'),
  });

  function handleSubmit(data) {
    api.post('sessions', data).then(response => {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('id', response.data.user.id);
      history.push('/dashboard');
    }).catch(error => {
      toast.error('Falha no login, Tente novamente');
    });
  }

  return (
    <>
    <Wrapper>
      <Container>
        <h1>Login</h1>
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
