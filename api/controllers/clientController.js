import clientSchema from "../models/clientModel.js";

export const deleteClient = async (req, res) => {
    const {id} = req.params;

    try{
        const client = await clientSchema.findByIdAndDelete(id);
        res.status(201).json({
            msg:"Cliente Eliminado",
            data: client,
        });
    } catch (error) {
        return res.status(400).json({
            msg: "Error al eliminar el Cliente"
        });
    }
};


export const updateClient = async (req, res) => {
    const {id} = req.params;

    try{
        const client = await clientSchema.findByIdAndUpdate(id, req.body);
        res.status(201).json({
            msg:"Cliente Actualizado",
            data: client,
        });
    } catch (error) {
        return res.status(400).json({
            msg: "Error al actualizar el cliente"
        });
    }
};


export const createClient = async (req, res) => {
    const {body} = req;

    try{
        const client = await clientSchema.create(body);
        res.status(201).json({
            msg:"cliente Creado",
            data: client,
        });
    } catch (error) {
        return res.status(500).json({
            msg: "Error al crear cliente"
        });
    }
};