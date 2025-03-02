// URL parametresinden "level" bilgisini alıyoruz
const urlParams = new URLSearchParams(window.location.search);
const selectedLevel = parseInt(urlParams.get("level"), 10);

// Seçili seviyeye ait verileri filtreliyoruz
const filteredReadings = readingData.filter(item => item.level === selectedLevel);

// HTML öğelerini seçiyoruz
const readingText    = document.getElementById("readingText");
const questionText   = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const feedback       = document.getElementById("feedback");
const nextButton     = document.getElementById("nextButton");

// Eğer geçersiz seviye ise kullanıcıyı uyarıyoruz
if (!selectedLevel || filteredReadings.length === 0) {
  document.body.innerHTML = `
    <div style="margin: 50px; text-align:center;">
      <h2>Geçersiz seviye seçimi!</h2>
      <a href="okuma-seviye-secimi.html" style="text-decoration:none; color:#ff7a7a; font-weight:bold;">← Geri Dön</a>
    </div>
  `;
} else {
  let currentQuestionIndex = 0;
  let mistakeCount         = 0;

  loadQuestion();

  // "Sonraki Soru" butonuna tıklayınca
  nextButton.addEventListener("click", handleNext);

  function loadQuestion() {
    // Arayüz sıfırlama
    feedback.textContent          = "";
    optionsContainer.innerHTML    = "";
    nextButton.style.display      = "none";

    const currentData = filteredReadings[currentQuestionIndex];
    if (!currentData) return;

    // Metin ve soru alanlarını dolduruyoruz
    readingText.textContent  = currentData.text;
    questionText.textContent = currentData.question;

    // Şıkları karıştırıp ekliyoruz
    const allOptions = [currentData.correctAnswer, ...currentData.incorrectOptions];
    shuffleArray(allOptions);

    allOptions.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.addEventListener("click", () => checkAnswer(option, currentData.correctAnswer));
      optionsContainer.appendChild(btn);
    });
  }

  function checkAnswer(selectedOption, correctAnswer) {
    // Tıklanılan seçenek doğru mu?
    if (selectedOption === correctAnswer) {
      feedback.textContent = "Doğru!";
      feedback.style.color  = "green";
    } else {
      feedback.textContent = `Yanlış! Doğru cevap: "${correctAnswer}"`;
      feedback.style.color  = "red";
      mistakeCount++;
    }

    // Tüm şıkları pasif hale getir
    const buttons = optionsContainer.querySelectorAll("button");
    buttons.forEach(b => (b.disabled = true));

    // Sonraki soru veya test bitişi
    if (currentQuestionIndex < filteredReadings.length - 1) {
      nextButton.style.display = "inline-block";
    } else {
      nextButton.textContent    = "Test Bitti";
      nextButton.style.display  = "inline-block";
    }
  }

  function handleNext() {
    if (currentQuestionIndex < filteredReadings.length - 1) {
      currentQuestionIndex++;
      loadQuestion();
    } else {
      // Tüm sorular bitti
      feedback.style.color = "blue";
      feedback.textContent = `Tebrikler, bu seviyeyi bitirdiniz! Toplam ${mistakeCount} yanlış yaptınız.`;
      nextButton.style.display = "none";
    }
  }

  // Basit karıştırma fonksiyonu
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
