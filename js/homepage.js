const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

const wonderInfo = {
  "Great Wall of China": {
    description:
      "The Great Wall of China is a massive defensive structure built over several dynasties starting from the 7th century BC. It was constructed using stone, brick, and earth to protect ancient China from invasions."
  },
  "Petra": {
    description:
      "Petra is an ancient city carved into rose-red sandstone cliffs by the Nabataean civilization."
  },
  "Christ the Redeemer": {
    description:
      "Christ the Redeemer is a colossal statue built using reinforced concrete and soapstone."
  },
  "Machu Picchu": {
    description:
      "Machu Picchu is a 15th-century Incan citadel built with precisely cut stones without mortar."
  },
  "Chichén Itzá": {
    description:
      "Chichén Itzá is a Mayan city famous for astronomical alignments."
  },
  "Colosseum": {
    description:
      "The Colosseum is a massive Roman amphitheater used for gladiatorial contests."
  },
  "Taj Mahal": {
    description:
      "The Taj Mahal is a white marble mausoleum built as a symbol of love."
  }
};

function openModal(title) {
  modalTitle.textContent = title;
  modalDescription.textContent =
    wonderInfo[title]?.description || "Information not available.";
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}


/* Fun fact */
const items = document.querySelectorAll(".carousel-item");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

function showItem(index) {
  items.forEach(item => item.classList.remove("active"));
  items[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showItem(currentIndex);
});

// Auto-slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
}, 5000);

