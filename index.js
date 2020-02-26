var express = require('express')
var app = express()

app.set('views', './views') //กำหนดโฟลเดอร์ที่เราเก็บ temple
app.set('view engine', 'ejs')

app.get('/computer', function (req, res) {


    res.render('computer',
        {
            computers:

                [{
                    name: 'Windows',
                    images: './public/Windows.png'
                },
                {
                    name: 'OSX',
                    images: './public/OSX.jpg'
                },
                {
                    name: 'Andriod',
                    images: './public/Andriod.jpg'
                },
                {
                    name: 'IOS',
                    images: './public/IOS.jpg'
                }

                ], foo: 'computer'
        })

})
app.listen(8000)