$(document).ready(function(){

});


// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback/*,  DOMElement  element*/){
                window.setTimeout(callback, 1000 / 60);
              };
})();



// usage:
// instead of setInterval(render, 16) ....
$(function(){
var angle = 0;
var count = 0;
var flag = 0;
var layer = $('.layer1-retailer, .layer1');
var render = function(){
	layer.css({
		'-webkit-transform':'rotate('+angle+'deg)',
	    '-moz-transform':'rotate('+angle+'deg)',
	    '-o-transform':'rotate('+angle+'deg)',
	    '-ms-transform':'rotate('+angle+'deg)',    
	    'transform':'rotate('+angle+'deg)'
	});
	if(count < 4 && flag === 0){
		angle = angle+0.050;
		count = count+0.050;

	}else{
		angle = angle-0.050;
		count = count-0.050;
	}
	if(count > 4.0){
		flag = flag+1;
	}
	if(count < -4.0){
		flag = flag-1;
	}
};

(function animloop(){
  requestAnimFrame(animloop);
  render();
})();
// place the rAF *before* the render() to assure as close to
// 60fps with the setTimeout fallback.



});