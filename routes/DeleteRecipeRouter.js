const router = require("express").Router();
const Recipe = require("../models/Recipe");

router.delete("/", (req, res) => {
  Recipe.findOneAndDelete({ recipeName: req.params.recipeName }, (err, obj) => {
    if (err) {
        console.log(err);
        res.statusCode(500).json({ msg: err });
    } else {
        res.status(200).json(obj);
    }
});
});

module.exports = router;

// Recipe.deleteOne({ Recipe: req.params.recipe }, (err, obj) => {
//     if (err) {
//         console.log(err);
//         res.statusCode(500).json({ msg: err });
//     } else {
//         res.status(200).json(obj);
//     }
// });
