const express = require('express');
const app = express();

const routerMatematicas = require('./routers/matematicas.js');
const routerProgramacion = require('./routers/programacion.js');

//Routers

app.use('/api/cursos/programacion', routerProgramacion)

app.use('/api/cursos/matematicas', routerMatematicas);

// Routing

app.get('/', (req, res) => {
    res.send('Mi primer servidor con express.');
});

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});

const PUERTO = process.env.PORT || 3010;

app.listen(PUERTO, () => {
    console.log(`El servidor esta funcionando en el puerto ${PUERTO}`);
}); 