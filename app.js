const yamlConverter = require ('./yaml-converter');

const yamlFileWriteSuccessHandler = () => {
    console.log("success");
};

const fileReadHandler = (fileData) => {
    let modifiedJSONData = yamlConverter.updateSizeAttribute(fileData);
    yamlConverter.yamlizeAndWriteFile('./public/data/', 'output.yml', modifiedJSONData, yamlFileWriteSuccessHandler);
};

yamlConverter.readJSONFile("./public/data/mock-json-data.json", fileReadHandler);





