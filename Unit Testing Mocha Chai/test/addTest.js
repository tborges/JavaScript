var assert = require('chai').assert;
var add = require('../add.js');

//BEGINNER BASIC LEVEL
// Describe, It, Assert uses Mocha's BDD style functions.
describe('Add', function(){
    
    it('should add 5 and return 10', function(){
        var result = add(5);
        assert.equal(result, 10); //EQUAL
    })

    it('should return type number', function(){
        var result = add(5);
        assert.typeOf(result, 'number'); //TYPEOF 
    })
})
// $ npm run test