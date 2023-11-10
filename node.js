/*es. 1*/


/*
function reverseWord(string) {
    let slpitWord = string.split("");
    let reverseString = slpitWord.reverse();
    let joinReverseString = reverseString.join("");
    return joinReverseString;
  }
  
  window.addEventListener("load", () => {
    const button = document.getElementById("reverse-button");
  
    button.addEventListener("click", () => {
      const input = document.getElementById("input-user");
      const reverse = reverseWord(input.value);
      const showResult = document.getElementById("result");
     showResult.innerHTML = `Il contrario di ${input.value} è ${reverse}`;
    });
  });
*/


/*
function Inverti (UserText) {
    let splitString = UserText.split("");
    let reverseString = splitString.reverse();
    let joinReverseString = reverseString.join("");
    return joinReverseString; 
}
console.log (Inverti)

window.addEventListener("load", () => {
    const button = document.getElementById("analysis");
  
    button.addEventListener("click", () => {
      const input = document.getElementById("input-user");
      const reverse = reverseWord(input.value);
      const showResult = document.getElementById("result");
     showResult.innerHTML = `Il contrario di ${input.value} è ${reverse}`;
    });
  });
  */


  window.addEventListener ('load', () =>{
    const button = document.getElementById('bottoneInvio');

    button.addEventListener('click', () =>{
        const input = document.getElementById('TestoUtente');
        const p = document.createElement ('valoreUtente');
        p.innerHTML = `${input.value}`
    })

  })