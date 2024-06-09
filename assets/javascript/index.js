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
  
  





