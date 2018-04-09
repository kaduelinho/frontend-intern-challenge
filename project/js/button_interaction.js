
function createButtonInteraction(){
    var teste = document.getElementById("btn_submit");
    teste.onclick  = change_button;
    

    function change_button(){

        var teste2 = document.getElementById("url_input");
            teste2.value = "ALA"
            teste.value = "COPIAR";
            console.log(makeid());
            setTimeout(function() {
                
            }, 1000);
            
    }
    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
      }
      
      
}