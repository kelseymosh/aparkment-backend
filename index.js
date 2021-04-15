const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://aparkmentsquad:beerolympics@cluster0.pcdst.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

MongoClient.connect(connectionString, {
    useUnifiedTopology: true })
        .then(client => {
            console.log('Connected to Database')
            const db = client.db('aparkment-data')
        })
        .catch(error => console.error(error))



app.get('/', (request, response) => {
    response.send("Hello world")
})

app.listen(4000, () => console.log("listening on port 4000"))

