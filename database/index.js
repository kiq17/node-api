import mongoose from "mongoose";
import config from "../config/dataBase";

class dataBase{
    constructor(){
        this.connection = mongoose.connect(config.url, (error)=>{
            if (error) console.log("error",error);
            console.log('Banco conectado');
        })
    }
}

export default new dataBase()