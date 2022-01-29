$(document).ready(function () {
    $("html").on("submit", "#contactForm", function (e) {
        e.preventDefault();
        $("#sendFormStatus").html('').hide();
        var data = $("#contactForm").serialize();
        $.post("/Zakopane/sendForm.php", data, function (res) {
            $("#sendFormStatus").html(res.msg).show();
            if (res.status == 1) {
                $("#contactForm")[0].reset();
            }
        });
    });
});