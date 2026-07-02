// ===== MOCK DATA =====
// An array of objects
// Each object is one place with all its details

const landmarks = [
  {
    name: "Palace of Parliamnent",
    area: "Sector 5",
    icon: "ti-building-arch",
    type: "LANDMARK",
    rating: "4.7",
    crowd: "Medium",
    bestTime: "Morning",
    desc: "The Palace of the Parliament is the second largest administrative building in the world, after the Pentagon in the United States. It is located in Bucharest, Romania, and serves as the seat of the Romanian Parliament.",
    stars: 4,
  },

  {
    name: "Triumph Arch",
    area: "Sector 1",
    icon: "ti-arch",
    type: "LANDMARK",
    rating: "4.5",
    crowd: "Low",
    bestTime: "Morning",
    desc: "A historic arch honoring the victory over the Austro-Hungarian Empire.",
    stars: 4,
  },
  {
    name: "Herestrău Park",
    area: "Sector 1",
    icon: "ti-trees",
    type: "NATURE",
    rating: "4.8",
    crowd: "Medium",
    bestTime: "Evening",
    desc: "A large park surrounding a beautiful lake, perfect for walking, jogging, and picnics.",
    stars: 5,
  },
  {
    name: "Cismigiu park",
    area: "Centru",
    icon: "ti-garden-cart",
    type: "NATURE",
    rating: "4.6",
    crowd: "Chill",
    bestTime: "Weekend mornings",
    desc: "Bucharest's oldest park. Perfect for a morning walk or a lazy afternoon.",
    stars: 4,
  },
  {
    name: "Cărtureşti Carusel",
    area: "Centru",
    icon: "ti-books",
    type: "CULTURE",
    rating: "4.9",
    crowd: "Chill",
    bestTime: "Weekday afternoons",
    desc: "The most beautiful bookstore in Romania. Six floors of books, art and coffee.",
    stars: 5,
  },
  {
    name: "Stavropoleos Church",
    area: "Centru",
    icon: "ti-building-church",
    type: "LANDMARK",
    rating: "4.6",
    crowd: "Chill",
    bestTime: "Weekend mornings",
    desc: "A beautiful Orthodox church in the heart of Bucharest.",
    stars: 4,
  },
  {
    name: "National Museum",
    area: "Centru",
    icon: "ti-building-museum",
    type: "CULTURE",
    rating: "4.7",
    crowd: "Medium",
    bestTime: "Weekday mornings",
    desc: "The National Museum of Romania is a museum located in Bucharest, Romania. It is the largest museum in the country and houses a vast collection of artifacts and exhibits related to Romanian history and culture.",
    stars: 4,
  },
  {
    name: "Caru cu Bere",
    area: "Centru",
    icon: "ti-beer",
    type: "FOOD",
    rating: "4.7",
    crowd: "Medium",
    bestTime: "Weekday lunch",
    desc: "Iconic 1879 beer hall with stunning Neo-Gothic interior. A Bucharest landmark.",
    stars: 4,
  },
];

const places = [
  // ===== CENTRU =====
  {
    name: "Caru' cu Bere",
    sector: "Centru",
    category: "FOOD",
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

// boot sequence
setTimeout(() => {
  document.getElementById("b0").classList.add("on");
  setTimeout(() => {
    document.getElementById("b1").classList.add("on");
  }, 200);
  setTimeout(() => {
    document.getElementById("b2").classList.add("on");
  }, 400);
  setTimeout(() => {
    document.getElementById("b3").classList.add("on");
  }, 600);
  setTimeout(() => {
    document.getElementById("b4").classList.add("on");
  }, 800);
}, 2000);

// enter button
document.getElementById("enterbtn").addEventListener("click", () => {
  enterApp();
});

// enterApp function
function enterApp() {
  document.getElementById("intro").classList.add("hidden");
  document.querySelector(".top-nav").classList.remove("hidden");
  document.getElementById("app").classList.remove("hidden");
  initMap();
  initParticles();
  initLandmarks();
}

function initMap() {
  const canvas = document.getElementById("mapcanvas");
  const wrapper = document.getElementById("map-wrapper");
  canvas.width = wrapper.offsetWidth;
  canvas.height = wrapper.offsetHeight;
  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = "rgba(0,255,180,0.04)";
  ctx.lineWidth = 1;
  for (let x = 0; x < W; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, H);
    ctx.stroke();
  }
  for (let y = 0; y < H; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  }

  const roads = [
    [
      [0.2, 0.5],
      [0.8, 0.5],
    ],
    [
      [0.5, 0.1],
      [0.5, 0.9],
    ],
    [
      [0.1, 0.2],
      [0.9, 0.75],
    ],
    [
      [0.15, 0.8],
      [0.85, 0.25],
    ],
    [
      [0.3, 0.1],
      [0.7, 0.9],
    ],
    [
      [0.1, 0.4],
      [0.9, 0.6],
    ],
  ];

  roads.forEach((road) => {
    ctx.strokeStyle = "rgba(0,255,180,0.07)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(road[0][0] * W, road[0][1] * H);
    ctx.lineTo(road[1][0] * W, road[1][1] * H);
    ctx.stroke();
  });
}

function initParticles() {
  const canvas = document.getElementById("particles");
  const wrapper = document.getElementById("map-wrapper");
  canvas.width = wrapper.offsetWidth;
  canvas.height = wrapper.offsetHeight;
  const ctx = canvas.getContext("2d");

  const dots = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1 + 0.3,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    o: Math.random() * 0.3 + 0.05,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach((dot) => {
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,255,180,${dot.o})`;
      ctx.fill();
      dot.x += dot.vx;
      dot.y += dot.vy;
      if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
      if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
    });
    requestAnimationFrame(draw);
  }
  draw();
}

function initLandmarks() {
  const positions = [
    [30, 70], // 0 - Parliament
    [55, 20], // 1 - Triumph Arc
    [60, 55], // 2 - Stavropoleos
    [45, 48], // 3 - Carturesti
    [70, 30], // 4 - Herastrau
    [25, 45], // 5 - Cismigiu
    [50, 62], // 6 - National Museum
    [65, 72], // 7 - Caru cu Bere
  ];
  positions.forEach((pos, index) => {
    const landmark = document.getElementById(`lm${index}`);
    landmark.style.left = `${pos[0]}%`;
    landmark.style.top = `${pos[1]}%`;
  });

  for (let i = 0; i < 8; i++) {
    document.getElementById(`lm${i}`).addEventListener("click", () => {
      showCard(i);
    });
  }
}

//lm${i}`)

function showCard(index) {
  const landmark = landmarks[index];
  document.getElementById("c-name").textContent = landmark.name;
  document.getElementById("c-area").textContent = landmark.area;
  document.getElementById("c-type").textContent = landmark.type;
  document.getElementById("c-desc").textContent = landmark.desc;
  document.getElementById("c-rating").textContent = landmark.rating;
  document.getElementById("c-crowd").textContent = landmark.crowd;
  document.getElementById("c-time").textContent = landmark.bestTime;
  document.getElementById("c-cat").textContent = landmark.type;
  document.getElementById("c-icon").className = `ti ${landmark.icon}`;
  document.getElementById("c-stars").textContent =
    "★".repeat(landmark.stars) + "☆".repeat(5 - landmark.stars);
  document.getElementById("disc-card").classList.add("show");
}
