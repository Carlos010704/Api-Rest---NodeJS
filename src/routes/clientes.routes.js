import { Router } from 'express'

import { Controller } from '../controllers/clientes.controller';

const router = Router();

router.get('/clientes', Controller.getClientes)
router.get('/clientes/:id', Controller.getClienteId)
router.post('/clientes', Controller.saveCliente)
router.get('/cliente/total', Controller.getTotal)
router.delete('/cliente/:id', Controller.deleteCliente)
router.put('/cliente/:id', Controller.updateCliente)

export default router;
