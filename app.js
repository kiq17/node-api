import express from "express";
import cors from "cors";
import routesHome from "./routes/routesHome";
import routesUsers from "./routes/routesUsers";
import routesRepository from "./routes/routesRepository";
import "./database";

class App{
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
        this.server.use(cors());
    }

    routes(){
        this.server.use(routesHome)
        this.server.use(routesUsers)
        this.server.use(routesRepository)
    }
}

export default new App().server;