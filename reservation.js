const RESERVATION_FORM = document.querySelector('#reservation-form');
const RESERVATION_STATE = document.querySelector('.reservation-state');

RESERVATION_FORM.addEventListener('submit', (event) => {
    event.preventDefault();

    RESERVATION_STATE.innerText = "Réservation confirmée !";
});