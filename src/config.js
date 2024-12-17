import { config } from 'dotenv';
config();


export default {
    port: process.env.PORT || 4500,
    dbUser: process.env.DB_USER || "",
    dbPassword: process.env.DB_PASSWORD || "",
    dbServer: process.env.DB_SERVER || "",
    dbDatebase: process.env.DB_DATEBASE || ""
}