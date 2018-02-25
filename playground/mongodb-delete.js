// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client ) => {
  if (err) {
    console.log('Unable to connect to MongoDB server.')
  }
  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server.');

  //delete many
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteone

  //findone and deleteone


  // client.close();
});
