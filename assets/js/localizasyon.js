// Process translation
$(function () {
  var lang = getCookie("_culture");
  if (lang == null) {
    lang = navigator.language.substring(0, 2);

    if (!lang.length > 0) {
      lang = "tr";
    }
  }
  document.documentElement.lang = lang;
  if (lang == "ar") {
    $(".boxed_wrapper").addClass("rtl");
  } else {
    $(".boxed_wrapper").removeClass("rtl");
  }

  $('.lang').each(function (index, item) {
    $(this).text(arrLang[lang][$(this).attr('key')]);
  });

  //$body.attr("lang").val() = arrLang[lang][$(this).attr('dil')] 
  $('.lang').each(function (index, item) {
    $(this).text(arrLang[lang][$(this).attr('key')]);
    //href atrribute için
    //$(this).attr("href", arrLangLink[lang][$(this).attr('key')]);
  });

  $('.translate').click(function () {
    var lang = $(this).attr('id');
    document.cookie = "_culture=" + lang + "; path=/";
    document.documentElement.lang = lang;
    if (lang == "ar") {
      $(".boxed_wrapper").addClass("rtl");
    } else {
      $(".boxed_wrapper").removeClass("rtl");
    }
    $('.lang').each(function (index, item) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});

var arrLang = {
  'tr': {
    // 'Değişken' : 'Değişken Değeri'
    //navigasyon menü
    'anasayfa': 'Anasayfa',
    'kurumsal': 'Kurumsal',
    'hakkimiz': 'Hakkımızda',
    'urunler': 'Ürünlerimiz',
    'urundetay': 'Ürün Detay',
    'hizmetler': 'Hizmetlerimiz',
    'blog': 'Blog',
    'basin': 'Basında Biz',
    'iletisim': 'İletişim',

    'sizinihtiyaciniz': 'Sizin İhtiyacınız Hangsi?',
    'hizmetlerimiz': 'Hizmetlerimiz',

    //hakkımızda
    'hakkimizdaaltbaslik': 'Bizi Tanıyın',
    'hakkimizkisayazi': 'Halen Türkiye’de toptan bal ticaretini devam ettiren firmamız, 2006 yılında Almanya’nın Berlin şehrinde bir paketleme tesisi kurarak faaliyetlerine burada devam etme kararı almıştır.',
    'hakkimizyazi': 'Yazılım sektöründe edinmiş olduğumuz 15 yıllık tecrübemiz ışığında 2018 yılında kurulduk. Kıta Yazılım olarak genç ,yenilikçi, dinamik bir ekipten oluşuyoruz. Sahip olduğumuz bilgi birikimimizi, mühendislik çözümlerimizi ve dinamik yapımızla yaratıcı ve inovatif çözümlerimizi müşteri odaklı yaklaşımımızla birleştiriyoruz. Müşteri memnuniyetimizi en üst düzeye taşımayı gaye ediniyoruz. Bunun için ihtiyacınızı dinliyor, fikirlerinize değer veriyoruz. En uygun metot en az maliyetle hazırladığımız programla, farklı programlarla yürütmek zorunda kaldığınız faaliyetlerinizi tek bir noktada topluyoruz. Şirketlerinizin ve bağlı varlıklarınızın, en iyi şekilde yönetilmesine, üretim sürecinizin planlanmasına katkıda bulunmak istiyoruz. Aynı zamanda firmanızdaki en karmaşık sorunlarınıza çözümler üreterek devam etmekte olan süreçlerinizde de herhangi bir aksamanın meydana gelmesine izin vermeden, kurumunuz için hesaplanabilen sonuçların ortaya çıkmasını amaçlıyoruz.',
    'hakkimizdabuton': 'Daha Fazla',

    //ürünlerimiz
    'urunlerimiz': 'Ürünlerimiz',
    'magazaziyaret': 'Mağazamızı Ziyaret Edin',
    'tumurunler': 'Tüm Ürünleri Göster',

    'sizdengelenler': 'Sizden Gelenler',
    'nedediler': 'Ne Söylediler?',

    'referanslaralt': 'Bizi Tercih Ettiler',
    'referanslarimiz': 'Referanslarımız',

    'bizeulasin': 'Bize Ulaşın',
    'iletisimdekal': 'İletişimde Kalın',
    'iletisimalt': 'Sizleri ağırlamaktan memnuniyet duyarız.',
    'ofis': 'Ofis',
    'merkez': 'Merkez',
    'telefon': 'Telefon',
    'email': 'Email',
    '': '',

    // iletişim Formu
    'formadi': 'Adınız',
    'formemail': 'Email Adresiniz',
    'formtelefon': 'Telefon',
    'formkonu': 'Konu',
    'formmesaj': 'Mesajınız',
    'butongonder': 'Gönder',

  },
  'en': {
    //navigasyon menü
    'telefon': 'PHONE',
    'mail': 'EMAIL',
    'anasayfa': 'Home',
    'kurumsal': 'Cooparate',
    'hakkimiz': 'About Us',
    'urunler': 'Our Products',
    'urundetay': 'Product Detail',
    'galeri': 'Gallery',
    'vizyon': 'VISION & MISSION',
    'kalite': 'QUALİTY POLICY',
    'cevre': 'EOHS',
    'iletisim': 'Contact',

    //slaytlar
    'slide1h1': 'Fresh & Natural',
    'slide1subject': 'Beekeeping',
    'slide1content': 'Everything is natural and everything is the best.',
    'slide1linktext': 'Detail',
    'slide1link2text': 'Go to shop',

    'slide2h1': 'Fresh & Natural',
    'slide2subject': 'Beekeeping',
    'slide2content': 'Everything is natural and everything is the best.',
    'slide2linktext': 'Detail',
    'slide2link2text': 'Go to shop',

    'slide3h1': 'Fresh & Natural',
    'slide3subject': 'Beekeeping',
    'slide3content': 'Everything is natural and everything is the best.',
    'slide3linktext': 'Detail',
    'slide3link2text': 'Go to shop',

    'hakkimizdaaltbaslik': 'Who We Are',
    'hakkimizbaslik': 'Trust and Experience of years',
    'firmatarihi': 'Company History',
    'firmatarihikisayazi': 'Our company has been a wholesale supplier and retail trader of distinguished honeys of Mugla, Marmariz, Koycegiz and Eastern Anatolia since 1982.',
    'hakkimizkisayazi': 'Halen Türkiye’de toptan bal ticaretini devam ettiren firmamız, 2006 yılında Almanya’nın Berlin şehrinde bir paketleme tesisi kurarak faaliyetlerine burada devam etme kararı almıştır.',
    'hakkimizuzunyazi': 'Our company has been a wholesale supplier and retail trader of distinguished honeys of Mugla, Marmariz, Koycegiz and Eastern Anatolia since 1982. In addition to our existing honey wholesale in Turkey, we decided to establish another independent production plant for our spread in Berlin-Germany in 2006. We did so to be able to offer a high quality product, ensure short distance to the market and also to the end consumer as well as keeping time and effort of transportation as efficiently as possible to supply our client’s orders quickly and continually. For our products we use only selected honey such as pine honey from Marmaris region, high quality flower honeys from Eastern Anatolia uplands or comb honeys from several regions of the world. By enrichment of glucose with high quality honey we produce a spread which meets the taste especially of Turks, Arabs and other target groups. Our products have been put on the market in all parts of Germany and Europe and they taken their part in shelves in distinguished shops with ASBAL brand.',
    'hakkimizdabuton': 'Learn More',

    'urunlerimiz': 'Our Products',
    'magazaziyaret': 'Visit Our Store',
    'tumurunler': 'Tüm Ürünleri Göster',

    'bizeulasin': 'Contact Us',
    'iletisimalt': 'Its our pleasure to welcome you.',

    //Bloglar
    'bloglar': 'Blog Yazıları',
    'blogdetay': 'Blog Detayı',
    'dahafazla': 'Deha Fazla',

    // iletişim Formu
    'formadi': 'Your Name',
    'formemail': 'Your Email',
    'formtelefon': 'Your Phone',
    'formkonu': 'Subject',
    'formmesaj': 'Your Message',
    'butongonder': 'Send',

    // kurumsal- cevre
    'cevre_adi': 'Environmental&Occupational Health and Safety',
    'cevre1': 'Ronesans Teknik adapts making the most of its capabilities to meet the demands of its customers as a principle with its experience in the sector of more than fifteen years.',
    'cevre2': 'In order to sustain continuity at customer satisfaction, we constantly upgrade our service policies. We will keep on being innovative, pioneering and trustworthy to meet the changing and developing market conditions in a rapid, economical and sterling way.',
    'cevre3': '',

    // kurumsal- kalite politikası
    'kalite1': 'Ronesans Teknik adapts making the most of its capabilities to meet the demands of its customers as a principle with its experience in the sector of more than fifteen years.',
    'kalite2': 'In order to sustain continuity at customer satisfaction, we constantly upgrade our service policies. We will keep on being innovative, pioneering and trustworthy to meet the changing and developing market conditions in a rapid, economical and sterling way.',

    // kurumsal- vizyon misyon
    'vizyon_adi': 'Our Vision',
    'misyon_adi': 'Our Mission',
    'vizyon1': 'Becoming the fastest, most sterling and trustworthy supplier of the sector by making the most of all the resources and data to meet the customers demands.',
    'misyon1': 'To be able to present a sterling and rapid service at its best, to turn it into a sustainable service policy, to reach an operational excellence and to raise our value in every business we do in order to create a value for our customers.',

    // kurumsal- hakkımızda
    'hakkimizda1': 'Ronesans Teknik adapts making the most of its capabilities to meet the demands of its customers as a principle with its experience in the sector of more than fifteen years.',
    'hakkimizda2': 'In order to sustain continuity at customer satisfaction, we constantly upgrade our service policies. We will keep on being innovative, pioneering and trustworthy to meet the changing and developing market conditions in a rapid, economical and sterling way.',
    'hakkimizda3': '',
  },
  'fr': {

  },
  'de': {

  },
  'ar': {

  }
};


function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}