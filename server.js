const express = require("express")
const mongoose = require('mongoose')

const app = express()

mongoose.set('strictQuery', false)

mongoose.connect('mongodb://localhost/urlshortner', {
    useNewUrlParser: true, useUnifiedTopology: true
})
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})
app.post('/shorturls', (req, res) => {

})
app.listen(process.env.PORT || 5000, () => {
    console.log('listening on http://localhost:5000')
})