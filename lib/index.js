'use strict';

const deepEqual = require('deep-equal');
const findEle = require('find-array');
const _ = require('lodash');

const findDuplicates = (arr) => {
    if (!Array.isArray(arr)) {
      throw new Error('The param should be an array');
    }

    const arrLength = arr.length;
    const loopTimes = (arrLength * (arrLength - 1)) / 2;
    let currPoint = 0;
    let currentArr = Object.values(arr);
    let arrResult = [];
    let numOfShift = 1;
    let result = {};
    currentArr.shift();

    for (let i = 1; i <= loopTimes; i ++) { 
        currentArr.map((currentArrValue, currentArrKey) => {
          const isIncluded = findEle(arrResult, (ele) => {
            return deepEqual(ele.value, currentArrValue);
          });

          const isEqual = deepEqual(arr[currPoint], currentArrValue);

          if (isEqual) {
            if (_.isEmpty(isIncluded)) {
              result = {};
              result['value'] = currentArrValue;
              result['position'] = [currPoint, currentArrKey + numOfShift];              
              arrResult.push(result);
            } else {
              if (!arrResult[isIncluded[0].key].position.includes(currentArrKey + numOfShift)) {
                arrResult[isIncluded[0].key].position.push(currentArrKey + numOfShift);
              }    
            }
          }
        });

        currPoint = currPoint + 1;
        numOfShift = numOfShift + 1;
        currentArr.shift();
    }
    return arrResult;
}

module.exports = findDuplicates;