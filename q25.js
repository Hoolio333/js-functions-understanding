function myFunction(a) {
  let b = 20
  
  console.log("a:", a)
  console.log("b:", b)
  console.log("c:", c)
}

let a = 1
let b = 2
let c = 3

myFunction(100)
console.log()


// I predict console log to show:

// a: 100 (as line 13 shows so it get preference)
// b: 20  (as shown with the let line 2)
// c: 3 (as shown line 11)

// I was correct 