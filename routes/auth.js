const express = require("express");
const {
  register,
  login,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");
const router = express.Router();

// Route => /api/auth/register
router.post("/register", register);
router.post("/login", login);
router.post("/forgotpassword", forgotPassword);
router.put("/passwordreset/:resetToken", resetPassword);

module.exports = router;
