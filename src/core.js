// 1. Create a function named bakingTime that returns 50
function bakingTime() {
    return 50
}

let myBakingTime = bakingTime()
console.log(`myBakingtime is`, myBakingTime)

// 2. Create a function named remainingBakeTime that accepts one parameter:
// - the number of minutes your cake has been in the oven.

// It must return how many minutes your cake has left based on your parameter
// and the result of the bakingTime function
let minLeft

function remainingBakeTime(num) {
   minLeft =  myBakingTime - num
   return minLeft
}

remainingBakeTime(30)
console.log(`remainingBakeTime is`, remainingBakeTime(30))
remainingBakeTime(30)
// 3. Create a function named calculatePreparationTime that accepts one parameter:
// - the number of layers your cake has
//
// It must return how many minutes it will take to prepare your cake, based on
// each layer taking 3 minutes to prepare

function calculatePreparationTime(layers) {
    return layers * 3 
}

calculatePreparationTime(5)
console.log(`calculatePreparationTime`, calculatePreparationTime(5))

// 4. Create a function named totalTimeSpent that accepts two parameters:
// - the number of layers your cake has
// - the number of minutes the cake has already been baking in the oven
// It must return how many minutes in total you have spent making the cake,
// which is the sum of the preparation time and the number of minutes it's been in the oven.
// Use your calculatePreparationTime function in the calculation.

let myTotalTimeSpent
function totalTimeSpent(numOfLayers, timePassed) {
    myTotalTimeSpent = calculatePreparationTime(numOfLayers) + timePassed

    return myTotalTimeSpent
}
totalTimeSpent(4, 20)
console.log(`totalTimeSpent is`, totalTimeSpent(4, 20))
// Don't change the code below this line
module.exports = {
    bakingTime,
    remainingBakeTime,
    calculatePreparationTime,
    totalTimeSpent
}
