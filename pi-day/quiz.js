// ===== QUESTION DATA (from pi_day_quiz_README.md) =====
const questions = [
    {
        id: 1,
        name: "The Knockout Tournament",
        time: 120,
        difficulty: "Easy",
        question: `
            <p>A college fest organizes a carrom knockout tournament (single elimination — you lose once, you're out). <strong>47 players</strong> enter the tournament.</p>
            <p>How many total matches must be played to determine the winner?</p>
        `
    },
    {
        id: 2,
        name: "The Digit Hunt",
        time: 120,
        difficulty: "Easy",
        question: `
            <p>A bored student writes down every whole number from <strong>1 to 100</strong> on a piece of paper (1, 2, 3, ... 99, 100).</p>
            <p>How many times does the digit <strong>3</strong> appear in total across all the numbers?</p>
        `
    },
    {
        id: 3,
        name: "The Farmer's Headcount",
        time: 120,
        difficulty: "Easy",
        question: `
            <p>A farmer looks out at his field and sees a mix of <strong>sheep and chickens</strong>. He counts a total of <strong>30 heads</strong> and <strong>86 legs</strong>.</p>
            <p>How many <strong>sheep</strong> does he have?</p>
        `
    },
    {
        id: 4,
        name: "The Three Stickers",
        time: 180,
        difficulty: "Medium",
        question: `
            <p>Three friends — Asha, Bala, and Chetna — sit in a row (Asha in front, Bala in the middle, Chetna at the back). A host has a bag with <strong>2 RED stickers and 1 BLUE sticker</strong>. He sticks one on each person's forehead. Each person can see the foreheads <strong>in front</strong> of them, but not their own:</p>
            <ul>
                <li><strong>Chetna</strong> (at the back, can see both Asha and Bala) says: <em>"I can't tell what colour my sticker is."</em></li>
                <li><strong>Bala</strong> (in the middle, can see only Asha) says: <em>"I can't tell either."</em></li>
                <li><strong>Asha</strong> (in the front, can see nobody) says: <em>"I know exactly what colour mine is!"</em></li>
            </ul>
            <p>What colour is <strong>Asha's</strong> sticker?</p>
        `
    },
    {
        id: 5,
        name: "The Spy's Secret Code",
        time: 120,
        difficulty: "Medium",
        question: `
            <p>A spy sends coded messages by replacing words with numbers. Your team intercepts the following transmissions:</p>
            <table class="q-table">
                <thead><tr><th>Word</th><th>Code</th></tr></thead>
                <tbody>
                    <tr><td>TREE</td><td>1</td></tr>
                    <tr><td>BOOK</td><td>1</td></tr>
                    <tr><td>BALLOON</td><td>2</td></tr>
                    <tr><td>MISSISSIPPI</td><td>3</td></tr>
                    <tr><td>APPLE</td><td>1</td></tr>
                    <tr><td>SUCCESS</td><td>2</td></tr>
                    <tr><td>CAT</td><td>0</td></tr>
                    <tr><td>COFFEE</td><td>2</td></tr>
                </tbody>
            </table>
            <p>What code would the spy assign to the word <strong>"COMMITTEE"</strong>?</p>
        `
    },
    {
        id: 6,
        name: "The Mysterious Sequence",
        time: 120,
        difficulty: "Easy",
        question: `
            <p>What comes next in this sequence?</p>
            <div class="code-block">O, T, T, F, F, S, S, E, ?</div>
        `
    },
    {
        id: 7,
        name: "The Island of Truth and Lies",
        time: 180,
        difficulty: "Hard",
        question: `
            <p>On an island, there are two types of people: <strong>Knights</strong> (who always tell the truth) and <strong>Knaves</strong> (who always lie). You meet three islanders — A, B, and C. They say:</p>
            <ul>
                <li><strong>A says:</strong> "All three of us are Knaves."</li>
                <li><strong>B says:</strong> "Exactly one of us is a Knight."</li>
            </ul>
            <p>What is C?</p>
        `
    },
    {
        id: 8,
        name: "The Painted Doors",
        time: 180,
        difficulty: "Medium",
        question: `
            <p>Five houses on a street are numbered 1 through 5 (left to right). Each has a differently colored door: Red, Blue, Green, Yellow, and White. Using these clues, figure out the color for <strong>House 4</strong>:</p>
            <ol>
                <li>The Red door is on a higher-numbered house than the Blue door.</li>
                <li>The Green door is directly next to the Yellow door.</li>
                <li>The White door is on house 3.</li>
                <li>The Blue door is not on house 1 or house 5.</li>
                <li>The Green door's house number is even.</li>
            </ol>
        `
    },
    {
        id: 9,
        name: "The Five Mondays",
        time: 180,
        difficulty: "Medium",
        question: `
            <p>In a certain month of a certain year, there are exactly <strong>5 Mondays</strong>. However, the <strong>first day</strong> of the month and the <strong>last day</strong> of the month are both <strong>NOT</strong> Mondays.</p>
            <p>What day of the week is the <strong>15th</strong> of that month?</p>
        `
    },
    {
        id: 10,
        name: "The Number Pyramid",
        time: 300,
        difficulty: "Hard",
        question: `
            <p>In the pyramid below, each box contains a number. The rule is simple: <strong>every number is the sum of the two numbers directly below it.</strong> Some numbers are filled in.</p>
            <p>What is the value of the top number?</p>
            <div class="pyramid">
                <div class="pyramid-row">
                    <span class="pyramid-cell unknown">?</span>
                </div>
                <div class="pyramid-row">
                    <span class="pyramid-cell unknown">?</span>
                    <span class="pyramid-cell known">15</span>
                </div>
                <div class="pyramid-row">
                    <span class="pyramid-cell unknown">?</span>
                    <span class="pyramid-cell known">9</span>
                    <span class="pyramid-cell unknown">?</span>
                </div>
                <div class="pyramid-row">
                    <span class="pyramid-cell known">1</span>
                    <span class="pyramid-cell unknown">?</span>
                    <span class="pyramid-cell unknown">?</span>
                    <span class="pyramid-cell known">2</span>
                </div>
            </div>
        `
    },
    {
        id: 11,
        name: "The Queue Puzzle",
        time: 180,
        difficulty: "Easy",
        question: `
            <p>Five friends — Asha, Priya, Rohan, Meera, and Sunil — are standing in a queue (position 1 is the front, position 5 is the back):</p>
            <ul>
                <li>Asha is at the front of the queue</li>
                <li>Priya is standing second</li>
                <li>Rohan is somewhere behind Priya but ahead of Sunil</li>
                <li>Meera is standing at a position exactly between Rohan and Sunil (equal number of spots separate her from each of them)</li>
            </ul>
            <p>What position is Meera standing in?</p>
        `
    },
    {
        id: 12,
        name: "The Snail on the Wall",
        time: 240,
        difficulty: "Medium",
        question: `
            <p>A snail starts at the bottom of a <strong>30-foot wall</strong>. Every day, it climbs <strong>3 feet</strong> up. Every night, it slips <strong>2 feet</strong> back down.</p>
            <p>On which <strong>day</strong> does the snail reach the top of the wall?</p>
        `
    },
    {
        id: 13,
        name: "The Pass-the-Parcel",
        time: 120,
        difficulty: "Easy",
        question: `
            <p>7 kids sit in a circle (numbered 1 through 7, clockwise) playing pass-the-parcel. The parcel starts with <strong>Kid 1</strong>. Every time a song ends, the parcel is passed <strong>clockwise by a fixed number of positions</strong> (the same number each time, but you don't know what it is).</p>
            <ul>
                <li>After the <strong>1st song</strong>, <strong>Kid 4</strong> has the parcel.</li>
                <li>After the <strong>2nd song</strong>, <strong>Kid 7</strong> has the parcel.</li>
            </ul>
            <p>After the <strong>3rd song</strong>, which kid has the parcel?</p>
        `
    },
    {
        id: 14,
        name: "The Cookie Jar",
        time: 240,
        difficulty: "Medium",
        question: `
            <p>A cookie jar has some cookies. Three friends take turns:</p>
            <ol>
                <li><strong>Ria</strong> takes half the cookies <strong>plus half a cookie</strong>.</li>
                <li><strong>Meera</strong> takes half of what's left <strong>plus half a cookie</strong>.</li>
                <li><strong>Karan</strong> takes half of what's left <strong>plus half a cookie</strong>.</li>
            </ol>
            <p>After all three have taken their share, the jar is <strong>empty</strong>. Importantly, <strong>no cookie was ever broken</strong> — every person took a whole number of cookies.</p>
            <p>How many cookies were in the jar to begin with?</p>
        `
    },
    {
        id: 15,
        name: "The Liar's Club",
        time: 240,
        difficulty: "Medium",
        question: `
            <p>Four friends make statements about who ate the last slice of pizza:</p>
            <ul>
                <li><strong>Anita says:</strong> "It was Bhaskar."</li>
                <li><strong>Bhaskar says:</strong> "It was Chitra."</li>
                <li><strong>Chitra says:</strong> "Bhaskar is lying."</li>
                <li><strong>Diya says:</strong> "It wasn't me."</li>
            </ul>
            <p>If exactly <strong>one</strong> person is lying, who ate the pizza?</p>
        `
    },
    {
        id: 16,
        name: "The Broken Clock",
        time: 240,
        difficulty: "Medium",
        question: `
            <p>Ravi's watch is broken — it loses exactly <strong>15 minutes every hour</strong>. At exactly <strong>12:00 noon on Monday</strong>, he sets it to the correct time.</p>
            <p>When his watch shows <strong>9:00 AM on Tuesday</strong>, what is the <strong>actual</strong> time?</p>
        `
    },
    {
        id: 17,
        name: "The Handshake Problem",
        time: 180,
        difficulty: "Easy",
        question: `
            <p>There are <strong>8 people</strong> at a party. Every person shakes hands exactly once with every other person.</p>
            <p>How many handshakes take place in total?</p>
        `
    },
    {
        id: 18,
        name: "The Wolf, the Goat, and the Cabbage",
        time: 240,
        difficulty: "Medium",
        question: `
            <p>A farmer needs to cross a river with a wolf, a goat, and a cabbage. His boat can only carry him and one item at a time. If left alone together:</p>
            <ul>
                <li>The wolf will eat the goat</li>
                <li>The goat will eat the cabbage</li>
                <li>The wolf will NOT eat the cabbage</li>
            </ul>
            <p>What is the <strong>minimum number of river crossings</strong> the farmer must make, and what is the exact sequence?</p>
        `
    },
    {
        id: 19,
        name: "The Odd One Out",
        time: 120,
        difficulty: "Easy",
        question: `
            <p>Which word does <strong>NOT</strong> belong in this group?</p>
            <div class="code-block">APPLE, GRAPE, BANANA, CHERRY, MANGO, PEACH</div>
            <p class="hint-text">(Hint: It has nothing to do with the fruit itself — look at the words!)</p>
        `
    },
    {
        id: 20,
        name: "The Number = Number Pattern",
        time: 180,
        difficulty: "Medium",
        question: `
            <p>Look at this pattern:</p>
            <div class="code-block">1 = 3&nbsp;&nbsp;&nbsp;2 = 3&nbsp;&nbsp;&nbsp;3 = 5&nbsp;&nbsp;&nbsp;4 = 4&nbsp;&nbsp;&nbsp;5 = 4<br>6 = 3&nbsp;&nbsp;&nbsp;7 = 5&nbsp;&nbsp;&nbsp;8 = 5&nbsp;&nbsp;&nbsp;9 = 4&nbsp;&nbsp;&nbsp;10 = 3</div>
            <p>Based on this pattern, what does <strong>11</strong> equal?</p>
        `
    },
    {
        id: 21,
        name: "The Dark Room",
        time: 60,
        difficulty: "Easy",
        question: `
            <p>You walk into a pitch-dark room. You have <strong>one match</strong>. In the room there is a <strong>candle</strong>, a <strong>kerosene lamp</strong>, and a <strong>fireplace</strong> — all unlit.</p>
            <p>What do you light <strong>first</strong>?</p>
        `
    },
    {
        id: 22,
        name: "The Traveller's Dilemma",
        time: 60,
        difficulty: "Easy",
        question: `
            <p>A man looks at a photograph and says: <em>"Brothers and sisters, I have none — but that man's father is my father's son."</em></p>
            <p>Who is the person in the photograph?</p>
        `
    },
    {
        id: 23,
        name: "The Shopkeeper's Change",
        time: 240,
        difficulty: "Medium",
        question: `
            <p>A customer buys a ₹70 item from a shopkeeper and pays with a ₹100 note. The shopkeeper doesn't have change, so he goes to the neighbouring shop and gets the ₹100 note broken into smaller denominations. He gives ₹30 change to the customer.</p>
            <p>Later, the neighbour comes back and says the ₹100 note was <strong>counterfeit</strong>. The shopkeeper has to repay the neighbour ₹100.</p>
            <p><strong>How much total money did the shopkeeper lose?</strong></p>
        `
    },
    {
        id: 24,
        name: "The Calendar Trick",
        time: 60,
        difficulty: "Easy",
        question: `
            <p>Without checking a calendar — if <strong>January 1st</strong> of a certain year is a <strong>Wednesday</strong>, what day of the week is <strong>December 31st</strong> of that <strong>same non-leap year</strong>?</p>
        `
    },
    
    {
        id: 25,
        name: "The Map Colouring",
        time: 60,
        difficulty: "Easy",
        question: `
            <p>You need to colour a map of <strong>India's states</strong> such that no two neighbouring states share the same colour.</p>
            <p>What is the <strong>minimum number of colours</strong> you need?</p>
            <p class="hint-text">(Hint: This applies to ANY map, not just India.)</p>
        `
    },
    
];

// ===== STATE =====
let currentQuestion = null;
let timerInterval = null;
let timeRemaining = 0;
const completedQuestions = new Set();

// ===== DOM REFS =====
const questionList = document.getElementById('questionList');
const quizContent = document.getElementById('quizContent');
const topbarTitle = document.getElementById('topbarTitle');
const timerDisplay = document.getElementById('timerDisplay');
const timerRing = document.getElementById('timerRing');
const timerText = document.getElementById('timerText');

const CIRCUMFERENCE = 2 * Math.PI * 68; // ~427.26
const timerDisplayEl = document.getElementById('timerDisplay');

// ===== FORMAT TIME =====
function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
}

// ===== RENDER SIDEBAR =====
function renderSidebar() {
    questionList.innerHTML = '';
    questions.forEach(q => {
        const isCompleted = completedQuestions.has(q.id);
        const isActive = currentQuestion && currentQuestion.id === q.id;

        const div = document.createElement('div');
        div.className = `q-item${isActive ? ' active' : ''}${isCompleted ? ' completed' : ''}`;
        div.innerHTML = `
            <div class="q-number">${q.id}</div>
            <div class="q-info">
                <div class="q-name">${q.name}</div>
                <div class="q-meta">${q.difficulty} · ${formatTime(q.time)}</div>
            </div>
            <span class="q-status ${isCompleted ? 'done' : 'pending'}">
                ${isCompleted ? 'Done' : 'Ready'}
            </span>
        `;
        div.addEventListener('click', () => selectQuestion(q));
        questionList.appendChild(div);
    });
}

// ===== SELECT QUESTION =====
function selectQuestion(q) {
    clearTimer();
    currentQuestion = q;
    topbarTitle.textContent = `Q${q.id}: ${q.name}`;
    timerDisplay.style.visibility = 'hidden';
    timerText.textContent = '--';
    resetTimerRing();
    renderSidebar();
    showReadyState(q);
}

// ===== SHOW READY STATE =====
function showReadyState(q) {
    quizContent.innerHTML = `
        <div class="ready-state">
            <h3>Q${q.id}: ${q.name}</h3>
            <p class="ready-meta">${q.difficulty} · Time limit: ${formatTime(q.time)}</p>
            <button class="btn-start" id="btnStart">
                <span class="play-icon">▶</span> Start Timer
            </button>
        </div>
    `;
    document.getElementById('btnStart').addEventListener('click', () => startQuestion(q));
}

// ===== START QUESTION =====
function startQuestion(q) {
    timeRemaining = q.time;
    timerDisplay.style.visibility = 'visible';
    showQuestionContent(q);
    updateTimerDisplay(q.time, q.time);
    startTimer(q);
}

// ===== SHOW QUESTION CONTENT =====
function showQuestionContent(q) {
    quizContent.innerHTML = `
        <div class="question-display">
            <div class="question-card">
                <div class="question-label">Question ${q.id}</div>
                <h3>${q.name}</h3>
                <div class="question-body">${q.question}</div>
            </div>
        </div>
    `;
}

// ===== TIMER =====
function startTimer(q) {
    clearTimer();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay(timeRemaining, q.time);
        if (timeRemaining <= 0) {
            clearTimer();
            onTimeUp(q);
        }
    }, 1000);
}

function clearTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimerDisplay(remaining, total) {
    timerText.textContent = formatTime(remaining);

    const fraction = remaining / total;
    const offset = CIRCUMFERENCE * (1 - fraction);
    timerRing.style.strokeDasharray = CIRCUMFERENCE;
    timerRing.style.strokeDashoffset = offset;

    timerRing.classList.remove('warning', 'danger');
    timerDisplayEl.classList.remove('timer-warning', 'timer-danger');
    if (fraction <= 0.15) {
        timerRing.classList.add('danger');
        timerDisplayEl.classList.add('timer-danger');
    } else if (fraction <= 0.35) {
        timerRing.classList.add('warning');
        timerDisplayEl.classList.add('timer-warning');
    }
}

function resetTimerRing() {
    timerRing.style.strokeDashoffset = 0;
    timerRing.classList.remove('warning', 'danger');
    timerDisplayEl.classList.remove('timer-warning', 'timer-danger');
}

// ===== TIME UP =====
function onTimeUp(q) {
    completedQuestions.add(q.id);
    timerDisplay.style.visibility = 'visible';
    timerText.textContent = '0:00';

    quizContent.innerHTML = `
        <div class="timeup-state">
            <div class="timeup-icon">⏰</div>
            <h3>Time's Up!</h3>
            <p>"${q.name}" has ended. Select another question from the sidebar to continue.</p>
        </div>
    `;

    renderSidebar();
}

// ===== INIT =====
renderSidebar();
