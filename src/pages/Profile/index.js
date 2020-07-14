import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import AvatarInput from './AvatarInput';
import api from '../../services/api';
import Header from '../../pages/Header';

import { Container, Main } from './styles';


export default function Profile() {
  const id = localStorage.getItem('id');
  const [profile, setProfile] = useState('');

  useEffect(() => {
    api.get(`users/${id}`).then(response => {
      setProfile(response.data);
    }).catch(err => {
      toast.error('Erro na página')
    });
  }, []);

  function handleSubmit(data) {
    api.put(`users/${id}`, data).then(response => {
      toast.success('Perfil atualizado com sucesso');
    }).catch(error => {
      toast.error('Falha ao atualizar perfil, tente novamente');
    });
  }

  return (
    <>
    <Header />

    <Container>
      <Main>
        <Form initialData={profile} onSubmit={handleSubmit}>
          <AvatarInput name='avatar_id' />
          <Input name='name' placeholder='Nome completo' />
          <Input name='email' placeholder='Seu melhor e-mail' />

          <hr />

          <Input
            type='password'
            name='oldPassword'
            placeholder='Sua senha atual'
          />
          <Input
            type='password'
            name='password'
            placeholder='Nova senha'
          />
          <Input
            type='password'
            name='confirmPassword'
            placeholder='Confirmação de senha'
          />

          <button type='submit'>Atualizar perfil</button>
        </Form>
      </Main>
    </Container>
    </>
  );
}
