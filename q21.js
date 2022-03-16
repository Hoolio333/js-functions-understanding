function myFunction(num1, num2) {
  const result = num1+num2
  return result
}

const result = myFunction(10, 20)
myFunction(100, 2)
console.log(result)

// I expect result to show 132 (10+20+100+2)

// I was wrong it is 30

// I now see that line 7 is after the result, therefore the result only does the 10 & 20, which myFunction calculates 