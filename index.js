// Solution

driversArray = ["Kelvin", "Anthony", "Michelle", "Suzanne"]

//function that returns the first two drivers
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2)
}
returnFirstTwoDrivers(driversArray)
module.exports = returnFirstTwoDrivers;

//function that returns the last two drivers
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2)
}
console.log(returnLastTwoDrivers(driversArray))

//an array of functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 

//function that returns another function
function createFareMultiplier(int){
    return (fare)=>{
        return fare * int }

}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

//function that uses callback function
function selectDifferentDrivers(drivers, func){
    return func(drivers); 

}


// Export the functions for testing
module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
};