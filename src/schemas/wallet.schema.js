import Joi from "joi";

export const walletSchema = Joi.object({
  value: Joi.number().precision(2).positive().required(),
  description: Joi.string().required(),
  type: Joi.string().valid("input", "output").required(),
});
