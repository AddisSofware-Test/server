const errorHandler = (error, req, res, next) => {
  let message = {
    status: false,
    statusCode: "FAILED",
    message: "Internal Server Error",
  };
  let code = 500;

  switch (error.name) {
    case "ValidationError":
      code = 400;
      message = {
        status: false,
        statusCode: "FAILED",
        message: error.message,
      };
      break;
    case "CastError":
      code = 404;
      message = {
        status: false,
        statusCode: "FAILED",
        message: error.message,
      };
      break;
  }
  res.status(code).json(message);
};

module.exports = errorHandler;
