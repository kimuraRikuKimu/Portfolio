//画像と動画の設定
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth > 768) {
    var responsiveImage = [//PC用の動画と画像
        {
            src: '../img/PROFILE/profile1.jpg'//動画が再生されなかった場合の代替画像
        },
        { 
            src: '../img/PROFILE/profile6.jpg' ,
            video: {
                src: [//mp4で動画が再生されない時のことを考えて複数の形式の動画を設定
                    '../video/profile1.mp4'
                    // ,
                    // '../video/profile1.webm',
                    // '../video/profile1.ogv'
                ],
                loop: false,//動画を繰り返す
                mute: true,//動画の音を鳴らさない
            }
        },
        { src: '../img/PROFILE/profile8.jpg' },
        { src: '../img/PROFILE/profile3.jpg' },
        { src: '../img/PROFILE/profile4.jpg' },
        { src: '../img/PROFILE/profile5.jpg' },
        { 
            src: '../img/PROFILE/profile2.jpg',
            video: {
                src: [
                    '../video/profile2.mp4'
                ],
                loop: false,
                mute: true,
            }
    }
    ];
} else {
    var responsiveImage = [//タブレットサイズ（768px）以下用の画像
        { src: '../img/PROFILE/profile_img.jpg' },
        { src: '../img/PROFILE/profile7.jpg' },
        {
             src: '../img/PROFILE/profile12.jpg', 
             video: {
                src: [
                    '../video/profile3.mp4'
                ],
                loop: false,
                mute: true,
            }
            },
        { src: '../img/PROFILE/profile11.jpg' },
        { src: '../img/PROFILE/profile9.jpg' },
        { src: '../img/PROFILE/profile10.jpg' }
    ];
}

//Vegas全体の設定
$('#slider').vegas({
    overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
    transition: 'fade2',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
    transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
    delay: 17000,//スライド間の遅延をミリ秒単位で。
    animationDuration: 18000,//スライドアニメーション時間をミリ秒単位で設定
    animation: 'random',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
    slides: responsiveImage,//画像と動画の設定を読む
    //timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
});