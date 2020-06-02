import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container, Wrapper } from './styled';
//import api from '../../services/api';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('Insira um e-mail válido').required('E-mail obrigatório'),
  password: Yup.string().min(6, 'Minímo 6 caracteres').required('A senha é obrigatória'),
  address: Yup.string().required('O endereço é obrigatório'),
  city: Yup.string().required('A cidade é obrigatória'),
  uf: Yup.string().required('O estado é obrigatório'),
  phoneNumber: Yup.string().required('O telefone é obrigatório'),
  cpf: Yup.string().required('O CPF é obrigatório'),
  cnh: Yup.string().required('A CNH é obrigatória'),
});

export default function Login() {

  async function handleSubmit(data) {
      console.tron.log(data);
    }

  return (
    <Wrapper>
      <Container>
        <h1>Locarro</h1>

        <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="name"
          type='name' 
          placeholder='Informe seu nome completo' 
          />
        <Input
          name="address" 
          type='address' 
          placeholder='Informe seu endereço' 
          />
        <Input
          name="city" 
          type='city' 
          placeholder='Informe sua cidade' 
          />
        <Input
          name="uf" 
          type='uf' 
          placeholder='Informe seu estado' 
          />
        <Input
          name="phoneNumber" 
          type='phoneNumber' 
          placeholder='Informe seu numero de telefone' 
          />
        <Input
          name="cpf" 
          type='cpf' 
          placeholder='informe seu CPF' 
          />
        <Input
          name="cnh" 
          type='cnh' 
          placeholder='Informe o número de sua CNH' 
          />
        <Input
          name="email" 
          type='email' 
          placeholder='Informe seu e-mail' 
          />
        <Input
          name="password" 
          type='password' 
          placeholder='Sua senha secreta' 
          />

        <button type='submit'>Cadastrar</button>
        <Link to='/'>
          <button id='register'>Já tenho uma conta</button>
        </Link>
        </Form>
      </Container>
    </Wrapper>
  );
}
