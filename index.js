const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')

const router = require('./router')

const app = express();

const middleware = [
    express.static(path.join(__dirname, 'public')),
    bodyParser.json(),
//    bodyParser.urlencoded({extended: true}),
]

app.use(middleware) 
app.use('/', router)
app.set('view engine', 'ejs')

app.use((req, res, next) => {
    res.send("Error! Page not found. ");
    /*res.status(404).render("error", {
        code: "404",
        reason: "Page Not Found",
        description: "The page you are looking for does not exist."
    })*/
})

app.listen(8080)