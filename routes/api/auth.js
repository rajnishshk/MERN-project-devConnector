const express = require("express");
const router = express();
const auth = require("../../middleware/auth");
const User = require("../../models/User");

//@route             get api/auth
//@description       test route
//@access            public

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "server Error" });
  }
});

module.exports = router;
