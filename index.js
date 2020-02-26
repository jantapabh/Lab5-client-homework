var express = require('express')
var app = express()

app.set('views', './views') //กำหนดโฟลเดอร์ที่เราเก็บ temple
app.set('view engine', 'ejs')


app.get('/computer', function (req, res) {


    res.render('computer',
        {
            computers:

                [{  topic: '1',
                    name: 'Windows',
                    images: 'https://i.blogs.es/b5f220/win7/450_1000.jpg'
                },
                {   topic: '2',
                    name: 'OSX',
                    images: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/mac/macos-mojave-get-software-hero.jpg'
                },
                {   topic: '3',
                    name: 'Andriod',
                    images: 'https://www.thaimobilecenter.com/home/img_stock/2019314_86797.jpg'
                },
                {   topic: '4',
                    name: 'IOS',
                    images: 'https://i.pinimg.com/originals/0d/f5/9f/0df59f62e2c2b6371440d83c42248894.jpg'
                }

                ], foo: 'computer'
        })

})

app.listen(8000)
console.log('8000 is the magic port');