// Shortened url generator
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return "http://chr.dc/" + text;
}

function hashCode(str){
var hash = 0;
if (str.length == 0) return hash;
for (i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash; // Convert to 32bit integer
}
console.log(hash);
return  "http://chr.dc/" + hash;
}

    