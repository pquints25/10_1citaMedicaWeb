const express = require('express');
const router = express.Router();
const { findAllController, findByIdController, insertController, updateController, deleteByIdController} = require('../controllers/pacienteController');

router.get('/', findAllController);
router.get('/:id', findByIdController);
router.post('/',  insertController);
router.put('/:id', updateController);
router.delete('/:id', deleteByIdController);

module.exports = router;
