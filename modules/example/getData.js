/**
 *@swagger
 *  /data/{id}:
 *  get:
 *    tags:
 *      - Users
 *    description: Get single user
 *    parameters:
 *      - $ref: '#/parameters/userId'
 *    responses:
 *      200:
 */

const NotFound = require("../../utils/exceptions/NotFound");
const BadGateway = require("../../utils/exceptions/BadGateway");
const Joi = require("joi");
const { db } = require("../../models");

const getData = async (id) => {
  try {
    return await db.Users.find({ where: { id } });
  } catch (e) { throw new BadGateway(`Error fetching from DB: ${e}`); }
};

module.exports.endpoint = async (req) => {
  const data = await getData(req.params.id);

  if (!data) {
    throw new NotFound(`Entity with id ${req.params.id} not found.`);
  }
  return { status: 200, data };
};

module.exports.validations = {
  params: {
    id: Joi.number().required()
  }
};
