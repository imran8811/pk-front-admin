$(document).ready(function(){
    var base_url = "http://localhost:8080/gdrive/jeanzoweb/admin/";
    //var base_url = "http://www.lahorijeans.com/dev/admin";
    $(".login-form .btn-submit").on("click", function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: base_url + "api.php",
            data: {
                email: $("#user-email").val(),
                password: $("#user-pass").val(),
                admin_login: 1
            },
            success: function(data){
                if(data === '1'){
                    window.location.href= base_url + "add-product.php";
                } else {
                    $(".login-form").prepend("<span class='msg-error'>Invalid Username/Pass</span>");
                }
            }
        })
    })

    $(".main-nav .btn-logout").on("click", function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: base_url + "/api.php",
            data: {
                logout:1
            },
            success: function(data){
                if(data === '1'){
                    window.location.href= "http://localhost:8080/gdrive/jeanzoweb/admin";
                } else {
                    window.location.href= "http://localhost:8080/gdrive/jeanzoweb/admin";
                }
            }
        })
    })
});