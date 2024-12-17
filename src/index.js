import app from './app';

import { getConnection } from './datebase/connection';

// const port = 3000;

app.listen(app.get('port'));

console.log('Servidor establecido en http://127.0.0.1:' + app.get('port'));
getConnection();