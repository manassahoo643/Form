
function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();


    var name = document.forms['registrationForm']["fname"].value;
    if (name.length<4 || name.length>10){
        seterror("fname", "*Length of nameshould be in between 4-10 letter");
        returnval = false;
       
    }
    var email = document.forms['registrationForm']["femail"].value;
    if (email.length>30){
        seterror("email", "*Email length is too long");
        returnval = false;
    }
    var phone = document.forms['registrationForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    return returnval;
}

