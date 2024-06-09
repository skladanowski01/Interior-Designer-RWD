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
