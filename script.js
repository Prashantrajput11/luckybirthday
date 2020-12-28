let userInput = document.querySelector(".user-input");
let options = document.querySelector(".options");
let btn = document.querySelector(".btn");
let container = document.querySelector(".output-container");
let reset = document.querySelector(".reset");

let output = document.querySelector(".output");

//function for reset

reset.addEventListener("click", function () {
  userInput.value = " ";
  options.value = " ";
  document.body.style.background = "white";
  container.style.display = "none";
});

btn.addEventListener("click", function () {
  console.log(userInput.value);

  //if usr enter nothing
  // if(userLuckyNumber ||)

  let sum = 0;
  let num = parseInt(userInput.value);
  console.log(typeof num);
  while (!num == 0) {
    let lastDigit = num % 10;
    sum = sum + lastDigit;
    num = Math.floor(num / 10);
  }
  console.log(" the sum is " + sum);
  //   let num = parseInt(e.target.value);
  if (sum % userLuckyNumber == 0) {
    output.innerText = "woah ! your birthday is lucky ❣";
    container.style.display = "block";
    output.style.color = "black";
    document.body.style.background = "yellow";
    // console.log("woah your bday is lucky");
  } else {
    output.innerText = "You are beautiful ! we got a gift for you!  🎁";
    document.body.style.background = "black";
    container.style.display = "block";
    output.style.color = "white";
    // console.log("never mind!");
  }
});
let userLuckyNumber;
options.addEventListener("input", function (e) {
  userLuckyNumber = e.target.value;
});

//get sum of digits
