$(function(){
  // 动态添加屏幕高度
  $(".zhezhao").height($(window).height()*2);
  $(".showNav").height($(window).height()*2);

  $(".liuyan_box").height( parseInt($(".liuyan_info_box").height()) + parseInt($(".liuyan_info_box").css("marginTop")) + parseInt($(".liuyan_info_box").css("marginBottom")) )

  $(".liuyan_img").height( parseInt($(".liuyan_info_box").height()) + parseInt($(".liuyan_info_box").css("marginTop")) + parseInt($(".liuyan_info_box").css("marginBottom")) );

  $(".liuyan_img").width( $(window).width() );
  // console.log($(window).width())


  // 点击导航出现导航页
  $('.clickNav').click( function(){
    $(".head").height($(window).height());
    // console.log( 1123 );
    var mydis = $('.zhezhao').css('display')
    // console.log( mydis )
    // 判断折叠导航栏是否隐藏
    if( mydis == 'none' ){
      $(".zhezhao").animate({marginLeft: 0}, 400);
      $('.zhezhao').css('display','block')
    }else{
      $(".zhezhao").animate({marginLeft: -600}, 400,function(){
        $('.zhezhao').css('display','none');
      })
    }
  })
  // 当折叠导航栏展开时 点击导航和箭头 隐藏折叠导航栏
  $('.show_tou').click(function (){
    // console.log( 12 )
    $(".zhezhao").animate({marginLeft: -600}, 400,function(){
      $('.zhezhao').css('display','none');
    })
  })
  // 当折叠导航栏展开时 点击出折叠导航栏之外的部分 隐藏折叠导航栏
  $('#more').click(function (){
    $(".zhezhao").animate({marginLeft: -600}, 400,function(){
      $('.zhezhao').css('display','none');
    })
  })

                        // 当页面首次打开时的屏幕宽度
  if( $(window).width() < 576){
    $('.search').css('display','none')
  }else{
    $('.search').css('display','block')
  }


   $('.flo2_title').width($('.flo2_info_img').width())

   if( $(window).width() > 768){
 
 
    // 显示分公司信息栏
    $('#foot1').css('display','block')
                        
    // 服务流程标题宽度   
    $('.flo2_img').css('display','block')
    $('.flo2_img1').css('display','none')
    //$('.flo2_title').css('marginLeft',0)

    // 当页面小与768时 显示部分内容
    $('.tonone').css('display','block')
    
    // 添加合作伙伴去色
    $('.flo5_icon_box').addClass('icon_qs')

    // 设计团队的hover事件
    // $('.flo3_info_box').find('.flo3_info_zhezhao').removeClass('.tonone1')
  }else{
   
    // 显示分公司信息栏
    $('#foot1').css('display','none')

    // 服务流程标题宽度   
    $('.flo2_img').css('display','none')
    $('.flo2_img1').css('display','block')
    //$('.flo2_title').css('marginLeft','15px')
    
    // 当页面小与768时 隐藏部分内容 减少空间
    $('.tonone').css('display','none')
    
    // 取消合作伙伴去色
    $('.flo5_icon_box').removeClass('icon_qs')

    // 设计团队的hover事件
    // $('.flo3_info_box').find('.flo3_info_zhezhao').addClass('.tonone')


  }

  // 软装案列
  $('.rzal_item_zhezhao').height($('.rzal_item_img').height())
  $('.rzal_item_zhezhao').width($('.rzal_item_img').width())
  $('.rzal_info').width($('.rzal_item_img').width()) 
  
  // 品牌show界面盒子宽高度
  $('.ppshow_info').css({width: $('.ppshow_item_img').width()})

  
  // 合作品牌盒子宽高度
  $('.flo1_info_icon').width($('.flo1_info_img').width())
  $('.flo1_info_icon').height($('.flo1_info_img').width())
  $('.flo1_info_icon').css({marginTop: -$('.flo1_info_img').width()})
  // hover遮罩层
  $('.flo1_info_icon1').width($('.flo1_info_img').width())
  $('.flo1_info_icon1').height($('.flo1_info_img').width())
  $('.flo1_info_icon1').css({marginTop:-$('.flo1_info_img').width()})


  // boella简介
  if($(window).width() < 768){
    $('.about_info_img').addClass('w-100')
    $('.about_info_info').addClass('w-100')
    $('.about_info_img').css('marginBottom','14px')
  }else{
    $('.about_info_img').addClass('w-50')
    $('.about_info_info').addClass('w-50')
  }

                                              // 监听页面宽高度
  $(window).resize(function(){
    var window_w = $(window).width();
    // console.log(window_w);

   $(".slide").width( window_w )


    // 动态添加屏幕高度
    $(".zhezhao").height($(window).height());

    
    $(".liuyan_img").width( $(window).width() );    

    // 设计团队
    $('.flo3_info_zhezhao').height($('.flo3_info_img').height())
    $('.flo3_info_zhezhao').width($('.flo3_info_img').width())

    // 品牌show界面盒子宽高度
    $('.ppshow_info').css({width: $('.ppshow_item_img').width()})


    // 软装案列 
    $('.rzal_item_zhezhao').width($('.rzal_item_img').width())
    $('.rzal_item_zhezhao').height($('.rzal_item_img').height())
    $('.rzal_info').width($('.rzal_item_img').width())

    // 合作品牌 logo遮罩层
    $('.flo1_info_icon').width($('.flo1_info_img').width())
    $('.flo1_info_icon').height($('.flo1_info_img').width())
    $('.flo1_info_icon').css({marginTop: -$('.flo1_info_img').width()})

    $('.flo1_info_icon1').width($('.flo1_info_img').width())
    $('.flo1_info_icon1').height($('.flo1_info_img').width())
    $('.flo1_info_icon1').css({marginTop:-$('.flo1_info_img').width()})

    // 当页面宽度小于576px时
    if( window_w < 576){
      $('.search').css('display','none')
    }else{
      $('.search').css('display','block')
    }
  

  if(window_w <= 768){
      // 取消合作伙伴去色
    $('.flo5_icon_box').removeClass('icon_qs')
   }else{
    // 添加合作伙伴去色
    $('.flo5_icon_box').addClass('icon_qs')
   }

    // 当页面宽度小于768px时
    if( window_w < 768){

      // 当页面小与768时 隐藏部分内容 减少空间
      $('.tonone').css('display','none')

      //  隐藏分公司信息
      $('#foot1').css('display','none')
   

      // 服务流程
      // 图标logo
      $('.flo2_img').css('display','none')
      $('.flo2_img1').css('display','block')
      // 标题宽度
      $('.flo2_title').width($('.flo2_info_img').width())
      //$('.flo2_title').css('marginLeft','15px')

      // BOELLA简介
      $('.about_info_img').addClass('w-100')
      $('.about_info_info').addClass('w-100')
      $('.about_info_img').css('marginBottom','14px')

    }else{
      $('.tonone').css('display','block')

      // 显示分公司信息栏
      $('#foot1').css('display','block')

      // 服务流程
      //$('.flo2_title').css('marginLeft',0)
      $('.flo2_img').css('display','block')
      $('.flo2_img1').css('display','none')

      // BOELLA简介
      $('.about_info_img').removeClass('w-100')
      $('.about_info_info').removeClass('w-100')
      $('.about_info_img').addClass('w-50')
      $('.about_info_info').addClass('w-50')
    }
  });
  

  // 当二级标题隐藏时向右旋转箭头标题
  $('#collapseTwo').on('hide.bs.collapse',function(){
    $('#collapseTwo_img').css({"transform":"rotate(0deg)"})
  })
  $('#collapseThree').on('hide.bs.collapse',function(){
    $('#collapseThree_img').css({"transform":"rotate(0deg)"})
  })
  $('#collapseFour').on('hide.bs.collapse',function(){
    $('#collapseFour_img').css({"transform":"rotate(0deg)"})
  })

  // 当二级标题显示时向下旋转箭头标题
  $('#collapseTwo').on('show.bs.collapse',function(){
    $('#collapseTwo_img').css({"transform":"rotate(90deg)"})
  })
  $('#collapseThree').on('show.bs.collapse',function(){
    $('#collapseThree_img').css({"transform":"rotate(90deg)"})
  })
  $('#collapseFour').on('show.bs.collapse',function(){
    $('#collapseFour_img').css({"transform":"rotate(90deg)"})
  })


  // 去第一页 toFlo1
  $('.toFlo1').click(function(){
    $('html,body').animate({scrollTop:$('.slide_img').height()},500)
  })



  // 返回顶部 toTop
  $('.toTop').click(function(){
    $('html,body').animate({scrollTop:0},1000)
  })
  
  $(document).scroll(function() {
    var s = $(window).scrollTop();
    // console.log( s )
    if( s == 0){
      $(".liuyan").fadeOut(500);
      $(".toTop").fadeOut(500);
    }else{
      $(".liuyan").fadeIn(500);
      $(".toTop").fadeIn(500);
    }
  })


                                                        // 品牌SHOW
  if($(window).width() > 768 ){
  $('.flo4_item').hover(
    function(){
      var n = $('.flo4_item').index(this)
      $(".flo4_item:eq("+ n +")").find(".flo4_more1").css("display","block")
    },function(){
      $(".flo4_item").find(".flo4_more1").css("display","none")
  }) 
 }
  // 图片滚动
  var move = 0
  var n = $('.flo4_item').length-2
  $('.flo4_title_length').html('0'+(parseInt(n)+2))
  $('.flo4_title_index').html('0'+(parseInt(move)+3))

  $('.flo4_title_next').click(function(){
    move++
    if(move < n){
      $('.flo4_item').animate({left: -292*move},400);
      $('.flo4_title_index').html('0'+(parseInt(move)+3));
      return move;
    }else{
      move = 0
      $('.flo4_item').animate({left: -292*move},400)
      $('.flo4_title_index').html('0'+(parseInt(move)+3));
      return move
    }
  })
  $('.flo4_title_prev').click(function(){
    if(move > 0){
      move--
      $('.flo4_item').animate({left: -292*move},400)
      $('.flo4_title_index').html('0'+(parseInt(move)+3))
      return move
    }else{
      move =  n-1
      $('.flo4_item').animate({left: -292*move},400)
      $('.flo4_title_index').html('0'+(parseInt(move)+3))
    }
  })

                                                           	// 合作品牌
 if($(window).width() > 768 ){
  $('.flo1_info_box').hover(
    function(){
      var n = $('.flo1_info_box').index(this)
      $(".flo1_info_icon>img:eq("+ n +")").stop().animate({
        width: '20%',
        marginTop: '18%',
        marginLeft: '40%',
      },300,function(){
        $('.flo1_info_icon1:eq('+n+')').css('display','block')
      })
    },function(){
      $('.flo1_info_icon1').css('display','none')
      $('.flo1_info_icon>img').stop().animate({
        width: '40%',
        marginTop: '36%',
        marginLeft: '30%',
        backgroundColor: 'rgba(0,0,0,.4)'
      },300)
  })
 }


                                                                    // 软装案例
 if($(window).width() > 768 ){
  $('.rzal_item_box').hover(
    function(){
      $(this).find(".rzal_item_zhezhao").css("display","block")
      $(this).find('.rzal_info').css({
        backgroundColor: '#151515',
        color: '#fff'
      })
    },function(){
      $(".rzal_item_box").find(".rzal_item_zhezhao").css("display","none")
      $(this).find('.rzal_info').css({
        backgroundColor: '#f0f0f0',
        color: '#151515'
      })
  })
 }

                                                                    // 设计团队
  $('.flo3_info_zhezhao').height($('.flo3_info_img').height())
  $('.flo3_info_zhezhao').width($('.flo3_info_img').width())
  if($(window).width() > 768 ){
  $('.flo3_info_box').hover(
    function(){
      $(this).find(".flo3_info_zhezhao").css("display","block")
    },function(){
      $(".flo3_info_box").find(".flo3_info_zhezhao").css("display","none")
  })
 }

                                                                     // 合作伙伴
  $('.flo5_icon_box').hover(function(){
    $(this).removeClass('icon_qs');
  },function(){
    $(this).addClass('icon_qs');
  })



//监听滚动条事件
window.onscroll = function(){
	Limg()
}

//页面加载时调用一次，使图片显示
window.onload = function() {
	var img = document.querySelectorAll("img[data-src]")
	for(var i = 0; i < img.length; i++) {
		img[i].style.opacity = "0"
	}
	Limg()
}

function Limg() {
	var viewHeight = document.documentElement.clientHeight // 可视区域的高度
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	var limg = document.querySelectorAll("img[data-src]")
	// Array.prototype.forEach.call()是一种快速的方法访问forEach，并将空数组的this换成想要遍历的list
	Array.prototype.forEach.call(limg, function(item, index) {
		var rect
		if(item.getAttribute("data-src") === "")
			return
		//getBoundingClientRect用于获取某个元素相对于视窗的位置集合。集合中有top, right, bottom, left等属性。
		rect = item.getBoundingClientRect()
		// 图片一进入可视区，动态加载
		if(rect.bottom >= 0 && rect.top < viewHeight) {
			(function() {
				var img = new Image()
				img.src = item.getAttribute("data-src")
				item.src = img.src
				//给图片添加过渡效果，让图片显示
				var j = 0
				setInterval(function() {
					j += 0.2
					if(j <= 1) {
						item.style.opacity = j
						return
					}
				}, 100)
				item.removeAttribute('data-src')
			})()
		}
	})
}
})