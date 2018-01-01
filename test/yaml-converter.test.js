const assert = require('chai').assert;
const yamlConverter = require('./../yaml-converter');

describe('YAML-converter', function(){

    let _arr = [{
        a:5,
        b:6,
        d:"wertwertwt"
    }];

    let _arrResponse = [{
        a:5,
        b:6,
        d:"wertwertwt",
        "length":30
    }];

    let _arrResponseFail = [{
        a:5,
        b:6,
        d:"wertwertwt",
        "length":3
    }];

    it("It should return new object with length", function(){
        assert.deepEqual(yamlConverter.updateSizeAttribute(_arr, "length"), _arrResponse);
    });

    it("It should fail for wrong count", function(){
        assert.notDeepEqual(yamlConverter.updateSizeAttribute(_arr, "length"), _arrResponseFail);
    });
});