document.addEventListener('DOMContentLoaded', () => {
    const modalGallery = document.querySelector('.modal-gallery');
    const captionText = document.querySelector('.caption');
    const closeBtn = document.querySelector('.close-modal');
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    let swiper;

    console.log("Elements loaded:", modalGallery, captionText, closeBtn, swiperWrapper);

    document.querySelectorAll('.zoomable').forEach((img, index) => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        const slideImg = document.createElement('img');
        slideImg.classList.add('modal__gallery-content');
        slideImg.src = img.src;
        slideImg.alt = img.alt;
        slide.appendChild(slideImg);
        swiperWrapper.appendChild(slide);

        img.addEventListener('click', () => {
            modalGallery.style.display = 'block';
            console.log("Setting caption to:", img.alt);
            captionText.innerHTML = img.alt;
            console.log("Caption text:", captionText.innerHTML); 

            
            if (!swiper) {
                swiper = new Swiper('.swiper-container', {
                    initialSlide: index,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
            } else {
                swiper.slideTo(index, 0);
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modalGallery.style.display = 'none';
    });

    modalGallery.addEventListener('click', (event) => {
        if (event.target === modalGallery) {
            modalGallery.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Funkcja dodająca klasę fade-in do wszystkich obrazków
    function fadeInImages() {
      const images = document.querySelectorAll('.gallery__box .content img');
      images.forEach(img => {
        img.classList.add('fade-in');
      });
    }

    // Po załadowaniu strony
    fadeInImages();

    // Funkcja filtrowania obrazków
    function filterSelection(category) {
      const columns = document.querySelectorAll('.gallery__box .column');
      columns.forEach(column => {
        if (category === 'all' || column.classList.contains(category)) {
          column.style.display = 'block';
        } else {
          column.style.display = 'none';
        }
      });
      
      // Dodanie animacji po filtrowaniu
      fadeInImages();
    }

    // Dodanie nasłuchiwania na przyciski filtrowania
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        const category = this.getAttribute('onclick').match(/filterSelection\('(.+?)'\)/)[1];
        filterSelection(category);
        
        // Usunięcie klasy aktywnej ze wszystkich przycisków
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Dodanie klasy aktywnej do klikniętego przycisku
        this.classList.add('active');
      });
    });
  });
