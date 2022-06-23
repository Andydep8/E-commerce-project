import Joi from "joi";

const validClient = Joi.object({
    name: Joi.string().required(),
    last_name: Joi.string().required(),
    birth: Joi.string().required(),
    phone: Joi.number().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    address: Joi.string().required(),
    
})

export default validClient; 