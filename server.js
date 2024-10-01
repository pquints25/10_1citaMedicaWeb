const express = require ('express');
const hbs = require ('hbs');
const path = require('path');
const pacientesRoutes = require('./routes/pacientesRoutes.js');

class Server {
    constructor(){
        this._app = express();
        this._port = 4000;
        this.config();
        this.routes();
    }
    config(){
        //esto es para el hbs
        this._app.engine( 'view engine', 'hbs');
        this._app.set('views', path.join(__dirname, 'views'));
        this._app.set(path.join(__dirname, 'views/partials'));

        this._app.use(express.json());
        this._app.use(express.urlencoded({ extended:true})); //recibir datos formularios
        this._app.use(express.static(path.join(__dirname, 'public')))
    }


    routes(){
        this._app.use('/pacientes', pacientesRoutes);
        
        this._app.get('/', (req, res) => {
            res.render('index', { titulo: 'Pagina Inicio'});
        })

    }

    listen(){
        this._app.listen(this._port, () => {
            console.log(`escuchando en el ${this._port}`);
            

        })
    }
}

module.exports = Server;