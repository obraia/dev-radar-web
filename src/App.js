import React, { useState, useEffect, Component } from 'react';
import api from './services/api';

import './styles/App.css';
import './styles/global.css';
import './styles/Main.css';

import DevCard from './components/DevCard';
import DevForm from './components/DevForm';
import DevEditForm from './components/DevEditForm';

//import './bootstrap/css/bootstrap.min.css'

// Componente: função que retorna conteúdos html, css, js (Blocos isolados o qual não interfere no restante da aplicação)
// Propriedade: Informações que um componente pai passa para o componente filho
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

function App() {
  const [devs, setDevs] = useState([]);
  const [formVisible, setFormVisible] = useState(true);
  const [devForEdit, setDevForEdit] = useState([]);
  

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      
      setDevs(response.data);
    }

    loadDevs();

  }, []);

  async function handdleAddDev(data) {

    const response = await api.post('/devs', data);

    //setDevs([...devs, response.data]);

    const res = await api.get('/devs');

    setDevs(res.data);
  }

  async function handdleDeleteDev(username) {
    const response = await api.delete('/dev/delete', { params: { github_username: username } });

    const res = await api.get('/devs');

    setDevs(res.data);
  }

  async function getDevForEdit(user) {

    setFormVisible(false);    

    setDevForEdit(devs.find(dev => (dev.github_username == user)));
  }

  async function handdleEditDev(data) {
    const response = await api.post('/dev/update', data);

    const res = await api.get('/devs');

    setDevs(res.data);
    
  }

  return (
    <div id="app" className="container row col-12 px-2 px-xl-5 m-0 pt-5 justify-content-around">
      <aside className="col-md-10 col-lg-4">

        {formVisible ? <DevForm onSubmit={handdleAddDev}/> : <DevEditForm onSubmit={handdleEditDev} dev={devForEdit} onFinish={setFormVisible}/>}

      </aside>

      <main className="d-flex p-0 col-lg-8 justfy-content-around">

        <div className="card-columns col-12 px-2 m-0">

          {devs.map(dev => (
            <DevCard key={dev._id} dev={dev} onClickDelete={handdleDeleteDev} onClickEdit={getDevForEdit} />
          ))}

        </div>

      </main>
    </div>
  );
}

export default App;
