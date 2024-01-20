/* // button asking name
                          const button = document.getElementById("clickme");

                          function greet() {
                            const name = prompt("What is your name, cutie?");
                            const greeting = document.querySelector("#greeting");
                            greeting.textContent = `Hello ${name}, nice to see you!`;
                          }

                          button.addEventListener("click", greet);
                          */

//percentage calculator

/*
                          const song = "Fight the Youth";
                          const score = Number(prompt("How would score this?"));
                          const highestScore = 10;
                          const output = `I like the song ${song}. I gave it a score of ${
                            (score / highestScore) * 100
                          }%.`;
                          console.log(output);
                          */

//Extracting String Characters

/*
                        let text = "hello world";
                          let char = text.charAt(2);

                          char = text.charCodeAt(0);

                          char = text.at(6);

                          char = text[7];
                          console.log(char);
                          */

/*
                          let text = "Apple, banana, kiwi";
                          let part = text.slice(7, 13);

                          newText = part;

                          console.log(newText);
                          */

//Wheather condition forcast
const condition = document.querySelector("select");
const forcast = document.querySelector("#forcast");

const sunnyForcast =
  "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";

const rainyForcast =
  "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";

const snowyFrocast =
  "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";

const overcastFrocast =
  "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";

condition.addEventListener("change", currentWeather);

function currentWeather() {
  const choice = condition.value;
  if (choice === "sunny") {
    forcast.textContent = sunnyForcast;
  } else if (choice === "rainy") {
    forcast.textContent = rainyForcast;
  } else if (choice === "snowy") {
    forcast.textContent = snowyFrocast;
  } else if (choice === "overcast") {
    forcast.textContent = overcastFrocast;
  } else {
    forcast.textContent = "Select an option above to see forcast message";
  }
}
currentWeather();
// let age = prompt("age?", 18);

/*
                        let question = prompt("What is 'the official' name of JavaScript?");

                        if (question == "ECMAScript") {
                          alert("Right on!");
                        } else {
                          alert("You don't know? ECMAScript!");

                        }
                        */

/*
                        let answer = Number(
                          prompt(
                            "Enter in a number! This can be any kind, positive or negative"
                          )
                        );

                        if (answer > 0) {
                          alert(1);
                        } else if (answer < 0) {
                          alert(-1);
                        } else {
                          alert(0);
                        }
                        */
/* let a;
            let b;
            let result = a + b < 4 ? "Below" : "Over";
            */

/*
            let browser;

            if (browser == "Edge") {
              alert("You've got the Edge!");
            } else if (
              browser == "Chrome" ||
              browser == "Firefox" ||
              browser == "Safari" ||
              browser == "Opera"
            ) {
              alert("Okay we support these browsers too");
            } else {
              alert("We hope that this page looks ok!");
            }
            */

/*
            let a = +prompt("a?", " ");

            switch (a) {
              case 0:
                alert(0);
                break;

              case 1:
                alert(1);
                break;

              case 2:
              case 3:
                alert("2, 3");
                break;
            }
            */

/*
            let userChoice = +prompt("Give me a number - any number!");

            function add7() {
              return userChoice + 7;
            }

            console.log(add7());
            */

/*
            function multiply(num1, num2) {
              return (product = num1 * num2);
            }

            console.log(multiply(3, 5));
            */

// Making first letter from string to uppercase
/*
            let str = prompt("Give me a few lines").toLowerCase();

            function capitalize() {
              return str.charAt(0).toUpperCase() + str.slice(1);
            }

            console.log(capitalize());
            */

/*
            let str = prompt("Give me a few lines").toLowerCase();

            function lastLetter() {
              return str.charAt(str.length - 1);
            }

            console.log(lastLetter());
            */

/*
          let answer = parseInt(
            prompt("Please enter the number you would like to FizzBuzz up to: ")
          );

          for (let i = 1; i <= answer; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
              console.log("FizzBuzz");
            } else if (i % 3 === 0) {
              console.log("Fizz");
            } else if (i % 5 === 0) {
              console.log("Buzz");
            } else {
              console.log(i);
            }
          }
          */
const spinButton = document.getElementById("spinButton");
const spinResult = document.getElementById("spinResult");

function fizzGame() {
  const ranNum = Math.floor(Math.random() * 100) + 1;
  if (ranNum % 3 === 0 && ranNum % 5 === 0) {
    spinResult.textContent = `${ranNum} - FizzBuzz!`;
  } else if (ranNum % 3 === 0) {
    spinResult.textContent = `${ranNum} - Fizz`;
  } else if (ranNum % 5 === 0) {
    spinResult.textContent = `${ranNum} - Buzz`;
  } else {
    spinResult.textContent = `${ranNum} - Try again`;
  }
}

spinButton.addEventListener("click", fizzGame);
