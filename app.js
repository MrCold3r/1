$('.btn').click(function(event){
    event.preventDefault();
    $('.box').animate({
        'width':'500px',
        'transition':'all .5s ease'
    },1000,function(){
        $('.box').animate({
        'height':'500px',
        'transition':'all .5s ease'
    },1000);   
    });
});

