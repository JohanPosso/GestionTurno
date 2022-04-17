import React from 'react';
import Modal from './Modal';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ModalData = ({ open, setOpen, userName, docType, docNumber }) => {
  const fecha = new Date();
  const router = useRouter();
  return (
    <div>
      <Modal open={open} setOpen={setOpen}>
        <div className='flex flex-col gap-4 items-center justify-center '>
          <Image width={200} height={60} src={'/img/Cruz verde.png'} />
          <div className=' formC'>¡Has solicitado tu turno con éxito!</div>
          <div className='flex flex-col  items-center justify-center '>
            <div>Servicio:</div>
            <div className='font-semibold'>Consulta Externa</div>
            <div>Día:</div>
            <div className='font-semibold'>{fecha.toLocaleDateString()}</div>
            <div>Hora</div>
            <div className='font-semibold'>2:00 pm</div>
            <div>Usuario:</div>
            <div className='font-semibold'>{userName}</div>
            <div>Identificación</div>
            <div className='font-semibold'>{docType?.concat(' - ')?.concat(docNumber)} </div>
          </div>
          <button onClick={(e)=> {e.preventDefault();router.reload()}} className='buttonModal px-4 py-2 formC2 '>Solicitar nuevo turno</button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalData;
