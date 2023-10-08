
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


// # 2
$(document).ready(function () {
    $("#registrationForm").submit(function (event) {
        event.preventDefault();

        var email = $("#email").val();
        var username = $("#username").val();
        var password1 = $("#password1").val();
        var password2 = $("#password2").val();

        if (password1 !== password2) {
            $("#result2").html("Паролі не співпадають");
            return;
        }
        $("#result2").html("На " + email + " надіслано листа з підтвердженням");
    });
});


// # 3

$(document).ready(function () {
    $("#userInfoForm").submit(function (event) {
        event.preventDefault();

        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var birthDate = $("#birthDate").val();
        var gender = $("input[name='gender']:checked").val();
        var country = $("#country").val();
        var city = $("#city").val();
        var skills = [];
        $("input[name='skills']:checked").each(function () {
            skills.push($(this).val());
        });


        var table = "<table class='table'>";
        table += "<tr><td>Ім'я</td><td>" + firstName + "</td></tr>";
        table += "<tr><td>Прізвище</td><td>" + lastName + "</td></tr>";
        table += "<tr><td>Дата народження</td><td>" + birthDate + "</td></tr>";
        table += "<tr><td>Стать</td><td>" + gender + "</td></tr>";
        table += "<tr><td>Країна</td><td>" + country + "</td></tr>";
        table += "<tr><td>Місто</td><td>" + city + "</td></tr>";
        table += "<tr><td>Навички</td><td>" + skills.join(", ") + "</td></tr>";
        table += "</table>";

        /* $("#resultTableContainer").html("");
        $("#resultTableContainer").append("<h2 class='text-center'>Результат</h2>");
        $("#resultTableContainer").append(table); */

        var resultHtml = "<div class='highlighted-block p-4'>";
        resultHtml += "<h2 class='text-center'>Результат</h2>";
        resultHtml += table;
        resultHtml += "</div>";

        $("#resultTableContainer").html(resultHtml);
    });
});


// # 4

$(document).ready(function () {
    $("#addColorForm").submit(function (event) {
        event.preventDefault();

        var red = $("#red").val();
        var green = $("#green").val();
        var blue = $("#blue").val();

        if (red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255) {
            var colorElement = $("<div class='color-element'></div>");
            var colorSwatch = $("<div class='color-swatch'></div>");
            var colorCode = $("<div class='color-code'></div>");

            var colorValue = "RGB(" + red + ", " + green + ", " + blue + ")";
            colorSwatch.css("background-color", colorValue);
            colorCode.text(colorValue);

            colorElement.append(colorSwatch);
            colorElement.append(colorCode);

            $("#color-container").append(colorElement);

            $("#red").val("");
            $("#green").val("");
            $("#blue").val("");
        } else {
            alert("Будь ласка, введіть допустимі значення для кольору (0-255).");
        }
    });
});
