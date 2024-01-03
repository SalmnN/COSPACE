import Sequelize from 'sequelize';
import { sequelize } from '../config/db.config.js';

    const Room = sequelize.define('rooms',{
        type: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        guest: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        img: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        price: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });
    export default Room;
