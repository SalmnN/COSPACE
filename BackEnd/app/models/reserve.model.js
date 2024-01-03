import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';

const Reserve = sequelize.define('reservations',{
        
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        checkin: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        checkout: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        }, 
        guest: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        roomId: {
            type: DataTypes.INTEGER,
            allowNull: true        
        }
    });
    export default Reserve;
