// URL parametresinden seviye bilgisi alıyoruz
const urlParams     = new URLSearchParams(window.location.search);
const selectedLevel = parseInt(urlParams.get("level"), 10);

// Seçilen seviyeye göre quiz verilerini filtreleme
const filteredSentences = quizData.filter(item => item.level === selectedLevel);

// HTML öğeleri
const optionsContainer = document.getElementById("optionsContainer");
const feedback         = document.getElementById("feedback");
const nextButton       = document.getElementById("nextButton");
const playButton       = document.getElementById("playButton");

// Geçersiz seviye kontrolü
if (!selectedLevel || filteredSentences.length === 0) {
  document.body.innerHTML = `
    <div style="margin: 50px; text-align:center;">
      <h2>Geçersiz seviye seçimi!</h2>
      <a href="cumle-seviye-secimi.html" style="text-decoration:none; color:#ff7a7a; font-weight:bold;">← Geri Dön</a>
    </div>
  `;
} else {
  let currentQuestionIndex = 0;
  let mistakeCount         = 0;

  loadQuestion();

  // Event Listeners
  playButton.addEventListener("click", speakCurrentSentence);
  nextButton.addEventListener("click", handleNext);

  function loadQuestion() {
    feedback.textContent = "";
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";

    const currentData = filteredSentences[currentQuestionIndex];
    if (!currentData) return;

    // Doğru + yanlış seçenekleri birleştiriyoruz
    const allOptions = [currentData.text, ...currentData.incorrectOptions];
    shuffleArray(allOptions);

    allOptions.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.addEventListener("click", () => checkAnswer(opt));
      optionsContainer.appendChild(btn);
    });
  }

  function checkAnswer(selectedOption) {
    const correctSentence = filteredSentences[currentQuestionIndex].text;
    if (selectedOption === correctSentence) {
      feedback.textContent = "Doğru!";
      feedback.style.color  = "green";
    } else {
      feedback.textContent = `Yanlış! Doğrusu: "${correctSentence}"`;
      feedback.style.color  = "red";
      mistakeCount++;
    }

    // Şıklar pasif hale gelsin
    const buttons = optionsContainer.querySelectorAll("button");
    buttons.forEach(b => (b.disabled = true));

    // Sonraki soru var mı?
    if (currentQuestionIndex < filteredSentences.length - 1) {
      nextButton.style.display = "inline-block";
    } else {
      // Son soruysa butonun metnini değiştiriyoruz
      nextButton.textContent = "Test Bitti";
      nextButton.style.display = "inline-block";
    }
  }

  function handleNext() {
    if (currentQuestionIndex < filteredSentences.length - 1) {
      currentQuestionIndex++;
      loadQuestion();
    } else {
      // Quiz bitti
      feedback.style.color = "blue";
      feedback.textContent = `Tebrikler, bu seviyeyi bitirdin! Toplam ${mistakeCount} yanlış yaptın.`;
      nextButton.style.display = "none";
    }
  }

  // Cümleyi seslendirme fonksiyonu
  function speakCurrentSentence() {
    const currentSentence = filteredSentences[currentQuestionIndex].text;
    if (!currentSentence) return;

    const allVoices    = speechSynthesis.getVoices();
    let turkishVoice   = allVoices.find(voice => voice.lang.startsWith("tr"));

    if (!turkishVoice) {
      // Bazı tarayıcılarda ses listesi geç yüklenebilir
      speechSynthesis.onvoiceschanged = () => {
        turkishVoice = speechSynthesis.getVoices().find(voice => voice.lang.startsWith("tr"));
        speakWithVoice(currentSentence, turkishVoice);
      };
    } else {
      speakWithVoice(currentSentence, turkishVoice);
    }
  }

  function speakWithVoice(text, voice) {
    const utterance = new SpeechSynthesisUtterance(text);
    if (voice) {
      utterance.voice = voice;
    }
    speechSynthesis.speak(utterance);
  }

  // Dizi karıştırma fonksiyonu
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
