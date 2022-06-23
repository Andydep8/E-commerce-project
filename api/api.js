import express from 'express';
import config from './config/index.js';
import { adminRouter, clientRouter, productRouter } from './routes/index.js';

const api = express();

api.use(express.json());

api.get("/status", (req, res) =>{
    return res.json({
        msg: "Api funcionando"
    });
});

api.use(adminRouter);
api.use(clientRouter);
api.use(productRouter);

api.use((err, req, res, next) =>{
    if(
        config.server.enviroment === "development" ||
        config.server.enviroment === "local" ||
        config.server.enviroment === "test" 
    ) {
        return res.status (500).json({
            msg: "Error",
            error: err,
        });
    }
    return res.status(500).json({
        msg:" Ha ocurrido un error en el server, contactanos"
    });
});

export default api;