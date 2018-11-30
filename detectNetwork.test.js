/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 


  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901723') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 

  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
 let disArr = ['6011', '65', '644', '645', '646', '647', '648', '649'];

  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011888888888888')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011888888888888888')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6511888888888888')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6511888888888888888')).to.equal('Discover');
  });

  it('has a prefix of 644 and a length of 16', function() {
    expect(detectNetwork('6441888888888888')).to.equal('Discover');
  });

  it('has a prefix of 644 and a length of 19', function() {
    expect(detectNetwork('6441888888888888888')).to.equal('Discover');
  });
  it('has a prefix of 645 and a length of 16', function() {
    expect(detectNetwork('6451888888888888')).to.equal('Discover');
  });

  it('has a prefix of 645 and a length of 19', function() {
    expect(detectNetwork('6451888888888888888')).to.equal('Discover');
  });
  it('has a prefix of 646 and a length of 16', function() {
    expect(detectNetwork('6461888888888888')).to.equal('Discover');
  });

  it('has a prefix of 646 and a length of 19', function() {
    expect(detectNetwork('6461888888888888888')).to.equal('Discover');
  });
  it('has a prefix of 647 and a length of 16', function() {
    expect(detectNetwork('6471888888888888')).to.equal('Discover');
  });

  it('has a prefix of 647 and a length of 19', function() {
    expect(detectNetwork('6471888888888888888')).to.equal('Discover');
  });
  it('has a prefix of 648 and a length of 16', function() {
    expect(detectNetwork('6481888888888888')).to.equal('Discover');
  });

  it('has a prefix of 648 and a length of 19', function() {
    expect(detectNetwork('6481888888888888888')).to.equal('Discover');
  });
  it('has a prefix of 649 and a length of 16', function() {
    expect(detectNetwork('6491888888888888')).to.equal('Discover');
  });

  it('has a prefix of 649 and a length of 19', function() {
    expect(detectNetwork('6491888888888888888')).to.equal('Discover');
  });


});

//Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

describe('Maestro', function() {
  var expect = chai.expect;

  let prefixes = ['5018', '5020', '5038', '6304'];

  for (var length = 12; length <= 19; length++) {
    let num = '0';
    let string = num.repeat(length-4);
    (function(length) {

    it('has a prefix of 5018 and a length of ' + length, function() {
      expect(detectNetwork(prefixes[0] + string)).to.equal('Maestro');
    });
   it('has a prefix of 5020 and a length of ' + length, function() {
      expect(detectNetwork(prefixes[1] + string)).to.equal('Maestro');
    });
   it('has a prefix of 5038 and a length of ' + length, function() {
      expect(detectNetwork(prefixes[2] + string)).to.equal('Maestro');
    });
   it('has a prefix of 6304 and a length of ' + length, function() {
      expect(detectNetwork(prefixes[3] + string)).to.equal('Maestro');
    });

  })(length)
 }
})


//China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.


describe('should support China UnionPay', function() {
  var expect = chai.expect;

  for (var prefix = 622126; prefix <= 622925; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '1234567890')).to.equal('China UnionPay');
      });

    })(prefix)
  }
  for (var prefix = 622126; prefix <= 622925; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(prefix + '12345678907')).to.equal('China UnionPay');
      });

    })(prefix)
  }
  for (var prefix = 622126; prefix <= 622925; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '123456789008')).to.equal('China UnionPay');
      });

    })(prefix)
  }
  for (var prefix = 622126; prefix <= 622925; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '1234567890009')).to.equal('China UnionPay');
      });

    })(prefix)
  }
  //624-626
  for (var prefix = 624; prefix <= 626; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '0000000000000')).to.equal('China UnionPay');
      });

    })(prefix)
  }
  for (var prefix = 624; prefix <= 626; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(prefix + '00000000000000')).to.equal('China UnionPay');
      });

    })(prefix)
  }
  for (var prefix = 624; prefix <= 626; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '000000000000000')).to.equal('China UnionPay');
      });

    })(prefix)
  }
  for (var prefix = 624; prefix <= 626; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '0000000000000000')).to.equal('China UnionPay');
      });

    })(prefix)
  }

//6282-6288

  for (var prefix = 6282; prefix <= 6288; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '000000000000')).to.equal('China UnionPay');
      });

    })(prefix)
  }
  for (var prefix = 6282; prefix <= 6288; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(prefix + '0000000000000')).to.equal('China UnionPay');
      });

    })(prefix)
  }
  for (var prefix = 6282; prefix <= 6288; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '00000000000000')).to.equal('China UnionPay');
      });

    })(prefix)
  }
  for (var prefix = 6282; prefix <= 6288; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '123456789000900')).to.equal('China UnionPay');
      });

    })(prefix)
  }
})

//prefix.toString() + '1234567890'

// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
describe('should support Switch', function() {
  var expect = chai.expect;
  var switch4 = ['4903', '4905', '4911', '4936', '6333', '6759'];
  var switch6 = ['564182', '633110'];

  for (var i = 0; i < switch4.length; i++) {
    (function(i) {
      it('has a prefix of ' + switch4[i] + ' and a length of 16', function() {
        expect(detectNetwork(switch4[i] + '111111111111')).to.equal('Switch');
      });
    })(i)
  }
  for (var i = 0; i < switch4.length; i++) {
    (function(i) {
      it('has a prefix of ' + switch4[i] + ' and a length of 18', function() {
        expect(detectNetwork(switch4[i] + '11111111111111')).to.equal('Switch');
      });
    })(i)
  }
  for (var i = 0; i < switch4.length; i++) {
    (function(i) {
      it('has a prefix of ' + switch4[i] + ' and a length of 19', function() {
        expect(detectNetwork(switch4[i] + '111111111111111')).to.equal('Switch');
      });
    })(i)
  }


  for (var i = 0; i < switch6.length; i++) {
    (function(i) {
      it('has a prefix of ' + switch6[i] + ' and a length of 16', function() {
        expect(detectNetwork(switch6[i] + '1111111111')).to.equal('Switch');
      });
    })(i)
  }
  for (var i = 0; i < switch6.length; i++) {
    (function(i) {
      it('has a prefix of ' + switch6[i] + ' and a length of 18', function() {
        expect(detectNetwork(switch6[i] + '111111111111')).to.equal('Switch');
      });
    })(i)
  }
  for (var i = 0; i < switch6.length; i++) {
    (function(i) {
      it('has a prefix of ' + switch6[i] + ' and a length of 19', function() {
        expect(detectNetwork(switch6[i] + '1111111111111')).to.equal('Switch');
      });
    })(i)
  }

})
//visa, prefix 4, length of 13 16 19






















