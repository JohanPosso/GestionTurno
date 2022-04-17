import React, { useState } from 'react';
import Image from 'next/image';
import CityCard from '../components/CityCard'
const SideBar = ({ setPage, setSelectedLocation }) => {
  return (
    <div className='sideBar bg-white grid grid-flow-row items-center justify-center'>
      <div className='oficina w-full'>Seleccione la oficina mas cercana</div>
      <div className='search w-full  flex flex-row justify-around items-center'>
        <div className='searchWord '>Búsqueda</div>
        <div className='searchWord '>
          <i className='fa-solid fa-magnifying-glass'></i>
        </div>
      </div>
      <div className='  w-full overflow-auto h-60'>
        <CityCard
          setSelectedLocation={setSelectedLocation}
          sede='Sede 1'
          direccion='direccion 1'
          horario='2 am '
        />{' '}
        <CityCard
          setSelectedLocation={setSelectedLocation}
          sede='Sede 2'
          direccion='direccion 1'
          horario='2 am '
        />{' '}
        <CityCard
          setSelectedLocation={setSelectedLocation}
          sede='Sede 3'
          direccion='direccion 1'
          horario='2 am '
        />{' '}
        <CityCard
          setSelectedLocation={setSelectedLocation}
          sede='Sede 4'
          direccion='direccion 1'
          horario='2 am '
        />{' '}
        <CityCard
          setSelectedLocation={setSelectedLocation}
          sede='Sede 5'
          direccion='direccion 1'
          horario='2 am '
        />{' '}
        <CityCard
          setSelectedLocation={setSelectedLocation}
          sede='Sede 6'
          direccion='direccion 1'
          horario='2 am '
        />
      </div>
      <div className=' selectButton w-full flex text-center justify-center items-center'>
        <button
          onClick={() => setPage(2)}
          className=' selectButtonWord flex items-center justify-center '
        >
          Seleccionar
        </button>
      </div>
    </div>
  );
};

export default SideBar;
