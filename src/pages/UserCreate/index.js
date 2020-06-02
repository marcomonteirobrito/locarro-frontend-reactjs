import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Container, Wrapper } from './styled';
import api from '../../services/api';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnh, setCnh] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    schema(schema);

    try {
      const response = await api.post('users', { 
        name,
        email, 
        password,
        address,
        city,
        uf,
        phoneNumber,
        cpf,
        cnh
      });
      console.log(response);

    } catch (error) {
      alert('Falha no login, tente novamente');
    }
  }

  return (
    <Wrapper>
      <Container>
        <h1>Locarro</h1>

        <form onSubmit={handleSubmit}>
        <input 
          type='name' 
          placeholder='Informe seu nome completo' 
          value={name}
          onChange={(event) => setName(event.target.value)}
          />
        <input 
          type='address' 
          placeholder='Informe seu endereço' 
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          />
        <input 
          type='city' 
          placeholder='Informe sua cidade' 
          value={city}
          onChange={(event) => setCity(event.target.value)}
          />
        <input 
          type='uf' 
          placeholder='Informe seu estado' 
          value={uf}
          onChange={(event) => setUf(event.target.value)}
          />
        <input 
          type='phoneNumber' 
          placeholder='Informe seu numero de telefone' 
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          />
        <input 
          type='cpf' 
          placeholder='informe seu CPF' 
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
          />
        <input 
          type='cnh' 
          placeholder='Informe o número de sua CNH' 
          value={cnh}
          onChange={(event) => setCnh(event.target.value)}
          />
        <input 
          type='email' 
          placeholder='Informe seu e-mail' 
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          />
        <input 
          type='password' 
          placeholder='Sua senha secreta' 
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          />

        <button type='submit'>Cadastrar</button>
        <Link to='/'>
          <button id='register'>Já tenho uma conta</button>
        </Link>
        </form>
      </Container>
    </Wrapper>
  );
}
