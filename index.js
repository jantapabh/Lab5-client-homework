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
                    images: 'https://www.howtogeek.com/wp-content/uploads/2020/01/win10-on-7-banner.png'
                },
                {   topic: '2',
                    name: 'OSX    ',
                    images: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/osx/elcapitan-update-software-app-store-hero-alt.jpg'
                },
                {   topic: '3',
                    name: 'Andriod ',
                    images: 'https://www.flashfly.net/wp/wp-content/uploads/2019/01/android.jpg'
                },
                {   topic: '4',
                    name: 'IOS     ',
                    images: 'https://sites.google.com/site/jukkridrenji12/_/rsrc/1447515442900/rabb-ptibati-kar-ios/i6.png'
                }

                ], foo: 'computer'
        })

})

app.listen(8000)
console.log('8000 is the magic port');