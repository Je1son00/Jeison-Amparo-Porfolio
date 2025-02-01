document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const messageDiv = document.getElementById('form-message');
    
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            messageDiv.textContent = 'Mensaje enviado con éxito!';
            messageDiv.className = 'success';
            form.reset();
        } else {
            messageDiv.textContent = 'Hubo un error al enviar el mensaje.';
            messageDiv.className = 'error';
        }
        messageDiv.style.display = 'block';
    }).catch(error => {
        messageDiv.textContent = 'Hubo un error al enviar el mensaje.';
        messageDiv.className = 'error';
        messageDiv.style.display = 'block';
    });
});