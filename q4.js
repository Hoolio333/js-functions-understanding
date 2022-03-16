function myFunction(num) {
  return num-1
}

let num = 10
let add = 3
add = myFunction(add)
console.log(add)
add = myFunction(add)
console.log(add)

// I wrongly predicted the console log to show 12 & 14

// I misread that it was add = myFunction(add) & num isn't mentioned. 

// Now I see num gets changed to add - therefore the starting number is 3 then 2.  Hence the answer 2 then 1