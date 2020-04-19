const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const mongoose = require("mongoose");

//work model
const Work = require("../../models/work");

//route POST api/Profile/work
//@desc adding user work details
//@acess Private

router.post("/work", auth, async (req, res) => {
  const { company, role } = req.body;

  //simple verification
  if (!company || !role) {
    return res.status(400).json({ msg: "please enter all fields" });
  }

  const newWork = new Work({
    company,
    role,
    userId: mongoose.Types.ObjectId(req.user.id),
  });

  newWork
    .save()
    .then((work) => {
      res.json({ ...work });
    })
    .catch((err) => {
      res.json({ err });
    });
});

//route GET api/Profile/work
//@desc getting user work details
//@acess Public
router.get("/work", async (req, res) => {
  try {
    const work = await Work.find().populate("userDetails");
    res.json({
      work: work,
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
