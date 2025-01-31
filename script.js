// Countdown Timer
const targetTime = new Date();
targetTime.setHours(22, 0, 0, 0); // Countdown until 10 PM

function updateCountdown() {
    const now = new Date();
    const diff = targetTime - now;

    if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerText = `Time left for your surprise: ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById("countdown").innerText = "It's time! 💖";
    }
}
setInterval(updateCountdown, 1000);

// Game based on time of day
function startGame() {
    const now = new Date();
    const hour = now.getHours();
    let gameHtml = '';
    let gameMessage = '';

    if (hour >= 8 && hour < 11) {
        gameHtml = generateMemoryMatchGame();
        gameMessage = "Memory Match: Can you match the pairs? 🤔";
    } else if (hour >= 11 && hour < 14) {
        gameHtml = generateWordScrambleGame();
        gameMessage = "Word Scramble: Unscramble the word! 🧩";
    } else if (hour >= 14 && hour < 17) {
        gameHtml = generateRiddleGame();
        gameMessage = "Riddle Challenge: Solve this riddle! 🧐";
    } else if (hour >= 17 && hour < 19.5) {
        gameHtml = generateGuessEmojiGame();
        gameMessage = "Guess the Emoji: What emoji am I thinking of? 🤔";
    } else if (hour >= 19.5 && hour < 21) {
        gameHtml = generateTriviaQuizGame();
        gameMessage = "Trivia Quiz: Answer the questions! 📚";
    }

    document.getElementById("game").innerHTML = gameHtml;
    document.getElementById("gameMessage").innerText = gameMessage;
}

// Redirect to message page on correct answer
function goToMessagePage() {
    window.location.href = "message.html";
}

// Memory Match Game
function generateMemoryMatchGame() {
    return `<p>Click the matching pairs! 🥰</p>
            <button onclick="goToMessagePage()">Done! 💕</button>`;
}

// Word Scramble Game
function generateWordScrambleGame() {
    return `<p>Unscramble: <strong>surprise</strong> 🧩</p>
            <input type="text" id="wordInput">
            <button onclick="checkWordScramble()">Check</button>`;
}
function checkWordScramble() {
    if (document.getElementById('wordInput').value.toLowerCase() === 'surprise') goToMessagePage();
}

// Riddle Game
function generateRiddleGame() {
    return `<p>I am tall when young, short when old. What am I? 🧐</p>
            <input type="text" id="riddleInput">
            <button onclick="checkRiddle()">Submit</button>`;
}
function checkRiddle() {
    if (document.getElementById('riddleInput').value.toLowerCase() === 'candle') goToMessagePage();
}

// Guess the Emoji Game
function generateGuessEmojiGame() {
    return `<p>Guess the fruit emoji 🍎</p>
            <input type="text" id="emojiInput">
            <button onclick="checkEmojiGuess()">Submit</button>`;
}
function checkEmojiGuess() {
    if (document.getElementById('emojiInput').value.toLowerCase() === 'apple') goToMessagePage();
}

// Trivia Quiz Game
function generateTriviaQuizGame() {
    return `<p>What is the capital of France? 🌍</p>
            <button onclick="goToMessagePage()">Paris</button>`;
}

// Start the game on load
window.onload = startGame;
