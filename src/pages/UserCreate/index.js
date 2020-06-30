import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';

import { Container, Wrapper } from './styles';
import api from '../../services/api';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('Insira um e-mail válido').required('E-mail obrigatório'),
  password: Yup.string().min(6, 'Minímo 6 caracteres').required('A senha é obrigatória'),
  address: Yup.string().required('O endereço é obrigatório'),
  city: Yup.string().required('A cidade é obrigatória'),
  uf: Yup.string().required('O estado é obrigatório'),
  phoneNumber: Yup.string().required('O telefone é obrigatório'),
});

export default function Login() {
  const [selectedCity, setSelectedCity] = useState('0');
  const [selectedUf, setSelectedUf] = useState('0');
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => { 
        const ufSigla = response.data.map(uf => uf.sigla);
        
        setUfs(ufSigla);
      });
  }, []);

  useEffect(() => {
    
    if(selectedUf === '0') {
      return;
    }

    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(response => {
        const cityNames = response.data.map(city => city.nome);

        setCities(cityNames);
    });
  }, [selectedUf]);

  function handleSelectUf(event) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }

  function handleSelectCity(event) {
    const city = event.target.value;

    setSelectedCity(city);
  }

  async function handleSubmit(data) {
      console.tron.log(data);
      console.log(data);
    }

  return (
    <>
    <Container>
      <Wrapper>
      <form>
          <div className="field">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite seu nome completo"
            />
          </div>

          <div className="field-group">
            <div className="field">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu melhor e-mail"
              />
            </div>

            <div className="field">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Digite sua senha secreta"
              />
            </div>
          </div>

        <div className="field">
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Digite seu endereço"
            />
          </div>

          <div className="field-group">
            <div className="field">
              <select 
                name="uf" 
                id="uf" 
                value={selectedUf} 
                onChange={handleSelectUf}>
              <option 
                value="0">Selecione sua UF
              </option>
                {ufs.map(uf => (
              <option 
                key={uf} 
                value={uf}>{uf}
              </option>
                ))}
              </select>
            </div>

            <div className="field">
                <select 
                  name="city" 
                  id="city" 
                  value={selectedCity} 
                  onChange={handleSelectCity}>
                <option 
                  value="0">Selecione sua cidade
                </option>
                    {cities.map(city => (
                <option 
                  key={city} 
                  value={city}>{city}
                </option>
                  ))}
                </select>
            </div>
          </div>

          <div className="field">
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Digite seu telefone"
            />
          </div>

          <button type="submit">Cadastrar</button>
      </form>
      <Link to="/">
        <span>Voltar para home</span>
      </Link>
      </Wrapper>
      </Container>
  </>
  );
}
