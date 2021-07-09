const router = require("express").Router();
const Recipe = require("../models/Recipe");

router.post("/", async (req, res) => {
  const recipeName = req.body.recipeName;
  const book = req.body.book;
  const mealType = req.body.mealType;
  const pageNumber = req.body.pageNumber;

  new Recipe({
    recipeName: recipeName,
    book: book,
    mealType: mealType,
    pageNumber: pageNumber,
  }).save((err, obj) => {
    if (err) {
      console.log(err);
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(obj);
    }
  });
});

module.exports = router;
