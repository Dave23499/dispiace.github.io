const messages = [
    "Gem, I’ve missed you...",
    "I know I was quiet for too long...",
    "But the truth is, I never stopped thinking about you.",
    "I never wanted distance or silence to come between us.",
    "So, here I am, hoping to hear from you again. 💙"
];

let index = 0;
const messageBox = document.getElementById("message-box");
const messageText = document.getElementById("message");
const nextBtn = document.getElementById("next-btn");
const finalScreen = document.getElementById("final-screen");
const bgMusic = document.getElementById("bg-music");
let musicPlayed = false; // Prevents multiple plays

nextBtn.addEventListener("click", () => {
    // Play music on first button click
    if (!musicPlayed) {
        bgMusic.play().catch(error => console.log("Autoplay prevented:", error));
        musicPlayed = true;
    }

    // Show next message with fade-in effect
    index++;
    if (index < messages.length) {
        messageText.classList.remove("fade-in");
        setTimeout(() => {
            messageText.textContent = messages[index];
            messageText.classList.add("fade-in");
        }, 300);
    } else {
        messageBox.style.display = "none";
        finalScreen.classList.remove("hidden");
    }
});

// Floating Heart Animation (no changes)
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    document.querySelector(".hearts-container").appendChild(heart);

    const size = Math.random() * 20 + 10 + "px";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = size;
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 600);