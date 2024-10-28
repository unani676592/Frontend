const keys = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3",
    "4", "5", "6", "7", "8", "9"
  ];
  
  const morseCode = {
    a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.",
    h: "....", i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.",
    o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-", u: "..-",
    v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--..", 0: "-----",
    1: ".----", 2: "..---", 3: "...--", 4: "....-", 5: ".....", 6: "-....",
    7: "--...", 8: "---..", 9: "----."
  };
  
  const keyboard = document.getElementById("keyboard");
  const lightbox = document.getElementById("light-box");
  const morseText = document.getElementsByClassName("morse-text")[0];
  
  // Create buttons for each key and add click events
  keys.forEach((key, index) => {
    // Insert line break before the first number key
    if (key === "0") {
      keyboard.appendChild(document.createElement("br"));
    }
  
    const button = document.createElement("button");
    button.className = "key";
    button.textContent = key;
  
    
    button.addEventListener("click", () => {
      const morse = morseCode[key]; 
      morseText.textContent = morse; 
      const morseArray = morse.split(""); 
  
      
      morseArray.forEach((symbol, index) => {
        setTimeout(() => {
          
          if (symbol === ".") {
            lightbox.style.animation = "dot 1s ease";
          } else if (symbol === "-") {
            lightbox.style.animation = "line 1s ease";
          }
  
          
          lightbox.addEventListener("animationend", () => {
            lightbox.style.animation = "none";
          });
        }, index * 1100); 
      });
    });
  
    
    keyboard.appendChild(button);
  });
  