var contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', prevDefault);

function prevDefault(event) {
  event.preventDefault();
  var messageData = {};

  messageData.name = contactForm.elements.name.value;
  messageData.email = contactForm.elements.email.value;
  messageData.message = contactForm.elements.message.value;

  console.log(messageData);
  contactForm.reset();
}
