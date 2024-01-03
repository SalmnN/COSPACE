import express, { json, urlencoded } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from './app/routes/user.routes.js';
import rsvRoute from './app/routes/reserve.routes.js';
import rmRoute from './app/routes/room.routes.js';

import { sequelize } from './app/config/db.config.js';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));


app.get('', (req, res) => {
    res.send('Welcome')
})

app.get('/test-connection', async (req, res) => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (e) {
        console.error('Unable to connect to the database:', e)
    }
    res.send('Hello express')
})

app.use('/user', userRoute);
app.use('/reserve', rsvRoute);
app.use('/room', rmRoute);

sequelize.sync({alter: true})
.then(()=>{ app.listen(port, () => 
    console.log(`App listening on port http://localhost:${port}!`));
})
.catch((err)=>{
    console.log(err)
})


