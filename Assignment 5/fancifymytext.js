function increaseFontSize()
{
    document.getElementById("textArea").style.fontSize = "24pt";
}

function changeTextStyle()
{
    if (document.getElementById("FancyShmancy").checked)
    {
        document.getElementById("textArea").style.fontWeight = "bold";
        document.getElementById("textArea").style.color = "blue";
        document.getElementById("textArea").style.textDecoration = "underline";
        
    }
    else
    {
        document.getElementById("textArea").style.fontWeight = "normal";
        document.getElementById("textArea").style.color = "black";
        document.getElementById("textArea").style.textDecoration = "none";
    }
}

function clickedMoo()
{
    document.getElementById("textArea").value = document.getElementById("textArea").value.toUpperCase();
    
    let text = document.getElementById("textArea").value;
    let sentences = text.split(".");

    if (sentences.length == 1)
        return;

    sentences.pop();// I put this here because the last element in the array is just an empty string.

    for (let i = 0; i < sentences.length; i++)
    {
        let wordsInSentence = sentences[i].split(" ");

        wordsInSentence[wordsInSentence.length - 1] = wordsInSentence[wordsInSentence.length - 1] + "-Moo";
        sentences[i] = wordsInSentence.join(" ");
    }

    text = sentences.join(".");

    if (text != "")
    {
        text = text + "."// add a period to the last sentence
    }
    
    document.getElementById("textArea").value = text;
}





