"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querys = void 0;
var querys = {
  getClientes: 'SELECT * FROM Clientes',
  saveClientes: 'INSERT INTO Clientes (nombre, email, saldo) VALUES (@nombre, @email, @saldo)',
  getCliente: 'SELECT * FROM Clientes WHERE id = @id',
  deleteCliente: 'DELETE FROM Clientes WHERE id = @id',
  updateCliente: 'UPDATE Clientes SET nombre = @nombre, email = @email, saldo = @saldo WHERE id = @id',
  getTotal: 'SELECT COUNT(*) FROM Clientes'
};
exports.querys = querys;