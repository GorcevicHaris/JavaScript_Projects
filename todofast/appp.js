const something1 = document.querySelector('#inputText')
const something2 = document.querySelector('.button1')
const something3 = document.querySelector('.MainInput')

something2.addEventListener('click',(ev)=>{
    ev.preventDefault()
    console.log(something1.value)
    let div1 = document.createElement('div')
    div1.classList.add('div1')
    something3.append(div1)
    div1.textContent = something1.value
    let removerButton = document.createElement('button')
    removerButton.classList.add('button2')
    div1.append(removerButton)
    removerButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    removerButton.addEventListener('click',()=>{
        div1.remove()
    })
    something1.value = ''
})