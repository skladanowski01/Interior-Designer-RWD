/* Portfolio modal card */
const modal = document.querySelectorAll('.portfolio__modal'),
        modalButton = document.querySelectorAll('.portfolio__button'),
        modalBack = document.querySelectorAll('.button__portfolio-back')

function activeModal(modalClick) {
    modal[modalClick].classList.add('active-modal')
}

modalButton.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => {
        activeModal(i)
    })
})

/* close portfolio modal */
modalBack.forEach((modalBack) => {
    modalBack.addEventListener('click', () =>{
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active-modal')
        })
    })
})

/* Gallery modal zoom in/out */
document.addEventListener('DOMContentLoaded', () => {
    const modalGallery = document.querySelector('.modal-gallery');
    const modalImg = document.querySelector('.modal__gallery-content');
    const captionText = document.querySelector('.caption');
    const closeBtn = document.querySelector('.close-modal');

    document.querySelectorAll('.zoomable').forEach(img => {
        img.addEventListener('click', () => {
            modalGallery.style.display = 'block';
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
        });
    });

    closeBtn.addEventListener('click', () => {
        modalGallery.style.display = 'none';
    });
});

/* swiper testimonial */
const swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 5,
    grabCursor: true,
  
    
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },   
  });
/* swiper modal */
const swiperModal = new Swiper('.img__modal-container', {
    loop: true,
    spaceBetween: 2,
    grabCursor: true,
  
    
    scrollbar: {
        el: '.swiper-scrollbar',
      }, 
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });
  /* swiper for gallery */
  





