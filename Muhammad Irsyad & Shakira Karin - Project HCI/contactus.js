const form = document.getElementById('form');
function validation(){
    
    const name = document.getElementById('name');
    const nameValue = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if(!validationName(nameValue, name, nameError)){
        return;
    }

    const email = document.getElementById('email');
    const emailValue = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    if(!validationEmail(emailValue, email, emailError)){
        return;
    }

    const massage = document.getElementById('massage');
    const massageValue = document.getElementById('massage').value;
    const massageError = document.getElementById('massageError');
    if(!validationMassage(massageValue, massage, massageError)){
        return;
    }
    
    return true;
}

function validationName(nameValue, name, nameError){
    if(nameValue == ""){
        name.style.border = "1px solid red";
        nameError.style.display = "block";

        return false;
    }
}

function validationEmail(emailValue, email, emailError){
    if(emailValue == ""){
        email.style.border = "1px solid red";
        emailError.style.display = "block";

        return false;
    }
}

function validationMassage(massageValue, massage, massageError){
    if(massageValue == ""){
        massage.style.border = "1px solid red";
        massageError.style.display = "block";
        
        return false;
    }
}
