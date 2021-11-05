let Enemies = require('../models/enemies');

exports.all = (req, res) => {
    Enemies.all((err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
}

exports.findById = (req, res) => {
    Enemies.findById(req.params.id, (err, doc) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
}

exports.create = (req, res) => {
    let enemy = {
        // id: Date.now(),
        name: req.body.name,
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
        reward: req.body.reward
    };
    Enemies.create(enemy, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(enemy);
    })
}

exports.update = (req, res) => {
    Enemies.update(req.params.id, {  $set: {
        // id: Date.now(),
        name: req.body.name,
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
        reward: req.body.reward
    }}, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}

exports.delete = (req, res) => {
    Enemies.delete(req.params.id, (err, result) => {
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}