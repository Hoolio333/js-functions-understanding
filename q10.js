function myFunction(num1, num2, num3) {
  console.log(num3)
}

const num1 = 10
const num2 = 1
const num3 = 20

myFunction(num3, num1, 100)

// myFunction has three arguments, but only one is beiung logged & one highlighted 

// I expect the log to only show num3 which is 20

// I was wrong only showed 100 - guess this is because only one number can be shown in the log & 100 is the number given in line 9 within the function so overrules the const variables & values 