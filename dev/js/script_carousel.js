let currentSet = 0;
const itemsToShow = 4;

// Función para mostrar el conjunto actual en un carrusel específico
function showSet(carousel, n) {
  const slides = carousel.querySelector('.carousel_items');
  const slideWidth = carousel.querySelector('.box_img').clientWidth;
  const totalSets = Math.ceil(slides.childElementCount / itemsToShow);

  currentSet = (n + totalSets) % totalSets;

  const startIndex = currentSet * itemsToShow;
  const endIndex = Math.min(startIndex + itemsToShow, slides.childElementCount);

  slides.style.transform = `translateX(-${startIndex * slideWidth}px)`;
}

// Función para cambiar el conjunto en un carrusel específico
function changeSlide(carousel, n) {
  showSet(carousel, currentSet + n);
}

// Manejar clic en los botones de navegación para cada carrusel
document.querySelectorAll('.prevBtn').forEach((prevBtn) => {
  prevBtn.addEventListener('click', () => {
    const carousel = prevBtn.closest('.carousel_container');
    changeSlide(carousel, -1);
  });
});

document.querySelectorAll('.nextBtn').forEach((nextBtn) => {
  nextBtn.addEventListener('click', () => {
    const carousel = nextBtn.closest('.carousel_container');
    changeSlide(carousel, 1);
  });
});

// Mostrar el primer conjunto de slides para cada carrusel al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel_container').forEach((carousel, index) => {
    showSet(carousel, 0);
  });
});

/*funcionamiento de el popup del carousel*/
document.querySelectorAll('.carousel_items img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup_img').style.display = 'block';
        document.querySelector('.popup_img img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup_img button').onclick = () =>{
    document.querySelector('.popup_img').style.display = 'none';
};

