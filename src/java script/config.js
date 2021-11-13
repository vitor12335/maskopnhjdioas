$('.color').click(()=>{
    console.log("entro");
    $('.color').removeClass('btn-secondary');
    $('.color').stop('btn-danger');
    $('.color').animate('btn-success');

})
$('.text').click(function(){
    $(this).text("hola mundo");
})

$("#stop").click(function(){
    $(this).stop();
});


$('.animate').click(function(){
    $(this).animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
}); 
