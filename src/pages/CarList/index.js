import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';

import Header from '../Header';

import { Main } from './styles';
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function CarList() {
  const id = localStorage.getItem('id');
  const [vehicles, setVehicles] = useState('');

  useEffect(() => {
    api.get(`list/${id}`).then(response => {
      setVehicles(response.data);
    });
  }, []);

  console.log(vehicles);
  

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
    </>
  );
}
