function myFunction(num1, num2) {
  const result = num1+num2
  return 100
}

const result = myFunction(5, 2)

console.log(result)

// I think it will be 100 as despite myFunction saying the result should be num1 + num2 the return is 100 regardless

// I was correct, log said 100 