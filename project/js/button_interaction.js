
function createButtonInteraction(){
    var foundSubmit = document.getElementById("btnSubmit");
    var foundInput = document.getElementById("urlInput");
    var foundReset = document.getElementById("btnReset");
    foundSubmit.onclick  = changeButton;
    foundReset.onclick = resetPage;
    //Back to initial setup
    function resetPage(){
        foundSubmit.value = "ENCURTAR";
        foundReset.classList.remove("pressReset");
        foundSubmit.classList.remove("acendeSubmit");
        foundSubmit.classList.remove("apagaSubmit");
        foundInput.classList.remove("apagaInput");
        foundInput.classList.remove("acendeInput");
    }    


    function changeButton(){
        // Check value of submit button and if results is true, does the animation and swap url for shortened url 
        if (foundSubmit.value == "ENCURTAR"){
            if (foundInput.value != ""){
                foundReset.disabled = false;
                foundSubmit.classList.add("apagaSubmit");
                foundInput.classList.add("apagaInput");
                setTimeout(function() {
                    foundSubmit.classList.add("acendeSubmit");
                    foundSubmit.value = "COPIAR";
                    foundReset.classList.add("pressReset");
                    foundInput.classList.add("acendeInput");
                    foundInput.value = makeid();
                    
                }, 700);          
            }
        }
        // If results is false, copy the shortened url
        else{
            foundInput.select();
            document.execCommand("Copy"); 
        }  
    }
    // Shortened url generator
    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return "http://chr.dc/" + text;
      }      
}