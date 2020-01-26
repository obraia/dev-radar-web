import React from 'react';
import './style.css';

function DevCard({ dev, onClickDelete, onClickEdit }) {

  async function DeleteDev(devUser) {
    await onClickDelete(devUser);
  }

  async function EditDev(devUser) {
    await onClickEdit(devUser);
  }

  return (
    <div className="card bg-dark text-white overflow-hidden shadow">
      <div className="py-1 bg-success"></div>
      <div className="d-flex">
        <img src={dev.avatar_url} className="avatar rounded-circle m-3" />
        <div className="d-flex flex-column justify-content-center">
          <div className="font-weight-bold">{dev.name}
            <span className="font-weight-normal text-secondary">
              <i className="fas fa-map-marker-alt ml-1" />
              {" " + dev.location.coordinates[1].toFixed(6) + "  "}{dev.location.coordinates[0].toFixed(6)}
            </span>
          </div>
          <div className="text-secondary">
            {dev.techs.join(', ')}
          </div>
        </div>
      </div>
      <div className="p-3 m-0">
        <p>{dev.bio}</p>
        <div className="d-flex align-items-center justify-content-between">
          <a className="text-success" href={`https://github.com/${dev.github_username}`}>Acessar o perfil no Github</a>
          <div>
            <button className="btn btn-outline-danger btn-sm mr-2" value={dev.github_username} onClick={e => DeleteDev(e.target.value)}>
              <i className="fas fa-trash-alt btn-icon" />
            </button>
            <button className="btn btn-outline-success btn-sm" value={dev.github_username} onClick={e => EditDev(e.target.value)}>
              <i className="fas fa-pen btn-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevCard;