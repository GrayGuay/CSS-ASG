/* ================================
   STATE
================================ */
let currentStep = 1;

/* ================================
   STEP NAVIGATION
================================ */

/**
 * Navigate between steps
 * @param {number} stepNumber
 */
function goToStep(stepNumber) {
    hideAllSteps();
    showStep(stepNumber);
    updateStepperVisuals(stepNumber);
    updateNavigationUI();
}

/**
 * Hide all step containers
 */
function hideAllSteps() {
    document
        .querySelectorAll('.step-container')
        .forEach(container => container.classList.add('hidden'));
}

/**
 * Show a specific step
 */
function showStep(stepNumber) {
    const step = document.getElementById(`step-${stepNumber}`);
    if (!step) return;

    step.classList.remove('hidden');
    currentStep = stepNumber;
}

/**
 * Update step indicator (1–4 circles)
 */
function updateStepperVisuals(stepNumber) {
    document.querySelectorAll('.steps .step').forEach((step, index) => {
        step.classList.toggle('active', index + 1 <= stepNumber);
    });
}

/**
 * Handle Prev / Next button logic
 */
function updateNavigationUI() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Prev button
    prevBtn.style.display = currentStep === 1 ? 'none' : 'inline-block';
    prevBtn.onclick = () => goToStep(currentStep - 1);

    // Next / Finish button
    if (currentStep === 4) {
        nextBtn.innerText = 'Finish';
        nextBtn.onclick = () => alert('Itinerary Complete!');
    } else {
        nextBtn.innerText = '➜';
        nextBtn.onclick = () => goToStep(currentStep + 1);
    }
}

/* ================================
   BUDGET CALCULATION
================================ */

/**
 * Calculate and display daily budget
 */
function calculateBudget() {
    const days = parseFloat(document.getElementById('days').value) || 1;
    const totalBudget = parseFloat(document.getElementById('total-budget').value) || 0;
    const resultBox = document.querySelector('.result-box');

    const dailyBudget = totalBudget / days;

    let message =
        'This is a very tight budget. Consider increasing your total budget or reducing trip days.';

    if (dailyBudget >= 500) {
        message = "You're all set for a premium experience!";
    } else if (dailyBudget >= 350) {
        message = 'A solid budget for a comfortable stay.';
    }

    resultBox.innerHTML = `
        <p><strong>Daily Budget:</strong> S$${dailyBudget.toFixed(2)} per day</p>
        <p class="budget-hint">${message}</p>
    `;
}

/* ================================
   HOTEL SEARCH
================================ */

const hotels = [
    "Brickyard Retreat",
    "Mutianyu Great Wall Hotel",
    "Home of the Great Wall",
    "Petra Moon Hotel",
    "Petra Moon Luxury Hotel",
    "Petra Marriott Hotel",
    "Otivm Hotel",
    "Hotel Duca D'Alba",
    "The Building Hotel",
    "Hotel Villas Arqueologicas Chichen Itza",
    "Hotel La Casa de las Lunas Chichén Itzá",
    "Hotel Puerta Chichen",
    "Casa del Sol Machu Picchu Hotel Boutique",
    "Tierra Viva Cusco Machu Picchu",
    "Gringo Bill's Hotel",
    "Radisson Hotel Agra",
    "DoubleTree by Hilton Hotel Agra",
    "Hotel Taj Resorts",
    "Hilton Rio de Janeiro Copacabana",
    "JW Marriott Hotel Rio de Janeiro",
    "Windsor California"
];

/**
 * Filter hotel list based on search input
 */
function filterHotels() {
    const input = document.getElementById('hotel-search');
    const resultsContainer = document.getElementById('search-results');
    const query = input.value.toLowerCase();

    resultsContainer.innerHTML = '';

    if (!query) {
        resultsContainer.classList.remove('active');
        return;
    }

    const matches = hotels.filter(hotel =>
        hotel.toLowerCase().includes(query)
    );

    if (!matches.length) {
        resultsContainer.classList.remove('active');
        return;
    }

    resultsContainer.classList.add('active');

    matches.forEach(hotel => {
        const item = document.createElement('div');
        item.className = 'hotel-item';
        item.innerText = hotel;

        item.onclick = () => {
            input.value = hotel;
            resultsContainer.classList.remove('active');
        };

        resultsContainer.appendChild(item);
    });
}

/* ================================
   EVENT LISTENERS
================================ */

document.getElementById('total-budget').addEventListener('input', calculateBudget);
document.getElementById('days').addEventListener('input', calculateBudget);

/* ================================
   INIT
================================ */

goToStep(1);