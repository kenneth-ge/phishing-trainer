const express = require('express');
const path = require('path')
var fs = require('fs');

const router = express.Router();

const scams = ['hacked_account', 'refund_scam']
const reasons = [`The email address had a typo in it. This is a common way of detecting phishing scams. In order to send a secure email, you have to have a verified domain name. This means it's usually very hard if not impossible for hackers to get a hold of a company's official email, e.g. netflix.com. `,
    `In real life, if you ever get an email for a password reset that you didn't ask for, there's a good chance it's a scam. `]

router.get('/', (req, res) => {
    //for now, this will render a random email


    /*
    Types:
    0. Account got "hacked"
    1. 
    */
    res.render('index')
})

router.get('/random', (req, res) => {
    if (Math.random() < 0.5) {
        var files = fs.readdirSync('views/template-fake')

        res.render(`template-fake/${files[Math.floor(Math.random() * files.length)]}`)
    }
    else {
        var files = fs.readdirSync('views/template-legit')

        res.render(`template-legit/${files[Math.floor(Math.random() * files.length)]}`)
    }
})

router.get('/wrong', (req, res) => {
    var text = 'Here are a few ways you could tell this was a phishing scam: <ul>'

    var reasonslisted = JSON.parse(req.query.reasons)

    for (var x = 0; x < reasonslisted.length; x++) {
        text += `<li>${reasons[reasonslisted[x]]}</li>`
    }

    text += "</ul>"

    res.send(text)
})

router.get('/viewpage', (req, res) => {
    res.render(`templates/${req.query.number}`)
})

module.exports = router;
