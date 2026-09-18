document.addEventListener("DOMContentLoaded", function() {

    const links = document.querySelectorAll(".menu a");

    links.forEach(function(link) {

        link.addEventListener("click", function(event) {

            event.preventDefault();

            const destino = this.href;

            document.querySelector("main").classList.add("saindo");

            setTimeout(function() {
                window.location.href = destino;
            }, 500);

        });

    });

});