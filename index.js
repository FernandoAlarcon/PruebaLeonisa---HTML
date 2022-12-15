var getTimeout = function(){var e=setTimeout,b={};setTimeout=function(a,c){var d=e(a,c);b[d]=[Date.now(),c];return d};return function(a){return(a=b[a])?Math.max(a[1]-Date.now()+a[0],0):NaN}}();
 
function sanitisePercentage(i){
	return Math.min(100,Math.max(0,i));
}


$(document).ready(function(){

	$(".price-lvl").change(function() {
		let value = $(this).val();
		//value = 100 - value;
		console.log(value)

		$('.barr-progress').width(value+"%");
	});

})/// end ready function