$(document).ready(function(){
	
	var swiper_mv = new Swiper('.mv .swiper-container', {
	// var 뒤에 변수명 자리는 임의로 바꿔도 무방함, .swiper-container 자리에는부모를 한 번 더 기입함으로써 조금더  직접적인 요소 선택이 되게 함
		pagination: {
			el: '.swiper-pagination',
		},
	});

	var swiper_store = new Swiper('.lifewear .swiper-container', {
		slidesPerView: 1, //한 화면에 보이는 r슬라이드의 개수
		spaceBetween: 20, // =margin-right: 20px
		breakpoints: {
			480: {
			slidesPerView: 2,
			},
			769: {
			slidesPerView: 3,
			},				
		},
	});
});	