const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.Router();

/* REGISTER */
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Missing fields" });

  if (password.length < 6)
    return res.status(400).json({ message: "Password too short" });

  const exists = await User.findOne({ email });
  if (exists)
    return res.status(400).json({ message: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hashed });

  const token = jwt.sign({ id: user._id }, "SECRET_KEY");
  res.json({ token });
});

/* LOGIN */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, "SECRET_KEY");
  res.json({ token });
});

/* GET PROFILE */
router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

/* UPDATE PROFILE */
router.put("/me", auth, async (req, res) => {
  const updates = {};

  if (req.body.about !== undefined) updates.about = req.body.about;
  if (req.body.goal !== undefined) updates.goal = req.body.goal;

  if (req.body.password) {
    if (req.body.password.length < 6)
      return res.status(400).json({ message: "Password too short" });

    updates.password = await bcrypt.hash(req.body.password, 10);
  }

  await User.findByIdAndUpdate(req.user.id, updates);
  res.sendStatus(200);
});

module.exports = router;
