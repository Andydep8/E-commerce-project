import mongoose from "mongoose"
import config from "./index.js"

const db = mongoose.connection;

const {database} = config;

db.on("connecting", () => {
    console.log(" Intentando conectarse a la base de datos");
});

db.on("error", (error) => {
    console.error('Error en mongodb' + error);
});

db.on("connected", () => {
    console.log("Conexion a la base de datos establecida");
});

db.on("disconnected", () => {
    console.info("Se ha desconectado de la base de datos");
    setTimeout(init, 5000)
});

export default function init() {
    let uri = config.database.HOST === "localhost" ? "mongodb" : "mongodb+srv"
  
    uri +=
    database.USER && database.PASSWORD
    ? `://${database.USER}:${database.PASSWORD}@`
      : '://';

    uri+=
    config.database.HOST === "localhost"
    ? `${database.HOST}:${database.PORT}/${database.NAME}?retryWrites=true&w=majority`
      : `${database.HOST}/${database.NAME}?retryWrites=true&w=majority`;

  mongoose.connect(uri);
}
