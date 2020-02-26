var express = require('express')
var app = express()

app.set('views', './views') //กำหนดโฟลเดอร์ที่เราเก็ย temple
app.set('view engine', 'ejs')

app.get('/computers', function (req, res) {
    res.render('computer',
        {
            computer:
                [
                    { name: 'windows',
                      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRc8QaIkpUIbhqUxlVjSU01eS1nSY90dQ6x1rzQRYtnAt8odEc' }, 
                ]
        })
})
app.listen(8000)