import Joi from "joi";

const validProduct = Joi.object({
    name: Joi.string().required(),
    manufacturer: Joi.string().required(),
    stock: Joi.number().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
    specifications: Joi.string().required(),
    description: Joi.string().required(),
    
})

export default validProduct; 