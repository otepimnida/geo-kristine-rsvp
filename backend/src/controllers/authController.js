const { login } = require("../services/authService");

async function loginAdmin(req, res, next) {
  try {
    const { username, password } = req.body;

    const auth = await login(username, password);

    res.status(200).json({
      success: true,
      message: "Login successful.",
      data: auth,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  loginAdmin,
};
