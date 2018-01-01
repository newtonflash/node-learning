/**
 * YAML converter with some utilities
 */


fs = require('fs');
const yaml = require('write-yaml');

const readJSONFile = (filePath, handler ) => {
    fs.readFile( filePath , function read(err, data) {
        if (err) {
            throw err;
        }
        handler(data);
    });
};

const updateSizeAttribute = (arr , key) => {
    let i = 0;
    for(; i< arr.length ; i++){
        arr[i][key] = JSON.stringify(arr[i]).length;
    }
    return arr ;
};

const yamlizeAndWriteFile = (filePath, fileName, jsonObj, successHandler) => {
    yaml(filePath + '' + fileName, jsonObj, function (err) {
        if (err) return console.log(err);
        successHandler();
    });
};

module.exports  = {
    readJSONFile : readJSONFile,
    updateSizeAttribute : updateSizeAttribute,
    yamlizeAndWriteFile : yamlizeAndWriteFile
};

