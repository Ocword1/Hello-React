import React from 'react';   // imports estilo ES6
import Header from './Header';
import Footer from './Footer';
import NoteForm from './NoteForm';
import NotesList from './NotesList';

const App = (props) => {

  // JSX javascript con XML
  return (
    <div>
      <Header titulo="Notas con React" />
      <div className="container mt-3">
        <NoteForm />
        <hr />
        <NotesList />
      </div>
      <Footer />
    </div>
  );
};

export default App;