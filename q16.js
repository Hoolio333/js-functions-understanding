function myFunction(num1) {
  if(false) {
    return -100
  }

  return num1 * 10
}

const result = myFunction(5)
console.log(result)

// The function (myFunction) is returning num1 (5) * 10, therefore I expect the result of the console.log to be 50

// Correct - console.log(result) was 50