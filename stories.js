const stories = {
  // Seviye 1 - Kolay (max 2 cümle)
  "1-1": {
    title: "Ayşe'nin Topu",
    text: "Ayşe bahçede kırmızı topunu oynattı. Top birden çalılıklara kaçtı.",
    questions: [
      { q: "Ayşe nerede oynadı?", options: ["Evde", "Bahçede", "Parkta"], answer: "Bahçede" },
      { q: "Top nereye kaçtı?", options: ["Ağaca", "Çalılıklara", "Yola"], answer: "Çalılıklara" }
    ]
  },
  "1-2": {
    title: "Küçük Kedi",
    text: "Bir küçük kedi pencerenin önüne geldi. Miyavlayarak mama istedi.",
    questions: [
      { q: "Kedi nereye geldi?", options: ["Parka", "Pencereye", "Bahçeye"], answer: "Pencereye" },
      { q: "Kedi ne istedi?", options: ["Su", "Mama", "Top"], answer: "Mama" }
    ]
  },
  "1-3": {
    title: "Emre'nin Balonu",
    text: "Emre mavi bir balon aldı. Rüzgar balonu uçurdu.",
    questions: [
      { q: "Balonun rengi neydi?", options: ["Kırmızı", "Mavi", "Yeşil"], answer: "Mavi" },
      { q: "Balona ne oldu?", options: ["Patladı", "Uçtu", "Kayboldu"], answer: "Uçtu" }
    ]
  },
  "1-4": {
    title: "Deniz ve Karpuz",
    text: "Deniz mutfakta karpuz kesti. Tatlı karpuzu afiyetle yedi.",
    questions: [
      { q: "Deniz ne kesti?", options: ["Elma", "Karpuz", "Armut"], answer: "Karpuz" },
      { q: "Karpuz nasıldı?", options: ["Ekşi", "Tatlı", "Acı"], answer: "Tatlı" }
    ]
  },

  // Seviye 2 - Orta
  "2-1": {
    title: "Ali ve Küçük Kuş",
    text: "Bir sabah Ali bahçeye çıktı. Çimenlerin üstünde küçük bir kuş buldu. Kuşun kanadı kırılmıştı. Ali kuşu eve götürdü, küçük bir kutuya koydu ve ona iyi bakmaya başladı. Birkaç hafta sonra kuş iyileşti ve tekrar uçabildi. Ali onu bahçeye bıraktı. Kuş minnetle Ali'nin etrafında birkaç tur uçtu ve gökyüzüne doğru yükseldi.",
    questions: [
      { q: "Ali bahçede ne buldu?", options: ["Bir köpek", "Bir kuş", "Bir çiçek"], answer: "Bir kuş" },
      { q: "Kuş neden uçamıyordu?", options: ["Yorgundu", "Kanadı kırılmıştı", "Açtı"], answer: "Kanadı kırılmıştı" },
      { q: "Kuş iyileştikten sonra ne yaptı?", options: ["Ali'nin yanında kaldı", "Başka yere uçtu", "Yuvaya gitti"], answer: "Başka yere uçtu" }
    ]
  },
  "2-2": {
    title: "Mavi Balık",
    text: "Derin denizlerde küçük bir mavi balık yaşardı. Bir gün büyük bir fırtına çıktı ve mavi balık yuvasından uzaklaştı. Yolculuğu sırasında birçok arkadaş edindi. Sonunda yuvasına geri döndüğünde, artık yalnız olmadığını fark etti.",
    questions: [
      { q: "Mavi balık nerede yaşıyordu?", options: ["Nehirde", "Denizde", "Gölda"], answer: "Denizde" },
      { q: "Balık neden yuvasından uzaklaştı?", options: ["Fırtına nedeniyle", "Kendi isteğiyle", "Bir avcıdan kaçarken"], answer: "Fırtına nedeniyle" },
      { q: "Balık yolculuğunda ne yaptı?", options: ["Arkadaş edindi", "Yuva yaptı", "Kayıp oldu"], answer: "Arkadaş edindi" }
    ]
  },
  "2-3": {
    title: "Parkta Bir Gün",
    text: "Can sabah parka gitti. Salıncağa bindi ve çok eğlendi. Dönüşte bir dondurma aldı.",
    questions: [
      { q: "Can nereye gitti?", options: ["Okula", "Parka", "Bahçeye"], answer: "Parka" },
      { q: "Can parkta ne yaptı?", options: ["Kaydıraktan kaydı", "Salıncağa bindi", "Koştu"], answer: "Salıncağa bindi" },
      { q: "Dönüşte ne aldı?", options: ["Su", "Dondurma", "Çikolata"], answer: "Dondurma" }
    ]
  },
  "2-4": {
    title: "Yağmurlu Gün",
    text: "Sabah yağmur yağıyordu. Zeynep şemsiyesini aldı ve dışarı çıktı. Renkli yağmurluk giymişti.",
    questions: [
      { q: "Sabah hava nasıldı?", options: ["Güneşli", "Yağmurlu", "Rüzgarlı"], answer: "Yağmurlu" },
      { q: "Zeynep ne aldı?", options: ["Şemsiye", "Mont", "Atkı"], answer: "Şemsiye" },
      { q: "Zeynep nasıl bir yağmurluk giydi?", options: ["Renkli", "Siyah", "Beyaz"], answer: "Renkli" }
    ]
  },

  // Seviye 3 - Zor (3+ cümleli uzun hikayeler)
  "3-1": {
    title: "Ormandaki Macera",
    text: "Bir gün Mehmet ve Zeynep ormanda yürüyüşe çıktılar. Kuş seslerini dinlediler, çiçek topladılar. Aniden gökyüzü karardı ve yağmur başladı. Koşarak büyük bir ağacın altına sığındılar. Yağmur durduğunda gökyüzünde kocaman bir gökkuşağı gördüler.",
    questions: [
      { q: "Mehmet ve Zeynep nereye gittiler?", options: ["Parka", "Ormana", "Okula"], answer: "Ormana" },
      { q: "Yağmur başlayınca ne yaptılar?", options: ["Koşarak eve döndüler", "Bir ağacın altına sığındılar", "Islanmaya devam ettiler"], answer: "Bir ağacın altına sığındılar" },
      { q: "Yağmurdan sonra ne gördüler?", options: ["Bir ayı", "Bir gökkuşağı", "Bir balık"], answer: "Bir gökkuşağı" }
    ]
  },
  "3-2": {
    title: "Kayıp Oyuncak",
    text: "Elif en sevdiği oyuncak ayısını kaybetti. Evde her yeri aradı ama bulamadı. Sonunda büyükbabasının koltuğunun arkasına baktı. Ayıcığını orada bulunca çok mutlu oldu ve hemen sarıldı.",
    questions: [
      { q: "Elif neyi kaybetti?", options: ["Bir kitabı", "Oyuncak ayısını", "Bir kalemi"], answer: "Oyuncak ayısını" },
      { q: "Oyuncağını nerede buldu?", options: ["Bahçede", "Koltuğun arkasında", "Odada"], answer: "Koltuğun arkasında" },
      { q: "Ayıcığını bulunca ne yaptı?", options: ["Ağladı", "Sarılıp sevindi", "Hemen sakladı"], answer: "Sarılıp sevindi" }
    ]
  },
  "3-3": {
    title: "Uçurtma Şenliği",
    text: "Kasabada büyük bir uçurtma şenliği vardı. Çocuklar rengarenk uçurtmalarını gökyüzüne saldılar. Ege'nin uçurtması en yükseğe çıktı. Gün batımında herkes mutlu bir şekilde evlerine döndü.",
    questions: [
      { q: "Kasabada ne vardı?", options: ["Futbol turnuvası", "Uçurtma şenliği", "Konser"], answer: "Uçurtma şenliği" },
      { q: "Ege'nin uçurtması ne yaptı?", options: ["Kayboldu", "En yükseğe çıktı", "Düştü"], answer: "En yükseğe çıktı" },
      { q: "Herkes ne zaman evine döndü?", options: ["Öğlen", "Gün batımında", "Gece"], answer: "Gün batımında" }
    ]
  },
  "3-4": {
    title: "Sınıf Gezisi",
    text: "Okulun düzenlediği gezi için öğrenciler müzeye gitti. Rehber, eski zamanlara ait eşyaları tanıttı. Öğrenciler çok ilginç şeyler öğrendi. Geziden sonra parkta piknik yaptılar.",
    questions: [
      { q: "Öğrenciler nereye gitti?", options: ["Müzeye", "Hayvanat bahçesine", "Kütüphaneye"], answer: "Müzeye" },
      { q: "Rehber ne tanıttı?", options: ["Kitaplar", "Eski eşyalar", "Müzik aletleri"], answer: "Eski eşyalar" },
      { q: "Gezi sonrası ne yaptılar?", options: ["Yemekhaneye gittiler", "Piknik yaptılar", "Eve döndüler"], answer: "Piknik yaptılar" }
    ]
  }
};
