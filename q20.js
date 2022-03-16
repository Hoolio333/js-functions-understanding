function myFunction(num1, num2, num3) {
  return num1 + num3
}

const num1 = 20
const num2 = 200
const num3 = 1000

const result = myFunction(5, 10, num3, 15)
console.log(result)

// I predict result to be 1005 in console log as num 1 is 5 looking atline 9 & num3 in line 9 the const is 1000 for num3, therefore 5 +1000 = 1005

// Correct - 1005 was shown 