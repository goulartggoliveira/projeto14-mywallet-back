
import  joi  from 'joi';


export const transactionSchema = joi.object({
    value: joi.number().required(),
    type: joi.string().required().valid("entrada", "saida"),
    user: joi.object().required(),
    description: joi.string().required().min(2),
    createdAt: joi.string().required(),
})

