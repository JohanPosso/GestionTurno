import React, { useState } from 'react';

const CityCard = ({ showButton = false, sede, direccion, horario, setSelectedLocation }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div className='  h-20  border-b-2 flex flex-row w-full justify-between items-center'>
      {!showButton && (
        <div className='w-1/6 flex justify-center items-center'>
          <button
            onClick={() => {
              setSelected(!selected);
              setSelectedLocation({
                sede: sede,
                direccion: direccion,
                horario: horario,
              });
            }}
            className={selected ? '  circle rounded-full bg-gray-600' : '  circle rounded-full  '}
          >
            {' '}
          </button>
        </div>
      )}

      <div className=' containerCity2 w-5/6   '>
        <div className='  w-full boldWord  '>{sede}</div>
        <div className='wordSemiBold'>{direccion}</div>
        <div className='wordSemiBold'>{horario} </div>
      </div>
    </div>
  );
};

export default CityCard;
