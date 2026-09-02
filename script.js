const opening = document.getElementById("opening");
const letter = document.getElementById("letter");
const finalPage = document.getElementById("final");
const surprise = document.getElementById("surprise");

const openLetter = document.getElementById("openLetter");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const surpriseButton = document.getElementById("surpriseButton");


// Open apology letter
openLetter.addEventListener("click", () => {
    opening.classList.add("hidden");
    letter.classList.remove("hidden");
});


// Forgive button
yesButton.addEventListener("click", async () => {

    try {
        yesButton.addEventListener("click", () => {
    letter.classList.add("hidden");
    finalPage.classList.remove("hidden");
    createHearts(35);
});
    } catch (error) {
        console.log("No worries ❤️");
    }

    letter.classList.add("hidden");
    finalPage.classList.remove("hidden");

    createHearts(35);
});


// Funny "No" button runs away
noButton.addEventListener("mouseover", () => {
    moveNoButton();
});

noButton.addEventListener("touchstart", (event) => {
    event.preventDefault();
    moveNoButton();
});


function moveNoButton() {

    const maxX = window.innerWidth - noButton.offsetWidth - 30;
    const maxY = window.innerHeight - noButton.offsetHeight - 30;

    const randomX = Math.max(20, Math.random() * maxX);
    const randomY = Math.max(20, Math.random() * maxY);

    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}


// Surprise button
surpriseButton.addEventListener("click", () => {

    finalPage.classList.add("hidden");
    surprise.classList.remove("hidden");

    createHearts(50);
});


// Create falling hearts
function createHearts(number = 15) {

    const heartTypes = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💝",
        "💓"
    ];

    for (let i = 0; i < number; i++) {

        const heart = document.createElement("div");

        heart.className = "floating-heart";

        heart.innerHTML =
            heartTypes[Math.floor(Math.random() * heartTypes.length)];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        const duration =
            4 + Math.random() * 5;

        heart.style.animationDuration =
            duration + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
}


// ❤️ Start hearts immediately
createHearts(25);


// ❤️ Keep creating hearts
setInterval(() => {
    createHearts(8);
}, 1800);
