var heart = document.querySelector('.heart'),
    reload = document.querySelector('.reload'),
    hearts = document.querySelector('.hearts'),
    allHearts = document.querySelectorAll('.hearts div'),
    heartAnime = document.querySelector('.heart.anime');

heart.addEventListener('click', animation);
reload.addEventListener('click', refresh);

function animation() {
   heart.classList.add("active");
   reload.style.opacity = "1";
   reload.style.pointerEvents = "auto";
   heartAnime.style.opacity = "0";

   allHearts.forEach(function(element) {
      element.classList.add("active");
   });
}

function animation() {
   // Redireccionar a otra URL al hacer clic en el corazón
   window.location.href = 'vidfeo2.html'; // Reemplaza 'ruta_del_video.html' con la URL a la que quieres redirigir

   // Si deseas mantener alguna otra funcionalidad del corazón antes de redireccionar, 
   // puedes agregarla aquí, como agregar o quitar clases, animaciones, etc.
}


function refresh() {
  heart.classList.remove("active");
  reload.style.opacity = "0";
  reload.style.pointerEvents = "none";
  heartAnime.style.opacity = "1";

  allHearts.forEach(function(element) {
      element.classList.remove("active");
   });
}
