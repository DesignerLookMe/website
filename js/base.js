
// 轮播图

var swiper = new Swiper('.swiper-container', {
	loop:true,
    pagination: '.swiper-pagination',
    paginationClickable: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
});

const _body_ = $("body")
const _rightList_ = `<div class="g-right-list"><ul></ul></div>`
const _rightListItem_ = $('.g-right-list')
_body_.append(_rightList_)

$(".g-right-list ul").append("<li class='g-top-item'></li>")
// 回到顶部
$(".g-right-list ul li.g-top-item").click(function(){
	$("body,html").stop().animate({scrollTop: 0 },200)
})

// 显示右下角按钮
$(window).scroll(function() {
	if ($("body,html").scrollTop() > 200){
		$(".g-right-list").show()
		return 
	}
	$(".g-right-list").hide()
});

if( urlredirect() !== 'M' ){
	// PC
	

} else {
	// 移动
		

}
