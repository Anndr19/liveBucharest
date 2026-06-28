// ===== MOCK DATA =====
// An array of objects
// Each object is one place with all its details

const places = [
  // ===== CENTRU =====
  {
    name: "Caru' cu Bere",
    sector: "Centru",
    category: "Food",
    rating: 4.7,
    hours: "11:00 - 23:00",
    address: "Str. Stavropoleos 5, București",
    crowd: "Medium",
    description:
      "Iconic 1879 beer hall with stunning Neo-Gothic interior. A Bucharest landmark.",
    bestTime: "Weekday lunch",
    gradient: "linear-gradient(135deg, #2a1008, #8B4513)",
  },
  {
    name: "Nomad Skybar",
    sector: "Centru",
    category: "Drinks",
    rating: 4.3,
    hours: "16:00 - 02:00",
    address: "Strada Smârdan 30, București",
    crowd: "Full",
    description:
      "Rooftop bar with stunning city views and signature cocktails.",
    bestTime: "Weekdays after 22:00",
    gradient: "linear-gradient(135deg, #1a1020, #4a2060)",
  },
  {
    name: "Origo Coffee",
    sector: "Centru",
    category: "Coffee",
    rating: 4.8,
    hours: "08:00 - 21:00",
    address: "Str. Academiei 28, București",
    crowd: "Medium",
    description:
      "Specialty coffee roaster in the heart of the city. Best flat white in Bucharest.",
    bestTime: "Weekday mornings",
    gradient: "linear-gradient(135deg, #1a0f00, #5c3d1e)",
  },
  {
    name: "Cișmigiu Park",
    sector: "Centru",
    category: "Parks",
    rating: 4.6,
    hours: "Open 24h",
    address: "Bd. Regina Elisabeta, București",
    crowd: "Chill",
    description:
      "Bucharest's oldest park. Perfect for a morning walk or a lazy afternoon.",
    bestTime: "Weekend mornings",
    gradient: "linear-gradient(135deg, #0a1f0a, #1a4a1a)",
  },
  {
    name: "Cărtureşti Carusel",
    sector: "Centru",
    category: "Culture",
    rating: 4.9,
    hours: "10:00 - 22:00",
    address: "Str. Arthur Verona 13, București",
    crowd: "Chill",
    description:
      "The most beautiful bookstore in Romania. Six floors of books, art and coffee.",
    bestTime: "Weekday afternoons",
    gradient: "linear-gradient(135deg, #0a0a1f, #1a1a4a)",
  },
  {
    name: "Universitate Square",
    sector: "Centru",
    category: "Date Spot",
    rating: 4.5,
    hours: "Open 24h",
    address: "Piața Universității, București",
    crowd: "Medium",
    description:
      "The beating heart of Bucharest. Great for people watching and evening walks.",
    bestTime: "Weekend evenings",
    gradient: "linear-gradient(135deg, #1a1000, #4a3800)",
  },

  // ===== SECTOR 1 =====
  {
    name: "Floreasca Park",
    sector: "1",
    category: "Parks",
    rating: 4.5,
    hours: "Open 24h",
    address: "Str. Floreasca, București",
    crowd: "Chill",
    description:
      "A peaceful green escape in the upscale Floreasca neighborhood.",
    bestTime: "Weekday mornings",
    gradient: "linear-gradient(135deg, #0a1f0a, #1a4a1a)",
  },
  {
    name: "Kane Coffee",
    sector: "1",
    category: "Coffee",
    rating: 4.7,
    hours: "07:30 - 20:00",
    address: "Str. Pictor Verona 13, București",
    crowd: "Medium",
    description:
      "Minimalist specialty coffee shop loved by creatives and remote workers.",
    bestTime: "Weekday mornings",
    gradient: "linear-gradient(135deg, #1a0f00, #5c3d1e)",
  },
  {
    name: "Diplomats Club",
    sector: "1",
    category: "Drinks",
    rating: 4.4,
    hours: "18:00 - 02:00",
    address: "Bd. Primăverii 19, București",
    crowd: "Full",
    description:
      "Upscale cocktail bar in the embassy district. Dress to impress.",
    bestTime: "Friday evenings",
    gradient: "linear-gradient(135deg, #1a1020, #4a2060)",
  },
  {
    name: "Dorobanți Food Market",
    sector: "1",
    category: "Food",
    rating: 4.6,
    hours: "10:00 - 22:00",
    address: "Piața Dorobanți, București",
    crowd: "Medium",
    description:
      "Upscale food market with local produce and international cuisine.",
    bestTime: "Weekend afternoons",
    gradient: "linear-gradient(135deg, #2a1008, #8B4513)",
  },
  {
    name: "Herăstrău Park",
    sector: "1",
    category: "Date Spot",
    rating: 4.8,
    hours: "Open 24h",
    address: "Șos. București-Ploiești, București",
    crowd: "Medium",
    description:
      "Bucharest's largest park surrounding a beautiful lake. Magic at sunset.",
    bestTime: "Weekend evenings",
    gradient: "linear-gradient(135deg, #1a1000, #4a3800)",
  },
  {
    name: "Shift Pub",
    sector: "1",
    category: "Work Friendly",
    rating: 4.5,
    hours: "09:00 - 23:00",
    address: "Str. Menuetului 4, București",
    crowd: "Chill",
    description:
      "Cozy pub with fast wifi, great coffee and even better beer after 5pm.",
    bestTime: "Weekday afternoons",
    gradient: "linear-gradient(135deg, #0a0a1f, #1a1a4a)",
  },

  // ===== SECTOR 2 =====
  {
    name: "Tei Lake Park",
    sector: "2",
    category: "Parks",
    rating: 4.3,
    hours: "Open 24h",
    address: "Str. Lacul Tei, București",
    crowd: "Chill",
    description: "Hidden gem lake park in Sector 2. Locals only, no tourists.",
    bestTime: "Weekday mornings",
    gradient: "linear-gradient(135deg, #0a1f0a, #1a4a1a)",
  },
  {
    name: "Vatra Coffee",
    sector: "2",
    category: "Coffee",
    rating: 4.6,
    hours: "08:00 - 20:00",
    address: "Str. Moșilor 100, București",
    crowd: "Chill",
    description:
      "Neighborhood specialty coffee shop with a warm, homey atmosphere.",
    bestTime: "Weekend mornings",
    gradient: "linear-gradient(135deg, #1a0f00, #5c3d1e)",
  },
  {
    name: "Grădina Florilor",
    sector: "2",
    category: "Date Spot",
    rating: 4.4,
    hours: "10:00 - 22:00",
    address: "Str. Florilor 12, București",
    crowd: "Chill",
    description:
      "A romantic garden restaurant tucked away from the city noise.",
    bestTime: "Weekend evenings",
    gradient: "linear-gradient(135deg, #1a1000, #4a3800)",
  },
  {
    name: "Obor Market",
    sector: "2",
    category: "Culture",
    rating: 4.2,
    hours: "06:00 - 18:00",
    address: "Piața Obor, București",
    crowd: "Full",
    description:
      "Bucharest's most authentic market. Raw, real, and full of character.",
    bestTime: "Saturday mornings",
    gradient: "linear-gradient(135deg, #0a0a1f, #1a1a4a)",
  },
  {
    name: "Lacrimi și Sfinți",
    sector: "2",
    category: "Food",
    rating: 4.8,
    hours: "12:00 - 23:00",
    address: "Str. Sfântul Ștefan 16, București",
    crowd: "Full",
    description:
      "Creative Romanian cuisine in a stunning setting. Book in advance.",
    bestTime: "Weekday evenings",
    gradient: "linear-gradient(135deg, #2a1008, #8B4513)",
  },
  {
    name: "Fabrica Club",
    sector: "2",
    category: "Drinks",
    rating: 4.3,
    hours: "20:00 - 05:00",
    address: "Str. Fabricii 12, București",
    crowd: "Full",
    description:
      "Bucharest's legendary club in an old factory. Electronic music all night.",
    bestTime: "Friday after midnight",
    gradient: "linear-gradient(135deg, #1a1020, #4a2060)",
  },
];

// ===== SELECT ALL THE HTML ELEMENTS =====
// "Hey JS, here are the elements you'll be working with"

const sectors = document.querySelectorAll(".sector");
const sectorCard = document.getElementById("sector-card");
const placesSection = document.getElementById("panel-middle");

// ===== STEP 2: LISTEN FOR SECTOR CLICKS =====
// querySelectorAll gives us ALL sectors as a list
// so we loop through them and add a click listener to each one

sectors.forEach((sector) => {
  sector.addEventListener("click", () => {
    // get the sector name from the data-sector attribute
    // remember in HTML - data-sector="1", data-sector="Centru"

    const sectorName = sector.dataset.sector;

    // log

    console.log("Clicked sector:", sectorName);
    // remove active class from all sectors
    sectors.forEach((s) => s.classList.remove("active"));
    // add active class
    sector.classList.add("active");
    showSector(sectorName);
  });
});

// FUNCTION: SHOW SECTOR INFO
// This runs every time a sector is clicked
// It updates the sector card with info about that sector

function showSector(sectorName) {
  // filter the places array to get only the ones in the clicked sector

  const sectorPlaces = places.filter((place) => place.sector === sectorName);

  // update the sector card HTML with the sector name and number of places

  sectorCard.innerHTML = `
  <div class="sector-card-title">
  ${sectorName === "Centru" ? "Centru" : "Sector " + sectorName}
  </div>
  <div class="sector-card-stats">
  <div class="stat">
  <span class="stat-value">${sectorPlaces.length}</span>
  <span class="stat-label">Places</span>
  </div>
  <div class="stat">
  <span class="stat-value">★ ${getAvgRating(sectorPlaces)}</span>
  <span class="stat-label">Avg Rating</span>
  </div> 
  </div> 
`;

  // show the places section

  placesSection.classList.remove("hidden");

  // render the place cards

  renderPlaces(sectorPlaces);
}

// calculate avg rating function

function getAvgRating(places) {
  if (places.length === 0) return "-";
  const total = places.reduce((sum, place) => sum + place.rating, 0);
  return (total / places.length).toFixed(1);
}

// function - render place cards, takes an array of places and builds the HTML cards

function renderPlaces(placesToShow) {
  // find the grid element inside the places section

  const placesGrid = document.getElementById("places-grid");

  // clear the grid, remove any prev show cards

  placesGrid.innerHTML = "";

  // loop through each place and create a card

  placesToShow.forEach((place) => {
    // create a div for the card
    const card = document.createElement("div");
    card.className = "place-card";

    // fill it with content using template literals
    card.innerHTML = `
    <div class="place-card-name">${place.name}</div>
    <div class="place-card-meta">
    <span>${place.category}</span>
    <span>·</span>
    <span class="place-card-rating">★ ${place.rating}</span>
    <span>·</span>
    <span class="crowd-${place.crowd.toLowerCase()}">${place.crowd}</span>
    </div>
    <div class="place-card-address">${place.address}</div>
    <div class="place-card-hours">${place.hours}</div>
    `;
    // add the card to the grid
    card.addEventListener("click", () => {
      // remove active from all cards
      document
        .querySelectorAll(".place-card")
        .forEach((c) => c.classList.remove("active"));
      // add active to clicked card
      card.classList.add("active");
      // show the detail
      showDetail(place);
    });
    placesGrid.appendChild(card);
  });
}

// ===== FUNCTION: SHOW PLACE DETAIL =====
// This runs when a place card is clicked
// It fills the right panel with full place info

function showDetail(place) {
  // find thr right panel element
  const panelRight = document.getElementById("panel-right");

  // build the crowd dots - 8
  // filled dots = crowd level (chill, medium, full)
  const crowdLevels = { Chill: 3, Medium: 5, Full: 7 };
  const filledDots = crowdLevels[place.crowd] || 0;
  let dotsHTML = "";
  for (let i = 0; i < 8; i++) {
    if (i < filledDots) {
      dotsHTML += `<div class="crowd-dot filled"></div>`;
    } else {
      dotsHTML += `<div class="crowd-dot empty"></div>`;
    }
  }
  // Build the best time bars — 12 bars representing hours
  // We highlight the peak hours based on bestTime
  const barHeights = [
    15, 10, 10, 15, 20, 35, 55, 70, 60, 85, 100, 90, 70, 50, 40, 55, 75, 90, 95,
    85, 60, 40, 25, 15,
  ];
  let barsHTML = "";
  barHeights.forEach((height, i) => {
    const isPeak = height > 70;
    const isMedium = height > 40 && height <= 70;
    const barClass = isPeak ? "peak" : isMedium ? "medium" : "";
    barsHTML += `<div class="bt-bar ${barClass}" style="height:${height}%"></div>`;
  });

  // Google Maps directions link
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.address + " Bucharest")}`;

  // Fill the right panel with all the detail content
  panelRight.innerHTML = `
    <div class="detail-hero" style="background: ${place.gradient}">
      <div class="detail-hero-overlay"></div>
      <div class="detail-hero-content">
        <span class="detail-category-badge">${place.category}</span>
        <div class="detail-name">${place.name}</div>
      </div>
    </div>

    <div class="detail-body">

      <div class="detail-meta-row">
        <div class="detail-meta-item">
          <span class="detail-meta-icon">★</span>
          <span class="detail-meta-text">${place.rating} rating</span>
        </div>
        <div class="detail-meta-item">
          <span class="detail-meta-icon">◷</span>
          <span class="detail-meta-text">${place.hours}</span>
        </div>
        <div class="detail-meta-item" style="grid-column: span 2">
          <span class="detail-meta-icon">⌖</span>
          <span class="detail-meta-text">${place.address}</span>
        </div>
      </div>

      <p class="detail-desc">${place.description}</p>

      <div class="detail-section-title">Crowd level — ${place.crowd} now</div>
      <div class="crowd-dots">${dotsHTML}</div>

      <div class="detail-section-title">Best time to go — ${place.bestTime}</div>
      <div class="best-time-bars">${barsHTML}</div>
      <div class="bt-labels">
        <span class="bt-label">06:00</span>
        <span class="bt-label">12:00</span>
        <span class="bt-label">18:00</span>
        <span class="bt-label">24:00</span>
        <span class="bt-label">06:00</span>
      </div>

      <a class="btn-directions" href="${mapsUrl}" target="_blank" rel="noopener noreferrer">
        ↗ Get directions / Obține direcții
      </a>

    </div>
  `;
}
