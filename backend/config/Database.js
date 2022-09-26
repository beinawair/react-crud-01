import { Sequelize } from "sequelize";

const db = new Sequelize('crudReact', 'root', 'root', {
    host: 'localhost',
    port: '8889',
    dialect: 'mysql',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
});

export default db;