import React, { useEffect, useState } from 'react';
import Note from './Note';
import axios from 'axios';

const NotesList = props => {

  // hook de estado
  // notas es una variable de estado
  const [notas, setNotas] = useState([]);


  // hook de efecto
  useEffect(() => {
    axios.get('http://localhost:4000/api/notes')
      .then(res => {
        console.log(res.data.notes);
        setNotas(res.data.notes);
      });
  }, []);

  return (
    <div className="card-columns">
      {notas.map(nota => (
        <Note titulo={nota.title} texto={nota.text} />
      ))}
    </div>
  );
};

export default NotesList;