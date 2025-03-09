document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const destination = document.getElementById('destination').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;

    const confirmation = document.getElementById('confirmation');
    confirmation.style.display = 'block';
    confirmation.innerHTML = `<h2>Confirmación de Reservación</h2>
                              <p><strong>Destino:</strong> ${destination}</p>
                              <p><strong>Check-in:</strong> ${checkin}</p>
                              <p><strong>Check-out:</strong> ${checkout}</p>
                              <p><strong>Número de Huéspedes:</strong> ${guests}</p>`;
    
    // Limpiar el formulario después de enviar
    document.getElementById('reservation-form').reset();
}); 