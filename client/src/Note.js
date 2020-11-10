import React from 'react';

const Note = props => {

  return (
    <div className="card">
      <div className="card-body">
        <h5>{props.titulo}</h5>
        <p>{props.texto}</p>

        <button className="btn">
          <i className="fa fa-edit text-secondary fa-lg"></i>
        </button>

        <button className="btn">
          <i className="fa fa-trash text-danger fa-lg"></i>
        </button>

      </div>
    </div>
  );
};

export default Note;