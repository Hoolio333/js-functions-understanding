function getSomeValue() {
  return 2
}

function myFunction(num1) {
  const num2 = getSomeValue()
  return num1 * getSomeValue()
}

const result = myFunction(5)

console.log(result)

// Similar to previous question.  Just num1 * the function getSomeValue
// The same result expected as num1 is still 5 & the getSomeValue function still produces 2, therefore result expected to be 10.

// Correct, log showed 10