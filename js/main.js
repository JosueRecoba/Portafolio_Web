// ===== MENÚ LATERAL =====
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
  sideMenu.classList.add('open');
});

document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".typing-text");

  const mainText = "Hola, soy Josue Recoba ";
  const phrases = [
    "Ingeniero en Desarrollo y Gestión de Software",
    "Diseñador UX / UI",
    "Apasionado por la tecnología",
  ];

  let index = 0;       // para la frase actual en phrases
  let charIndex = 0;   // para la posición de la letra dentro de la frase
  let isDeleting = false;
  let isMainTextDone = false;

  function type() {
    if (!isMainTextDone) {
      
      textElement.textContent = mainText.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === mainText.length) {
        isMainTextDone = true;
        charIndex = 0;
        setTimeout(type, 1500); 
      } else {
        setTimeout(type, 100);
      }
    } else {
      let currentPhrase = phrases[index];
      if (!isDeleting) {
        textElement.textContent = currentPhrase.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          setTimeout(type, 1500); // pausa antes de borrar
        } else {
          setTimeout(type, 100);
        }
      } else {
        textElement.textContent = currentPhrase.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          index = (index + 1) % phrases.length; // siguiente frase en loop
          setTimeout(type, 500);
        } else {
          setTimeout(type, 50);
        }
      }
    }
  }

  type();

  // Cursor parpadeante
  setInterval(() => {
    if (textElement.style.borderRight === "3px solid #007aff") {
      textElement.style.borderRight = "3px solid transparent";
    } else {
      textElement.style.borderRight = "3px solid #007aff";
    }
  }, 500);
});

// ===== FORMULARIO DE CONTACTO =====
const contactForm = document.getElementById('contact-form');
const btn = document.getElementById('button');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    btn.textContent = 'Enviando...';

    emailjs.sendForm('default_service', 'template_6mq8e7d', this)
      .then(() => {
        btn.textContent = 'Enviar';
        alert('¡Mensaje enviado con éxito!');
        contactForm.reset();
      })
      .catch((err) => {
        btn.textContent = 'Enviar';
        alert('Error al enviar el mensaje. Intenta de nuevo.');
        console.error('EmailJS Error:', err);
      });
  });
}   

// ===== Targetas reverso =====
document.querySelectorAll('.flip-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const cardFlip = e.target.closest('.card-flip');
    cardFlip.classList.toggle('flipped');
  });
});