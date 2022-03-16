function getSomeValue() {
  return 2
}

function myFunction(num1) {
  return getSomeValue() * getSomeValue()
}

const result = myFunction(5)
console.log(result)

// Despite num1 showing the value 5.  I expect result to show 4 as the return is getSomeValue (2) * getSomeValue (2) = 4

// Correct, the console.log(result) shows 4.