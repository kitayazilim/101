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
    'yazilimcozumleri': 'Yazılım Çözümleri',
    'yazilimcozumleritext': 'Pazardaki ürünler genellikle belli alanlara yoğunlaşmışlardır. Bu da günümüz dijital dünyasında, her bir ihtiyaç için farklı bir yazılıma gereksinim duyurmaktadır. Yenilikçi bakış açısı ile tüm ihtiyaçlarınızı, Odoo ERP ve İş Platformunun kullanımı kolay ve yakışıklı arayüzü ile çözebilirsiniz. Ayrıca, açık kaynak kodlu altyapısı sayesinde, platformun ana yapısını bile ihtiyaçlarınıza göre düzenleyebilirsiniz.',
    'ozgunyazilim': 'Özgün Yazılım',
    'hizlicozum': 'Hızlı Çözüm',
    'guvenlik': 'Güvenlik',
    'memnuniyet': 'Müşteri Memnuniyeti',

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
    'yazilimcozumleri': 'Software Solutions',
    'yazilimcozumleritext': ' Pocket Softwares serve about specific issues. This requires a different softwares for each need in today\'s digital world. With an innovative perspective, you can solve all your needs with the easy to use and convenient interface of Odoo ERP and Business Platform. Also, thanks to its open source infrastructure, you can even organize the main structure of the platform according to your needs.',
    'ozgunyazilim': 'Unique Software',
    'hizlicozum': 'Quick Solution',
    'guvenlik': 'Security',
    'memnuniyet': 'Customer Satisfaction',

    //hakkımızda
    'hakkimizdaaltbaslik': 'Who We Are',
    'hakkimizyazi': 'Yazılım sektöründe edinmiş olduğumuz 15 yıllık tecrübemiz ışığında 2018 yılında kurulduk. Kıta Yazılım olarak genç ,yenilikçi, dinamik bir ekipten oluşuyoruz. Sahip olduğumuz bilgi birikimimizi, mühendislik çözümlerimizi ve dinamik yapımızla yaratıcı ve inovatif çözümlerimizi müşteri odaklı yaklaşımımızla birleştiriyoruz. Müşteri memnuniyetimizi en üst düzeye taşımayı gaye ediniyoruz. Bunun için ihtiyacınızı dinliyor, fikirlerinize değer veriyoruz. En uygun metot en az maliyetle hazırladığımız programla, farklı programlarla yürütmek zorunda kaldığınız faaliyetlerinizi tek bir noktada topluyoruz. Şirketlerinizin ve bağlı varlıklarınızın, en iyi şekilde yönetilmesine, üretim sürecinizin planlanmasına katkıda bulunmak istiyoruz. Aynı zamanda firmanızdaki en karmaşık sorunlarınıza çözümler üreterek devam etmekte olan süreçlerinizde de herhangi bir aksamanın meydana gelmesine izin vermeden, kurumunuz için hesaplanabilen sonuçların ortaya çıkmasını amaçlıyoruz.',
    'hakkimizdabuton': 'Learn More',
    'urunlerimiz': 'Our Products',
    'tumurunler': 'Show All',
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