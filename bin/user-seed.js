const mongoose = require("mongoose")
const User = require("../models/user-model")

mongoose
  .connect('mongodb://localhost/connection-reinforcement', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


data = [
  {
    firstName: "Abi",
    description: "I'm here to help you learn"
  },
  {
    firstName: "Jules",
    description: "he's a great TA"
  }
]

User.create(data)
  .then(oneUser => {
    console.log(`created ${oneUser.length} users`);
  })
  .catch(err => {
    console.log("oops, there was an error", err);
  });