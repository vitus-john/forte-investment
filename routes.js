const express = require('express');
const router = express.Router();
const fs = require('fs');
const uploads = require('multer');
const auth = require("./middleware/auth");
const multer = require('multer');
const upload = multer({dest: "uploads/"});
router.use('/uploads', express.static('uploads'));
const jwt = require('jsonwebtoken')
require("dotenv").config();

const mongoose = require('mongoose');


const isLoggedIn = (req, res, next) => {
  if (!req.session.user) {
    res.redirect('/login');
  } else {
    next();
  }
};

router.get("/", (req, res) =>{
    res.render('index')
})

router.get("/about", (req, res) =>{
  res.render('about')
})
router.get("/faq", (req, res) =>{
  res.render('faq')
})
router.get("/rules", (req, res) =>{
  res.render('rules')
})

router.get("/login", (req, res) =>{
  res.render('login')
}) 

router.get("/signup", (req, res) =>{
  res.render('signup') 
}) 

router.get("/support", (req, res) =>{
  res.render('support')
})

router.get("/guide", (req, res) =>{
  res.render('guide')
}) 

router.get("/reviews", (req, res) =>{
  res.render('reviews')
}) 

router.get("/signup_done", (req, res) =>{
  res.render('signup_done')
}) 

router.get("/account", (req, res) =>{
  res.render('account')
})

router.get("/deposit", (req, res) =>{
  res.render('deposit')
})

router.get("/deposit_history", (req, res) =>{
  res.render('deposit_history')
})

router.get("/deposit_list", (req, res) =>{
  res.render('deposit_list')
})

router.get("/deposit_saved", (req, res) =>{
  res.render('deposit_saved')
})

router.get("/earnings", (req, res) =>{
  res.render('earnings')
})

router.get("/edit_account", (req, res) =>{
  res.render('edit_account')
})

router.get("/referal_links", (req, res) =>{
  res.render('referal_links')
})

router.get("/referals", (req, res) =>{
  res.render('referals')
})

router.get("/security", (req, res) =>{
  res.render('security')
})

router.get("/withdraw", (req, res) =>{
  res.render('withdraw')
})

router.get("/withdraw_history", (req, res) =>{
  res.render('withdraw_history')
})

module.exports = router; 