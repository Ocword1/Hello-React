import React from 'react';

const NoteForm = props => {

  return (
    <form>

      <div className="form-group">
        <label>Titulo</label>
        <input
          className="form-control"
          type="text"
        />
      </div>

      <div className="form-group">
        <label>Texto</label>
        <textarea className="form-control"></textarea>
      </div>



      <input
        className="btn btn-primary"
        type="submit"
        value="Guardar"
      />

    </form>
  );
};

export default NoteForm;