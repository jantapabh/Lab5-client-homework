var express = require('express')
var app = express()
bodyParser = require('body-parser');
var session = require('express-session')

app.set('views', './views')
app.set('view engine', 'ejs')

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname + '/public'));

app.post('/admin', urlencodedParser, function (req, res) {
    var result = parseInt(req.body.a) + parseInt(req.body.b);
    res.send('Result = ' + result);
});


app.get('/', function (req, res) {
    res.render('user', {

        user:
            [{
                email: ' ',
                password: '240311'
            }], foo: 'Login'
    })
})
app.listen(8000);


app.listen(8000)