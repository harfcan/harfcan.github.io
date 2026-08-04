/**
 * İstanbul Bilgi Kartları - Harfcan
 * Çocuklara yönelik interaktif bilgi kartı deneyimi
 *
 * Yeni kart eklemek için: cardSets objesindeki cards dizisine yeni kayıt ekleyin.
 * Yeni konu paketi eklemek için: cardSets objesine yeni bir anahtar ekleyin.
 */

/* ==========================================================================
   KART VERİLERİ
   ========================================================================== */

const cardSets = {
    istanbul: {
        id: "istanbul",
        title: "İstanbul'u Tanıyalım",
        description: "İstanbul'un önemli yapılarını ve özelliklerini keşfet.",
        cards: [
            {
                id: "galata-kulesi",
                image: "assets/bilgi-kartlari/istanbul/galata-kulesi.webp",
                imageAlt: "İstanbul manzarasında Galata Kulesi",
                placeholderIcon: "🏰",
                placeholderColor: "#7C4DFF",
                question: "Bu kulenin adı nedir?",
                choices: ["Kız Kulesi", "Galata Kulesi", "Saat Kulesi"],
                correctAnswer: 1,
                answerTitle: "Galata Kulesi",
                explanation: "Galata Kulesi, İstanbul'un en tanınmış tarihi yapılarından biridir. Beyoğlu'nda yükselen bu kule, şehrin birçok noktasından görülebilir."
            },
            {
                id: "kiz-kulesi",
                image: "assets/bilgi-kartlari/istanbul/kiz-kulesi.webp",
                imageAlt: "İstanbul Boğazı'nda Kız Kulesi",
                placeholderIcon: "🌊",
                placeholderColor: "#0288D1",
                question: "İstanbul Boğazı'ndaki bu yapının adı nedir?",
                choices: ["Kız Kulesi", "Galata Kulesi", "Dolmabahçe Sarayı"],
                correctAnswer: 0,
                answerTitle: "Kız Kulesi",
                explanation: "Kız Kulesi, İstanbul Boğazı'nın ortasında küçük bir ada üzerinde duran tarihi bir yapıdır. Hem Avrupa hem Asya yakasından görülebilir."
            },
            {
                id: "ayasofya",
                image: "assets/bilgi-kartlari/istanbul/ayasofya.webp",
                imageAlt: "Ayasofya'nın dıştan görünümü",
                placeholderIcon: "🕌",
                placeholderColor: "#E65100",
                question: "Bu ünlü tarihi yapının adı nedir?",
                choices: ["Ayasofya", "Topkapı Sarayı", "Kapalıçarşı"],
                correctAnswer: 0,
                answerTitle: "Ayasofya",
                explanation: "Ayasofya, yaklaşık 1500 yıllık bir tarihe sahiptir. Önce kilise, sonra cami olarak kullanılmış, dünyanın en önemli tarihi yapılarından biridir."
            },
            {
                id: "istanbul-kitalari",
                image: "assets/bilgi-kartlari/istanbul/istanbul-bogazi.webp",
                imageAlt: "İstanbul Boğazı'ndan şehir manzarası",
                placeholderIcon: "🌍",
                placeholderColor: "#2E7D32",
                question: "İstanbul hangi iki kıta üzerinde bulunur?",
                choices: ["Avrupa ve Asya", "Avrupa ve Afrika", "Asya ve Amerika"],
                correctAnswer: 0,
                answerTitle: "Avrupa ve Asya",
                explanation: "İstanbul, dünyadaki iki kıtaya birden yayılan nadir şehirlerden biridir. Boğaz, şehri Avrupa ve Asya olarak ikiye ayırır."
            },
            {
                id: "istanbul-bogazi",
                image: "assets/bilgi-kartlari/istanbul/bogaz-manzara.webp",
                imageAlt: "İstanbul Boğazı'nın havadan görünümü",
                placeholderIcon: "🚢",
                placeholderColor: "#0097A7",
                question: "İstanbul'un Avrupa ve Asya yakalarını ayıran su yolunun adı nedir?",
                choices: ["İstanbul Boğazı", "Haliç", "Marmara Nehri"],
                correctAnswer: 0,
                answerTitle: "İstanbul Boğazı",
                explanation: "İstanbul Boğazı, Karadeniz'i Marmara Denizi'ne bağlayan doğal bir su yoludur. Uzunluğu yaklaşık 30 kilometredir."
            },
            {
                id: "topkapi-sarayi",
                image: "assets/bilgi-kartlari/istanbul/topkapi-sarayi.webp",
                imageAlt: "Topkapı Sarayı'nın girişi",
                placeholderIcon: "👑",
                placeholderColor: "#F9A825",
                question: "Osmanlı padişahlarının uzun yıllar kullandığı bu sarayın adı nedir?",
                choices: ["Topkapı Sarayı", "Beylerbeyi Sarayı", "Yıldız Sarayı"],
                correctAnswer: 0,
                answerTitle: "Topkapı Sarayı",
                explanation: "Topkapı Sarayı, 400 yıldan fazla Osmanlı İmparatorluğu'nun yönetim merkezi olmuştur. Bugün müze olarak ziyaret edilebilir."
            },
            {
                id: "sultanahmet-camii",
                image: "assets/bilgi-kartlari/istanbul/sultanahmet-camii.webp",
                imageAlt: "Sultanahmet Camii (Mavi Cami)",
                placeholderIcon: "💙",
                placeholderColor: "#1565C0",
                question: "Mavi Cami olarak da bilinen bu yapının adı nedir?",
                choices: ["Sultanahmet Camii", "Süleymaniye Camii", "Ortaköy Camii"],
                correctAnswer: 0,
                answerTitle: "Sultanahmet Camii",
                explanation: "Sultanahmet Camii, içindeki mavi çinileri nedeniyle 'Mavi Cami' olarak da bilinir. 6 minaresiyle dikkat çeker."
            },
            {
                id: "kapalicarsi",
                image: "assets/bilgi-kartlari/istanbul/kapalicarsi.webp",
                imageAlt: "Kapalıçarşı'nın iç görünümü",
                placeholderIcon: "🏪",
                placeholderColor: "#AD1457",
                question: "Bu büyük ve tarihi alışveriş yerinin adı nedir?",
                choices: ["Kapalıçarşı", "Mısır Çarşısı", "İstiklal Caddesi"],
                correctAnswer: 0,
                answerTitle: "Kapalıçarşı",
                explanation: "Kapalıçarşı, dünyanın en eski ve büyük kapalı çarşılarından biridir. İçinde 4.000'den fazla dükkan bulunur."
            },
            {
                id: "bogaz-kopruleri",
                image: "assets/bilgi-kartlari/istanbul/bogaz-koprusu.webp",
                imageAlt: "İstanbul Boğaz Köprüsü gece manzarası",
                placeholderIcon: "🌉",
                placeholderColor: "#4527A0",
                question: "İstanbul'daki Boğaz köprüleri hangi iki kıtayı birbirine bağlar?",
                choices: ["Avrupa ve Asya", "Avrupa ve Afrika", "Asya ve Afrika"],
                correctAnswer: 0,
                answerTitle: "Avrupa ve Asya",
                explanation: "İstanbul'da üç büyük köprü Avrupa ve Asya kıtalarını birbirine bağlar. İlk köprü 1973 yılında açılmıştır."
            },
            {
                id: "istanbul-eski-isimler",
                image: "assets/bilgi-kartlari/istanbul/istanbul-tarihi.webp",
                imageAlt: "İstanbul'un tarihi silueti",
                placeholderIcon: "📜",
                placeholderColor: "#5D4037",
                question: "Aşağıdakilerden hangisi İstanbul'un geçmişte kullanılan isimlerinden biridir?",
                choices: ["Konstantinopolis", "Roma Nova", "Anadolu"],
                correctAnswer: 0,
                answerTitle: "Konstantinopolis",
                explanation: "İstanbul tarih boyunca farklı isimlerle anılmıştır. Byzantion ve Konstantinopolis, en bilinen eski isimlerindendir."
            }
        ]
    }
};

/* ==========================================================================
   UYGULAMA DURUMU (State)
   ========================================================================== */

const STATE = {
    currentSet: "istanbul",
    currentIndex: 0,
    queue: [],             // Aktif kart sırası
    attempts: 0,          // Mevcut karttaki deneme sayısı
    answered: false,       // Mevcut kart cevaplanmış mı
    correctCount: 0,
    learnedCount: 0,
    repeatQueue: [],       // Tekrar edilecek kartlar
    cardResults: new Map() // cardId -> { correct, attempts }
};

/* ==========================================================================
   DOM REFERANSLARI
   ========================================================================== */

const DOM = {
    // Progress
    progressBar: null,
    statCorrect: null,
    statRemaining: null,

    // Card
    cardContainer: null,
    cardTag: null,
    cardImage: null,
    cardPlaceholder: null,
    placeholderIcon: null,
    placeholderText: null,
    cardQuestion: null,
    cardChoices: null,

    // Feedback
    cardFeedback: null,
    feedbackMsg: null,
    cardExplanation: null,
    explanationTitle: null,
    explanationText: null,
    cardPostActions: null,

    // Navigation
    btnPrev: null,
    btnNext: null,
    navCounter: null,

    // Complete
    completeScreen: null,
    completeCorrect: null,
    completeRepeat: null,
    btnRestart: null,
    confettiCanvas: null
};

/* ==========================================================================
   BAŞLATMA
   ========================================================================== */

document.addEventListener("DOMContentLoaded", init);

function init() {
    cacheDOMReferences();
    setupEventListeners();
    startSession();
}

/** DOM elemanlarını önbelleğe al */
function cacheDOMReferences() {
    DOM.progressBar = document.querySelector(".hc-progress__bar");
    DOM.statCorrect = document.getElementById("stat-correct");
    DOM.statRemaining = document.getElementById("stat-remaining");

    DOM.cardContainer = document.getElementById("card-container");
    DOM.cardTag = document.getElementById("card-tag");
    DOM.cardImage = document.getElementById("card-image");
    DOM.cardPlaceholder = document.getElementById("card-placeholder");
    DOM.placeholderIcon = document.querySelector(".hc-card__placeholder-icon");
    DOM.placeholderText = document.querySelector(".hc-card__placeholder-text");
    DOM.cardQuestion = document.getElementById("card-question");
    DOM.cardChoices = document.getElementById("card-choices");

    DOM.cardFeedback = document.getElementById("card-feedback");
    DOM.feedbackMsg = document.getElementById("feedback-msg");
    DOM.cardExplanation = document.getElementById("card-explanation");
    DOM.explanationTitle = document.getElementById("explanation-title");
    DOM.explanationText = document.getElementById("explanation-text");
    DOM.cardPostActions = document.getElementById("card-post-actions");

    DOM.btnPrev = document.getElementById("btn-prev");
    DOM.btnNext = document.getElementById("btn-next");
    DOM.navCounter = document.getElementById("nav-counter");

    DOM.completeScreen = document.getElementById("complete-screen");
    DOM.completeCorrect = document.getElementById("complete-correct");
    DOM.completeRepeat = document.getElementById("complete-repeat");
    DOM.btnRestart = document.getElementById("btn-restart");
    DOM.confettiCanvas = document.getElementById("confetti-canvas");
}

/** Olay dinleyicileri */
function setupEventListeners() {
    // Navigation
    DOM.btnPrev.addEventListener("click", goToPrevCard);
    DOM.btnNext.addEventListener("click", goToNextCard);
    DOM.btnRestart.addEventListener("click", restartSession);

    // Post-answer actions
    DOM.cardPostActions.addEventListener("click", handlePostAction);

    // Keyboard
    document.addEventListener("keydown", handleKeyboard);

    // Image error handling
    DOM.cardImage.addEventListener("error", handleImageError);
    DOM.cardImage.addEventListener("load", handleImageLoad);
}

/* ==========================================================================
   OTURUM YÖNETİMİ
   ========================================================================== */

function startSession() {
    const set = cardSets[STATE.currentSet];
    STATE.queue = set.cards.map((_, i) => i);
    STATE.currentIndex = 0;
    STATE.correctCount = 0;
    STATE.learnedCount = 0;
    STATE.repeatQueue = [];
    STATE.cardResults = new Map();

    DOM.completeScreen.hidden = true;
    DOM.cardContainer.classList.remove("hc-hidden");
    document.getElementById("card-nav").classList.remove("hc-hidden");

    renderCard();
    updateStats();
}

function restartSession() {
    startSession();
}

/* ==========================================================================
   KART RENDER
   ========================================================================== */

function renderCard() {
    const set = cardSets[STATE.currentSet];
    const cardIndex = STATE.queue[STATE.currentIndex];
    const card = set.cards[cardIndex];

    // Reset state
    STATE.attempts = 0;
    STATE.answered = false;

    // Tag
    DOM.cardTag.textContent = set.title;

    // Image
    DOM.cardImage.src = card.image;
    DOM.cardImage.alt = card.imageAlt;
    DOM.cardImage.classList.remove("hc-hidden");
    DOM.cardPlaceholder.classList.remove("hc-visible");

    // Placeholder hazırla (görsel yüklenemezse gösterilecek)
    DOM.placeholderIcon.textContent = card.placeholderIcon || "🏛️";
    DOM.placeholderText.textContent = card.answerTitle;
    if (card.placeholderColor) {
        DOM.cardPlaceholder.style.background =
            `linear-gradient(135deg, ${card.placeholderColor}, ${adjustColor(card.placeholderColor, 40)})`;
    }

    // Question
    DOM.cardQuestion.textContent = card.question;

    // Choices
    renderChoices(card);

    // Hide feedback, explanation, post-actions
    DOM.cardFeedback.classList.remove("hc-visible", "hc-card__feedback--correct", "hc-card__feedback--wrong");
    DOM.cardExplanation.classList.remove("hc-visible");
    DOM.cardPostActions.classList.remove("hc-visible");

    // Navigation
    updateNavigation();
    updateProgress();

    // Restore state if previously answered
    const prevResult = STATE.cardResults.get(card.id);
    if (prevResult && prevResult.correct) {
        STATE.answered = true;
        showCorrectState(card, prevResult.chosenIndex);
    }
}

function renderChoices(card) {
    DOM.cardChoices.innerHTML = "";
    const keys = ["A", "B", "C", "D"];

    card.choices.forEach((choice, index) => {
        const btn = document.createElement("button");
        btn.className = "hc-choice-btn";
        btn.setAttribute("aria-label", `Seçenek ${keys[index]}: ${choice}`);
        btn.dataset.index = index;

        btn.innerHTML = `
            <span class="hc-choice-btn__key">${keys[index]}</span>
            <span class="hc-choice-btn__text">${choice}</span>
        `;

        btn.addEventListener("click", () => handleAnswer(index));
        DOM.cardChoices.appendChild(btn);
    });
}

/* ==========================================================================
   CEVAP MANTIĞI
   ========================================================================== */

function handleAnswer(chosenIndex) {
    if (STATE.answered) return;

    const set = cardSets[STATE.currentSet];
    const cardIndex = STATE.queue[STATE.currentIndex];
    const card = set.cards[cardIndex];
    const isCorrect = chosenIndex === card.correctAnswer;

    STATE.attempts++;

    const buttons = DOM.cardChoices.querySelectorAll(".hc-choice-btn");
    const chosenBtn = buttons[chosenIndex];

    if (isCorrect) {
        // Doğru cevap
        STATE.answered = true;
        STATE.correctCount++;

        STATE.cardResults.set(card.id, {
            correct: true,
            attempts: STATE.attempts,
            chosenIndex: chosenIndex
        });

        showCorrectState(card, chosenIndex);
        updateStats();
    } else {
        // Yanlış cevap
        chosenBtn.classList.add("hc-choice-btn--wrong");
        chosenBtn.disabled = true;

        // Geri bildirim
        showFeedback("wrong", "Bir daha düşün! 🤔");

        // İkinci yanlışta doğru cevabı göster
        if (STATE.attempts >= 2) {
            STATE.answered = true;
            STATE.cardResults.set(card.id, {
                correct: false,
                attempts: STATE.attempts,
                chosenIndex: chosenIndex
            });

            // Doğru cevabı vurgula
            buttons[card.correctAnswer].classList.add("hc-choice-btn--correct");

            // Diğer butonları devre dışı bırak
            buttons.forEach(btn => {
                btn.disabled = true;
                if (!btn.classList.contains("hc-choice-btn--correct") &&
                    !btn.classList.contains("hc-choice-btn--wrong")) {
                    btn.classList.add("hc-choice-btn--dimmed");
                }
            });

            // Açıklamayı göster
            showExplanation(card);
            showFeedback("wrong", "Doğru cevap: " + card.answerTitle);
            showPostActions();
            enableNextButton();
        }
    }
}

function showCorrectState(card, chosenIndex) {
    const buttons = DOM.cardChoices.querySelectorAll(".hc-choice-btn");

    // Doğru butonu vurgula
    buttons[card.correctAnswer].classList.add("hc-choice-btn--correct");

    // Diğer butonları devre dışı bırak
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i !== card.correctAnswer && !btn.classList.contains("hc-choice-btn--wrong")) {
            btn.classList.add("hc-choice-btn--dimmed");
        }
    });

    // Geri bildirim ve açıklama
    showFeedback("correct", "Harika! Doğru cevap. 🎉");
    showExplanation(card);
    showPostActions();
    enableNextButton();
}

/* ==========================================================================
   GERİ BİLDİRİM ve AÇIKLAMA
   ========================================================================== */

function showFeedback(type, message) {
    DOM.cardFeedback.classList.remove("hc-card__feedback--correct", "hc-card__feedback--wrong");
    DOM.cardFeedback.classList.add("hc-visible", `hc-card__feedback--${type}`);
    DOM.feedbackMsg.textContent = message;
}

function showExplanation(card) {
    DOM.explanationTitle.textContent = card.answerTitle;
    DOM.explanationText.textContent = card.explanation;
    DOM.cardExplanation.classList.add("hc-visible");
}

function showPostActions() {
    DOM.cardPostActions.classList.add("hc-visible");
}

function handlePostAction(e) {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;

    const action = btn.dataset.action;
    const set = cardSets[STATE.currentSet];
    const cardIndex = STATE.queue[STATE.currentIndex];
    const card = set.cards[cardIndex];

    switch (action) {
        case "knew":
            // Kullanıcı zaten biliyordu - ekstra bir şey yapma
            break;
        case "learned":
            STATE.learnedCount++;
            break;
        case "repeat":
            // Kartı sıraya tekrar ekle
            if (!STATE.repeatQueue.includes(cardIndex)) {
                STATE.repeatQueue.push(cardIndex);
            }
            break;
    }

    // Butonları vurgula ve devre dışı bırak
    DOM.cardPostActions.querySelectorAll("button").forEach(b => {
        b.style.opacity = "0.5";
        b.disabled = true;
    });
    btn.style.opacity = "1";
    btn.style.borderColor = "var(--hc-primary)";
}

/* ==========================================================================
   NAVİGASYON
   ========================================================================== */

function goToNextCard() {
    if (STATE.currentIndex < STATE.queue.length - 1) {
        STATE.currentIndex++;
        renderCard();
    } else if (STATE.repeatQueue.length > 0) {
        // Tekrar kartlarını sıraya ekle
        STATE.queue = [...STATE.repeatQueue];
        STATE.repeatQueue = [];
        STATE.currentIndex = 0;
        renderCard();
    } else {
        // Tüm kartlar tamamlandı
        showCompletionScreen();
    }
}

function goToPrevCard() {
    if (STATE.currentIndex > 0) {
        STATE.currentIndex--;
        renderCard();
    }
}

function enableNextButton() {
    DOM.btnNext.disabled = false;
}

function updateNavigation() {
    const total = STATE.queue.length;
    const current = STATE.currentIndex + 1;

    DOM.navCounter.textContent = `${current} / ${total}`;
    DOM.btnPrev.disabled = STATE.currentIndex === 0;
    DOM.btnNext.disabled = !STATE.answered;
}

function updateProgress() {
    const total = STATE.queue.length;
    const answeredCount = Array.from(STATE.cardResults.values()).filter(r => r.correct).length;
    const percentage = Math.round((answeredCount / cardSets[STATE.currentSet].cards.length) * 100);

    DOM.progressBar.style.width = `${percentage}%`;

    // ARIA güncelle
    const progressEl = DOM.progressBar.parentElement;
    progressEl.setAttribute("aria-valuenow", percentage);
}

function updateStats() {
    DOM.statCorrect.textContent = STATE.correctCount;
    const totalCards = cardSets[STATE.currentSet].cards.length;
    const remaining = totalCards - STATE.cardResults.size;
    DOM.statRemaining.textContent = remaining >= 0 ? remaining : 0;
}

/* ==========================================================================
   TAMAMLAMA EKRANI
   ========================================================================== */

function showCompletionScreen() {
    const totalCards = cardSets[STATE.currentSet].cards.length;
    const repeatCount = STATE.repeatQueue.length;

    DOM.completeCorrect.textContent = STATE.correctCount;
    DOM.completeRepeat.textContent = repeatCount;

    // UI gizle/göster
    DOM.cardContainer.classList.add("hc-hidden");
    document.getElementById("card-nav").classList.add("hc-hidden");
    DOM.completeScreen.hidden = false;

    // Konfeti
    if (STATE.correctCount > totalCards / 2) {
        launchConfetti();
    }
}

/* ==========================================================================
   GÖRSEL HATA YÖNETİMİ
   ========================================================================== */

function handleImageError() {
    DOM.cardImage.classList.add("hc-hidden");
    DOM.cardPlaceholder.classList.add("hc-visible");
}

function handleImageLoad() {
    DOM.cardImage.classList.remove("hc-hidden");
    DOM.cardPlaceholder.classList.remove("hc-visible");
}

/* ==========================================================================
   KLAVYE DESTEĞİ
   ========================================================================== */

function handleKeyboard(e) {
    // Completion ekranı açıksa çık
    if (!DOM.completeScreen.hidden) return;

    switch (e.key) {
        case "1":
        case "2":
        case "3":
        case "4":
            e.preventDefault();
            const index = parseInt(e.key) - 1;
            const buttons = DOM.cardChoices.querySelectorAll(".hc-choice-btn");
            if (buttons[index] && !buttons[index].disabled) {
                buttons[index].click();
            }
            break;

        case "ArrowRight":
            e.preventDefault();
            if (!DOM.btnNext.disabled) {
                goToNextCard();
            }
            break;

        case "ArrowLeft":
            e.preventDefault();
            if (!DOM.btnPrev.disabled) {
                goToPrevCard();
            }
            break;

        case "Enter":
        case " ":
            // Aktif element bir butonsa tıkla
            if (document.activeElement && document.activeElement.tagName === "BUTTON") {
                e.preventDefault();
                document.activeElement.click();
            }
            break;
    }
}

/* ==========================================================================
   KONFETİ ANİMASYONU
   ========================================================================== */

function launchConfetti() {
    const canvas = DOM.confettiCanvas;
    const ctx = canvas.getContext("2d");

    // prefers-reduced-motion kontrolü
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ["#6C63FF", "#FF6B6B", "#FFC93C", "#4ECB71", "#64B5F6", "#FF8A65"];
    const PARTICLE_COUNT = 60;

    // Parçacık oluştur
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedY: Math.random() * 3 + 2,
            speedX: (Math.random() - 0.5) * 2,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10
        });
    }

    let animationId;
    let frame = 0;
    const MAX_FRAMES = 150; // ~2.5 saniye

    function animate() {
        frame++;
        if (frame > MAX_FRAMES) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            cancelAnimationFrame(animationId);
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Opaklık azalt
        const opacity = frame > MAX_FRAMES * 0.7
            ? 1 - ((frame - MAX_FRAMES * 0.7) / (MAX_FRAMES * 0.3))
            : 1;

        particles.forEach(p => {
            p.y += p.speedY;
            p.x += p.speedX;
            p.rotation += p.rotationSpeed;

            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
            ctx.restore();
        });

        animationId = requestAnimationFrame(animate);
    }

    animate();
}

/* ==========================================================================
   YARDIMCI FONKSİYONLAR
   ========================================================================== */

/**
 * Rengi açıklaştır veya koyulaştır
 * @param {string} hex - Hex renk kodu
 * @param {number} amount - Açıklama miktarı (pozitif = açık, negatif = koyu)
 * @returns {string} Yeni hex renk
 */
function adjustColor(hex, amount) {
    hex = hex.replace("#", "");
    const num = parseInt(hex, 16);
    let r = Math.min(255, Math.max(0, (num >> 16) + amount));
    let g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
    let b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}
