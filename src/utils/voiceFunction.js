export const speakText = (text, soundEnabled = true) => {
  if (!soundEnabled) return;

  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-UK";
  utterance.rate = 0.75;
  speechSynthesis.speak(utterance);
};