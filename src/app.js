/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["The", "Her", "His", "Our"];
  let adj = [
    "-itty-bitty",
    "-fat",
    "-funky",
    "-sickly",
    "-manic",
    "-curious",
    "-hungry"
  ];
  let noun = ["-teddybear", "-vampire", "-cat", "-toenail"];
  let domain = [".com", ".net", ".edu"];

  let concatenatedString = "";

  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < domain.length; d++) {
          concatenatedString +=
            pronoun[a] + adj[b] + noun[c] + domain[d] + "<br>";
        }
      }
    }
  }
  console.log(concatenatedString);

  const button1 = document.getElementById("button");
  const buttonResult = document.getElementById("buttonResult");

  document.getElementById("button").onclick = () => {
    buttonResult.innerHTML = concatenatedString;
  };
  return concatenatedString;
};
