import sql from 'mssql'
import config from '../config'

const dbConfiguracion = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatebase,
    port: config.port,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
}

export async function getConnection() {

const pool = await sql.connect(dbConfiguracion);
sql.connect(dbConfiguracion)
  .then( () => console.log('Conexión exitosa a la base de datos.'))
  .catch( () => console.log('Error al conectarse a la base de datos.'))

return pool;
}

export {sql};
