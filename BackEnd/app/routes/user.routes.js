import express from 'express';
import { create, createL, findAll, update, _delete, findOne, login, account } from '../controllers/user.controller.js';
const uRouter = express.Router();

uRouter.post('/user-register', create);
uRouter.post('/users', createL);
uRouter.post('/login', login);
uRouter.get('/users', findAll);
uRouter.put('/user/profile/:id', update);
uRouter.delete('/:id-user', _delete);
uRouter.get('/:id', findOne);
uRouter.get('/user/profile/:id', account);

export default uRouter;
