import React, { useState, useEffect } from 'react'

function DevForm({ onSubmit }) {

  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setlongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setlongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      })
  }, []); // --> Array vazio para executar apenas uma vez

  async function handdleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithub_username('');
    setTechs('');

  }

  return (
    <form onSubmit={handdleSubmit} className="bg-dark rounded text-center p-3 py-4 shadow-sm mb-4 mb-lg-0">

      <div className="text-white mb-3 lead">Cadastrar</div>

      <div className="form-group input-group bg-dark text-light">
        <div className="input-group-prepend">
          <span className="input-group-text bg-dark"><i className="fab fa-github fa-lg text-light" /></span>
        </div>

        <input className="form-control bg-dark text-light"
          name="github_username"
          placeholder="Github username"
          required
          value={github_username}
          onChange={e => setGithub_username(e.target.value)} />
      </div>

      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text bg-dark"><i className="fas fa-laptop-code text-light" /></span>
        </div>

        <input className="form-control bg-dark text-light"
          name="techs"
          placeholder="Tecnologias"
          required
          value={techs}
          onChange={e => setTechs(e.target.value)} />
      </div>

      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text bg-dark"><i className="fas fa-map-marker-alt px-1 text-light" /></span>
        </div>

        <input className="form-control bg-dark text-light"
          type="number"
          name="latitude"
          placeholder="Latitude"
          required
          value={latitude}
          onChange={e => setLatitude(e.target.value)} />
      </div>

      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text bg-dark"><i className="fas fa-map-marker-alt px-1 text-light" /></span>
        </div>

        <input className="form-control bg-dark text-light"
          type="number"
          name="longitude"
          placeholder="Longitude"
          required
          value={longitude}
          onChange={e => setlongitude(e.target.value)} />
      </div>

      <button className="form-control btn btn-outline-success">Cadastrar</button>

    </form>
  );
}

export default DevForm;