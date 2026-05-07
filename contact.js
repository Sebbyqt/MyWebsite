/*=============== CONTACT FORM ===============*/
const contactForm = document.getElementById('contact-form')
const formStatus = document.getElementById('form-status')

if (contactForm) {
   contactForm.addEventListener('submit', (e) => {
      e.preventDefault()
      
      const btn = contactForm.querySelector('.contact__form-button')
      btn.textContent = 'SENDING...'
      btn.disabled = true

      setTimeout(() => {
         formStatus.textContent = '✓ Message sent! I\'ll get back to you soon.'
         formStatus.className = 'contact__form-status success'
         contactForm.reset()
         btn.innerHTML = 'SEND MESSAGE <i class="ri-send-plane-fill"></i>'
         btn.disabled = false

         setTimeout(() => {
            formStatus.textContent = ''
            formStatus.className = 'contact__form-status'
         }, 5000)
      }, 1500)
   })
}
