// Code your solution in this file!
const returnFirstTwoDrivers = (driverArray) => {
    // return first two of the array
    // if array of 10 drivers, how to return just the
    return driverArray.slice(0, 2);
};

const returnLastTwoDrivers = (driverArray) => {
    return driverArray.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return function (number){
       return number * num
    }
};

function fareDoubler(num) {
    return num * 2
};

function fareTripler(num) {
    return num * 3
};

function selectDifferentDrivers(arrayOfDrivers, func){
   return func(arrayOfDrivers);
}