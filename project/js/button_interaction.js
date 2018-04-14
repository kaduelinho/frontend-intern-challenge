function createButtonInteraction(){
    var foundSubmit = document.getElementById("btnSubmit");
    var foundInput = document.getElementById("urlInput");
    var foundReset = document.getElementById("btnReset");
    var foundAlert = document.getElementById("copyAlert");
    foundSubmit.onclick  = function(){
        changeButton(foundSubmit, foundInput, foundReset, foundAlert);
    } 
    foundReset.onclick = function(){
        resetPage(foundSubmit, foundInput, foundReset);
    } 
}        
