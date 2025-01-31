// 🌟 Floating Hearts Generator
function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerHTML = "💖";
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 5 + 5 + "s"; // Random duration between 5s-10s

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// 💕 Generate Floating Hearts Every Second
setInterval(createFloatingHeart, 1000);

// 🎆 Fireworks Effect when Correct Answer is Selected
function showFireworks() {
    const fireworksContainer = document.createElement('div');
    fireworksContainer.classList.add('fireworks');

    for (let i = 0; i < 10; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.top = `${Math.random() * 100}vh`;
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.animationDuration = `${Math.random() * 1.5 + 0.5}s`;
        fireworksContainer.appendChild(firework);
    }

    document.body.appendChild(fireworksContainer);
    fireworksContainer.style.display = 'block';

    setTimeout(() => {
        fireworksContainer.remove();
    }, 2000);
}

// 🎯 Countdown to 9 PM
const targetTime = new Date();
targetTime.setHours(21, 0, 0, 0); // Countdown to 9 PM

function updateCountdown() {
    const now = new Date();
    const diff = targetTime - now;

    if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerText = `Time left: ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById("countdown").innerText = "It's time! 💖";
        document.getElementById("finalMessage").innerText = "Call me now for your final surprise! 😘";
    }
}
setInterval(updateCountdown, 1000);

// 🏆 Game Logic: Check Answers and Trigger Fireworks
function checkAnswer(isCorrect) {
    const winMessage = document.getElementById("game-win-message");

    if (isCorrect) {
        showFireworks();
        winMessage.innerText = "You're Amazing, Cutie! 🎆💕";
        winMessage.style.color = "#b5179e";
        winMessage.style.fontSize = "26px";
    } else {
        winMessage.innerText = "Try again, love! 💖";
        winMessage.style.color = "#d6336c";
    }
}

// 🎮 Game by Time of Day
function startGame() {
    const now = new Date();
    const hour = now.getHours();

    let gameHtml = '';
    let gameMessage = '';

    if (hour >= 8 && hour < 11) {
        gameHtml = generateMemoryMatchGame();
        gameMessage = "Memory Match: Can you match the pairs? 💕";
    } else if (hour >= 11 && hour < 14) {
        gameHtml = generateWordScrambleGame();
        gameMessage = "Word Scramble: Unscramble the word! 🧩";
    } else if (hour >= 14 && hour < 17) {
        gameHtml = generateRiddleGame();
        gameMessage = "Riddle Challenge: Solve this riddle! 🧐";
    } else if (hour >= 17 && hour < 19.5) {
        gameHtml = generateGuessEmojiGame();
        gameMessage = "Guess the Emoji: What emoji am I thinking of? 🍎";
    } else if (hour >= 19.5 && hour < 21) {
        gameHtml = generateTriviaQuizGame();
        gameMessage = "Trivia Quiz: Answer the questions! 📚";
    }

    document.getElementById("game").innerHTML = gameHtml;
    document.getElementById("gameMessage").innerText = gameMessage;
}

window.onload = startGame;

// --- Games ---

// 🃏 Memory Match Game
function generateMemoryMatchGame() {
    const words = ['apple', 'banana', 'cherry', 'date'];
    const shuffledWords = words.concat(words).sort(() => Math.random() - 0.5);

    let gameHtml = `<p>Match the words:</p><div class="game-board">`;
    shuffledWords.forEach((word, index) => {
        gameHtml += `<div class="game-item" id="item${index}" onclick="flipCard(${index})">${word}</div>`;
    });
    gameHtml += `</div><button onclick="checkMemoryMatch()">Check</button>`;
    return gameHtml;
}

function flipCard(index) {
    // Flip logic here
}

function checkMemoryMatch() {
    // Match checking logic here
}

// 🔀 Word Scramble Game
function generateWordScrambleGame() {
    const word = 'surprise';
    const scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
    return `<p>Scrambled word: ${scrambled}</p><input type="text" id="wordInput"><button onclick="checkWordScramble('${word}')">Check</button>`;
}

function checkWordScramble(word) {
    const input = document.getElementById('wordInput').value.toLowerCase();
    if (input === word) {
        showFireworks();
        alert('Correct! 🎉');
    } else {
        alert('Try again! 💕');
    }
}

// 🕯️ Riddle Game
function generateRiddleGame() {
    return `<p>I am tall when I am young, and I am short when I am old. What am I?</p>
            <input type="text" id="riddleInput">
            <button onclick="checkRiddle()">Submit</button>`;
}

function checkRiddle() {
    const answer = document.getElementById('riddleInput').value.toLowerCase();
    if (answer === 'candle') {
        showFireworks();
        alert('Correct! 🕯️');
    } else {
        alert('Try again! 💕');
    }
}

// 🍏 Guess the Emoji Game
function generateGuessEmojiGame() {
    const emojiClue = 'I am a fruit and can make you smile 🍎';
    return `<p>Guess the emoji: ${emojiClue}</p>
            <input type="text" id="emojiInput">
            <button onclick="checkEmojiGuess()">Submit</button>`;
}

function checkEmojiGuess() {
    const input = document.getElementById('emojiInput').value.toLowerCase();
    if (input === 'apple') {
        showFireworks();
        alert('Correct! 🍏');
    } else {
        alert('Try again! 💕');
    }
}

// 📚 Trivia Quiz Game
function generateTriviaQuizGame() {
    const questions = [
        {
            question: 'What is the capital of France?',
            options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
            correctAnswer: 'Paris'
        },
        {
            question: 'Who painted the Mona Lisa?',
            options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
            correctAnswer: 'Leonardo da Vinci'
        },
    ];

    let quizHtml = '<p>Trivia Quiz</p>';
    questions.forEach((q, index) => {
        quizHtml += `<p>${q.question}</p>`;
        q.options.forEach((option, i) => {
            quizHtml += `<input type="radio" name="question${index}" value="${option}"> ${option}<br>`;
        });
    });
    quizHtml += `<button onclick="checkTriviaQuizAnswers()">Submit</button>`;
    return quizHtml;
}

function checkTriviaQuizAnswers() {
    showFireworks();
    alert('Correct! 🎉');
}
