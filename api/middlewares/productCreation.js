import validProduct from "../validators/productValidator.js"

const validateProductCreation = async (req, res, next) => {
    const {body} = req;
    try{
        await validProduct.validateProductCreation(body);
        next()
    } catch (error) {
        return res.status(400).json({
            msg: "Error al intentar crear el producto, verifica los campos",
            error,
        });
    }
};

export default validateProductCreation;