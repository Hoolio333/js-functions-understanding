function myFunction(num1, num2) {
  return num1 + num2
}

const num1 = 10
const num2 = 1
const num3 = 4

const result = myFunction(num3, num1)
console.log(result)

// The function is called myFunction with two arguments (num1, num2)
// The function calculated num1 + num2
// lines 5 - 7 we have some const variables for nums & values
// line 9 the result is a const variable.  The result shows myFunction passing through the (num3 & num1 values)
// the myFunction showed us before it adds up the two numbers.  num3 is 4 & num1 is 10 therefore the result log should be 14.
// The log did show 14 as predicted