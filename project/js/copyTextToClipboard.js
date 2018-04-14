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