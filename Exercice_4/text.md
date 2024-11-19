
EXO 1
// Sélectionne l'image par son ID
const image = document.getElementById('image1');

// Ajoute un écouteur d'événement pour le survol
image.addEventListener('mouseover', () => {
    image.style.border = '3px solid red'; // Ajoute une bordure rouge de 3px
});

// Ajoute un écouteur d'événement pour le retrait de la souris
image.addEventListener('mouseout', () => {
    image.style.border = 'none'; // Supprime la bordure
});



EXO 2
// Sélectionner les éléments nécessaires
const showLink = document.getElementById('show'); // Lien "Afficher"
const hideLink = document.getElementById('hide'); // Lien "Masquer"
const textDiv = document.getElementById('text'); // Texte à afficher/masquer

// Masquer le texte au chargement initial
textDiv.style.display = 'none';

// Ajouter un événement pour afficher le texte
showLink.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    textDiv.style.display = 'block'; // Affiche le texte
});

// Ajouter un événement pour masquer le texte
hideLink.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    textDiv.style.display = 'none'; // Masque le texte
});



EXO 3 
const greenButton = document.querySelector("#buttongreen");
const redButton = document.querySelector("#buttonred");
const blueButton = document.querySelector("#buttonblue");
const textDiv = document.querySelector("#text");

// Fonction pour changer la couleur en fonction du bouton cliqué
function handleClickChangeText(color) {
  // Supprimer toutes les classes de couleur existantes
  textDiv.classList.remove("green", "red", "blue");
  // Ajouter la nouvelle classe de couleur
  textDiv.classList.add(color);
}

// Ajout des gestionnaires d'événements pour chaque bouton
greenButton.addEventListener("click", () => handleClickChangeText("green"));
redButton.addEventListener("click", () => handleClickChangeText("red"));
blueButton.addEventListener("click", () => handleClickChangeText("blue"));


EXO 4
// Sélectionner les éléments du formulaire
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const verifyButton = document.querySelector('button');

// Ajouter un événement "click" au bouton de vérification
verifyButton.addEventListener('click', () => {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password === confirmPassword) {
        // Les mots de passe correspondent : bordures en vert
        passwordInput.style.border = '2px solid green';
        confirmPasswordInput.style.border = '2px solid green';
    } else {
        //