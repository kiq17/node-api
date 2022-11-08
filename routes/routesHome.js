import { Router } from "express";
import homeController from "../controllers/homeController";
import sessionController from "../controllers/sessionController";
const routes = new Router();

routes.post('/login', sessionController.login)
routes.get('/', homeController.index);

export default routes;