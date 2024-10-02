const express = require('express')

class Server{

    constructor(){
        this._app = express();
        this._port = 4000;
        this.middleware();
        this.routes();
    }

    middleware(){
        this._app.set('view engine', 'hbs');
    }

    routes(){
        this._app.use('/pacientes', require('../routes/pacienteRoutes'))
    }

    listen(){
        this._app.listen(this._port, () => {
            console.log(`Escuchando en el puerto ${this._port}`);
            
        });
    }
}

module.exports = Server;