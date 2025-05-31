const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const { validateCliente, validateUpdate } = require('../middlewares/validation');

router.post('/', validateCliente, clienteController.createCliente);
router.get('/', clienteController.getClientes);
router.get('/:codigo', clienteController.getClienteById);
router.put('/:codigo', validateUpdate, clienteController.updateCliente);
router.delete('/:codigo', clienteController.deleteCliente);

module.exports = router;
