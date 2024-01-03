import express from 'express';
import { create, update, findAll, findOne, findRoomsByType } from '../controllers/room.controller.js';
const rmRouter = express.Router();

rmRouter.get('/', (req, res) => {
    res.send('Hello Room Route Connected')
});
rmRouter.post('/room', create);
rmRouter.put('/:id', update);
rmRouter.get('/rooms', findAll);
rmRouter.get('/:id-room', findOne);
rmRouter.get('/:type', findRoomsByType);

export default rmRouter;
