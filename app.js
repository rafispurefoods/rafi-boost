/* =================================
   RAFI BOOST - CUSTOMER JAVASCRIPT
================================= */

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

menuBtn.addEventListener("click", () => {
  navigation.classList.toggle("show");
});

// DEMO SERVICE CATALOG
// এগুলো নমুনা সার্ভিস ও নমুনা মূল্য।

const services = [
  {
    id: "content-design",
    category: "content",
    name: "Social Media Post Design",
    price: 100,
    unit: "per design",
    description: "Professional social media post design."
  },
  {
    id: "video-edit",
    category: "content",
    name: "Short Video Editing",
    price: 250,
    unit: "per video",
    description: "Professional short-form video editing."
  },
  {
    id: "page-audit",
    category: "marketing",
    name: "Social Media Page Audit",
    price: 300,
    unit: "per audit",
    description: "Page analysis and improvement suggestions."
  },
  {
    id: "ad-setup",
    category: "marketing",
    name: "Ad Campaign Setup",
    price: 500,
    unit: "per campaign",
    description: "Advertising campaign setup service."
  },
  {
    id: "website-audit",
    category: "website",
    name: "Website Audit",
    price: 400,
    unit: "per audit",
    description: "Website performance and SEO review."
  }
];

// ELEMENTS
const categorySelect = document.getElementById("category");
const serviceSelect = document.getElementById("service");
const quantityInput = document.getElementById("quantity");
const chargeInput = document.getElementById("charge");
const orderBtn = document.getElementById("orderBtn");

// LOAD CATEGORIES
const categories = [
  { id: "content", name: "Content & Design" },
  { id: "marketing", name: "Digital Marketing" },
  { id: "website", name: "Website Services" }
];

categories.forEach(category => {
  const option = document.createElement("option");
  option.value = category.id;
  option.textContent = category.name;
  categorySelect.appendChild(option);
});

// LOAD SERVICES
function loadServices() {
  const category = categorySelect.value;

  serviceSelect.innerHTML =
    '<option value="">Select Service</option>';

  const filtered = services.filter(
    service => service.category === category
  );

  filtered.forEach(service => {
    const option = document.createElement("option");

    option.value = service.id;
    option.textContent = service.name;

    serviceSelect.appendChild(option);
  });

  calculateCharge();
}

// SERVICE DETAILS
function showServiceDetails() {
  const service = services.find(
    item => item.id === serviceSelect.value
  );

  let details = document.getElementById("serviceDetails");

  if (!details) {
    details = document.createElement("div");
    details.id = "serviceDetails";
    details.className = "panel";

    document.querySelector(".order-panel")
      .appendChild(details);
  }

  if (!service) {
    details.innerHTML = "<p>Select a service to see details.</p>";
    return;
  }

  details.innerHTML = `
    <h3>Service Details</h3>
    <p>${service.description}</p>
    <p>Price: ৳${service.price} / ${service.unit}</p>
  `;
}

// CALCULATE CHARGE
function calculateCharge() {
  const service = services.find(
    item => item.id === serviceSelect.value
  );

  const quantity = Number(quantityInput.value);

  if (!service || !Number.isInteger(quantity) || quantity < 1) {
    chargeInput.value = "";
    return;
  }

  const total = service.price * quantity;

  chargeInput.value = "৳" + total.toFixed(2);
}

// EVENTS
categorySelect.addEventListener("change", loadServices);

serviceSelect.addEventListener("change", () => {
  showServiceDetails();
  calculateCharge();
});

quantityInput.addEventListener("input", calculateCharge);

// ORDER BUTTON
orderBtn.addEventListener("click", () => {
  alert(
    "Customer login and secure backend connection are required before placing real orders."
  );
});

// INITIAL STATE
showServiceDetails();

console.log("RAFI BOOST Customer Panel Loaded");
