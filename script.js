// Create will be able to convert figures from fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit -32) *5 /9;
    return celsius;
}

const fahrenheit = 68;
const celsius = fahrenheitToCelsius(fahrenheit);
console.log(celsius); // expectend result is 20



// Create a function that calculate the  average of numbers in array 
function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i< arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

const numbers = [1,2,3,4,5];
const average = calculateAverage(numbers);
console.log(average); // expected result is 3