document.addEventListener("DOMContentLoaded", function() {
  const slowLoadElements = document.querySelectorAll(".slow-load");

  slowLoadElements.forEach(element => {
    const imgSrc = element.getAttribute("data-src");
    const img = new Image();
    img.src = imgSrc;

    img.onload = function() {
      element.style.backgroundImage = `url(${imgSrc})`;
      element.style.opacity = 1;
    };
  });

  const swiper = new Swiper('.banners--container', {
    loop: true,
    pagination: {
      el: '.banners__pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000, // Defina o intervalo de tempo em milissegundos (por exemplo, 5000 = 5 segundos)
    },
  });
});