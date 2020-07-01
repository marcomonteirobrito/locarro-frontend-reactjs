import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import Header from '../Header';
import api from '../../services/api';

import { Container, Main } from './styles';

export default function CarCreate() {
  const user_id = localStorage.getItem('id');

  const schema = Yup.object().shape({
    board: Yup.string().required('Placa obrigatória'),
    model: Yup.string().required('Modelo obrigatório'),
    year: Yup.string().required('Ano obrigatório'),
    color: Yup.string().required('Cor obrigatório'),
    value: Yup.string().required('Valor obrigatório'),
  });

  function handleSubmit(data) {
    api.post(`cars/${user_id}`, data).then(response => {
      toast.success('Veículo adicionado com sucesso');
    }).catch(error => {
      toast.error('Falha ao adicionar veículo, Tente novamente');
    });
  }

  return (
    <>
    <Header />

    <Container>
      <Main>
      <Form schema={schema} onSubmit={handleSubmit}>
          <div className="field">
            <Input
              type="text"
              name="board"
              id="board"
              placeholder="Digite a placa do veículo"
            />
          </div>

          <div className="field-group">
            <div className="field">
              <Input
                type="text"
                name="model"
                id="model"
                placeholder="Digite o modelo do veículo"
              />
            </div>

            <div className="field">
              <Input
                type="text"
                name="year"
                id="year"
                placeholder="Digite o ano do veículo"
              />
            </div>
          </div>

        <div className="field">
            <Input
              type="text"
              name="color"
              id="color"
              placeholder="Digite a cor do veículo"
            />
          </div>

          <div className="field">
            <Input
              type="text"
              name="value"
              id="value"
              placeholder="Digite o valor do aluguel mensal do veículo"
            />
          </div>

          <div className="field">
            <Input
              type="text"
              name="observation"
              id="observation"
              placeholder="Observações"
            />
          </div>

          <button type="submit">Cadastrar</button>
      </Form>
      </Main>
      </Container>
    </>
  );
}
