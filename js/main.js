$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $('a.navbar-brand').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $(document).ready(function() {
        $("input").blur(function() {
            if ($(this).val() == "") {
                $(this).css({
                    "border": "1px solid #F00",
                    "padding": "2px"
                });
            }
        });
        $("#botao").click(function() {
            var cont = 0;
            $("#form input").each(function() {
                if ($(this).val() == "") {
                    $(this).css({
                        "border": "1px solid #F00",
                        "padding": "2px"
                    });
                    cont++;
                } else {
                    $(this).css({
                        "border": "1px solid #ccc",
                        "padding": "2px"
                    });
                }
            });
            $("#form textarea").each(function() {
                if ($(this).val() == "") {
                    $(this).css({
                        "border": "1px solid #F00",
                        "padding": "2px"
                    });
                    cont++;
                } else {
                    $(this).css({
                        "border": "1px solid #ccc",
                        "padding": "2px"
                    });
                }
            });

            if (cont == 0) {
                $.ajax({
                    url: 'https://contato-twsatc.rhcloud.com/contato-api/email',
                    type: 'post',
                    dataType: 'json',
                    data: $('#form').serialize(),
                    success: function(data) {
                        if (data) {
                            alert("Informações enviadas com sucesso...");
                            $("#form input").each(function() {
                                $(this).val("")
                            });
                            $("#form textarea").each(function() {
                                $(this).val("")
                            });
                        } else {
                            alert("Erro ao enviar...");
                        }
                    }
                });
            }
        });
    });
});
