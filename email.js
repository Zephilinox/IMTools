$(document).ready(function() {
    $('#emailForm').submit(function(e) {
        e.preventDefault();
        
        $.ajax({
            type: "POST",
            url: "email.php",
            data: $('#emailForm').serialize(),
            success: function(data) {							
                $('.returnMessage').css('display', 'block');
                
                if (data.substr(0, 4) == "TRUE") {
                    $('.returnMessage').html(data.substr(4, data.length - 1));
                    $('.returnMessage').css('background-color', '#66ff66');
                } else if (data.substr(0, 5) == "FALSE") {
                    $('.returnMessage').html(data.substr(5, data.length - 1));
                    $('.returnMessage').css('background-color', '#ff6666');
                } else {
                    $('.returnMessage').html("An unknown error has occured");
                    $('.returnMessage').css('background-color', '#ff6666');
                }
            }
        });
    });
});