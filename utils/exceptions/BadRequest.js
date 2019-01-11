function BadRequest(details = "Bad Request.", array = false) {
  this.value = 400;
  if (array) {
    const errors = [];
    details.errors.forEach((error) => {
      errors.push({
        title: "Bad Request",
        details: error.details
      });
    });
    this.message = errors;
  } else {
    this.message = {
      title: "Bad Request",
      details
    };
  }
}
BadRequest.prototype = Object.create(Error.prototype);
BadRequest.prototype.constructor = BadRequest;
module.exports = BadRequest;
