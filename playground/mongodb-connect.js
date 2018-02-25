// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client ) => {
  if (err) {
    console.log('Unable to connect to MongoDB server.')
  }
  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, results) => {
  //   if (err) {
  //     console.log('Unable to insert todo', err);
  //   };
  //   console.log(JSON.stringify(results.ops, undefined, 2));
  // });
  // db.collection('Users').insertOne({
  //   name: 'Shawn Lenhardt',
  //   age: 25,
  //   location: 'Alexandria'
  // }, (err, results) => {
  //   if (err) {
  //     console.log('Unable to insert user', err);
  //   };
  //   console.log(JSON.stringify(results.ops, undefined, 2));
  //   console.log(results.ops[0]._id.getTimestamp());
  // });

  client.close();
});
