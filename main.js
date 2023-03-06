const userText = document.getElementById("inputtext");
const speechBtn = document.getElementById("speech");

speechBtn.addEventListener('click' , function(){
    speechText = userText.value;

    let speechData = new SpeechSynthesisUtterance();

    speechData.text=speechText;
    speechSynthesis.speak(speechData);
});