import { DB, USER, PASSWORD, HOST, dialect as _dialect, pool as _pool } from '../config/db.config';
import Sequelize from 'sequelize';
const sequelize = new Sequelize(
    DB, 
    USER, 
    PASSWORD, {
        host: HOST,
        dialect: _dialect,
        operatorAlias: false,
        pool: {
            max: _pool.max,
            min: _pool.min,
            acquire: _pool.acquire,
            idle: _pool.idle
        },
    });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.uCospace = require('./user.model.js').default(sequelize, Sequelize);
db.rCospace = require('./reserve.model.js').default(sequelize, Sequelize);
db.rmCospace = require('./room.model.js').default(sequelize, Sequelize);
export default db;
