const Joi = require("joi");

module.exports.endpoint = (req) => {
  const { params: { num }, query: { float = false } } = req;
  const int = parseInt(num, 10);
  const result = int * int;
  if (float) return { status: 200, data: result.toFixed(2) };
  return { status: 200, data: result };
};

module.exports.validations = {
  params: {
    num: Joi.number().max(10).required()
  },
  query: {
    float: Joi.boolean()
  }
};
