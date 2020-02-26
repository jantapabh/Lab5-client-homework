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
                    images: 'https://appcenter.evernote.com/assets/img/apps/screenpresso/windows/screenpresso-windows-3.png'
                },
                {
                    name: 'OSX',
                    images: 'https://appcenter.evernote.com/assets/img/apps/screenpresso/windows/screenpresso-windows-3.png'
                },
                {
                    name: 'Andriod',
                    images: 'https://appcenter.evernote.com/assets/img/apps/screenpresso/windows/screenpresso-windows-3.png'
                },
                {
                    name: 'IOS',
                    images: 'https://appcenter.evernote.com/assets/img/apps/screenpresso/windows/screenpresso-windows-3.png'
                }

                ], foo: 'computer'
        })

})
app.listen(8000)