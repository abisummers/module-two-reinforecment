const express = require('express');
const router = express.Router();
const User = require("../models/user-model")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


// ---------- GET NAMES ---------------
router.get("/names", (req, res, next) => {
  User.find()
    .then(userDoc => {
      console.log(userDoc);
      res.render("names.hbs", { userDoc })
    })
    .catch(err => next(err))
})

// -------------- GET DETAILS -------------

router.get("/details/:id", (req, res, next) => {
  console.log(req.params.id)

  User.find({ _id: { $eq: req.params.id } })
    .then(userDoc => {
      console.log(userDoc);
      res.render("details.hbs", { userDoc })
    })
    .catch(err => next(err))
})

// -------------- CREATE USER -------------

router.get("/add", (req, res, next) => {
  res.render("add.hbs")
})

router.post("/process-add", (req, res, next) => {
  const { firstName, description } = req.body
  console.log(firstName, description);

  User.create(
    { firstName, description },
  )
    .then(userDoc => {
      console.log(userDoc)
      res.redirect("/names")
    })
    .catch(err => next(err))
})

// --------- UPDATE USER ----------

router.get("/edit/:id", (req, res, next) => {
  User.find({ _id: { $eq: req.params.id } })
    .then(userDoc => {
      res.render("edit.hbs", { userDoc })

    }).catch(err => next(err))
})

router.post("/process-edit/:id", (req, res, next) => {
  const { firstName, description } = req.body

  User.findByIdAndUpdate(
    req.params.id,
    { firstName, description },
    { runValidators: true }
  )
    .then(userDoc => {
      console.log(userDoc);
      res.redirect("/")
    })
    .catch(err => next(err))
})

//----------- DELETE A USER ------------

router.get("/delete/:id", (req, res, next) => {

  User.findByIdAndRemove(req.params.id)
    .then(profileDoc => {
      console.log("user delted");

      res.redirect("/");
    })
    .catch(err => next(err));
})
module.exports = router;
