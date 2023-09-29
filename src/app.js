/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function excuseGenerator() {
    let who = ["The dog", "The kraken", "Jack Sparrow", "Sponge Bob"];
    let action = ["ate", "peed", "crushed", "broke", "took"];
    let what = ["my homework", "the keys", "the car", "my bike"];
    let when = [
      "today",
      "last week",
      "right now",
      "last month",
      "one hour ago"
    ];

    let whoRandom = Math.floor(Math.random() * who.length);
    let actionRandom = Math.floor(Math.random() * action.length);
    let whatRandom = Math.floor(Math.random() * what.length);
    let whenRandom = Math.floor(Math.random() * when.length);

    return (
      who[whoRandom] +
      " " +
      action[actionRandom] +
      " " +
      what[whatRandom] +
      " " +
      when[whenRandom]
    );
  }
  let excuse = excuseGenerator();
  document.getElementById("excuse").innerHTML = excuse;

  console.log(excuse);
};
