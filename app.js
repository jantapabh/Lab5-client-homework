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


app.use(function (req, res, next) {

    var sess = req.session

    if (sess.views) {

        sess.views++

    } else {

        sess.views = 1
    }

    next();
})

app.get('/logout', (req, res) => {

    req.session.destroy((err) => {

        if (err) {
            console.log(err);

        } else {

            res.redirect('/');
        }
    });
});


app.get('/', function (req, res) {

    let password = "240311";

    res.send(`<html><body>

    <form>
     Email : <input type="email" placeholder="Type your email" />
     Password: <input type="number" placeholder="Type your password" />
    </form>
    <button type="submit">submit</button>
    </body></html>`)
})

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


