import validAdmin from "../validators/adminValidator.js"

const validateAdminCreation = async (req, res, next) => {
    const {body} = req;
    try{
        await validAdmin.validateAdminCreation(body);
        next()
    } catch (error) {
        return res.status(400).json({
            msg: "Error al intentar crear un administrador, verifica los campos",
            error,
        });
    }
};

export default validateAdminCreation;