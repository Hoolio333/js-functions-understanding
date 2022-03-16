function myFunction(num1, num2) {
  console.log(num3)
}

const num1 = 10
const num2 = 1
const num3 = 20

myFunction(num3, num1)

// Similar function to q8 however the arguments num1 & num2 in the function are not used & are therefore shaded out
// I expect console log to show undefined for num3 as it is not included in the function arguments

// I was wrong.  Despite not being in the function arguments the console log still shows the num3 value of 20
// Only logs one number as one asked to log one number
