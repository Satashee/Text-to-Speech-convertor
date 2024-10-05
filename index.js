let speech = new SpeechSynthesisUtterance();

let voices=[];
letvoiceSelect=document.querySelector("select");



document.querySelector("button").addEventListener("click",() =>{
    speech.text= document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

