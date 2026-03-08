const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('src/assets/pdf/Day 9 - Raaz e Hayat.pdf');

pdf(dataBuffer).then(function (data) {
    fs.writeFileSync('parsed.txt', data.text);
    console.log('done');
}).catch(console.error);
