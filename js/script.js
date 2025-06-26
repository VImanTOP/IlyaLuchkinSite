// При наведении на пункт меню
document.querySelectorAll('.navigation a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.fontWeight = 'bold';
  });
  link.addEventListener('mouseleave', () => {
    link.style.fontWeight = 'normal';
  });
});

// Обработка формы
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Спасибо за сообщение!');
  this.reset();
});