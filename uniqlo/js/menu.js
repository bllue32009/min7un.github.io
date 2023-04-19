$(document).ready(function(){
	const checkPoint=960;
	var navWidth;//메뉴 너비
	
	function menuControl(){
		if($(window).width()>checkPoint){//pc용
			initDesktop();
			displayDesktop();
		}else{//mobile용
			initMobile();
			displayMobile();
		}
	}
	
	menuControl();
	
	$(window).resize(function(){
		menuControl();
	});
	
	//Desktop용 초기화 함수
	function initDesktop(){
		$(".menu_bg, .sub_menu, .dim").hide();
		$(".menu_bg, .sub_menu").css("height", 490);
		$(".container").css("left",0);
		$("body").css("overflow-y","auto");
		
	}
	
	//Desktop용 메뉴
	function displayDesktop(){
		$(".main_menu").on("mouseenter", function(){
			$(".menu_bg, .sub_menu").stop().slideDown();
		}).on("mouseleave",function(){
			$(".menu_bg, .sub_menu").stop().slideUp();
		})
	}
	
	//mobile용 .초기화 함수
	function initMobile(){
		$(".sub_menu, .dim").hide();
		$(".sub_menu").css("height","auto");
		$(".mobile_menu_btn").removeClass("on");
		$(".container").css( "left", 0 );
		$("body").css("overflow-y", "auto");
		//480px과 브라우저의 너비 중에 작은 수를 선택하여 nav의 width에 적용
		navWidth=Math.min( 480, $(window).width());
	}
	
	//mobile용 메뉴
	function displayMobile(){
		$(".main_menu").off("mouseenter mouseleave");
		
		$(".mobile_menu_btn").off().on("click", function(e){
			e.preventDefault();
			
			$(this).toggleClass("on");//햄버거메뉴버튼<->닫기버튼
			$(".dim").stop().fadeToggle();
			
			if($(this).hasClass("on")){//햄버거메뉴 클릭시
				$(".container").css("left",-navWidth);
				$("body, html").css({"overflow-y": "hidden", "height": "100vh"});
			}else{//닫기버튼 클릭시
				initMobile();
			}
		});
		
		$(".dim").on("click",function(){
			//$(this).stop().fadeOut();
			initMobile();
		});
		
		$(".main_menu > li > a").on("click", function(){
			$(this).next(".sub_menu").stop().slideToggle();
			$(this).parent().siblings().children(".sub_menu").stop().slideUp();
		});
	}
});