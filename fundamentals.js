// NOTE: Make sure to use the `var` keyword for ALL variable declarations.

// #1: Create an array of strings called `foods` that contains three foods.
// Type your solution immediately below this line:
var foods = ['pizza', 'pasta', 'chili']
console.log(foods)

// #2: Access the last item in the array and assign to a variable called `last`.
// Type your solution immediately below this line:
var last = foods[2]
console.log(last)


// #3: Create an empty array called `favoriteFoods`.
// Type your solution immediately below this line:
var favoriteFoods = []


// #4: Create a `for` loop that adds each string in `foods` to `favoriteFoods`.
// Type your solution immediately below this line:
for (let i = 0; i < foods.length; i++) {
    favoriteFoods.push(foods[i]) 
}
console.log(favoriteFoods)


// #5: Create an object literal called `instructor` that contains three key-value pairs.
// Type your solution immediately below this line:
var instructor = {
    number1: 'Joe',
    number2: 'Kenny',
    number3: 'Ali'
}


// #6: Add a `has-office-hours` (spelled exactly) property to `instructor` by accessing
// it (do not change the original object you typed above) and assigning it
// a boolean value.
// Type your solution immediately below this line:
instructor[`has-office-hours`] = 0
console.log(instructor)