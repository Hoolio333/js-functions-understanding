let counter = 1

function myFunction() {
  counter++
  return counter
}

myFunction()
const num = myFunction()
console.log(num)


// There's a let variable called counter with the value of 1
// A function called myFunction with no arguments in the ()
// Within the function {} the counter variable starting at 1 as shown on line 1 with that value should increase by 1 with ++ to return 2

// Lines 8 not sure why it is named again

// But line 9 a const variable is equal to myFunction 

// If I console log num I expect 2.

// It was 3 not 2.

// Now I know why line 8 was included as the number goes through the function again to go from 2 to 3