const router = require("express").Router();
const Recipe = require("../models/Recipe");

router.get("/", async (req, res) => {
  Recipe.find({}, (err, obj) => {
    if (err) {
      console.log(err);
      res.statusCode(500).json({ msg: err });
    } else {
      res.status(200).json(obj);
    }
  });
});

router.post("/search", async (req, res) => {
  const query = {};
  if (req.body.recipeName) {
    query.recipeName = req.body.recipeName;
  }
  if (req.body.book) {
    query.book = req.body.book;
  }
  if (req.body.mealType) {
    query.mealType = req.body.mealType;
  }
  if (req.body.pageNumber) {
    query.pageNumber = req.body.pageNumber;
  }

  Recipe.find(query, (err, obj) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else if (!obj) {
      res.status(404).jason({ msg: "Not Found" });
    } else {
      res.status(200).json(obj);
    }
  });
});

module.exports = router;

// recipeName: req.params.recipeName
