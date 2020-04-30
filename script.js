$(document).ready(function(){

  var autoswitch = true;
$(".csec").first().addClass("active");
$(".csec").hide();
$(".active").show();
$('#nexticon').on('click', nextSlidea);
$('#backicon').on('click', prevSlideb);

  //if(autoswitch == true){
  	//	setInterval(nextSlidea,4000);}

  function nextSlidea(){
    $(".active").removeClass("active").addClass("prevs");
    if($(".prevs").is(":last-child")){
    $(".csec").first().addClass("active");
}else {
  $(".prevs").next().addClass("active");
}
  $(".prevs").removeClass("prevs");
  $(".csec").fadeOut(200);
    $(".active").fadeIn(200);
}

function prevSlideb(){
$(".active").removeClass("active").addClass("prevs");
  if($('.prevs').is('.csec:first')){
$('.csec').last().addClass('active');
}else {
    $(".prevs").prev().addClass("active");
}
$(".prevs").removeClass("prevs");
$(".csec").fadeOut(200);
$(".active").fadeIn(200);

}

});
