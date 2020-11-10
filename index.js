const express = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
const morgan   = require('morgan');

const port = process.env.PORT || 4000;
const db = process.env.MONGODB_URI || 'mongodb://localhost/notas';

const app = express();

app.use(morgan('dev'));
app.use(cors());

// conexion a la base de datos
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
  })
  .catch(err => console.error(`Connection error ${err}`));

// las rutas
app.use(express.json());  // parsear JSON en el body

app.use('/api', require('./api/routes/note'));

// manejar errores
// primer middleware de errores
app.use((req, res, next) => {
  const err = new Error('No encontrado estamos en el primer middleware de error');
  err.status = 404;
  next(err);
});
// segundo middleware de errores
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(port, () => {
  console.log(`Server escuchando en puerto ${port}`);
});