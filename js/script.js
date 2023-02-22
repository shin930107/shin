// gnb animation =====================================================
let $menu = $('nav ul li'),
    $section = $('.s-pagewrap section');

$menu.click(function(e){
  e.preventDefault();

  let idx = $(this).index();
  let content = $section.eq(idx);
  let sectionDistance = content.offset().top;

  $('html, body').stop(true).animate({scrollTop:sectionDistance})
});

$(window).scroll(function(){

  $section.each(function(){
    if($(this).offset().top <= $(window).scrollTop()) {
      let index = $(this).index();
      $menu.removeClass('on')
      $menu.eq(index).addClass('on');
    }
  })
});



// skill animation =====================================================
(function(i,s,o,g,r,a,m) {i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-46156385-1', 'cssscript.com');
ga('send', 'pageview');



// portfolio animation =====================================================
var slider = $('.slider-div');
$(document).ready(function(){
  $('#slider-div').slick({
    slide: 'div',          //슬라이드 되어야 할 태그
    infinite : true,       //무한 반복 옵션     
    slidesToShow : 1,      // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 1,    //스크롤 한번에 움직일 컨텐츠 개수
    speed : 500,           // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : true,         // 옆으로 이동하는 화살표 표시 여부
    dots : true,           // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay : true,       // 자동 스크롤 사용 여부
    autoplaySpeed : 3000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : true,   // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
    vertical : false,      // 세로 방향 슬라이드 옵션
    prevArrow : "<button type='button' class='slick-prev'>Previous</button>",
    nextArrow : "<button type='button' class='slick-next'>Next</button>",
    draggable : true,      //드래그 가능 여부 
    responsive: [          // 반응형 웹 구현 옵션
    {  
      breakpoint: 1570,    //화면 사이즈 1570px
      settings: {
        slidesToShow: 1
      } 
    },
      {  
        breakpoint: 960,   //화면 사이즈 960px
        settings: {
          slidesToShow: 1
        } 
      },
      { 
        breakpoint: 768,   //화면 사이즈 768px
        settings: {    
          slidesToShow: 1
        } 
      }
    ]

  });
});