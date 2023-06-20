// const inputText = document.getElementById("inputText")
// const addButton = document.getElementById("addButton")

// let vrednost = "";

// console.log(inputText)
// inputText.addEventListener("input", (e) => {
//   vrednost = e.target.value
// });

// addButton.addEventListener('click', (e) => {
//   e.preventDefault()
//   console.log(vrednost);
//   inputText.value = ''
// });


// const something1 = document.getElementById('inputText');
// const something2 = document.getElementById('addButton');

// something2.addEventListener("click", (ev) => {
//   ev.preventDefault();
//   console.log(something1.value);
//   something1.placeholder = 'Unesi početnu vrednost';

//   const inputContainer = document.querySelector('.inputContainer');
//   const div1 = document.createElement('div');
//   div1.classList.add('div1');
//   div1.textContent = something1.value;
//   inputContainer.append(div1);


//   buttonRemover = document.createElement('button')
//   buttonRemover.textContent = 'remover'
//   buttonRemover.classList.add('buttonRemover')
//   div1.append(buttonRemover)

//   buttonRemover.addEventListener('click',()=>{
//     div1.remove()
//     something1.value = ''
//   })

//   })


let something1 = document.getElementById('inputText');
let something2 = document.getElementById('addButton');

something2.addEventListener('click',(ev)=>{
  ev.preventDefault();
  console.log(something1.value);
  let inputContainer  = document.querySelector('.inputContainer');
  let div1 = document.createElement('div');
  div1.classList.add('div1');
  inputContainer.append(div1);
  div1.textContent = something1.value;

  let buttonRemover = document.createElement('button');
  buttonRemover.classList.add('buttonRemover');
  buttonRemover.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  div1.append(buttonRemover);

  buttonRemover.addEventListener('click',()=>{
    div1.remove();
  })
  something1.value = '';
})




















// })
// // let container = document.querySelector(".container")
// // let dads = document.createElement("div");
// // dads.style.height="100px";
// // dads.style.width="100px";
// dads.style.background="black";
// dads.innerHTML = "<h1>asdsadsadas</h1>"

// container.append(dads)

