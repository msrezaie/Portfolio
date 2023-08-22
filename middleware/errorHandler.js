const notFound = (req, res, next) => {
  res.status(404).send("page not found :(");
};

const errorHandler = (err, req, res, next) => {
  let customError = {
    errorStatusCode: res.statusCode || 500,
    errorMessage: err.message || "something went wrong :(",
  };

  return res
    .status(customError.errorStatusCode)
    .json({ msg: customError.errorMessage });
};

module.exports = { notFound, errorHandler };
