// Configuración de paginación y filtros
const pageSize = 30; // Se muestran 30 juegos por página
let currentPage = 1;
let filteredGames = [];

// Obtener referencias de elementos
const gameCards = Array.from(document.querySelectorAll('.game-card'));
const paginationEl = document.getElementById('pagination');
const globalSearchInput = document.getElementById('globalSearch');
const globalSearchForm = document.getElementById('globalSearchForm');

// Función para renderizar las tarjetas según la página
function renderCards() {
  gameCards.forEach(card => card.style.display = 'none');
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const cardsToShow = filteredGames.slice(start, end);
  cardsToShow.forEach(card => card.style.display = 'block');
  renderPagination();
}

// Función para renderizar la paginación
function renderPagination() {
  paginationEl.innerHTML = '';
  const totalPages = Math.ceil(filteredGames.length / pageSize);
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement('li');
    li.className = 'page-item' + (i === currentPage ? ' active' : '');
    const a = document.createElement('a');
    a.className = 'page-link';
    a.href = '#';
    a.textContent = i;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      currentPage = i;
      renderCards();
    });
    li.appendChild(a);
    paginationEl.appendChild(li);
  }
}

// Función para aplicar filtros según categoría y texto de búsqueda
function applyFilters(category = 'all', searchText = '') {
  const searchLower = searchText.toLowerCase();
  filteredGames = gameCards.filter(card => {
    const cardCategory = card.getAttribute('data-category');
    const matchesCategory = (category === 'all') || (cardCategory === category);
    const title = card.getAttribute('data-title').toLowerCase();
    const matchesSearch = title.indexOf(searchLower) !== -1;
    return matchesCategory && matchesSearch;
  });
  currentPage = 1;
  renderCards();
}

// Evento para el buscador global
globalSearchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  applyFilters('all', globalSearchInput.value);
});

// Función para cargar el datalist de autocompletado con los títulos únicos
function populateDatalist() {
  const datalist = document.getElementById('gameSuggestions');
  if (!datalist) return;
  const titlesSet = new Set();
  gameCards.forEach(card => titlesSet.add(card.getAttribute('data-title')));
  datalist.innerHTML = '';
  titlesSet.forEach(title => {
    const option = document.createElement('option');
    option.value = title;
    datalist.appendChild(option);
  });
}
populateDatalist();

// Redirección desde el header (si existen los botones)
const btnOnline = document.getElementById('btnOnline');
const btnOffline = document.getElementById('btnOffline');
const btnAll = document.getElementById('btnAll');

if (btnOnline) {
  btnOnline.addEventListener('click', () => {
    window.location.href = 'online.html';
  });
}
if (btnOffline) {
  btnOffline.addEventListener('click', () => {
    window.location.href = 'offline.html';
  });
}
if (btnAll) {
  btnAll.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

// Si no se han aplicado filtros previamente, mostrar todos los juegos
if (filteredGames.length === 0) {
  applyFilters('all', '');
}

/// Filtrado de tarjetas por categoría
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Quitar la clase 'active' de todos los botones y agregarla al clickeado
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-category');
    const cards = document.querySelectorAll('.game-card');

    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (category === 'all' || cardCategory === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const nombre = localStorage.getItem("nombre");
    const userNameDisplay = document.getElementById("userNameDisplay");
    if (nombre && userNameDisplay) {
      userNameDisplay.textContent = "Bienvenido, " + nombre;
    }
  });
