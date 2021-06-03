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

$(document).ready(function () {
    $("#btn_mail").click(function () {
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

let titulo = document.querySelector(".change__color")

titulo.addEventListener("dblclick", () => {
    titulo.classList.toggle("change_red")
})