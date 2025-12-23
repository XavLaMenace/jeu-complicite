let currentMode = null;
let words = [];

function setMode(mode) {
  currentMode = mode;
  fetch(`data/${mode}.json`)
    .then(res => res.json())
    .then(data => {
      words = data.words;
      document.getElementById("word").innerText =
        mode === "icam" ? "🎓 Mode ICAM activé" : "Mode Classique activé";
    });
}

function newWord() {
  if (!words.length) return;
  const random = Math.floor(Math.random() * words.length);
  document.getElementById("word").innerText = words[random];
}
