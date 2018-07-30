var assert = require('chai').assert;
var third = require('../third.js');

// Javascript Closure
// Describe, It, Assert uses Mocha's BDD style functions.
describe('Third', function(){
    var resultC = third(5);

    it('should add 5 and return 10', function(){
        assert.equal(resultC, 10);
    });

    it('should return type number', function(){
        assert.typeOf(resultC, 'number');
    });

});
// $ npm run test


/*
// Unit Tests (one type of automated test)
A single piece of code (usually an object or a 
function) is tested, isolated from other pieces

// Test-Driven Development
TDD or Test-Driven Development is a process for 
when you write and run your tests.

// Behavior-Driven Development 
BDD or Behavior-Driven Development is a set of best 
practices for writing great tests. BDD can, and should be, 
used together with TDD and unit testing methods.


// Conclusion: 
Unit Testing gives you the WHAT.
est-Driven Development gives you the WHEN. 
Behavior Driven-Development gives you the HOW.
"Although you can use each individually, you should combine them for best results as they complement each other very nicely."
*/
