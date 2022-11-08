import { Router } from "express";
import auth from "../midllewares/auth";
import usersController from "../controllers/usersController";
const routes = new Router();

routes.use(auth);

routes.get('/users', usersController.index);
routes.get('/users/:id', usersController.show);
routes.post('/users', usersController.create);
routes.put('/users/:id', usersController.update);
routes.delete('/users/:id', usersController.destroy);

export default routes;