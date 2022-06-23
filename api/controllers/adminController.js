import adminSchema from "../models/adminModel.js";

export const deleteAdmin = async (req, res) => {
    const {id} = req.params;

    try{
        const admin = await adminSchema.findByIdAndDelete(id);
        res.status(201).json({
            msg:"Admin Eliminado",
            data: admin,
        });
    } catch (error) {
        return res.status(400).json({
            msg: "Error al eliminar el admin"
        });
    }
};


export const updateAdmin = async (req, res) => {
    const {id} = req.params;

    try{
        const admin = await adminSchema.findByIdAndUpdate(id, req.body);
        res.status(201).json({
            msg:"Admin Actualizado",
            data: admin,
        });
    } catch (error) {
        return res.status(400).json({
            msg: "Error al actualizar el admin"
        });
    }
};


export const createAdmin = async (req, res) => {
    const {body} = req;

    try{
        const admin = await adminSchema.create(body);
        res.status(201).json({
            msg:"Admin Creado",
            data: admin,
        });
    } catch (error) {
        return res.status(500).json({
            msg: "Error al crear admin"
        });
    }
};