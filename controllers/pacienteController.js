const { findAll } = require("../service/pacienteService")

const findAllController =  async (req, res) => {
    const pacientes = await findAll();
    res.render('pacientes', {
        pacientes
    });
}

module.exports = {
    findAllController
}