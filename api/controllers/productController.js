import productSchema from "../models/productModel.js";

export const deleteProduct = async (req, res) => {
    const {id} = req.params;

    try{
        const product = await productSchema.findByIdAndDelete(id);
        res.status(201).json({
            msg:"Producto Eliminado",
            data: product,
        });
    } catch (error) {
        return res.status(400).json({
            msg: "Error al eliminar el producto"
        });
    }
};


export const updateProduct = async (req, res) => {
    const {id} = req.params;

    try{
        const product = await productSchema.findByIdAndUpdate(id, req.body);
        res.status(201).json({
            msg:"Producto Actualizado",
            data: product,
        });
    } catch (error) {
        return res.status(400).json({
            msg: "Error al actualizar el producto"
        });
    }
};


export const createProduct = async (req, res) => {
    const {body} = req;

    try{
        const product = await productSchema.create(body);
        res.status(201).json({
            msg:"Producto Creado",
            data: product,
        });
    } catch (error) {
        return res.status(500).json({
            msg: "Error al crear producto"
        });
    }
};