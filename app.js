const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const flash = require('express-flash');
const session = require('express-session');
const { google } = require('googleapis');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const router = require("./routes");
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
require("dotenv").config();
 
//cart files and db required//
require("./db/conn");

 
//middle wares//
const port = process.env.PORT || 7000;
const static_path = path.join(__dirname, "/public");
const views_path = path.join(__dirname, "/views");
const partials_path = path.join(__dirname, "/views/partials");
const layouts_path = path.join(__dirname, "/views/layouts");
 

//app.use and set//
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", views_path);
app.set("layouts", layouts_path);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const sessionStore = new session.MemoryStore;
app.use(express.json());
app.use(cookieParser('SECRET'));
app.use(session({
    cookie: { maxAge: 120000 },
    store: sessionStore,
    saveUninitialized: false,
    resave: false,
    secret: 'secret',
    unset: "destroy"

}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(flash());
hbs.registerPartials(partials_path);
app.use('/', router);
//getting/posting/putting/deleting/editing files//

  
app.use((req, res, next) => {
    const route = req.path;
    if(!router.stack.some(layer => layer.route === route)){
        res.render('404');
    }else{
        next()
    }
})

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})

module.exports = app;




