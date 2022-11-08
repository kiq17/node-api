import { Router } from "express";
import auth from "../midllewares/auth";
import repositoryController from "../controllers/repositoryController";
const routes = new Router();

routes.use(auth);


routes.get('/users/:user_id/repository', repositoryController.index);
routes.post('/users/:user_id/repository', repositoryController.create);
routes.delete('/users/:user_id/repository/:id', repositoryController.destroy);

export default routes;