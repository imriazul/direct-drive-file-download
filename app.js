window.onload = setup;
function setup() {
    document.getElementById('inputUrl').addEventListener('input', generateLink)
    document.getElementById("output").addEventListener("click", copy);
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

function generateLink() {
    const showLink = document.getElementById('direct-link')
    const buttonGen = document.getElementById("button")
    const urlField = document.getElementById("inputUrl");
    var linkId = urlField.value;
    var idExtractor = /\/d\/(.+?)(?:\/|#|\?|$)/;
    var result = idExtractor.exec(linkId);
    // var outputBox = document.getElementById("output");

    // I am testing new things
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
        // outputBox.value = "";
        setStatus("⚠⚠ Invalid URL ⚠⚠", true);
        // outputBox.disabled = true;
        buttonGen.disabled = true;
        urlField.style.borderColor = "red"
        return;
    }
    else {
        urlField.style.borderColor = "green";
        buttonGen.disabled = false;
    }
    var finalLink = "https://drive.google.com/u/0/uc?id=" + result[1] + "&export=download&confirm=t&uuid=" + ren1 + ("-") + ren2 + ("-") + ren3 + ("-") + ren4 + ("-") + ren5;
    // outputBox.disabled = false;
    // outputBox.value = finalLink;
    showLink.innerText = finalLink;
    // setStatus("Success! Click the output link to copy it to your clipboard");
}

// function copy() {
//     if (this.disabled) {
//         return;
//     }

//     this.select();
//     var copied = document.execCommand("copy");

//     if (copied) {
//         setStatus("Link copied to clipboard!");
//     } else {
//         setStatus("Couldn't copy link to clipboard. Please copy it manually.", true);
//     }
// }

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event