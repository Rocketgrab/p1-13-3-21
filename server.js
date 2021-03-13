
const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');

app.get('/', (req, res) => {
    //THIS METHOD USES ABSOLUTE FILE PATH
    //res.sendFile('/Users/Keita Programming/Desktop/project1/public/index.html')
    //THIS METHOD SHOULD WORK ON AWS 

    let index = fs.readFileSync('./public/index.html');
    res.writeHeader(200, {"Content-Type": "text/html"});
    res.write(index);

    //note res.render is used when using templates
});

const server = app.listen(3000, () => {
    console.log('running on port 3000');
});