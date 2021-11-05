const ObjectID = require('mongodb').ObjectID;
let db = require('../db');

exports.all = (cb) => {
    db.get().collection('enemies').find().toArray((err, docs) => {
        cb(err, docs);
    })
}

exports.findById = (id, cb) => {
    db.get().collection('enemies').findOne({_id: ObjectID(id) }, (err, doc) => {
        cb(err, doc);
    } )
}

exports.create = (enemy, cb) => {
    db.get().collection('enemies').insertOne(enemy, (err, result) => {
        cb(err, result);
    })
}

exports.update = (id, newData, cb) => {
    db.get().collection('enemies').updateOne(
        { _id: ObjectID(id) },
        newData,
        (err, result) => {
            cb(err, result);
        }
    )
}

exports.delete = (id, cb) => {
    db.get().collection('enemies').deleteOne(
        { _id: ObjectID(id) },
        (err, result) => {
            cb(err, result);
        }
    )
}