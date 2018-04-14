//Back to initial setup
    function resetPage(buttonSubmit, urlnput, buttonReset){
        buttonSubmit.value = "ENCURTAR";
        buttonReset.classList.remove("pressReset","pointer");
        buttonSubmit.classList.remove("showSubmit","eraseSubmit");
        urlnput.classList.remove("eraseInput","showInput");
        setTimeout(function(){
            buttonReset.disabled = true;
        }, 1);
    }