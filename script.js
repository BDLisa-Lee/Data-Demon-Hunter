
const pieces = {
  "top-left": "images/top_left.png",
  "top-right": "images/top_right.png",
  "middle-left": "images/middle_left.png",
  "middle-right": "images/middle_right.png",
  "bottom-left": "images/bottom_left.png",
  "bottom-right": "images/bottom_right.png"
};

Object.keys(pieces).forEach(key => {
  if (localStorage.getItem(key) === "true") {
    document.getElementById(key).src = pieces[key];
  }
});

function checkCompletion() {
  const allScanned = Object.keys(pieces).every(key => localStorage.getItem(key) === "true");
  if (allScanned) {
    document.getElementById("message").textContent = "🎉 You've Hunted the Data Demon!";
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

checkCompletion();


function resetPuzzle() {
  localStorage.clear();
  location.reload();
}
