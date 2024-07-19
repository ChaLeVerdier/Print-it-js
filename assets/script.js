const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.querySelector("#arrowLeft");
const arrowRight = document.querySelector("#arrowRight");
const dotsContainer = document.querySelector(".dots");
// CHA ajout des nouvelles constante pour créer le slide dynamique
const bannerImg = document.querySelector(".banner-img");
const tagline = document.querySelector("#banner p");

let currentIndex = 0; // Index du slide actuel

const createDots = () => {
  // Cha créer des bullet point "dots"
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot); // recupération de la variable "dot"
    if (i === 0) {
      dot.classList.add("dot_selected");
    }
  }
};

// Fonction pour mettre à jour les points indicateurs
function updateDots(index) {
  const dots = dotsContainer.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("dot_selected"); // Ajoutez la class pour le point actuel
    } else {
      dot.classList.remove("dot_selected"); // Supprimez la class pour les autres points
    }
  });
}

// Fonction pour mettre à jour les points indicateurs, l'image et le texte
function updateCarousel(index, direction) {
  // Correction du bug pour la première image
  if (currentIndex === -1 && direction === "left") {
    currentIndex = slides.length - 1;
  } else if (currentIndex === slides.length && direction === "right") {
    currentIndex = 0;
  }

  // Mettre à jour l'image
  const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
  bannerImg.src = imagePath;
  bannerImg.alt = `Slide ${currentIndex + 1}`;

  // Mettre à jour le texte
  const tagLine = slides[currentIndex].tagLine;
  document.querySelector("p").innerHTML = tagLine;

  console.log(`Clic sur la flèche ${direction}`);
}

// CHA ajout des Event Listeners sur les flêches : flèche de gauche
arrowLeft.addEventListener("click", () => {
  // () => idem que "fonction ()" mais methode plus récente.
  currentIndex = currentIndex - 1;
  updateCarousel(currentIndex, "left");
  updateDots(currentIndex);
}); // Mettez à jour les points indicateurs

// CHA ajout des Event Listeners sur les flêches : flèche de droite
arrowRight.addEventListener("click", () => {
  // () => idem que "fonction ()" mais methode plus récente.
  currentIndex = currentIndex + 1;
  updateCarousel(currentIndex, "right");
  updateDots(currentIndex); // CHA mise à jour des dots
  // console.log();
});

createDots();
updateCarousel(currentIndex, "démarrage"); // CHA mise à jpur du slider à l'initialisation
