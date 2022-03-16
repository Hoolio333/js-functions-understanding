function getSomeValue() {
  return 2
}

function myFunction(num1) {
  const num2 = getSomeValue()
  return num1 * num2
}

const result = myFunction(5)
console.log(result)

// function getSomeValue returns 2.
// myFunction(num1) includes a const variable num2 which equals the getSomeValue function, which returns the calculation of num1 * num2
// Therefore as num1 is 5 as shown on line 10.  num2 is equal to getSomeValue which returns 2.  The result console log should show 10 as it's 5 * 2

// Correct, console log showed 10 
