
// ----- Плавный скролл к якорям

$(document).ready(function(){
    $('a.scroll').click(function(){
        var idscroll = $(this).attr('href');
        $.scrollTo(idscroll, 1000, {margin:true});
        return false;
    });
});

// ------