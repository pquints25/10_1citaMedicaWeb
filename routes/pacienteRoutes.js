const { Router } = require('express');
const { findAllController } = require('../controllers/pacienteController');

const router = Router();

router.get('/', findAllController);

module.exports = router;