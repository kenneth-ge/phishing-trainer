let iframe = document.getElementById('iframe')
let choicesDiv = document.getElementById("choices")
function newscam(){
    iframe.src = '/random'
    // choicesDiv.innerHTML = ""
    choicesDiv.style.display = "block"
    document.getElementById('correct').innerHTML = "";
    document.getElementById('reasons').innerHTML = ""
    document.getElementById('overall').innerHTML = ""
}

var overall, reasons, good

iframe.onload = () => {//also, i added window.reasons, window.overall, and window.good to all of them
    overall = iframe.contentWindow.overall
    reasons = iframe.contentWindow.reasons
    good = iframe.contentWindow.good
    
}//what does overall do ok
//that's the overall assessment
//e.g. this is a very common type of scam

var correct

function yes(){
    correct = !good
    explanation()
}

function no(){
    correct = good
    explanation()
}

function explanation(){
    yesorno = ""
    if(good)
        yesorno = "not "
    if(correct)
        document.getElementById('correct').innerHTML = `Correct: This is ${yesorno}a scam`
    else
        document.getElementById('correct').innerHTML = `Incorrect: This is ${yesorno}a scam`
    
    document.getElementById('overall').innerHTML = overall

    let reasonsDiv = document.getElementById('reasons')
    reasonsDiv.innerHTML = ""

    for(var x of reasons){
        let item = document.createElement('li')
        item.innerHTML = x

        reasonsDiv.appendChild(item)
    }

}