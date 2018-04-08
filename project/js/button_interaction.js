function createButtonInteraction(){
    var teste = document.getElementById("btn_submit");
    teste.onclick  = change_button;

    function change_button(){
        teste.value= "COPIAR";
    }
}