import React, { useState, useEffect } from 'react'
import './style.css';

function DevEditForm({ onSubmit, dev, onFinish }) {

  if (dev.bio == null) dev.bio = "";

  const [github_username, setGithub_username] = useState(dev.github_username);
  const [name, setName] = useState(dev.name);
  const [bio, setBio] = useState(dev.bio);
  const [techs, setTechs] = useState(dev.techs.join(', '));
  const [avatar_url, setAvatar_url] = useState(dev.avatar_url);
  const [latitude, setLatitude] = useState(dev.location.coordinates[1]);
  const [longitude, setlongitude] = useState(dev.location.coordinates[0]);

  async function handdleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      github_username,
      name,
      bio,
      techs,
      avatar_url,
      latitude,
      longitude
    });

    setGithub_username('');
    setName('');
    setBio('');
    setTechs('');
    setAvatar_url('');
    setLatitude('');
    setlongitude('');

    onFinish(true);
  }

  return (
    <div>
      <div className="modal"></div>
      <form onSubmit={handdleSubmit} className="bg-dark rounded text-center p-3 py-4 shadow-sm mb-4 mb-lg-0">

        <div className="text-white mb-3 lead">Editar Dev</div>

        <div className="form-group input-group bg-dark text-light">
          <div className="input-group-prepend">
            <span className="input-group-text bg-dark"><i className="fab fa-github fa-lg text-light" /></span>
          </div>

          <input className="form-control bg-secondary text-light"
            disabled
            name="github_username"
            placeholder="Github username"
            required
            value={github_username}
            onChange={e => setGithub_username(e.target.value)} />
        </div>

        <div className="form-group input-group bg-dark text-light">
          <div className="input-group-prepend">
            <span className="input-group-text bg-dark"><i className="fas fa-signature text-light" /></span>
          </div>

          <input className="form-control bg-dark text-light"
            name="name"
            placeholder="Name"
            required
            value={name}
            onChange={e => setName(e.target.value)} />
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

        <div className="form-group input-group bg-dark text-light">
          <div className="input-group-prepend">
            <span className="input-group-text bg-dark"><i className="fas fa-file-alt px-1 text-light" /></span>
          </div>

          <textarea className="form-control bg-dark text-light"
            rows="1"
            name="bio"
            placeholder="Biografia"
            required
            value={bio}
            onChange={e => setBio(e.target.value)}></textarea>
        </div>

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text bg-dark"><i className="fas fa-file-image px-1 text-light" /></span>
          </div>

          <input className="form-control bg-dark text-light"
            name="avatar_url"
            placeholder="Avatar URL"
            required
            value={avatar_url}
            onChange={e => setAvatar_url(e.target.value)} />
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

        <button className="form-control btn btn-outline-success mb-3">Editar</button>

        <span className="form-control btn btn-outline-danger" onClick={() => { onFinish(true); }}>Cancelar</span>

      </form>
    </div>

  );
}

export default DevEditForm;