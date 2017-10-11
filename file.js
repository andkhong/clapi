
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log('Yarp');
});

app.listen(port, () => console.log('App is listening to port localhost:', port));
