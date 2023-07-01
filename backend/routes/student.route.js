let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Student Model
let studentSchema = require("../models/Student");

// Create Student
router.route("/create-student").post((req, res, next) => {
  studentSchema
    .create(req.body)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      next(error);
    });
});

// Read Student
router.route("/").get((req, res, next) => {
  studentSchema
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      next(error);
    });
});

// Get Single Student
router.route("/edit-student/:id").get((req, res, next) => {
  studentSchema
    .findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      next(error);
    });
});

// Update Student
router.route("/update-student/:id").put((req, res, next) => {
  studentSchema
    .findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
    .then((data) => {
      res.json(data);
      console.log("Student Updated Successfully!");
    })
    .catch((error) => {
      next(error);
    });
});

// Delete Student
router.route("/delete-student/:id").delete((req, res, next) => {
  studentSchema
    .findByIdAndRemove(req.params.id)
    .then((data) => {
      res.status(200).json({
        msg: data,
      });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
