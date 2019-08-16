//CRUD

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient; 
// const ObjectID = mongodb.ObjectID;
//MongoClient gives us access to the function necessary to connect to db so we can perform CRUD operations

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'; //typed out 127... to avoid strange localhost bugs and slowdown
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.');
    }
    const db = client.db(databaseName);

    //Read
    db.collection('users').findOne({ _id: new ObjectId("5d52bd3bdc9f4854d04424bd") }, (error, user) => {
        if (error) {
            return console.log('unable to find the user');
        }
        console.log(user);
    })

    db.collection('users').findOne({ age: 18 }, (error,user) => {
        if (error) {
            return console.log('error in finding your request.');
        }
        console.log(user);
    })

    db.collection('users').find({ age: 18 }).toArray( (error, users) => {
        if (error) {
            return console.log('error in finding your request.');
        }
        console.log(users);
    })

    db.collection('users').find().toArray( (error, users) => {
        if (error) {
            return console.log('error in finding your request.');
        }
        // var reverseOrder = users.sort({_id:-1});
        console.log("last user added to db: " + users[users.length-1]);
        var myTimestamp = users[users.length-1]._id.getTimestamp();
        console.log(myTimestamp);

        var myDate = new Date(myTimestamp).toGMTString();
        console.log(myDate);
    })

    db.collection('newTasks').find({ completed: false }).toArray( (error, tasks) => {
        if (error) {
            return console.log('error in finding your request.');
        }
        console.log(tasks);
    })

    //Create
    db.collection('users').insertOne({
        _id: id,
        name: 'noob',
        age: 1337
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }
        console.log(result.ops);
    })

    // db.collection('users').insertMany([
    //     {
    //         name: 'etcheepoof',
    //         age: 28
    //     },
    //     {
    //         name: 'Fieeie',
    //         age: 21
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log('Unable to insert Many Documents.');
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('newTasks').insertMany([
    //     {
    //         description: 'reading',
    //         completed: true
    //     },
    //     {
    //         description: "eating lunch",
    //         completed: false
    //     },
    //     {
    //         description: 'drive',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to store documents.');
    //     }
    //     console.log(result.ops);
    // })
})
