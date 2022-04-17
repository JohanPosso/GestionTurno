import React from 'react';
import safeJsonStringify from 'safe-json-stringify';
import Image from 'next/image';

export async function getServerSideProps(ctx) {
  const userName = 'jesus';
  console.log('ctx?.query?.type :>> ', ctx?.query?.nombre);

  const doc = 'doc';
  return {
    props: {
      userName: JSON.parse(safeJsonStringify(ctx?.query?.nombre ?? '')),
      doc: JSON.parse(safeJsonStringify(ctx?.query?.document ?? '')),
    },
  };
}

const Pdf = ({ userName, doc }) => {
  return (
    <div>
      <div className='flex flex-col gap-4 items-center justify-center '>
        <Image width={200} height={60} src={'/img/Cruz verde.png'} />
        <div className=' formC'>¡Has solicitado tu turno con éxito!</div>
        <div className='flex flex-col  items-center justify-center '>
          <div>Servicio:</div>
          <div className='font-semibold'>Consulta Externa</div>
          <div>Usuario:</div>
          <div className='font-semibold'>{userName}</div>
          <div>Identificación</div>
          <div className='font-semibold'>{doc} </div>
        </div>
      </div>
    </div>
  );
};

export default Pdf;
