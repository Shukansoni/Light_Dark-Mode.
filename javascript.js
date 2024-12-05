$(document).ready(function(){
    $('.toogle').click(function(){
        $('body').toggleClass("change-background");
        $('button').toggleClass("toogle2");
        $('.div').toggleClass("div2");
        $(this).css("border","1px solid #f5f5f5");
        $('span').text(
            $('span').text()=="Light Mode"?"Dark Mode" : "Light Mode"
        );
    });
    $('.toogle').click(function(){
        $(this).find('i').toggleClass('fa-moon fa-sun');
    });
});