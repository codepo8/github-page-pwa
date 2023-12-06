// Initialize new SpeechSynthesisUtterance object
window.speechSynthesis = window.speechSynthesis || window.webkitSpeechRecognition;
let tts = new SpeechSynthesisUtterance();
// Set Speech Language
tts.lang = "en";
let voices = []; // global array of available voices
// Set voice to the first English one available
window.speechSynthesis.onvoiceschanged = () => {
	// Get List of Voices
	voices = window.speechSynthesis.getVoices();
	for (let voice of voices) {
		if (voice.lang.includes("en")) {
			tts.voice = voice;
			return;
		}
	}
};

window.SpeechRecognition = window.SpeechRecognition 
|| window.webkitSpeechRecognition; 

const recognition = new SpeechRecognition();

// Needs to be false so that speech is not repeated
recognition.interimResults = false;

var speech = true; 

if (speech == true) {
	window.speechSynthesis.speak(tts);
	recognition.start(); 
	recognition.addEventListener('end', recognition.start); 
}
