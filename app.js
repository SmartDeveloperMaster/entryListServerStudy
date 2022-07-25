const express = require('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.POST || 3000

app.use(morgan('dev'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "static/html/reservation.html"))
})

app.post("/reservation", (req, res) => {
    const visitorName = req.body.visitorName;
    const visitorPhoneNumber = req.body.visitorPhoneNumber;
    const resvDate = req.body.resvDate;
    const resvReason = req.body.resvReason;
    res.send('이름: '+visitorName+', '+'전화번호: '+visitorPhoneNumber+', '+'소속: '+resvDate+', '+'방문 사유: '+resvReason);
})

app.listen(PORT, function(req, res) {
    console.log(`Server is listening at http://localhost:${PORT}`)
})