const express = require('express')
const app = express()
const port = 3000;

app.get('/:id', (req, res) => {
    res.send({
        "user": req.params.id,
        "ai":
    });
})

function rockPaperScissors() {
    let robo = ["rock", "paper", "scissors"]
    let roboChoice = Math.floor(Math.random() * Math.floor(robo.length));
    let ai = robo[roboChoice]
}

console.log(ai);