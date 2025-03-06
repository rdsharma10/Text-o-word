/**
 * SpeechSynthesisUtterance() Notes and Examples
 * 
 * SpeechSynthesisUtterance is a part of the Web Speech API that allows text-to-speech conversion.
 * It is used to create a speech request that can be processed by the browser's speech synthesis engine.
 */

// Checking if Speech Synthesis is supported
if ('speechSynthesis' in window) {
    console.log('Speech Synthesis is supported in this browser.');
} else {
    console.log('Speech Synthesis is not supported in this browser.');
}

// Creating a SpeechSynthesisUtterance instance
let speech = new SpeechSynthesisUtterance();

/**
 * Properties of SpeechSynthesisUtterance
 */
speech.text = "Hello, this is a speech synthesis test.";  // The text to be spoken
speech.lang = "en-US";  // Language (default: browser's locale)
speech.volume = 1;  // Volume (0.0 to 1.0)
speech.rate = 1;  // Speech rate (0.1 to 10.0, default: 1)
speech.pitch = 1;  // Pitch (0.0 to 2.0, default: 1)

// Fetching available voices
let voices = [];
function setVoices() {
    voices = speechSynthesis.getVoices();
    speech.voice = voices.find(voice => voice.lang === "en-US") || voices[0];
}
setVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = setVoices;
}

/**
 * Events in SpeechSynthesisUtterance
 */
speech.onstart = () => console.log("Speech started.");
speech.onend = () => console.log("Speech ended.");
speech.onerror = (event) => console.error("Speech error:", event);
speech.onpause = () => console.log("Speech paused.");
speech.onresume = () => console.log("Speech resumed.");
speech.onboundary = (event) => console.log("Speech boundary:", event.charIndex);

/**
 * Controlling Speech Synthesis
 */
function speak() {
    speechSynthesis.speak(speech);
}
function pauseSpeech() {
    speechSynthesis.pause();
}
function resumeSpeech() {
    speechSynthesis.resume();
}
function cancelSpeech() {
    speechSynthesis.cancel();
}

// Example Usage
// speak(); // Starts speaking
// pauseSpeech(); // Pauses speech
// resumeSpeech(); // Resumes speech
// cancelSpeech(); // Cancels speech

/**
 * Notes:
 * - SpeechSynthesisUtterance is affected by the browser and OS voices available.
 * - Some browsers may require user interaction (like a button click) before using speech synthesis.
 * - Rate and pitch adjustments can make speech sound unnatural if set to extreme values.
 */
