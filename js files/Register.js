firstName = document.getElementById('firstName')
lastName = document.getElementById('lastName')
emailAddress = document.getElementById('emailAddress')
password = document.getElementById('password')
Age = document.getElementById('Age')
btn = document.querySelector('.btn')




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

firstName.addEventListener('keyup',function () {
    let regex = /^[A-Z][a-z]{2,9}$/
    Ful=document.getElementById('Ful')
    validation(regex,firstName,Ful)
})

lastName.addEventListener('keyup',function () {
    let regex = /^[A-Z][a-z]{2,9}$/
    Lul=document.getElementById('Lul')
    validation(regex,lastName,Lul)
})

emailAddress.addEventListener('keyup',function () {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    Eul=document.getElementById('Eul')
    validation(regex,emailAddress,Eul)
})


password.addEventListener('keyup',function () {
    let regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/
    Pul=document.getElementById('Pul')
    validation(regex,password,Pul)
})



Age.addEventListener('keyup',function () {
    let regex = /^(2[0-9]|[3-7][0-9]|80)$/
    Aul=document.getElementById('Aul')
    validation(regex,Age,Aul)
})


btn.addEventListener('click' , function(){
  window.location.href = "../html files/login.html";
})