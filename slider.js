$(document).ready(function(){

	//when each image is clicked
    $('.image-back').click(function(){
    	var thisdiv = $(this);
    	var sliderid = thisdiv.parent().parent().attr('id');
    	var thisid = $("#"+sliderid);
    	var midchild = $('#slider-container').children('.mid');
    	var index, midindex, newval, lftindex, midlftindex, midrtindex, rtindex;
    	if(thisid.hasClass('mid')){
    		return false;
    	}else{
    		index = thisid.index();
    		slidecall(index);
    	}
    	return false;
    });
    
    //when thumbs is clicked
    $('.thumbs').click(function(){
    	var thisthumb = $(this);
    	var thisindex = thisthumb.parent().index();
    	if(thisthumb.hasClass('mid')){
    		return false;
    	}
    	slidecall(thisindex);
    	return false;
    });
    

});

//function to call next or prev according to the image clicked
function slidecall(index){
	var midindex, newval, lftindex, midlftindex, midrtindex, rtindex;
	midindex = $('div .mid').index();
	lftindex = $('div .left').index();
	midlftindex = $('div .leftmid').index();
	midrtindex = $('div .rightmid').index();
	rtindex = $('div .right').index();
	switch(index){
		case lftindex:
			newval = clickPrev();
			newval = clickPrev();
			break;
		case midlftindex:
			newval = clickPrev();
			break;
		case midrtindex:
			newval = clickNxt();
			break;
		case rtindex:
			newval = clickNxt();
			newval = clickNxt();
			break;
	};
}


//to give the initial position to the slider divs
$(function(){
	
	var $slideContaint = $("#slider-container");

	var leftMid = {
 		'-webkit-transform'	: 'translate(-210px) scale(0.7)',
		'-moz-transform'	: 'translate(-210px) scale(0.7)',
		'-o-transform'		: 'translate(-210px) scale(0.7)',
		'-ms-transform'		: 'translate(-210px) scale(0.7)',
		'transform'			: 'translate(-210px) scale(0.7)',
		'z-index'			: '20'
 	};
 	var left = {
 		'-webkit-transform'	: 'translate(-360px) scale(0.5)',
		'-moz-transform'	: 'translate(-360px) scale(0.5)',
		'-o-transform'		: 'translate(-360px) scale(0.5)',
		'-ms-transform'		: 'translate(-360px) scale(0.5)',
		'transform'			: 'translate(-360px) scale(0.5)',
		'z-index'			: '10'
 	};
 	var mid = {
 		'-webkit-transform'	: 'translate(0px) scale(1)',
		'-moz-transform'	: 'translate(0px) scale(1)',
		'-o-transform'		: 'translate(0px) scale(1)',
		'-ms-transform'		: 'translate(0px) scale(1)',
		'transform'			: 'translate(0px) scale(1)',
		'z-index'			: '30'
 	};
 	var rightMid = {
 		'-webkit-transform'	: 'translate(210px) scale(0.7)',
		'-moz-transform'	: 'translate(210px) scale(0.7)',
		'-o-transform'		: 'translate(210px) scale(0.7)',
		'-ms-transform'		: 'translate(210px) scale(0.7)',
		'transform'			: 'translate(210px) scale(0.7)',
		'z-index'			: '20'
 	};
 	var right = {
 		'-webkit-transform'	: 'translate(360px) scale(0.5)',
		'-moz-transform'	: 'translate(360px) scale(0.5)',
		'-o-transform'		: 'translate(360px) scale(0.5)',
		'-ms-transform'		: 'translate(360px) scale(0.5)',
		'transform'			: 'translate(360px) scale(0.5)',
		'z-index'			: '10'
 	};
 	
 	$("#slide1").css(left);
 	$("#slide2").css(leftMid);
 	$("#slide3").css(mid);
 	$("#slide4").css(rightMid);
 	$("#slide5").css(right);
	$('.active-percent').css({
        'background': '-webkit-linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255))',
	    'background': '-o-linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255))',
	    'background': '-moz-linear-gradient(255, 255, 255, 0), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255))',
	    'background': 'linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255))'
    });

});

//when next button is clickec
function clickNxt(){
	
	var $slideContaint = $("#slider-container");
	var $stats = (".statistics-details");
 	var $nxt = $("img .next");
 	var $prev = $("img .prev");
 	var $allSlide = $(".slide");
 	var $overlay = $('.overlay');
 	var midcount = $slideContaint.children('.mid').index();
 	var new_mid = midcount+2;
 	var childno = $slideContaint.children().length;
 	var thumb = $('.thumbs');
 	var thumbcontaint = $('.stat-slider-dot ul li');
 	var newids = newclass(midcount);
 	
 	$allSlide.removeClass('mid left leftmid rightmid right');
 	$('.stat-text').removeClass('show-text');
 	
 	$overlay.removeClass('inactive-overlay').removeClass('active-overlay').addClass('inactive-overlay');
 	$("#"+newids['nxt'][2]+" .overlay").removeClass('inactive-overlay').addClass('active-overlay');
 	

 	$overlay.children('.stat-percent').removeClass('active-percent');
	$("#"+newids['nxt'][2]+" .overlay .stat-percent").addClass('active-percent');

	$('.active-percent, .stat-percent').css({'background':''});
	
	setTimeout(function() {
    	
    		$('.active-percent').css({
    			'background': '-webkit-linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255))',
				'background': '-o-linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255))',
				'background': '-moz-linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255))',
				'background': 'linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255))'
    		});
    		$('.active-percent .stat-text').addClass('show-text');
  	}, 500);

	thumb.removeClass('mid').attr('src', 'images/dot-inactive.png');
	$('.'+newids['nxt'][2]).addClass('mid').attr('src', 'images/dot-active.png');

 	$("#"+newids['nxt'][0]).css(transcss('left')).addClass('left');
 	$("#"+newids['nxt'][1]).css(transcss('leftmid')).addClass('leftmid');
 	$("#"+newids['nxt'][2]).addClass('mid').css(transcss('mid'));
 	$("#"+newids['nxt'][3]).css(transcss('rightmid')).addClass('rightmid');
 	$("#"+newids['nxt'][4]).css(transcss('right')).addClass('right');

 	
	return false;
}

//when prev button is clicked
function clickPrev(){
	
	var $slideContaint = $("#slider-container");
	var $stats = (".statistics-details");
 	var $nxt = $("img .next");
 	var $prev = $("img .prev");
 	var $overlay = $('.overlay');
 	var $allSlide = $(".slide");
 	var thumb = $('.thumbs');
 	var thumbcontaint = $('.stat-slider-dot ul li');
 	var midcount = $slideContaint.children('.mid').index();
 	var new_mid = midcount+2;
 	var childno = $slideContaint.children().length;

 	var newids = newclass(midcount);
 	
 	$allSlide.removeClass('mid left leftmid rightmid right');
 	$('.stat-text').removeClass('show-text');

 	$overlay.removeClass('inactive-overlay').removeClass('active-overlay').addClass('inactive-overlay');
 	$("#"+newids['prev'][2]+" .overlay").removeClass('inactive-overlay').addClass('active-overlay');

 	$overlay.children('.stat-percent').removeClass('active-percent');
	$("#"+newids['prev'][2]+" .overlay .stat-percent").addClass('active-percent'); 	

	$('.active-percent, .stat-percent').css({'background':''});
	
	setTimeout(function() {
    	
    		$('.active-percent').css({
    			'background': '-webkit-linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255))',
				'background': '-o-linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255))',
				'background': '-moz-linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255))',
				'background': 'linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255))'
    		});
    	$('.active-percent .stat-text').addClass('show-text');
  	}, 500);

  	thumb.removeClass('mid').attr('src', 'images/dot-inactive.png');
	$('.'+newids['prev'][2]).addClass('mid').attr('src', 'images/dot-active.png');
	
 	$("#"+newids['prev'][0]).css(transcss('left')).addClass('left');
 	$("#"+newids['prev'][1]).css(transcss('leftmid')).addClass('leftmid');
 	$("#"+newids['prev'][2]).addClass('mid').css(transcss('mid'));
 	$("#"+newids['prev'][3]).css(transcss('rightmid')).addClass('rightmid');
 	$("#"+newids['prev'][4]).css(transcss('right')).addClass('right');

 	
	return false;
}


//function to return new css according to the position
function transcss(position){
	switch(position){
		case 'left':
			return {
				'-webkit-transform'	: 'translate(-360px) scale(0.5)',
				'-moz-transform'	: 'translate(-360px) scale(0.5)',
				'-o-transform'		: 'translate(-360px) scale(0.5)',
				'-ms-transform'		: 'translate(-360px) scale(0.5)',
				'transform'			: 'translate(-360px) scale(0.5)',
				'z-index'			: 10
			};
			break;
		case 'leftmid':
			return {
				'-webkit-transform'	: 'translate(-210px) scale(0.7)',
				'-moz-transform'	: 'translate(-210px) scale(0.7)',
				'-o-transform'		: 'translate(-210px) scale(0.7)',
				'-ms-transform'		: 'translate(-210px) scale(0.7)',
				'transform'			: 'translate(-210px) scale(0.7)',
				'z-index'			: 20
			};
			break;
		case 'mid':
			return {
				'-webkit-transform'	: 'translate(0px) scale(1)',
				'-moz-transform'	: 'translate(0px) scale(1)',
				'-o-transform'		: 'translate(0px) scale(1)',
				'-ms-transform'		: 'translate(0px) scale(1)',
				'transform'			: 'translate(0px) scale(1)',
				'z-index'			: 30
			};
			break;
		case 'rightmid':
			return {
				'-webkit-transform'	: 'translate(210px) scale(0.7)',
				'-moz-transform'	: 'translate(210px) scale(0.7)',
				'-o-transform'		: 'translate(210px) scale(0.7)',
				'-ms-transform'		: 'translate(210px) scale(0.7)',
				'transform'			: 'translate(210px) scale(0.7)',
				'z-index'			: 20
			};
			break;
		case 'right':
			return {
				'-webkit-transform'	: 'translate(360px) scale(0.5)',
				'-moz-transform'	: 'translate(360px) scale(0.5)',
				'-o-transform'		: 'translate(360px) scale(0.5)',
				'-ms-transform'		: 'translate(360px) scale(0.5)',
				'transform'			: 'translate(360px) scale(0.5)',
				'z-index'			: 10
			};
			break;

	};
}


//function to return the div ids in order of their new position
function newclass(mid){
	var nxt = new Array();
	var prev = new Array();
	var classArray = new Array();
	switch(mid){
		case 0:
			nxt = ['slide5', 'slide1', 'slide2', 'slide3', 'slide4'];
			prev = ['slide3', 'slide4', 'slide5', 'slide1', 'slide2'];
			classArray = {'nxt':nxt,'prev':prev};
			return classArray;
			break;
		case 1:
			nxt = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'];
			prev = ['slide4', 'slide5', 'slide1', 'slide2', 'slide3'];
			classArray = {'nxt':nxt,'prev':prev};
			return classArray;
			break;
		case 2:
			nxt = ['slide2', 'slide3', 'slide4', 'slide5', 'slide1'];
			prev = ['slide5', 'slide1', 'slide2', 'slide3', 'slide4'];
			classArray = {'nxt':nxt,'prev':prev};
			return classArray;
			break;
		case 3:
			nxt = ['slide3', 'slide4', 'slide5', 'slide1', 'slide2'];
			prev = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'];
			classArray = {'nxt':nxt,'prev':prev};
			return classArray;
			break;
		case 4:
			nxt = ['slide4', 'slide5', 'slide1', 'slide2', 'slide3'];
			prev = ['slide2', 'slide3', 'slide4', 'slide5', 'slide1'];
			classArray = {'nxt':nxt,'prev':prev};
			return classArray;
			break;

	};
}