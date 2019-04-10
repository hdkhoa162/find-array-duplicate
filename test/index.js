'use strict';

require('mocha');

const assert = require('assert');
const findDuplicates = require('../lib');
const testArr = [ 
    {a: 'a', b: ['a', 'b', 'c'] }, 
    { name: 'Khoa',
        a: {
            b: {
                c: 'c'
            }
        }
    },
    'dev',
    1,
    2,
    3,
    'dev',
    {a: 'a', b: ['a', 'b', 'c'] }
]

describe('find Duplicated Array Element', function() {    
  it('find duplicated elements', function() { 
    assert.deepEqual(findDuplicates(testArr), 
    [ { value: { a: 'a', b: ['a', 'b', 'c'] }, position: [ 0, 7 ] },
    { value: 'dev', position: [ 2, 6 ] } ]
    );
  });
});
