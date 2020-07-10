import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { MdLink } from "react-icons/md";

import Header from '../Header';

import { Container, CarInfo, Preview, Content, Observation, Button } from './styles';
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function CarList() {
  const id = localStorage.getItem('id');
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    api.get(`list/${id}`).then(response => {
      setVehicles(response.data.cars);
    });
  }, []);


  async function handleDeleteCar(id) {
    try {
        await api.delete(`cars/${id}`, {})
          .then(response => {
            toast.success('Veículo deletado com sucesso')
          });

        setVehicles(vehicles.filter(car => car.id !== id));
    } catch (err) {
        toast.error('Erro ao deletar veículo, tente novamente');
    }
  }

  return (
    <>
      <Header />
      <Container>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>
            <Content>
              <Preview src="https://api.adorable.io/avatars/50/abott@adorable.png" />
            <CarInfo>
                <div>
                <strong>Modelo:</strong>
                <p>{vehicle.model}</p>

                <strong>Ano:</strong>
                <p>{vehicle.year}</p>

                <strong>Valor:</strong>
                <p>R${vehicle.value}</p>
                </div>
            </CarInfo>
            <Observation>
                <strong>Obs:</strong>
                <p>{vehicle.observation}</p>
                </Observation>

            <Button>
              <a href='/carDetail'
                target='_blank'>
                  <MdLink style={{ marginRight: 8}} size={24} color="#222" />
              </a>

              <FiTrash2 size={24} color="#e57878" onClick={handleDeleteCar}/>
            </Button>
          </Content>
        </li>
        ))}
      </Container>
    </>
  );
}
