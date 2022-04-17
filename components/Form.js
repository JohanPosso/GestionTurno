import React, { useState } from 'react';
import CityCard from '../components/CityCard';
import Image from 'next/image';
import ModalData from '../components/ModalData';
import axios from 'axios';

const documentTypes = [
  { id: 'Cédula de ciudadanía', name: 'Cédula de ciudadanía' },
  { id: 'Tarjeta de identidad', name: 'Tarjeta de identidad' },
  { id: 'Cédula de extranjería', name: 'Cédula de extranjería' },
];

const Form = ({ selectedLocation }) => {
  const [docType, setDocType] = useState('');
  const [docNumber, setDocNumber] = useState('');
  const [name, setName] = useState('');
  const [subName, setSubName] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastSubName, setLastSubName] = useState('');
  const [modalState, setModalState] = useState(false);

  const createPdf = async () => {
    var url2 = window.location.href; // current page
    console.log('url2 :>> ', url2);

    var api_endpoint = 'https://selectpdf.com/api2/convert/';
    var api_key = '61b545f3-a64b-4b4a-b17f-171851bd5085';

    var params = {
      key: api_key,
      url: `https://gestion-turnos.vercel.app/pdf?nombre=${name
        ?.concat(' ')
        ?.concat(subName)
        ?.concat(' ')
        ?.concat(lastName)
        ?.concat(' ')
        ?.concat(lastSubName)}&&document=${docType?.concat(' - ')?.concat(docNumber)}`,
    };

    var xhr = new XMLHttpRequest();
    xhr.open('POST', api_endpoint, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.responseType = 'arraybuffer';
    xhr.onload = function (e) {
      if (this.status == 200) {
        //console.log('Conversion to PDF completed ok.');

        var blob = new Blob([this.response], { type: 'application/pdf' });
        var url = window.URL || window.webkitURL;
        var fileURL = url.createObjectURL(blob);
        //window.location.href = fileURL;

        //console.log('File url: ' + fileURL);

        var fileName = 'Document.pdf';

        if (navigator.appVersion.toString().indexOf('.NET') > 0) {
          // This is for IE browsers, as the alternative does not work
          window.navigator.msSaveBlob(blob, fileName);
        } else {
          // This is for Chrome, Firefox, etc.
          var a = document.createElement('a');
          document.body.appendChild(a);
          a.style = 'display: none';
          a.href = fileURL;
          a.download = fileName;
          a.click();
        }
      } else {
        //console.log("An error occurred during conversion to PDF: " + this.status);
        alert(
          'An error occurred during conversion to PDF.\nStatus code: ' +
            this.status +
            ', Error: ' +
            String.fromCharCode.apply(null, new Uint8Array(this.response))
        );
      }
    };

    xhr.send(JSON.stringify(params));
  };
  console.log('name :>> ', selectedLocation);
  return (
    <>
      <ModalData
        open={modalState}
        setOpen={setModalState}
        userName={name
          ?.concat(' ')
          ?.concat(subName)
          ?.concat(' ')
          ?.concat(lastName)
          ?.concat(' ')
          ?.concat(lastSubName)}
        docType={docType}
        docNumber={docNumber}
      />
      <div className='w-full h-full py-20 flex justify-center items-center '>
        <div className='w-1/2 h-full flex justify-center items-center   '>
          <div className='w-96  formC  gap-10 flex flex-col items-center  justify-center'>
            <div className='w-full text-justify'> Ingresa tus datos</div>

            <div className='w-full border-b-2 formInfoSelect h-full  text-sm '>
              <select
                name='documentType'
                className='w-full  formInfo h-full font-bold text-base  '
                required
                value={docType}
                onChange={(e) => setDocType(e.target.value)}
              >
                <option className='w-full  h-full formInfo font-bold text-base ' value='' disabled>
                  Seleccione un tipo de documento...
                </option>
                {documentTypes?.length > 0 &&
                  documentTypes.map((documentType) => (
                    <option
                      className='w-full  h-full formInfo font-bold text-base  '
                      key={documentType.id}
                      value={documentType.id}
                    >
                      {documentType.name}
                    </option>
                  ))}
              </select>
            </div>
            <label
              htmlFor='documentNumber'
              className='w-full  flex flex-col border-b-2   text-sm formInfo'
            >
              Número de documento
              <input
                type='number'
                className='font-semibold formInfo '
                name='documentNumber'
                value={docNumber}
                onChange={(e) => {
                  setDocNumber(e.target.value);
                }}
              />
            </label>
            <div className='w-full h-full grid grid-cols-2 gap-3'>
              <label htmlFor='name' className='col-span-1  border-b-2 text-sm formInfo'>
                Primer nombre
                <input
                  type='text'
                  className='font-semibold formInfo  '
                  name='name'
                  defaultValue={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </label>
              <label htmlFor='subName' className='col-span-1  border-b-2 text-sm  formInfo'>
                Segundo nombre
                <input
                  type='text'
                  className='font-semibold formInfo  '
                  name='subName'
                  defaultValue={subName}
                  onChange={(e) => {
                    setSubName(e.target.value);
                  }}
                />
              </label>
              <label htmlFor='lastName' className='col-span-1 border-b-2 text-sm formInfo'>
                Primer apellido
                <input
                  type='text'
                  className=' font-semibold formInfo '
                  name='lastName'
                  defaultValue={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </label>
              <label htmlFor='lastSubName' className='col-span-1  border-b-2 text-sm formInfo'>
                Segundo apellido
                <input
                  type='text'
                  className='font-semibold formInfo  '
                  name='lastSubName'
                  defaultValue={lastSubName}
                  onChange={(e) => {
                    setLastSubName(e.target.value);
                  }}
                />
              </label>
            </div>
            <CityCard
              showButton
              sede={selectedLocation?.sede}
              direccion={selectedLocation?.direccion}
              horario={selectedLocation?.horario}
            />
            <div className=' selectButton w-full flex text-center justify-center items-center'>
              <button
                onClick={() => {
                  setModalState(true);
                  createPdf();
                }}
                className=' selectButtonWord flex items-center justify-center '
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>

        <div className=' w-1/2 '>
          <Image width={635} height={335.5} src={'/img/Grupo 1376.svg'} />{' '}
        </div>
      </div>
    </>
  );
};

export default Form;
