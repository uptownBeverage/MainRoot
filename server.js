const express = require('express')

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'));

//this is how we can make use of the body contents
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('index');
})

app.post('/', function (req, res) {
    res.render('index');
  })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

