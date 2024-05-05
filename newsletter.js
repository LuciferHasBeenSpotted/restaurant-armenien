const INSCRIPTION_BUTTON = document.querySelector('.inscription');
const INSCRIPTION_STATE = document.querySelector('.inscription-state');

INSCRIPTION_BUTTON.addEventListener('click', () => {
    INSCRIPTION_STATE.innerText = "Inscrit à la newsletter avec succès !"
})