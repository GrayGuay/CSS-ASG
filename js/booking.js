const wonder = document.getElementById("wonder");
const flightPackage = document.getElementById("flightPackage");
const transportCheckbox = document.getElementById("transport");
const transportOptions = document.getElementById("transportOptions");

const minusDayBtn = document.getElementById("minusDay");
const plusDayBtn = document.getElementById("plusDay");
const dayCountText = document.getElementById("dayCount");

const wonderPriceText = document.getElementById("wonderPrice");
const flightPackagePriceText = document.getElementById("flightPackagePrice");
const transportPriceText = document.getElementById("transportPrice");
const totalPriceText = document.getElementById("totalPrice");
const transportRateText = document.getElementById("transportRate");

const modal = document.getElementById("summaryModal");
const summaryText = document.getElementById("summaryText");
const closeBtn = document.getElementById("closeSummary");

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

let transportDays = 1;

/* Format currency */
function formatPrice(amount) {
  return "$" + amount.toLocaleString();
}

/* Transport rates */
const transportRates = {
  5000: 300,
  4800: 280,
  5200: 350,
  4700: 250,
  4900: 260,
  5100: 320,
  5300: 340
};

function calculateTotal() {
  const wonderPrice = Number(wonder.value || 0);
  const flightPrice = Number(flightPackage.value || 0);
  const transportRate = transportRates[wonder.value] || 0;

  transportRateText.textContent = `$${transportRate}/day`;

  let transportPrice = 0;
  if (transportCheckbox.checked) {
    transportPrice = transportRate * transportDays;
  }

  const total = wonderPrice + flightPrice + transportPrice;

  wonderPriceText.textContent = formatPrice(wonderPrice);
  flightPackagePriceText.textContent = formatPrice(flightPrice);
  transportPriceText.textContent = formatPrice(transportPrice);
  totalPriceText.textContent = formatPrice(total);
}

/* Transport checkbox */
transportCheckbox.addEventListener("change", () => {
  transportOptions.classList.toggle("hidden", !transportCheckbox.checked);

  if (!transportCheckbox.checked) {
    transportDays = 1;
    dayCountText.textContent = transportDays;
  }

  calculateTotal();
});

/* Day buttons */
plusDayBtn.addEventListener("click", () => {
  if (!transportCheckbox.checked) return;
  transportDays++;
  dayCountText.textContent = transportDays;
  calculateTotal();
});

minusDayBtn.addEventListener("click", () => {
  if (!transportCheckbox.checked) return;
  if (transportDays > 1) {
    transportDays--;
    dayCountText.textContent = transportDays;
    calculateTotal();
  }
});

/* Select changes */
wonder.addEventListener("change", calculateTotal);
flightPackage.addEventListener("change", calculateTotal);

/* Form submit */
document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const destination = wonder.options[wonder.selectedIndex].text;
  const flight = flightPackage.options[flightPackage.selectedIndex].text;

  const flightTime = document.getElementById("flightTime");
  const flightTimeText = flightTime.options[flightTime.selectedIndex].text;

  const transportSummary = transportCheckbox.checked
    ? `Yes (${transportDays} days) – ${transportPriceText.textContent}`
    : "No";

  const summary =
`------------------------------------------------
BOOKING SUMMARY
------------------------------------------------
Name:
${name}

Destination:
${destination}

Flight Time:
${flightTimeText}

Flight Package:
${flight}

Private Transport:
${transportSummary}
------------------------------------------------
Thank you for booking with us!



© 2026 | 7 Wonders of the World Project`;

  summaryText.textContent = summary;
  modal.classList.remove("hidden");
});

/* Initial UI state */
transportOptions.classList.add("hidden");
calculateTotal();