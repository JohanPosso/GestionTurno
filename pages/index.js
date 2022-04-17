import { useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Form from '../components/Form';
const Index = () => {
  const [page, setPage] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState(null);
  return (
    <div className={` w-full h-screen flex-col flex ${page === 1 ? 'bg-mapa' : ''} `}>
      <Header page={page} setPage={setPage} />
      {/*vista 1 , compuesta por sidebar  */}
      {page === 1 && <SideBar setSelectedLocation={setSelectedLocation} setPage={setPage} />}
      {(page === 2 || page === 3 || page === 4) && <Form selectedLocation={selectedLocation} />}
    </div>
  );
};
export default Index;
