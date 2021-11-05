const express = require('express');
let enemies = require('./enemies/enemies.json');
const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
// const ObjectID = require('mongodb').ObjectID;
const cors = require('cors')
let db = require('./db')
let enemiesConctroller = require('./controllers/enemies');

const app = express();


app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`Hello API`)
})

app.get('/enemies', enemiesConctroller.all);

app.get('/enemies/:id', enemiesConctroller.findById)

app.post('/enemies', enemiesConctroller.create);

app.put('/enemies/:id', enemiesConctroller.update);

app.delete('/enemies/:id', enemiesConctroller.delete);

    db.connect('mongodb://localhost:27017/db', (err, database) => {
        if (err) {
            return console.log(err);
        }
        app.listen(3012, () => {
            console.log('API app started')
        })
    })