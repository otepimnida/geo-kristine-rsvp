function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;

  // Only log unexpected server errors
  if (statusCode >= 500) {
    console.error(err);
  }

  return res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    errors: err.errors || null,
  });
}

module.exports = errorHandler;
