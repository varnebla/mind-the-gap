'use strict';
/*eslint-disable no-undef*/

require('chai').should();

const gap = require('../index.js');

describe('gap', function () {
  it('ABC should return 0', function () {
    gap('ABC').should.equal(0);
  });
  it('ABD should return 0', function () {
    gap('ABD').should.equal(1);
  });
  it('BCE should return 0', function () {
    gap('BCE').should.equal(2);
  });
  it('BCF should return 3', function () {
    gap('BCF').should.equal(3);
  });
  it('BCDFGHJKLMNPQRSTVWXZ should return 6', function () {
    gap('BCDFGHJKLMNPQRSTVWXZ').should.equal(6);
  });
  it('XYZ should return 23', function () {
    gap('XYZ').should.equal(23);
  });
  it('ABCDE should return 0', function () {
    gap('ABCDE').should.equal(0);
  });
  it('ABCDEFGHIJKL should return 0', function () {
    gap('ABCDEFGHIJKL').should.equal(0);
  });
  it('ACDE should return 1', function () {
    gap('ACDE').should.equal(1);
  });
  it('BCDEF should return 1', function () {
    gap('BCDEF').should.equal(1);
  });
  it('CDEGHKLNORSTUVW should return 8', function () {
    gap('CDEGHKLNORSTUVW').should.equal(8);
  });
  it('ABCDEFGHIJKLMNOPQRSTUVWXYZ should return 0', function () {
    gap('ABCDEFGHIJKLMNOPQRSTUVWXYZ').should.equal(0);
  });
  it('BEIJ should return 6', function () {
    gap('BEIJ').should.equal(6);
  });
})

// 'use strict';
// require('chai').should();
// var dash = require('../index.js');
// describe('dash', function () {
//   it('274 should return "2-7-4"', function () {
//     dash(274).should.equal("2-7-4");
//   });
//   it('274 should return "2-7-4"', function () {
//     dash(274).should.equal("2-7-4");
//   });
// });