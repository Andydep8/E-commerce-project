import validClient from "../validators/clientValidator.js"

const validateClientCreation = async (req, res, next) => {
    const {body} = req;
    try{
        await validClient.validateAdminCreation(body);
        next()
    } catch (error) {
        return res.status(400).json({
            msg: "Error al intentar crear un client, verifica los campos",
            error,
        });
    }
};

export default validateClientCreation;