var _ = require('lodash');
var fs = require('fs');

// Get a stylesheet
// Return contents
function getStyleSheet(file){
    var data;
    return data;
};

// Search contents for variables
// and push them into an array
// Return the array
function findVars(data){
    var varsList;
    return varsList;
}

// Find everywhere a Var is used in a collection
// of stylesheets
// Returns an object containing the selectors that
// use the var

function getVarUsage(varName){
    var usage;
    return usage;
}

var readFile = function (filePath, onLoad) {
    fs.readFile(filePath, {encoding: 'utf8'}, function (err, fileData) {
        var matches = fileData.match(/[$].*:.+;/g);
        var variables = matches.map(function(entry){

            var temp = entry.split(':');
            var pair = {
                'var': temp[0],
                'value': temp[1].replace(' ', '')
            };
            return pair;
        });
        onLoad(err, variables);
    });
};

readFile('test.scss', console.log);
