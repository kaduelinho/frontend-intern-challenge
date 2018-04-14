function changeButton(submitButton, urlInput, resetButton, alertUser){
    // Check value of submit button and if results is true, does the animation and swap url for shortened url 
    if ((urlInput.value) && submitButton.value == "ENCURTAR"){
        shortenUrl(submitButton, urlInput, resetButton, alertUser);         
        }
    else{
        copyUrl(alertUser, urlInput);
    }
}

function shortenUrl(submitButton, urlInput, resetButton, alertUser){
    resetButton.disabled = false;
    resetButton.classList.add("pointer");
    submitButton.classList.add("eraseSubmit");
    urlInput.classList.add("eraseInput");
    urlInput.classList.remove("textInput:focus");
    setTimeout(function() {
        submitButton.classList.add("showSubmit");
        submitButton.value = "COPIAR";
        resetButton.classList.add("pressReset");
        urlInput.classList.add("showInput");
        urlInput.value = hashCode(urlInput.value);
    }, 300); 
}

function copyUrl(alertUser, urlInput){
    copyTextToClipboard(urlInput.value);
    //Alert user about link copied
    alertUser.classList.remove("none");
    alertUser.classList.add("alertUser");
    // Wait 1 second to starting to disappear the alert
    setTimeout(function(){
        alertUser.classList.add("eraseAlert");
    },1000);
    //After animation time(5s), back to initial state
    setTimeout(function(){
        alertUser.classList.remove("eraseAlert","alertUser");
        alertUser.classList.add("none");
    },6000)
}
