/*global $*/
var main=function(){
$('#menu-icon').click(function(){
    if($('.nav').hasClass('open')){
        $('.nav').removeClass('open').animate({left:"-250px"}, 500);
        $('body').animate({left:"0px"}, 500);
    }else{
        $('.nav').addClass('open').animate({left:"0px"}, 500);
        $('body').animate({left:"250px"}, 500);
    }
});
$('.dropdown').click(function(){
    if($('.sub-nav').hasClass('o')){
        $('.sub-nav').toggle(400).removeClass('o');
        $('#caret').addClass('caret-down').removeClass('caret-up');
    }else{
        $('.sub-nav').toggle(400).addClass('o');
        $('#caret').addClass('caret-up').removeClass('caret-down');
    }
});
var i=2;
$('.plus').click(function(){
    var currentPrompt=$('.active-prompt');
    var nextPrompt=currentPrompt.next();
    if(nextPrompt.length==0){confirm("Max 10 options");}
    else{
        currentPrompt.removeClass('active-prompt');
        nextPrompt.addClass('active-prompt vis').removeClass('invis');
        i++;
    }
});
$('.minus').click(function(){
    var currentPrompt=$('.active-prompt');
    var prevPrompt=currentPrompt.prev();
    if($('.vis').length==2){confirm("Min 2 options");}
    else{
        currentPrompt.removeClass('active-prompt vis').addClass('invis');
        prevPrompt.addClass('active-prompt');
        i--;
    }
});
$('input').keydown(function(key){
    if(key.which==13){$('.button').click();}
});
$('.button').click(function(){
    var a=0;
    var stop=false;
    while(a<i&&stop==false){
        if($('#option'+(a+1)).val()==""){
            confirm("Please fill in all open boxes.");
            stop=true;
        }else{a++;}
    }
    var x=Math.random()*i;
    var z=0;
    while(z<i&&stop==false){
        if(z<x&&x<=z+1){
            confirm("You should choose "+$('#option'+(z+1)).val()+".");
            stop=true;
        }else{z++;}
    }
});
};
$(document).ready(main);
