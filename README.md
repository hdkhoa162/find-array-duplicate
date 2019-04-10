# find-array

This plugin is to find and return duplicated array elements.

```javascript
const findDuplicates = require('find-array-duplicate');
const testArr = [ 
    { a: 'a', b: ['a', 'b', { c: 'c' }] },
    { a: 'a', b: ['a', 'b', { c: 'c' }] }, 
    { name: 'Khoa',
        a: {
            b: {
                c: 'c'
            }
        }
    },
    'dev',
    'Khoa',
    1,
    2,
    3,
    'dev',
    {a: 'a', b: ['a', 'b', 'c'] },
    3,
    'Khoa',
    {a: 'a', b: ['a', 'b', 'c'] }
]

findDuplicates(testArr);
// [ { value: { a: 'a', b: ['a', 'b', { c: 'c' } ] }, position: [ 0, 1 ] },
//   { value: 'dev', position: [ 3, 8 ] },
//   { value: 'Khoa', position: [ 4, 11 ] },
//   { value: 3, position: [ 7, 10 ] },
//   { value: { a: 'a', b: ['a', 'b', 'c'] }, position: [ 9, 12 ] } ]

```
### Related projects
* [find-array](https://www.npmjs.com/package/find-array): Find and return right elements in an array. | [homepage](https://github.com/hdkhoa162/find-array "Find and return right elements in an array.")

## Install

```bash
$ npm install find-array-duplicate
```