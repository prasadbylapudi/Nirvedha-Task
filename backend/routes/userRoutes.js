const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
router.post("https://todo-backend-mc90.onrender.com/", registerUser);
router.post("https://todo-backend-mc90.onrender.com/login", loginUser);
router.get("https://todo-backend-mc90.onrender.com/me", protect, getMe);

module.exports = router;
