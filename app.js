//jshint esversion:6

const express = require("express")
const bodyParser = require("body-parser")
const port = 3000
const app = express()


var items = ['Learning', 'Drinking', 'Working', 'Scraming']

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

app.get ('/', (req, res) => {
  var today = new Date();
  var currentDay = today.getDay();
  var day = '';
  var options = {
    weekday:"long",
    day:"numeric",
    month:"long"
  }
  var day = today.toLocaleDateString("en-US", options);
  res.render('list', {kindOfDay: day, newListItems: items})
})


app.post ('/', (req,res) => {
var item = req.body.newItem;
items.push(item)
res.redirect('/')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
