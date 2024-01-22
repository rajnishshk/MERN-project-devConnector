const express = require("express");
const router = express();
const { check, validationResult } = require("express-validator/check");

//@route             POST api/users
//@description       Register users
//@access            public

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "please enter a password with 6 or more character"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("users route...");
  }
);

module.exports = router;
