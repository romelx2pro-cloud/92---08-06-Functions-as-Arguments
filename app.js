// // This function accepts another function as an argument
// function callThreeTimes(f) {
//   //And calls it 3 times:
//   f();
//   f();
//   f();
// }

// function cry() {
//   console.log("BOO HOO I'M SO SAD!");
// }

// function rage() {
//   console.log("I HATE EVERYTHING!");
// }

// function repeatNTimes(action, num) {
//   // call action (a function) num number of times
//   for (let i = 0; i < num; i++) {
//     action();
//   }
// }

// repeatNTimes(rage, 13);

// // Accepts 2 functions as arguments
// // Randomly selects 1 to execute
// function pickOne(f1, f2) {
//   let rand = Math.random();
//   if (rand < 0.5) {
//     f1();
//   } else {
//     f2();
//   }
// }
function callThreeTimes(params) {
  params();
  params();
  params();
}
function a() {
  console.log("b");
}
function rage() {
  console.log("hate");
}
// callThreeTimes(a);

function repN(act, n) {
  for (let index = 0; index < n; index++) {
    act();
  }
}
repN(a, 2);
function pickOne(f1, f2) {
  let r = Math.random();
  console.log(r);
  if (r > 0.5) {
    f1();
  } else {
    f2();
  }
}
pickOne(rage, a);
