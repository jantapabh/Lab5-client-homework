var express = require('express')
var app = express()
bodyParser = require('body-parser');
var session = require('express-session');

app.set('views', './views')
app.set('view engine', 'ejs')


app.use(session({

    secret: 'keyboard cat',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}))

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname + '/public'));


// หน้า login BodyParse ไปที่ index.html

app.get('/', function (req, res) {

    res.send('./public/index.html')  //เปิดไฟล์ index.html
})

// ถ้าเข้าไปที่ admin แบบไม่ login

app.get('/admin', function (req, res) {
    res.render('admin')
})


//Session (req.session) ดึงค่าจากฟแร์มมาเช็ค

app.post('/admin', urlencodedParser, function (req, res) {

    var passWord = parseInt(req.body.pass);
    var email = req.body.email + "";



    if (passWord != 240311) {

        res.send(`<html>

        <h1>Please Login First.</h1>
        
        <a href='/'>Login</a>
        
        </html>`);

    }
    else {

        res.send(`<html><h1 style="align:center;">Hello ${email} </h1>
        <a href='/logout'>Logout</a></body></html>`);

    }
});


// Session

app.get('/logout', (req, res) => {

    req.session.destroy((err) => {

        if (err) {

            console.log(err);

        } else {

            res.redirect('/');
        }
    });
});


app.listen(8000);


