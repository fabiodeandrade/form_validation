let email = document.querySelector('#email')
let senha = document.querySelector('#senha')
let form = document.querySelector('#form')
let erroElement = document.querySelector('#error')

email.addEventListener('focus', ()=> {
    email.style.borderColor = "#4A5F6A";
});

email.addEventListener('blur', ()=> {
    email.style.borderColor = "#ccc";
});


senha.addEventListener('focus', ()=> {
    senha.style.borderColor = "#4A5F6A";
});

senha.addEventListener('blur', ()=> {
    senha.style.borderColor = "#ccc";
});



form.addEventListener('submit', (e) => {
    let messages = []
    if (email.value === '' || email.value == null ) {
       messages.push('Você precisa inserir um e-mail válido') 
    }

    if (senha.value.length <= 6) {
        messages.push('Sua senha precisa ter mais de 6 caracteres')
    }

    if (senha.value === 'senha') {
        messages.push('Sua senha não pode ser "senha"')
    }



    if (messages.length > 0) {
        e.preventDefault();
        erroElement.innerText = messages.join(' e ')

    }

    
    
    
})