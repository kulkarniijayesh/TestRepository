 $("div span:first-child")
        .css("text-decoration", "underline")
        .hover(function () {
              $(this).addClass("sogreen");
            }, function () {
              $(this).removeClass("sogreen");
            });
