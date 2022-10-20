var Locatiomn;

$( ".image" )
.mouseenter(function() {
 $(this).parent('.image-container-plus').parent('.map-example').children('.texts').slideDown();
})
.mouseleave(function() {
 $(this).parent('.image-container-plus').parent('.map-example').children('.texts').slideUp();
});

function cleare(){
    $('.image').children('img').attr('src', 'img/arti.png')
    $('.image').parent('.image-container-plus').parent('.map-example').children('.texts').children('.first').css('background-color', 'rgba(255, 255, 255, 0.425)');
    $('.image').parent('.image-container-plus').parent('.map-example').children('.texts').children('.third').css('background-color', 'rgba(255, 255, 255, 0.425)');
    $('.image').parent('.image-container-plus').parent('.map-example').children('.texts').children('.first').children('p').css('color', 'white');
    $('.image').parent('.image-container-plus').parent('.map-example').children('.texts').children('.third').children('p').css('color', 'white');
    $('.image').parent('.image-container-plus').parent('.map-example').children('.texts').children('.first').children('p').css('font-weight', '400');
    $('.image').parent('.image-container-plus').parent('.map-example').children('.texts').children('.third').children('p').css('font-weight', '400');
}

$('.image').click(function(){
    $('.left-main').fadeIn();
    var check = $(this).children('img').attr('src');
    var source = $(this).attr('source');
    var spawnName = $(this).parent('.image-container-plus').parent('.map-example').children('.texts').children('.first').children('p').html();
    if(check == "img/arti.png"){
        Locatiomn = $(this).parent('.image-container-plus').parent('.map-example').attr('class').split(' ')[1];
        console.log(Locatiomn)
        cleare();
        $('.left-image').attr('src', `${source}`)
        $('.spawn-name').html(`${spawnName}`)
        $(this).children('img').attr('src', 'img/arti-select.png');
        $(this).parent('.image-container-plus').parent('.map-example').children('.texts').children('.first').css('background-color', 'white');
        $(this).parent('.image-container-plus').parent('.map-example').children('.texts').children('.third').css('background-color', 'white');
        $(this).parent('.image-container-plus').parent('.map-example').children('.texts').children('.first').children('p').css('color', 'black');
        $(this).parent('.image-container-plus').parent('.map-example').children('.texts').children('.third').children('p').css('color', 'black');
        $(this).parent('.image-container-plus').parent('.map-example').children('.texts').children('.first').children('p').css('font-weight', '700');
        $(this).parent('.image-container-plus').parent('.map-example').children('.texts').children('.third').children('p').css('font-weight', '700');
    }
})