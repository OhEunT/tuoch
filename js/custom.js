$(document).ready(function(){
	
	$('#lnb>li>a').on('click',function(e){
        e.preventDefault();

        $('#lnb>li>ul>li>a').removeClass('on');
        $('#lnb>li>ul>li>ul').slideUp();

        var isOn = $(this).hasClass('on');

        if(isOn){
            $(this).removeClass('on');
            $(this).next('ul').stop().slideUp();
        }else{
            $('#lnb>li>a').removeClass('on');
            $('#lnb>li>ul').stop().slideUp();
            $(this).addClass('on');
            $(this).next('ul').stop().slideDown();
        }
    });


    $('#lnb>li>ul>li>a').on('click',function(e){
        e.preventDefault();

        var isOn = $(this).hasClass('on');
        var isDepth = $(this).next('ul').length;

        if(isDepth){
            if(isOn){
                $(this).removeClass('on');
                $(this).next('ul').stop().slideUp();
            }else{
                $('#lnb>li>ul>li>a').removeClass('on');
                $('#lnb>li>ul>li>ul').stop().slideUp();
                $(this).addClass('on');
                $(this).next('ul').stop().slideDown();
            }
        }
        
    })
});















