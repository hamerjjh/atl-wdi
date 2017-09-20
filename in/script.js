window.onload = function() {
    // Button one, 
    const firstButton = document.querySelector("button");
    // when clicked, 
    // should trigger an alert saying "you have clicked button one"
    firstButton.addEventListener("click", function(){
      alert("you have clicked button one")
    });
  
    const info = document.createElement("div")
    info.id = "information"
    document.body.appendChild(info);
  
    // Button two, 
    const secondButton = document.getElementById("button2")
    // when clicked, 
    // should trigger a function 
    secondButton.addEventListener("click", function(){
      // that creates a <p> 
      const newParagraph = document.createElement("p");
      // with the following string:
        // A click event is essentially tying a function (as a callback) to an element 
        // and specifying what action needs to happen to trigger or call/invoke that 
        // function (callback).
      const newContent = document.createTextNode("A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).");
      newParagraph.appendChild(newContent);
      // and appends it to the DOM in the <div id="information">.
      document.querySelector("#information").appendChild(newParagraph);
    })
    
    
    // Button three, 
    const button3 = document.querySelector("#button3");
  
    button3.addEventListener("click", function(){
      // when clicked, 
      // should remove the p tag from the DOM
      const info = document.querySelector("#information")
      const child = info.firstChild;
  
      info.removeChild(child);
    })
    
  }
  