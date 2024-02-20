$('.slider').slick({
    dots: true,//下のドット
    infinite: true,//ループ
    slidesToShow: 3,//魅せるスライド
    slidesToScroll: 3,//一度にずれるスライド 

    responsive: [
        {
            breakpoint: 769,//モニターの横幅が769px以下の見せ方
            settings: {
                slidesToShow: 2,//スライドを画面に2枚見せる
                slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
            }
        },
        {
            breakpoint: 426,//モニターの横幅が426px以下の見せ方
            settings: {
                slidesToShow: 1,//スライドを画面に1枚見せる
                slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
            }
        }
    ]
});