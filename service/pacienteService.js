const pacienteService = require('../service/pacienteService');


const findAllController = async (req, res) => {
    try {
        const pacientes = await pacienteService.findAll();
        res.render('pacientes', { pacientes });
    } catch (error){
        res.status(500).json({ error: 'Error al obtener los pacientes'});
    }
};

const findByIdController = async (req, res) => {
    try {
        const paciente = await pacienteService.findById(req.params.id);
        if (paciente){
            res.render('pacienteDetalle', {  paciente });
            } else {
                res.status(404).json({ error: 'Paciente no encontrado'});   
            }
        } catch (error) {
            res.status(500).json({ error: 'Error al buscar el paciente'});
        }
        };

        const insertController = async (req, res) => {
            try {
                const nuevoPaciente = await pacienteService.insert(req.body);
                res.status(201).json(nuevoPaciente);
            } catch (error){
                res.status(500).json({ error: 'Error al insertar el paciente'});

            }
        };

        const updateController = async (req, res) => {
            try {
                const pacienteActualizado = await pacienteService.update(req.params.id, req.body);
                if (pacienteActualizado){
                    res.json(pacienteActualizado);
                } else {
                    res.status(404).json({ error: 'Paciente no encontrado'});
                }
            } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el paciente'});
        }
    };

        const deleteByIdController = async (req, res) => {
            try{
                const resultado = await pacienteService.deleteById(req.params.id);
                if (resultado) {
                    res.json({ msj: 'Paciente eliminado con exito'});
                } else {
                    res.status(404).json({ error: 'Paciente no encontrado'});
                }
            } catch (error) {
                res.status(500).json({ error: 'Error al eliminar el paciente'});
            }
        }


module.exports = {
    findAllController,
    findByIdController,
    insertController,
    updateController,
    deleteByIdController
};