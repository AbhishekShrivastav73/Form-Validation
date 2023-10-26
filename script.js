function setError(id,error){
    //Sets error by the specifed Id
   let Element = document.getElementById(id);
   Element.innerHTML = error;
}
function clearError(){
    errors = document.getElementsByClassName('formError');
    for(let items of errors){
    items.innerHTML = '';
}
}

function validateForm(){
    let returnVal = true;
    clearError();

    let name = document.querySelector("#names").value;
    // console.log(name);
    // return false;

    if(name.length<5){
        setError('nameError',"Enter Full Name");
        setError('submitError','Fix Errors to Submit');
        console.log(name);
        returnVal =  false;
    };

    let phone = document.querySelector("#phnNum").value;
    if(phone.length!=10){
        setError('phoneError',"Number must contain 10 Digits");
        setError('submitError','Fix Errors to Submit');
        console.log(name);
        returnVal =  false;
    };

    let mail = document.querySelector("#mails").value;
    if(!mail.includes('@')){
        setError('mailError',"must contain @");
        setError('submitError','Fix Errors to Submit');
        console.log(mail);
        returnVal =  false;
    };

    let message = document.querySelector('#message').value;
    if(message.length<20){
        setError('msgError',"Required Lenght 20");
        setError('submitError','Fix Errors to Submit');
        console.log(message);
        returnVal =  false;
    };


    return returnVal;
}