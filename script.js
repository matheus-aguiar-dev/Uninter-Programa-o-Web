document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aqui você pode adicionar o código para enviar o formulário
    alert('Obrigado! Sua mensagem foi enviada.');
  });