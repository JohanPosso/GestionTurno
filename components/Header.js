import React from 'react';
import Image from 'next/image';
const Header = ({ setPage, page }) => {
  return (
    <div className='h-137 bg-white shadow-custom flex flex-row w-full '>
      <div className='  marker: w-429 relative flex justify-center items-center shadow-custom rounded-customHeader '>
        <Image width={266} height={54} src={'/img/Cruz verde.png'} />
      </div>
      <div className='  w-full flex flex-row justify-between '>
        <div className='flex items-center justify-center text-center w-full '>
          <div className=' pr-3 '>
            <Image width={21.35} height={11.59} src={'/img/Grupo 8.png'} />
          </div>
          <button
            className=' text-lg '
            onClick={() => {
              if (page > 0) {
                setPage(page - 1);
              }
            }}
          >
            atras{' '}
          </button>
        </div>
        <div className='  grid grid-flow-col items-center col-span-7   justify-center text-center  w-336 '>
          <button
            className={
              page === 1 ? ' text-white ButtonC  rounded-full ' : '  ButtonCWhite  rounded-full  '
            }
            onClick={() => {
              setPage(1);
            }}
          >
            1
          </button>{' '}
          <div className=' inline-block border-4 border-dashed w-5' />
          <button
            className={
              page === 2 ? ' text-white ButtonC  rounded-full ' : ' ButtonCWhite rounded-full  '
            }
            onClick={() => {
              setPage(2);
            }}
          >
            2
          </button>{' '}
          <div className=' inline-block border-4 border-dashed w-5 ' />
          <button
            className={
              page === 3 ? ' text-white ButtonC  rounded-full ' : ' ButtonCWhite rounded-full  '
            }
            onClick={() => {
              setPage(3);
            }}
          >
            3
          </button>
          <div className=' inline-block border-4 border-dashed w-5  ' />
          <button
            className={
              page === 4 ? ' text-white ButtonC  rounded-full ' : ' ButtonCWhite rounded-full  '
            }
            onClick={() => {
              setPage(4);
            }}
          >
            4
          </button>
        </div>
        <div className='flex flex-col items-center justify-center text-center  w-full '>
          <div className=' '>netux</div>
          <div className=' '>2020 Netux</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
