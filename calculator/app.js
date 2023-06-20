
// for (i = 0; i < buttons.length; i++) {

    
//     buttons[i].addEventListener('click',(ev)=>{
//         inputText.value+= ev.target.innerText
        
//     })
// }
// input = "14*4"

// newinp = input.split("*")
// console.log(newinp[0]*newinp[1]);

const buttons = document.querySelectorAll('.button')
const div1 = document.querySelector('.calculator')
const inputText = document.querySelector('#display')
const clear = document.querySelector('#clear')
let equal = document.querySelector('#equal')

clear.addEventListener('click',(ev)=>{
    ev.preventDefault()
    inputText.value = ''
})

buttons.forEach((el) => {
    el.addEventListener('click', () => {
        inputText.value += el.value
    // const vrijednost = el.value;
    // inputText.value += vrijednost;
    });
  });

  
equal.addEventListener('click', (ev) => {
    ev.preventDefault()
    inputText.value = eval(inputText.value)

});
