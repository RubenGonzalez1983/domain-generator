/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generateDomain() {
    let pronoun = ["my", "your", "our"];
    let adj = ["invincible", "flying", "holographic"];
    let noun = ["wizard", "possum", "joggler"];
    let extension = [".com", ".io", ".net"];

    let ul = document.getElementById("list-of-domains");

    let myArray = [];

    for (let p = 0; p < pronoun.length; p++) {
      for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
          for (let e = 0; e < extension.length; e++) {
            myArray.push(pronoun[p] + adj[a] + noun[n] + extension[e]);

            let li = document.createElement("LI");
            li.innerHTML = pronoun[p] + adj[a] + noun[n] + extension[e];
            ul.appendChild(li);
          }
        }
      }
    }
    return myArray;
  }
  generateDomain();
  //document.getElementById("list-of-domains").innerHTML = generateDomain();
};
