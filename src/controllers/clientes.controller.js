import { query } from 'mssql';
import { getConnection, sql, querys } from '../datebase/export'

export const Controller = {

getClientes : async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getClientes);
      res.json(result.recordset);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error obteniendo clientes!');
    }
},

saveCliente : async (req, res) => {
  try{
    const { nombre, email } = req.body;
    let { saldo } = req.body;

    if(nombre == null || email == null){
      return res.status(400).json({ msg: 'Por favor llenar todos los campos!!' })
    }

    if(saldo == null) { saldo = 0 }

    const pool = await getConnection();
    pool.request()
    .input("nombre", sql.VarChar, nombre)
    .input("email", sql.VarChar, email)
    .input("saldo", sql.Int, saldo)
    .query(querys.saveClientes)

    res.status(200).send({
      nombre, email, saldo
    })
  } catch (error) {
    res.status(500).send('Error al crear el cliente!')
  }
},

getClienteId : async (req, res) => {
  try {
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool.request()
      .input("id", id)
      .query(querys.getCliente)

    res.status(200).send(result.recordset)
  } catch (error) {
    res.status(500).send('Error al obtener cliente!')
  }
},

deleteCliente : async (req, res) => {
  try{
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool.request()
      .input("id", id)
      .query(querys.deleteCliente)

      res.status(200).send('Cliente eliminado correctamente!');
  } catch (error) {
    res.status(500).send('Error al eliminar!');
  }
},

updateCliente : async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email, saldo } = req.body;

    const pool = await getConnection();
    const result = await pool.request()
      .input("id", id)
      .input("nombre", nombre)
      .input("email", email)
      .input("saldo", saldo)
      .query(querys.updateCliente)

      res.status(200).send('Cliente editado correctamente!')
  } catch (error) {
    res.status(500).send('Error al editar el cliente!')
  }
},

getTotal : async (req, res) => {
 
    const pool = await getConnection();
    const result = await pool.request()
      .query(querys.getTotal)

      res.status(200).json(
        result.recordset[0]['']
        )
}

}



