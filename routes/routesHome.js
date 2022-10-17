import { Router } from "express";
import homeController from "../controllers/homeController";
import usersController from "../controllers/usersController";
import repositoryController from "../controllers/repositoryController";

import sessionController from "../controllers/sessionController";
import auth from "../midllewares/auth";
const routes = new Router();

routes.post('/login', sessionController.login)
routes.get('/', homeController.index);

routes.use(auth)

routes.get('/users', usersController.index);
routes.get('/users/:id', usersController.show);
routes.post('/users', usersController.create);
routes.put('/users/:id', usersController.update);
routes.delete('/users/:id', usersController.destroy);

routes.get('/users/:user_id/repository', repositoryController.index);
routes.post('/users/:user_id/repository', repositoryController.create);
routes.delete('/users/:user_id/repository/:id', repositoryController.destroy);

export default routes;