document.querySelector('.popUp').style.display = 'flex';

document.querySelector('.Lanjut').addEventListener('click', function(){
    document.querySelector('.popUp').style.display = 'none';
});

document.querySelector('.button').addEventListener('click', function(){
    

    let EmailAddress = document.forms["SignIn"]["EmailAddress"].value;
    let Password = document.forms["SignIn"]["Password"].value;

    if (EmailAddress == "assalamualaikum@gmail.com" && Password == "bismillah") {
        document.querySelector('.popUpCorrect').style.display= 'flex';
    } 
    
    else {
        document.querySelector('.popUpWrong').style.display= 'flex';
    }

})

let formLogin = document.getElementById("formLogin")
formLogin.addEventListener("click", function(event){
    event.preventDefault()
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.popUpCorrect').style.display = 'none';
});

document.querySelector('.close1').addEventListener('click', function(){
    document.querySelector('.popUpWrong').style.display = 'none';
});

