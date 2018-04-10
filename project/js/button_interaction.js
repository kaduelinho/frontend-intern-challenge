
function createButtonInteraction(){
    var foundSubmit = document.getElementById("btnSubmit");
    var foundInput = document.getElementById("urlInput");
    var foundReset = document.getElementById("btnReset");
    var foundAlert = document.getElementById("copyAlert");
    foundSubmit.onclick  = changeButton;
    foundReset.onclick = resetPage;
    //Back to initial setup
    function resetPage(){
        foundSubmit.value = "ENCURTAR";
        foundReset.classList.remove("pressReset","pointer");
        foundSubmit.classList.remove("showSubmit","eraseSubmit");
        foundInput.classList.remove("eraseInput","showInput");
        setTimeout(function(){
            foundReset.disabled = true;
        }, 1);
    }    
    function changeButton(){
        // Check value of submit button and if results is true, does the animation and swap url for shortened url 
        if (foundSubmit.value == "ENCURTAR"){
            if (foundInput.value != ""){
                foundReset.disabled = false;
                foundReset.classList.add("pointer");
                foundSubmit.classList.add("eraseSubmit");
                foundInput.classList.add("eraseInput");
                foundInput.classList.remove("textInput:focus");
                setTimeout(function() {
                    foundSubmit.classList.add("showSubmit");
                    foundSubmit.value = "COPIAR";
                    foundReset.classList.add("pressReset");
                    foundInput.classList.add("showInput");
                    foundInput.value = makeid();
                    
                }, 300);          
            }
        }
        // If results is false, copy the shortened url
        else{
            copyTextToClipboard(foundInput.value);
            //Alert user about link copied
            foundAlert.classList.remove("none");
            foundAlert.classList.add("alertUser");
            // Wait 1 second to starting to disappear the alert
            setTimeout(function(){
                foundAlert.classList.add("eraseAlert");
            },1000);
            //After animation time(5s), back to initial state
            setTimeout(function(){
                foundAlert.classList.remove("eraseAlert","alertUser");
                foundAlert.classList.add("none");
            },6000)
        }  
    }
    // Copy the shortened URL for clipboard without displaying text area
    function copyTextToClipboard(text){
        var textArea = document.createElement("textarea");
        textArea.style.position='fixed';
        textArea.style.top=0;
        textArea.style.left=0;
        textArea.style.width = '2em';
        textArea.style.height = '2em'
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
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