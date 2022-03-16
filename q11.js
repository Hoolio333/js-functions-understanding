function myFunction(num1, num2, num3) {
  return num1 + num2 + num3
}

const num1 = 10
const num2 = 1
const num3 = 20

const result = myFunction(1, 1, 1)
console.log(result)

// The function names myFunction has three arguments (num1, num2, num3) 
// This function returns the value of adding the nums together
// Despite the const variables (num1, num2, num3) getting values assigned.  
// The below result on line 9, the function has been given direct values & numbers which are added, therefore I expect the result log to show 3. 

// 3 was correct 