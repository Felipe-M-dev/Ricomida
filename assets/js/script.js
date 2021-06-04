/* Tooltip */

$(function () {

    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $('html, body').animate({
                scrollTop: $(gato).offset().top
            }, 800, function () {
                window.location.hash = gato;
            });
        }
    });

    $('[data-toggle="tooltip"]').tooltip();

});

/* Sending mail message */

$(document).ready(function () {
    $("#enviarCorreo").click(function () {
        var section_alert = $('#myalert');

        var nodo = `<div class="container-fluid alert alert-warning alert-dismissible fade show text-center" role="alert" style="width: 300px;">
      <strong>El correo fue enviado correctamente...</strong>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      </div>`
        section_alert.append(nodo);

    });
});

/* Add fav message */

$(document).ready(function () {
    $("#enviarFav").click(function () {
        var section_alert = $('#myalert');

        var nodo = `<div class="container-fluid bg-danger alert alert-warning alert-dismissible fade show text-center" role="alert" style="width: 18.75rem;">
      <strong class="text-white">Añadido a favoritos correctamente...</strong>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      </div>`
        section_alert.append(nodo);

    });
});

/* Change color text JQuery 'on' method */

$(document).ready(function () {
    $("#preparation__change").on("dblclick", function () {
        $(this).toggleClass("change__red");
    });
});

$(document).ready(function () {
    $("#ingredients__change").on("dblclick", function () {
        $(this).toggleClass("change__red");
    });
});

/* JQuery 'toggle' method */

$(document).ready(function () {
    $("#card-toggle1").click(function () {
        $("#p_text1").toggle();
        $("#img_toggle1").toggle();
    });
});

$(document).ready(function () {
    $("#card-toggle2").click(function () {
        $("#p_text2").toggle();
        $("#img_toggle2").toggle();
    });
});

$(document).ready(function () {
    $("#card-toggle3").click(function () {
        $("#p_text3").toggle();
        $("#img_toggle3").toggle();
    });
});