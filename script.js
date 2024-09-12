const age = prompt(`Enter your age`)
// switch(age) {
//     case age <= 12:
//         console.log(`The price of your ticket is 10$`)
//       break;
//     case age > 12 && age <= 17:
//         console.log(`The price of your ticket is 15$`)
//       break;
//     case age >= 18:
//         console.log(`The price of your ticket is 20$`)
//         break;
//     default:
//       console.log(`Enter your real age`)
//   }

if(age <= 12 ){
    console.log(`The price of your ticket is 10$`)
}
else if (age > 12 && age <= 17){
    console.log(`The price of your ticket is 15$`)
}
else {
    console.log(`The price of your ticket is 20$`)
}



function fibonacci(nbr) {
    if(nbr < 2){
      return nbr;
    }
  
    return fibonacci(nbr - 1) + fibonacci(nbr - 2);
  }
  
  const n = prompt(`Veuillez saisir un nombre:`)
  console.log(fibonacci(n));