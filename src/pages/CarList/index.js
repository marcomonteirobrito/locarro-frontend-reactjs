import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';

import Header from '../Header';

import { Container, Main } from './styles';
import api from '../../services/api';
import { toast } from 'react-toastify';

function CarList() {
  const user_token = localStorage.getItem('token');
  const [cars, setCars] = useState('');
  const [carGallery, setCarGallery] = useState('https://api.adorable.io/avatars/50/abott@adorable.png');


  useEffect(() => {
    api.get('list', {
      headers: {
        Authorization: user_token,
      }
    }).then(response => {
      setCars(response.data);
    })
  }, []);

  async function handleDeleteCar(id) {
    try {
        await api.delete(`cars/${id}`, {
            headers: {
                Authorization: user_token,
            }
        });

        setCars(cars.filter(car => car.id !== id));
    } catch (err) {
        toast.error('Erro ao deletar veículo, tente novamente');
    }
  }

  return (
    <>
      <Header />

      <Container>
        <Main>
          <ul>
            {cars.map(car => (
              <div>
                <div>
                  <img src={carGallery.url || carGallery} alt='Car'/>
                </div>

                <div>
                  <strong>Modelo:</strong>
                  <p>{car.model}</p>

                  <strong>Ano:</strong>
                  <p>{car.year}</p>

                  <strong>Cor:</strong>
                  <p>{car.color}</p>

                  <strong>Observações:</strong>
                  <p>{car.observation}</p>

                  <strong>Valor:</strong>
                  <p>{car.value}</p>

                  <button type='button' onClick={() => handleDeleteCar(car.id)}>
                  <FiTrash2 size={20} color="#a8a8b3" />
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </Main>
      </Container>
    </>
  );
}

export default CarList;