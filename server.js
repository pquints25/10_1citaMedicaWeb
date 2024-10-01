const express = require ('express');
const hbs = require ('hbs');
const pacientesRoutes = require('./routes/pacientesRoutes.js');

class Server {
    constructor(){
        this._app = express();
        this._port = 3000;
        this.config();
        this.routes();
    }
    config(){
        //esto es para el hbs
        this._app.engine('hbs');
        this._app.set('view engine', 'hbs');
        this._app.set('views', './views');

        this._app.use(express.json());
        this._app.use(express.urlencoded({ extended:true})); //recibir datos formularios
    }

    routes(){
        this._app.use('/pacientes', pacientesRoutes);
        this._app.get('/', (req, res) => {
            res.render('index');
        })

    }

    listen(){
        this._app.listen(this._port, () => {
            console.log(`escuchando en el ${this._port}`);
            

        })
    }
}

module.exports = Server;