const knex = require("../config/db.js");
const bcrypt = require("bcrypt");
const router = require("express").Router();
const jwtGen = require('../utils/jwtauth.js');
require('dotenv').config();

router.get('/profile', async (req,res) => {
  const token = req.header.token;
  if(token){
    jwt.verify(token, process.env.jwtSecret, (err, usr) =>{
      if (err) throw err;
      res.json(usr);
    })
  } else{
    res.json(null);
  }
})

router.get("/dashboard", async (req, res) => {
  const postsData = await knex
    .select()
    .from("blog")
    .whereNotNull("post_content");
  res.json(postsData);
});
// TODO: fix home idex route
router.get("/", (req, res) => {
  return res.redirect("/home/dashboard");
});
router.get("/home", (req, res) => {
  return res.redirect("/home/dashboard");
});

router.post("/log-auth", async (req, res) => {
  try {
    // deconstruct req.body
    const { user, pwd } = req.body;
    // compare email in db
    const userData = await knex.select().from("blog").where("author", user);
    if (userData.length === 0) {
      return res.status(401).json({ error: "incorrect name" });
    }
    // verify password
    const verify = await bcrypt.compare(pwd, userData[0].secret);
    if (!verify) {
      return res.json({ error: "incorrect password" });
    }
    // assign jwt to user
    const token = jwtGen(userData[0].id);
    // send jwt with user
    return res.json({token});
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "internal server error" });
  }
});

router.post("/reg-auth", async (req, res) => {
  // decontruct req.body
  const { usrName, emailMobile, fullName, pwd } = req.body;
  // check if email is already in db
  const user = await knex.select().from("blog").where("contact", emailMobile);
  if (user.length !== 0) {
    return res.status(401).json({ error: "email/mobile already exists" });
  }
  // check if email is contructed properly
  if (pwd.length < 6) {
    return res.json({ error: "password has to be more than 6 characters" });
  }
  // hash/encypt password
  const hwd = await bcrypt.hash(pwd, 10);
  // save information into db
  const newUsr = await knex
    .insert(
      {
        author: usrName,
        contact: emailMobile,
        fullname: fullName,
        secret: hwd,
      },
      ['contact'],
    )
    .into('blog');
  // redirect user to login route with success msg
  console.log(newUsr);
  return res.status(200).json({ message: "sucess" });
});


module.exports = router;
