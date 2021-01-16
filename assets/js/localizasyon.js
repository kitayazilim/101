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
    'hizmetler': 'Hizmetlerimiz',
    'blog': 'Blog',
    'basin': 'Basında Biz',
    'iletisim': 'İletişim',

    //layout
    'hizlimenu': 'Hızlı Menü',

    'welcome': 'Kıta Yazılıma hoş geldiniz.',
    'heroheader': 'Yazılım Çözümleri ve Destek Hizmetleri',
    'heroalt': 'Satış öncesi ve sonrası her zaman firmanızın yanında olmaya devam ediyoruz',

    'sizinihtiyaciniz': 'Sizin İhtiyacınız Hangisi?',
    'hizmetlerimiz': 'Hizmetlerimiz',

    //hakkımızda
    'hakkimizdaaltbaslik': 'Bizi Tanıyın',
    'hakkimizyazi': 'Yazılım sektöründe edinmiş olduğumuz 15 yıllık tecrübemiz ışığında 2018 yılında kurulduk. Kıta Yazılım olarak genç ,yenilikçi, dinamik bir ekipten oluşuyoruz. Sahip olduğumuz bilgi birikimimizi, mühendislik çözümlerimizi ve dinamik yapımızla yaratıcı ve inovatif çözümlerimizi müşteri odaklı yaklaşımımızla birleştiriyoruz. Müşteri memnuniyetimizi en üst düzeye taşımayı gaye ediniyoruz. Bunun için ihtiyacınızı dinliyor, fikirlerinize değer veriyoruz. En uygun metot en az maliyetle hazırladığımız programla, farklı programlarla yürütmek zorunda kaldığınız faaliyetlerinizi tek bir noktada topluyoruz. Şirketlerinizin ve bağlı varlıklarınızın, en iyi şekilde yönetilmesine, üretim sürecinizin planlanmasına katkıda bulunmak istiyoruz. Aynı zamanda firmanızdaki en karmaşık sorunlarınıza çözümler üreterek devam etmekte olan süreçlerinizde de herhangi bir aksamanın meydana gelmesine izin vermeden, kurumunuz için hesaplanabilen sonuçların ortaya çıkmasını amaçlıyoruz.',
    'hakkimizdabuton': 'Daha Fazla',

    //ürünlerimiz
    'urunlerimiz': 'Ürünlerimiz',
    'urundetay': 'Ürün Detayı',
    'tumurunler': 'Tüm Ürünleri Göster',

    //Bloglar
    'sonbloglar': 'Son Yazılan Bloglar',
    'bloglar': 'Blog Yazıları',
    'blogdetay': 'Blog Detayı',
    'dahafazla': 'Daha Fazla',

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
    'anasayfa': 'Home',
    'kurumsal': 'Cooparate',
    'hakkimiz': 'About Us',
    'urunler': 'Our Products',
    'urundetay': 'Product Detail',
    'hizmetler': 'Our Services',
    'iletisim': 'Contact',

    //layout
    'hizlimenu': 'Quick Menu',

    'welcome': 'Welcome to Kıta Software.',
    'heroheader': 'Software Solutions and Support Services',
    'heroalt': 'We are continue to be with your company before and after sales.',

    'sizinihtiyaciniz': 'Which one you need?',
    'hizmetlerimiz': 'Our Services',

    //hakkımızda
    'hakkimizdaaltbaslik': 'Who We Are',
    'hakkimizbaslik': 'Trust and Experience of years',
    'firmatarihi': 'Company History',
    'hakkimizuzunyazi': 'Our company has been a wholesale supplier and retail trader of distinguished honeys of Mugla, Marmariz, Koycegiz and Eastern Anatolia since 1982. In addition to our existing honey wholesale in Turkey, we decided to establish another independent production plant for our spread in Berlin-Germany in 2006. We did so to be able to offer a high quality product, ensure short distance to the market and also to the end consumer as well as keeping time and effort of transportation as efficiently as possible to supply our client’s orders quickly and continually. For our products we use only selected honey such as pine honey from Marmaris region, high quality flower honeys from Eastern Anatolia uplands or comb honeys from several regions of the world. By enrichment of glucose with high quality honey we produce a spread which meets the taste especially of Turks, Arabs and other target groups. Our products have been put on the market in all parts of Germany and Europe and they taken their part in shelves in distinguished shops with ASBAL brand.',
    'hakkimizdabuton': 'Learn More',

    'urunlerimiz': 'Our Products',
    'tumurunler': 'Tüm Ürünleri Göster',

    'bizeulasin': 'Contact Us',
    'iletisimdekal': 'Stay Connected',
    'iletisimalt': 'Its our pleasure to welcome you.',
    'ofis': 'Office',
    'merkez': 'Head Office',
    'telefon': 'Phone',
    'mail': 'E-mail',

    'referanslaralt': 'They Preferred Us',
    'referanslarimiz': 'Our References',

    //Bloglar
    'sonbloglar': 'Latest Blog Posts',
    'bloglar': 'Blogs',
    'blogdetay': 'Blog Detail',
    'dahafazla': 'Read More',

    // iletişim Formu
    'formadi': 'Your Name',
    'formemail': 'Your Email',
    'formtelefon': 'Your Phone',
    'formkonu': 'Subject',
    'formmesaj': 'Your Message',
    'butongonder': 'Send',

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