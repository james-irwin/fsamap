var fs = require('fs');
var xml2js = require('xml2js');

function dumpit(err, data) {
if (err) throw err;

var parser = xml2js.Parser();
parser.parseString(data, function (err, result) {
    console.log(JSON.stringify(result));
});}


var data = fs.readFile(process.argv[2], dumpit);
