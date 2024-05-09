/* EMAIL JS */
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (p) => {
    p.preventDefault()

    // serviceID - templateID -#form - publicKey
    emailjs.sendForm('service_6mosjti', 'template_w35edlp', '#contact-form', 'v17t52CvjouCHPbIy')
    .then(() => {
        //Show sent message
        contactMessage.textContent = 'Wiadomość została wysłana pomyślnie 😁👍'

        //Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 4200)

        //Clear input fields
        contactForm.reset()

    }, () => {
        //Show error message
        contactMessage.textContent = 'Wiadomość nie została wysłana (błąd serwera). Spróbuj ponownie 😎'
    })
}

contactForm.addEventListener('submit', sendEmail)