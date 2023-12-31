// --------------------------------------------------------------------------
// -- infoFromArray.js
// -- initial author: Renick Bell (renick@gmail.com)
// -- initial creation date: Wed Jun 28 10:08:48 AM CST 2023
// -- contributors: Yiler Huang (yiler7777@gmail.com); Steve Wang (stevesg168@gmail.com)
// -- license: GPL 3.0
// --------------------------------------------------------------------------

function findClosest(arr, item, comparatorFn) {
    let mid = arr.indexOf(item);
    let left = mid - 1;
    let right = mid + 1;
    while (left > 0 || right < arr.length) {
        if (left < 0) {
        } else if (comparatorFn(arr[left], item) === true) {
            return { item: arr[left], index: left };
        } else {
            left -= 1;
        }
        if (right > arr.length) {
        } else if (comparatorFn(arr[right], item) === true) {
            return { item: arr[right], index: right };
        } else {
            right += 1;
        }
    }
    return false;
}

function findClosestSmaller(arr, item) {
    return this.findClosest(arr, item, (a, b) => {
        return a < b;
    }).item;
}

function findClosestLarger(arr, item) {
    return this.findClosest(arr, item, (a, b) => {
        return a > b;
    }).item;
}

//Find most frequent item that appears in array: change to find most frequen item
function findMostFrequentItem(array) {
    let itemCounts = new Map();
    let maxItem = array[0];
    let maxCount = 0;
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (itemCounts.has(item)) {
            itemCounts.set(item, itemCounts.get(item) + 1);
        } else {
            itemCounts.set(item, 1);
        }
        let currentCount = itemCounts.get(item);
        if (currentCount > maxCount) {
            maxItem = item;
            maxCount = currentCount;
        }
    }
    return maxItem;
}

function sum(inputArray) {
    return inputArray.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
}

function runningSum(startingVal, inputArray) {
    let currentSum = startingVal;
    let output = [];
    for (let i = 0; i < inputArray.length; i++) {
        let newSum = inputArray[i] + currentSum;
        output.push(newSum);
        currentSum = newSum;
    }
    return output;
}

function mean(inputArray) {
    return this.sum(inputArray) / inputArray.length;
}

function includesOneOf(inputArray, things) {
    let bools = things.map((t) => inputArray.includes(t));
    if (bools.includes(true)) {
        return true;
    } else {
        return false;
    }
}

function matchesOneOf(candidates, thing) {
    return this.includesOneOf([thing], candidates);
}

//Generated by chatgpt:
// Generic function to find index values based on a comparator function
function getIndexValues(inputArray, comparatorFn) {
    let currentIndexValues = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (currentIndexValues.length === 0) {
            currentIndexValues.push([i, inputArray[i]]);
        } else {
            const comparisonResult = comparatorFn(
                inputArray[i],
                currentIndexValues[0][1]
            );
            if (comparisonResult < 0) {
                currentIndexValues = [[i, inputArray[i]]];
            } else if (comparisonResult === 0) {
                currentIndexValues.push([i, inputArray[i]]);
            }
        }
    }
    return currentIndexValues;
}

//Generated by chatgpt:
// Specific functions for finding the minimum and maximum index values
function getMinIndex(inputArray) {
    return this.getIndexValues(inputArray, (a, b) => {
        return a - b;
    });
}

//Generated by chatgpt:
function getMaxIndex(inputArray) {
    return this.getIndexValues(inputArray, (a, b) => {
        return b - a;
    });
}

module.exports = {
    findClosest,
    findClosestSmaller,
    findClosestLarger,
    findMostFrequentItem,
    sum,
    runningSum,
    mean,
    includesOneOf,
    matchesOneOf,
    getIndexValues,
    getMinIndex,
    getMaxIndex,
};
