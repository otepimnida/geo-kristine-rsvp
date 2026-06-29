const { generateToken } = require("../utils/jwt");

function validateCredentials(username, password) {
  return (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  );
}

async function login(username, password) {
  const valid = validateCredentials(username, password);

  if (!valid) {
    throw new Error("Invalid username or password.");
  }

  const token = generateToken({
    username,
  });

  return {
    token,
    username,
  };
}

module.exports = {
  login,
};
