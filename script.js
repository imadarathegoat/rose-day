const startBtn = document.getElementById("startBtn");
const jarSection = document.getElementById("jarSection");
const jar = document.getElementById("jar");
const messageBox = document.getElementById("message");

const messages = [
  "You make even ordinary days feel magical ❤️",
  "Your smile is my favorite place to be 🌹",
  "You love how you care, deeply and honestly",
  "You are my calm and my chaos, perfectly balanced",
  "Every rose here is a reason I love you"
];

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  jarSection.style.display = "block";
  createRoses();
});

function createRoses() {
  for (let i = 0; i < messages.length; i++) {
    const rose = document.createElement("div");
    rose.className = "rose";
    rose.innerHTML = "🌹";
    rose.style.left = Math.random() * 160 + "px";
    rose.style.top = Math.random() * 220 + "px";
    rose.addEventListener("click", () => {
      messageBox.textContent = messages[Math.floor(Math.random() * messages.length)];
    });
    jar.appendChild(rose);
  }
}
