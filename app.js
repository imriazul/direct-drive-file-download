window.onload = setup;
function setup() {
    document.getElementById('inputUrl').addEventListener('input', generateLink);
}

function setStatus(status, error = false) {
    var helpText = document.getElementById("help-text");
    helpText.innerText = status;
    if (error) {
        helpText.style.color = "darkred";
    } else {
        helpText.style.color = "#227300";
    }
}
let finalDownLink = '';
function generateLink() {
    const showLink = document.getElementById('direct-link')
    const buttonGen = document.getElementById("button")
    const urlField = document.getElementById("inputUrl");
    var linkId = urlField.value;
    var idExtractor = /\/d\/(.+?)(?:\/|#|\?|$)/;
    var result = idExtractor.exec(linkId);

    // link extention generateing
    function makeid(rendomlenngth) {
        var linkText = '';
        var characters = '345abcdefghjk0123456789mnopqrstuvwxyz123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < rendomlenngth; i++) {
            linkText += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return linkText;
    }
    const ren1 = makeid(8);
    const ren2 = makeid(4);
    const ren3 = makeid(4);
    const ren4 = makeid(4);
    const ren5 = makeid(12);
    if (!result) {
        setStatus("⚠⚠ Invalid URL ⚠⚠", true);
        buttonGen.disabled = true;
        urlField.style.borderColor = "red"
        return;
    }
    else {
        setStatus("", false);
        urlField.style.borderColor = "green";
        buttonGen.disabled = false;
    }
    const finalLink = "https://drive.google.com/u/0/uc?id=" + result[1] + "&export=download&confirm=t&uuid=" + ren1 + ("-") + ren2 + ("-") + ren3 + ("-") + ren4 + ("-") + ren5;

    finalDownLink = finalLink;
    showLink.innerText = finalLink;
}

function copyFunction(){
    window.open("https://facebook.com", '_blank').focus();
    console.log("copy btn clicked")
}
function copyFunction() {
    const modalTitle = document.getElementById('link-dialogBoxLabel');
    navigator.clipboard.writeText(finalDownLink);
    modalTitle.style.color = 'green'
    modalTitle.innerText = 'Link Copied Success'
    
  }

function downloadFunction(){
    window.open(finalDownLink, "_blank");
    console.log('download button clicked')
}