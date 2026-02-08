emailAddress2 = document.getElementById('emailAddress2')
password2 = document.getElementById('password2')
btn=document.querySelector('.btn')


function validation(regex , name , ul) {
    if (regex.test(name.value)) {
        name.classList.add('is-valid')
        name.classList.remove('is-invalid')
        ul.classList.add('d-none')
    }else{
         name.classList.add('is-invalid')
         name.classList.remove('is-valid')
          ul.classList.remove('d-none')
    }
}

password2.addEventListener('keyup',function () {
    let regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/
    P2ul=document.getElementById('P2ul')
    validation(regex,password2,P2ul)
})

emailAddress2.addEventListener('keyup',function () {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    E2ul=document.getElementById('E2ul')
    validation(regex,emailAddress2,E2ul)
})


btn.addEventListener('click' , function(){
  window.location.href = "Home.html";
})