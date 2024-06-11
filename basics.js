const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/football', function(req,res){
    var football={
        name:"messi",
        age : 38,
        team: "bracelona",
        country: "argentina",   
}
    res.send(football)
})

app.get('/cricket', function(req,res){
    res.send('cricket')
})

app.listen(3000)