"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _clientes = require("../controllers/clientes.controller");
var router = (0, _express.Router)();
router.get('/clientes', _clientes.Controller.getClientes);
router.get('/clientes/:id', _clientes.Controller.getClienteId);
router.post('/clientes', _clientes.Controller.saveCliente);
router.get('/cliente/total', _clientes.Controller.getTotal);
router["delete"]('/cliente/:id', _clientes.Controller.deleteCliente);
router.put('/cliente/:id', _clientes.Controller.updateCliente);
var _default = router;
exports["default"] = _default;