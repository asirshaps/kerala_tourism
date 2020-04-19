let email = document.getElementById("email");
let error = document.getElementById("error");
let contact = document.getElementById("phonenumber");
let errorphone = document.getElementById("errorphonenumber");
let password = document.getElementById("pwd2");
let errorpassword = document.getElementById("errorpasswordtype");

    let emailexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let phoneexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let passwordexp= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;

function validate(){
    if(emailexp.test(email.value)){
        error.innerHTML = "valid email-id";
        error.style.color = "green";
        return true;
    }
    else{
        error.innerHTML = "invalid email-id !";
        error.style.color = "red";
        return false;
    }
   
}

function phoneNumber(){
     if(!(phoneexp.test(contact.value))){
        errorphone.innerHTML = "invalid number !";
        errorphone.style.color = "red";
        return false;
    }
    else{
        errorphone.innerHTML = "valid number";
        errorphone.style.color = "green";
        return true; 
    }
  
  }

function Password(){ 
if(!(passwordexp.test(password.value))){ 

    errorpassword.innerHTML = "invalid password !";
    errorpassword.style.color = "red";
    return false;
}
else{
errorpassword.innerHTML = "valid password";
errorpassword.style.color = "green";
return true; 
}
} 
