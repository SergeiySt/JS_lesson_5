
// # 1
$(document).ready(function () {

    $("#loginForm").submit(function (event) {
        event.preventDefault();

        var userName = $("#username").val();
        var password = $("#password").val();

        var rememberMe = $("#remember-me").is(":checked");
        var message = rememberMe ? "Я тебе запам’ятав" : "Я тебе не запам’ятав";

        $("#result").html("Привіт, " + userName + "! " + message);
    });
});

