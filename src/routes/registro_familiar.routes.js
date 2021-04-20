const express = require('express');
const controllers = require('../controllers/registro_familiar.controller');
const router = express.Router();

// controllers
const controllers_registro_familiar = require('../controllers/registro_familiar.controller');


router.get('/', controllers_registro_familiar.GET_Controller);
router.get('/:id', controllers_registro_familiar.GET_ONE_Controller);
router.post('/add-familiar', controllers.POST_controller);
router.put('/actualizar-familiar/:id', controllers.PUT_Controller);
router.delete('/eliminar-familiar/:id', controllers.DELETE_Controller);

module.exports = router;