function getUrls() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var resposta = this.responseText;
            var lista = JSON.parse(resposta);
            fillRanking(lista);
        }
    };
    xhttp.open("GET", "/Assets/urls.json", true);
    xhttp.send();
}

function fillRanking(list){
    var rankingElement = document.getElementById("top_5");
    var el = list[0]; // TODO: use whole list
    rankingElement.innerHTML = '<a href="http://globo.com"">'+ el.shortUrl +'</a>';    
}