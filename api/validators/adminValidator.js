import Joi from "joi";

const validAdmin = Joi.object({
    name: Joi.string().required(),
    last_name: Joi.string().required(),
    birth: Joi.string().required(),
    ID: Joi.number().required(),
    address: Joi.string().required(),
    phone: Joi.number().required(),
})

export default validAdmin; 