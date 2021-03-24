 function learn() {
    let name = prompt("What is your name?")
    let response = prompt(name + ", are you anxious?")

     if (response === "yes" || response === "maybe") {
        alert("I'm sorry, " + name + ". Know that you're not alone.");
     } else { 
         alert("Continue to stay calm friend.");
        }
    }
    let learnMore = document.querySelector(".learnMore");
    learnMore.addEventListener("click", learn)