window.document.querySelector('.menu-btn').addEventListener('click', function () {
  window.document.querySelector('.main-nav-menu').classList.toggle('show');
});




document.addEventListener("contextmenu", function (e) {
    e.preventDefault();

    var contextMenu = document.getElementById("contextMenu");

    contextMenu.style.display = "block";
    contextMenu.style.left = e.clientX + "px";
    contextMenu.style.top = e.clientY + "px";

    document.addEventListener("click", function () {
        contextMenu.style.display = "none";
    }, {once: true});
});
