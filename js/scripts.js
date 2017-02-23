$(document).ready(function() {
    $("form#form1").submit(function(event) {
        var num = $("input#input1").val();
        var result = '';
        var arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
        for (var i = 0; i < arabic.length; i++) {
            while (num % arabic[i] < num) {
                result += roman[i];
                num -= arabic[i];
            }
        }
        if (num>3999) {
          result="cannot work!"
        }
        console.log(result)
        $("#result").text(result)
        event.preventDefault();
    });
});
