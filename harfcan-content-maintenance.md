# Harfcan İçerik Bakım Rehberi

Bu workspace'te Harfcan'a yeni herkese açık oyun, masal, bilim yazısı veya etkinlik eklerken bu rehberi uygula.

## Amaç
Harfcan'da yeni içerik yalnızca kendi sayfası olarak kalmamalı; doğru kataloglarda görünmeli, veliler için keşfedilebilir olmalı ve mevcut görsel/öğretici deneyimle uyumlu olmalıdır.

## Yeni oyun eklenince
1. Mevcut Harfcan oyun tasarımını kullan: açık gökyüzü/krem arka plan, beyaz yuvarlatılmış kartlar, koyu indigo metin, mor ana eylemler ve `harfcan-shell.css` oyun navigasyonu.
2. Çocuk oyun oynamadan önce yaşa uygun kısa bir öğrenme bölümü görmelidir: üç küçük bilgi kartı, sonra açık bir `Oyuna geç →` durumu, sonra oyun.
3. Oyunun ne öğrettiği net olmalıdır; rastgele tıklama yerine tahmin → deney → açıklama veya benzeri anlamlı bir döngü kullanılmalıdır.
4. İlgili merkez sayfasını güncelle:
   - Okuma/yazma oyunu: `okuma-yazma-oyunlari.html`
   - Bilim oyunu: `bilim-oyunlari.html`
   - Eğlence etkinliği: uygun ana sayfa veya etkinlik merkezi
5. `tum-icerikler.html` içindeki `content` dizisine başlık, bağlantı, tür, açıklama ve gerçek eklenme tarihiyle ekle. Yeni içerik için `isNew` değerini etkinleştir.
6. İçerik veliler için iyi bir başlangıç örneğiyse `buradan-basla.html` içindeki rota, haftalık keşif listesi veya Yeni Eklenenler alanını güncelle.

## Yeni bilim yazısı eklenince
1. Mevcut `fen-*.html` yazı şablonunu izle: Harfcan bilim yazısı navigasyonu, çocuk dostu kısa paragraflar, bilgi kutuları, düşünme soruları ve yazdırma seçeneği.
2. Yazıyı doğru bilim kategorisine ekle ve kategori sayısındaki yazı adetini güncelle:
   - `fen-uzay-ve-gokyuzu.html`
   - `fen-dunya-ve-doga.html`
   - `fen-canlilar.html`
   - `fen-fizik-ve-bilim.html`
   - `fen-insan-vucudu.html`
3. `fen-yazilari.html` içindeki kategori kartının yazı sayısını ve açıklamasını gerekiyorsa güncelle.
4. `tum-icerikler.html` kataloğuna gerçek eklenme tarihiyle ekle; uygun olduğunda `buradan-basla.html` Yeni Eklenenler veya bilim rotasında göster.

## Yeni masal veya hikâye eklenince
1. Mevcut masal sayfalarının açık Harfcan görünümünü, düşünme kutusunu ve yazdırma deneyimini koru.
2. `masal-ve-hikaye.html` merkezine kart ekle.
3. `tum-icerikler.html` kataloğuna `masal` türü ve gerçek eklenme tarihiyle ekle.
4. Uygunsa `buradan-basla.html` masal rotasını veya haftalık keşif önerisini güncelle.

## Katalog ve bağlantı kuralları
- Eklenme tarihini tahmin etme. Bilinen gerçek tarihi kullan; tarih belirsizse önce kullanıcıya sor.
- Her yeni **indekslenebilir** kamuya açık HTML sayfası eklendiğinde, ayrıca her indekslenebilir kamuya açık sayfa silindiğinde veya yeniden adlandırıldığında `sitemap.xml` kaydını aynı değişiklikte zorunlu olarak ekle, güncelle ya da kaldır. Oyun giriş sayfası, merkez/kategori sayfası ve yazı/masal sayfası dahil hiçbir indekslenebilir kamuya açık URL sitemap dışında bırakılmamalıdır. `noindex` olarak işaretlenmiş teknik oyun ekranları veya yönlendirme sayfaları sitemap'e eklenmez.
- Yeni sayfaya doğru merkezden bağlantı ver; oyun sayfalarında doğru dönüş bağlantısı bulunmalıdır.
- İçerik başlığı, açıklaması, emoji/türü ve bağlantısı tüm kataloglarda aynı anlamı taşımalıdır.
- İçerik kaldırılır veya yeniden adlandırılırsa katalog, merkez sayfası, rota, haftalık liste ve sitemap bağlantılarını da güncelle.

## SEO ve indeksleme
- Her indekslenebilir yeni sayfaya, içeriğin ne olduğunu ve sınıf/öğrenme bağlamını doğal biçimde anlatan benzersiz bir `<title>` ile `<meta name="description">` ekle. Anahtar kelimeleri gereksiz tekrar etme.
- Aynı içeriğin arama sonuçlarında görünmesini istediğin tek bir ana URL belirle ve bu sayfaya mutlak URL ile kendini gösteren `<link rel="canonical">` ekle.
- Doğrudan oyun motoru, yönlendirme veya tekrar niteliğindeki teknik sayfalarda `noindex, follow` kullan; canonical değerini ana öğretici/giriş sayfasına ver. Bu tür `noindex` sayfaları sitemap'e ekleme.
- Yeni indekslenebilir sayfaya ana sayfadan, doğru merkez sayfasından ve uygun olduğunda `tum-icerikler.html` ile `buradan-basla.html` sayfalarından metinle anlamlı bağlantılar ver.
- İndekslenebilir bir sayfanın başlığı, açıklaması, öğrenme odağı ve bağlantı metni; merkez sayfası, katalog ve veli alanında aynı anlamı taşımalıdır.
- SEO ayarları sayfanın indekslenmesini ve doğru anlaşılmasını destekler; arama sonuçlarında sıra garantisi vermez.

## Veli deneyimi
- `buradan-basla.html` velinin yön bulma alanıdır: baskısız, kısa, seçilebilir rotalar sun.
- `Bu Haftaki Keşiflerimiz` listesi zorunlu ödev veya seri değildir. “Skor yok; küçük keşifler var” tonunu koru.
- Yerel işaretler yalnızca aynı cihaz/tarayıcıda saklanır; hesap veya kişisel veri isteme.
- `tum-icerikler.html` tüm kamuya açık oyun, masal ve bilim yazılarını filtreleme ve aramayla erişilebilir tutmalıdır.

## Doğrulama
- Her HTML/CSS değişiminden sonra ilgili dosyalarda tanılama çalıştır.
- Gömülü JavaScript değiştiyse `<script>` içeriği için Node ile sözdizimi kontrolü yap.
- Yeni veya değişen bağlantıların hedef dosyalarının var olduğunu doğrula.
- Kullanıcı açıkça istemedikçe test, hesap sistemi, analiz aracı, bağımlılık, commit veya push ekleme.
