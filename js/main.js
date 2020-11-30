const responsive = {
  0: {
    items: 1
  },
  320: {
    items: 1
  },
  560: {
    items: 2
  },
  960: {
    items: 3
  },
}

$("#introduction-1").on('click', function(){
  Swal.fire({
    title: 'シュトーレン',
    text: '酵母の履いた記事にドライフルーツやナッツ、マジパンなどを練りこんで焼き上げたドイツの伝統的な菓子パン（ケーキ）です。細長い形状でトンネルに似ていることから「地下道」や「坑道」という意味で名前がつけられたと言われています。',
    imageUrl: '././assets/img/cakes-01.jpg',
    imageWidth: 640,
    imageHeight: 430,
    imageAlt: 'Custom image',
    width: '64rem',
  })
})
$("#introduction-2").on('click', function(){
  Swal.fire({
    title: 'クリスマスプディング',
    text: '小麦粉、牛脂、卵、砂糖、ラム酒、ブランデー、ドライフルーツ、ナッツなどを、「願いことをしながら」混ぜて焼き上げます。中にコインや指輪を入れて、取り分けられた人の運勢を占います。',
    imageUrl: '././assets/img/cakes-02.jpg',
    imageWidth: 640,
    imageHeight: 430,
    imageAlt: 'Custom image',
    width: '64rem',
  })
})
$("#introduction-3").on('click', function(){
  Swal.fire({
    title: 'ロスコン デ レジェス',
    text: 'スペインでは1月6日東方の三賢人（レジェス・マゴス　Reyes Magos）の日に、王冠の形をした菓子パン「ロスコン・デ・レジェス」を食べます。パンの中にソプレサ（陶器の人形）が入っています。それに当たった人は幸運だ、王様だ、ということでロスコン代を払う、などいろいろ言われています。',
    imageUrl: '././assets/img/cakes-03.jpg',
    imageWidth: 640,
    imageHeight: 430,
    imageAlt: 'Custom image',
    width: '64rem',
  })
})
$("#introduction-4").on('click', function(){
  Swal.fire({
    title: 'パブロヴァ',
    text: 'メレンゲにホイップした生クリームを詰め、様々なフルーツなどをデコレーションしたのもです。小麦粉やバターを使用しないため低カロリーで、軽い食感で食べやすいです。',
    imageUrl: '././assets/img/cakes-04.jpg',
    imageWidth: 640,
    imageHeight: 430,
    imageAlt: 'Custom image',
    width: '64rem',
  })
})
$("#introduction-5").on('click', function(){
  Swal.fire({
    title: 'ジンジャーブレッド',
    text: '名前の通り生姜を使った焼き菓子の一種で、生姜のほかにクローブナツメグ・シナモンなどのスパイスを組み合わせます。家族の無病息災を願い、風邪予防に効くために生姜を使ったといわれています。',
    imageUrl: '././assets/img/cakes-05.jpg',
    imageWidth: 640,
    imageHeight: 430,
    imageAlt: 'Custom image',
    width: '64rem',
  })
})
$("#introduction-6").on('click', function(){
  Swal.fire({
    title: 'ショートケーキ',
    text: '日本ではクリスマスにイチゴのショートケーキをよく食べます、1920年代に不二家によって日本に広められました。古くから日本ではおめでたい色（紅白）として生クリームとイチゴが採用されました。',
    imageUrl: '././assets/img/cakes-06.jpg',
    imageWidth: 640,
    imageHeight: 430,
    imageAlt: 'Custom image',
    width: '64rem',
  })
})

$(document).ready(function() {

  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  $toggleCollapse.click(function() {
    $nav.toggleClass("collapse");
  })

// owl-carousel for blog
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive: responsive
});

  $('.move-up span').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  })

  // AOS Instance
  AOS.init();

});