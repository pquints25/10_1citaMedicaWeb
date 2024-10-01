const paciente = require("../service/paciente");
const { findAll } = require("../service/paciente");

const findAllController = (req, res) => {
    const usuarios = findAll();
    res.render('pacientes', {
        paciente
    });
    
}