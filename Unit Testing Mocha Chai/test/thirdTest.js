var assert = require('chai').assert;
var third = require('../third.js');

// Javascript Closure
describe('Third', function(){
    var resultC = third(5);

    it('should add 5 and return 10', function(){
        assert.equal(resultC, 10);
    });

    it('should return type number', function(){
        assert.typeOf(resultC, 'number');
    });

});