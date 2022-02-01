const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 5000;
const logger = require('morgan');

app.use(cors());
app.use(express.json());
app.use(logger('dev'));


if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "client/build")))
};

//Archivo que contiene el código api de las rutas
const indexRouter = require('./routes/index');
const testRouter = require('./routes/test');
const cookieParser = require('cookie-parser');

app.use('/', indexRouter);
app.use('/test', testRouter);

app.listen(PORT, ()=>{
  console.log(`Server is starting on port ${PORT}`);
});
