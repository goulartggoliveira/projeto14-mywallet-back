
import  joi  from 'joi';


export const userSchema = joi.object({
    name: joi.string().required().min(2),
    email: joi.string().email().required().min(2),
    password: joi.string().password().required().min(2),
})