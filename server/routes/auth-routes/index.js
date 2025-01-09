const express = require("express");
const authenticateMiddleware = require("../../middleware/auth-middleware");
const {
  registerUser,
  loginUser,
} = require("../../controllers/auth-controller/index");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/check-auth", authenticateMiddleware, (req, res) => {
  const user = req.user;

  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    data: {
      user,
    },
  });
});

module.exports = router;
