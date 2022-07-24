//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

const _ = require('lodash');

app.set('view engine', 'ejs');

//locally declaring ejs
app.engine('ejs', require('ejs').__express);

const homeContent = "Hello guys, this is my first ejs based blod website. I'm trying my level best to get succeed in learnig FULL STACK WEB DEVELOPMENT. And i started my #100daysofcode challenge. I post on my experience while learning in twitter."
const ccontent ="fj3pj aoijroi oir foiwejoiw oihoiw hgo;jtpw3jofjwa";
const acontent ="fkj3jfoi vnoiwhoi fhwoiehfnokawohfoih";



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const posts = [];

app.get("/", function (req, res) {
  res.render("home",{
    startContent: homeContent,
    posts: posts
  });
});

app.get("/about", function (req, res) {
  res.render("About",{aboutContent : acontent});
});
app.get("/contact", function (req, res) {
  res.render("contact",{contactContent : ccontent});
});


app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/compose", function (req, res) {

  const post ={
    title : req.body.titlebody,
    content : req.body.Postbody
  };
  posts.push(post);

  res.redirect("/");
});

app.get("/posts/:postname", function (req, res) {
  let reqtitle = _.lowerCase(req.params.postname);

  posts.forEach(function(post) {
    let storedtitle=_.lowerCase(post.title);
     storedtitle = post.title;

     if(storedtitle === reqtitle) {
       res.render("post",
       {tity: post.title ,
        con : post.content});


     }

  });
});




app.listen(3000, function(req, res){
  console.log('listening on port 3000');
});
