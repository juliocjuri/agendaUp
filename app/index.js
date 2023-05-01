const express = require('express');
const app = express();

app.use(express.static('frontend/dist'));

const path = require('path');
app.get('*', (req, res) => {
     res.sendFile(
          path.resolve(
               __dirname,
               'frontend',
               'dist',
               'index.html'
          )
     )
});

const PORT = 5000;

app.listen(PORT, () => { console.log("App running on port: " + PORT)})