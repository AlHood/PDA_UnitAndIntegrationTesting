var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."

  it('test add', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5)
  });

  it('test subtract', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3)
  });

  it('test multiply', function(){
    calculator.previousTotal = 3;
calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15)
  });

  it('test divide', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3)
  });

  it('test numberClick', function(){

    calculator.numberClick(3);
    calculator.numberClick(8);
    calculator.numberClick(5);

    assert.equal(calculator.runningTotal, 385)
  })


  it('test operatorClick', function(){

calculator.operatorClick('*');
assert.equal(calculator.previousOperator, '*');

calculator.numberClick(3);
calculator.operatorClick('=');
assert.equal(calculator.previousOperator, null);
  
calculator.operatorClick('=');
    assert.equal(calculator.newTotal, true);
  })

  it('test clearclick', function(){
    calculator.operatorClick('+');
    calculator.numberClick(8);
    assert.equal(calculator.runningTotal, 8);

calculator = new Calculator();

    calculator.clearClick();
    assert.equal(calculator.previousTotal, null);
    assert.equal(calculator.previousOperator, null);
    assert.equal(calculator.runningTotal, 0);

  })
});
