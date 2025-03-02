// Okuma Anlama - Seviye Verileri
const readingData = [
  // Seviye 1 (Kolay)
  {
    level: 1,
    text: "Ali sabah erkenden kalktı. Kahvaltıda peynir ve ekmek yedi. Sonra okula gitti.",
    question: "Ali kahvaltıda ne yedi?",
    correctAnswer: "Peynir ve ekmek.",
    incorrectOptions: [
      "Yumurta ve reçel.",
      "Hiçbir şey yemedi.",
      "Simit ve çay."
    ]
  },
  {
    level: 1,
    text: "Buse parka gitti. Arkadaşlarıyla top oynadı. Eve dönünce annesine yardım etti.",
    question: "Buse, parka gittikten sonra ne yaptı?",
    correctAnswer: "Arkadaşlarıyla top oynadı.",
    incorrectOptions: [
      "Bir şey yemedi.",
      "Uyuyup kaldı.",
      "Kitap okuyup ders çalıştı."
    ]
  },
  {
    level: 1,
    text: "Kedi su içer, koşar ve oynar. Çok enerjik bir hayvandır.",
    question: "Kedi ne yapar?",
    correctAnswer: "Koşar ve oynar.",
    incorrectOptions: [
      "Hiç hareket etmez.",
      "Yalnızca uçmayı sever.",
      "Suda yüzer."
    ]
  },

  // Seviye 2 (Orta)
  {
    level: 2,
    text: "Yağmur sabah erkenden uyandı. Kahvaltıdan sonra ödevlerini bitirdi ve bahçede çiçek suladı.",
    question: "Yağmur, kahvaltıdan sonra ne yaptı?",
    correctAnswer: "Ödevlerini bitirdi ve çiçek suladı.",
    incorrectOptions: [
      "Hemen uyudu.",
      "Parka gidip koştu.",
      "Arkadaşlarıyla telefonda konuştu."
    ]
  },
  {
    level: 2,
    text: "Öğretmen sınıfa girdiğinde tüm öğrenciler sessizce yerine oturdu. Derste yeni konular anlatıldı ve sorular çözülmeye başlandı.",
    question: "Öğretmen sınıfa girdiğinde ne oldu?",
    correctAnswer: "Öğrenciler sessizce oturdu ve dersi dinledi.",
    incorrectOptions: [
      "Öğrenciler dışarıya kaçtı.",
      "Herkes gürültü yaptı.",
      "Konular tekrar edildi ama sorular çözülmedi."
    ]
  },
  {
    level: 2,
    text: "Babam dün akşam yemeğinden sonra benimle birlikte bulmaca çözdü. Ardından birlikte film izledik.",
    question: "Babası akşam yemeğinden sonra ne yaptı?",
    correctAnswer: "Çocuğuyla bulmaca çözdü, sonra film izledi.",
    incorrectOptions: [
      "Hemen yatıp uyudu.",
      "Yemeğe hiç oturmadı.",
      "Arkadaşlarıyla dışarı çıktı."
    ]
  },

  // Seviye 3 (Zor)
  {
    level: 3,
    text: "Can, hafta sonu için büyük bir gezi planladı. Sabah erken saatte trenle farklı şehirlere giderek müzeleri ziyaret etti ve birçok fotoğraf çekti.",
    question: "Can hafta sonu ne yaptı?",
    correctAnswer: "Farklı şehirlere gidip müzeleri gezdi, fotoğraflar çekti.",
    incorrectOptions: [
      "Evde kaldı ve hiç dışarı çıkmadı.",
      "Spor salonunda bütün gün koşu yaptı.",
      "Sadece arkadaşlarıyla lokantada yemek yedi."
    ]
  },
  {
    level: 3,
    text: "Esra, proje ödevini hazırlarken birçok kaynak okudu. Sunumunu tamamlamak için gece geç saatlere kadar çalıştı ve sabah öğretmenine teslim etti.",
    question: "Esra proje ödevini nasıl hazırladı?",
    correctAnswer: "Birçok kaynak okudu, gece geç saatlere kadar çalıştı ve sabah teslim etti.",
    incorrectOptions: [
      "Hiç uğraşmadı, tamamen unuttu.",
      "Sadece arkadaşı Ali’nin ödevini kopyaladı.",
      "Öğretmenine mail ile gönderdi."
    ]
  },
  {
    level: 3,
    text: "Arda, yeni bir müzik aleti çalmayı öğrenmek istedi. Bu nedenle her gün düzenli olarak pratik yaptı ve bir ay sonra ilk şarkısını çalabilecek hale geldi.",
    question: "Arda nasıl müzik aleti çalmayı öğrendi?",
    correctAnswer: "Her gün düzenli pratik yaparak bir ay sonunda şarkı çalabildi.",
    incorrectOptions: [
      "Hiç çalışmadan bir haftada öğrendi.",
      "Sadece videolar izledi ama denemedi.",
      "Aletin ne olduğunu bile bilmiyordu."
    ]
  }
];
