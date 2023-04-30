function startTimerOneSec() {
  console.log("started");

  for (var i = 1; i <= 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log("ended");
}
// startTimerOneSec();

// This code is still not synchronous, since, 'ended' is printed before the setTimeout execution
function startTimerOneSec2() {
  console.log("started");
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log("ended");
}
// startTimerOneSec2();

// Make the above code Synchronous using Promises
function delay(i) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(i);
    }, i * 1000);
  });
}

async function startTimerOneSec3() {
  console.log("started");
  for (let i = 1; i <= 10; i++) {
    const result = await delay(i);
    console.log(result);
  }
  console.log("ended");
}
startTimerOneSec3();
