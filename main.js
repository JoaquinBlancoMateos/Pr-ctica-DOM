const products = [
  {
    name: 'Hunter Blade α',
    description: 'Espada larga + afinación wyvern',
    category: 'Armas',
    rating: '4.8',
    oldPrice: '1.059,00',
    price: '899,00',
    priceAmount: 899,
    discount: '-15%',
    stock: 'En stock · Guild ready',
    image: './assets/img/hunter blade.jpg'
  },
  {
    name: 'Rex Impact',
    description: 'Martillo pesado + golpe de carga',
    category: 'Armas',
    rating: '4.8',
    oldPrice: '579,00',
    price: '389,00',
    priceAmount: 389,
    discount: '-33%',
    stock: 'En stock · Guild ready',
    image: './assets/img/Rex impact.jpg'
  },
  {
    name: 'Rathalos X',
    description: 'Armadura de asalto + escudo',
    category: 'Armaduras',
    rating: '4.7',
    oldPrice: '1.949,00',
    price: '1.249,00',
    priceAmount: 1249,
    discount: '-36%',
    stock: 'En stock · Reembolso',
    image: './assets/img/rathalos.jpg'
  },
  {
    name: 'Digivice Nexus',
    description: 'Sincroniza con modos de batalla',
    category: 'Digivices',
    rating: '4.9',
    oldPrice: '649,00',
    price: '459,00',
    priceAmount: 459,
    discount: '-38%',
    stock: 'En stock · Reembolso',
    image: './assets/img/Digivice Nexus.jpg'
  },
  {
    name: 'Garras Lobo',
    description: 'Guantes de caza defensivos',
    category: 'Accesorios',
    rating: '4.6',
    oldPrice: '49,95',
    price: '39,95',
    priceAmount: 39.95,
    discount: '-20%',
    stock: 'En stock · Reembolso',
    image: './assets/img/Garras Lobo.jpg'
  },
  {
    name: 'Dragón Guard+',
    description: 'Botas reforzadas para boss fights',
    category: 'Armaduras',
    rating: '4.7',
    oldPrice: '358,99',
    price: '249,99',
    priceAmount: 249.99,
    discount: '-43%',
    stock: 'En stock · Reembolso',
    image: './assets/img/Dragon Guard.jpg'
  },
  {
    name: 'Omnimon Core',
    description: 'Reloj digital con modo digievolución',
    category: 'Digivices',
    rating: '4.8',
    oldPrice: '169,00',
    price: '119,00',
    priceAmount: 119,
    discount: '-33%',
    stock: 'En stock · Reembolso',
    image: './assets/img/Omnimon core.jpg'
  },
  {
    name: 'Bow of the Storm',
    description: 'Arco rápido con daño elemental',
    category: 'Armas',
    rating: '4.5',
    oldPrice: '39,99',
    price: '29,99',
    priceAmount: 29.99,
    discount: '-42%',
    stock: 'En stock · Reembolso',
    image: './assets/img/Bow of the storm.jpg'
  },
  {
    name: 'Agumon Pulse',
    description: 'Audífonos con modo de batalla',
    category: 'Accesorios',
    rating: '4.7',
    oldPrice: '35,99',
    price: '24,99',
    priceAmount: 24.99,
    discount: '-42%',
    stock: 'En stock · Reembolso',
    image: './assets/img/Agumon pulse.jpg'
  },
  {
    name: 'Rogue Digimon Set',
    description: 'Pack de ataque + mochila táctica',
    category: 'Accesorios',
    rating: '4.9',
    oldPrice: '299,00',
    price: '219,00',
    priceAmount: 219,
    discount: '-27%',
    stock: 'En stock · Reembolso',
    image: './assets/img/Rogue digimon set.jpg'
  }
];

const categories = [
  { name: 'Armas', imageClass: 'thumb-one' },
  { name: 'Armaduras', imageClass: 'thumb-two' },
  { name: 'Digivices', imageClass: 'thumb-three' },
  { name: 'Accesorios', imageClass: 'thumb-four' },
  { name: 'Monstruos', imageClass: 'thumb-five' }
];

const app = document.querySelector('#app');

function createProductCard(product) {
  return `
    <li class="product-card">
      <article>
        <a class="product-link" href="https://store.monsterhunter.com/" target="_blank" rel="noopener noreferrer">
          <span class="badge">Envío gratis</span>
          <img class="product-image" src="${product.image}" alt="${product.name}" />
          <div class="product-details">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="rating" aria-label="Valoración: ${product.rating} sobre 5">★★★★★ <span>${product.rating}</span></div>
            <div class="price-row">
              <div>
                <span class="old-price">${product.oldPrice}€</span>
                <strong>${product.price}€</strong>
              </div>
              <span class="discount">${product.discount}</span>
            </div>
            <small>${product.stock}</small>
          </div>
        </a>
      </article>
    </li>`;
}

function renderProductList(productList) {
  const productGrid = document.querySelector('.product-grid');
  document.querySelector('#result-count').textContent = `${productList.length} productos`;
  productGrid.innerHTML = productList.length
    ? productList.map(createProductCard).join('')
    : '<li class="empty-state">No hay productos que coincidan con la búsqueda.</li>';
}

function applyFilters() {
  const searchTerm = document.querySelector('#product-search').value.trim().toLocaleLowerCase('es');
  const selectedCategories = Array.from(document.querySelectorAll('.category-filter:checked'))
    .map((input) => input.value);
  const maxPrice = Number(document.querySelector('#price-filter').value);
  const formattedMaxPrice = new Intl.NumberFormat('es-ES', { maximumFractionDigits: 0 }).format(maxPrice);

  document.querySelector('#price-limit').textContent = `Hasta ${formattedMaxPrice}€`;

  const matchingProducts = products.filter((product) => {
    const matchesSearch = `${product.name} ${product.description}`.toLocaleLowerCase('es').includes(searchTerm);
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesSearch && matchesCategory && product.priceAmount <= maxPrice;
  });

  renderProductList(matchingProducts);
}

if (app) {
  app.innerHTML = `
    <div class="topbar" id="site-top">
      <div class="topbar-inner">
        <span>¿Te vas a la caza? <strong>¡Selección de ofertas de Monster Hunter y Digimon!</strong></span>
      </div>
    </div>

    <header class="header">
      <div class="header-inner">
        <div class="brand-wrap">
          <button class="menu-button" aria-label="Abrir menú">☰</button>
          <div class="brand" aria-label="Monster Hunter y Digimon">
            <span class="brand-icon"></span>
            <span class="brand-text">MHxD</span>
          </div>
        </div>
        <nav class="main-nav" aria-label="Navegación principal">
          <a href="https://store.monsterhunter.com/" target="_blank" rel="noopener noreferrer">Ofertas de caza</a>
        </nav>
        <div class="header-icons" aria-label="Acciones de usuario">
          <button aria-label="Idioma">ES</button>
          <button aria-label="Carrito">🛒</button>
          <button aria-label="Cuenta">◔</button>
        </div>
      </div>
    </header>

    <main class="page-shell">
      <section class="hero">
        <div class="hero-inner">
          <div class="hero-content">
            <div class="hero-pill-wrap">
              <span class="hero-pill">◉ Ofertas de caza</span>
              <span class="hero-pill second">◉ Evoluciones legendarias</span>
            </div>
            <h1>Tu arma<br />contra la <span class="highlight">BESTIA</span></h1>
          </div>
          <div class="hero-visual" aria-label="Imagen promocional de caza y criaturas">
            <div class="product-shot"></div>
            <div class="mini-badge"><span>Equipo de élite</span><strong>Preparado</strong></div>
            <div class="floating-card">
              <p>Sin rastro, no hay victoria</p>
              <small>Con tu kit de caza, cada monstruo cae antes</small>
              <a class="hero-cta" href="#ofertas">Ver ofertas</a>
            </div>
          </div>
        </div>
        <div class="hero-tabs" aria-label="Categorías destacadas">
          <span class="active">Ofertas MH</span>
          <span>Digivolutions</span>
          <span>Todo para tu guild</span>
        </div>
      </section>

      <div class="catalog-layout">
        <section class="product-filters" aria-labelledby="filters-title">
          <h2 id="filters-title">Filtros</h2>
          <form class="filter-form">
            <label class="filter-search" for="product-search">
              Buscar productos
              <input id="product-search" type="search" placeholder="Nombre o descripción" />
            </label>
            <fieldset>
              <legend>Categoría</legend>
              <div class="filter-category-list"></div>
            </fieldset>
            <label class="filter-price" for="price-filter">
              <span>Precio máximo</span>
              <input id="price-filter" type="range" min="0" max="${Math.ceil(Math.max(...products.map((product) => product.priceAmount)) / 50) * 50}" step="25" value="${Math.ceil(Math.max(...products.map((product) => product.priceAmount)) / 50) * 50}" />
              <output id="price-limit" for="price-filter"></output>
            </label>
            <button class="clear-filters" type="button">Limpiar filtros</button>
          </form>
        </section>

        <section class="offers" id="ofertas" aria-labelledby="offers-title">
          <div class="section-title">
            <h2 id="offers-title">Ofertas top</h2>
            <span class="result-count" id="result-count" aria-live="polite"></span>
          </div>
          <ul class="product-grid" aria-label="Listado de productos destacados"></ul>
          <ul class="shop-categories" aria-label="Categorías de productos"></ul>
        </section>
      </div>
    </main>
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-main">
          <section class="footer-about" id="quienes-somos" aria-labelledby="about-title">
            <span class="footer-brand">MHxD</span>
            <h2 id="about-title">Quiénes somos</h2>
            <p>Somos una tienda de venta de accesorios y artículos para los que desean vivir aventuras épicas.</p>
          </section>
          <section class="footer-contact" id="contacto" aria-labelledby="contact-title">
            <h2 id="contact-title">Contacto</h2>
            <p>¿Buscas más información? Visita el sitio oficial de Monster Hunter.</p>
            <a href="https://www.monsterhunter.com/" target="_blank" rel="noopener noreferrer">Ir al sitio oficial <span aria-hidden="true">↗</span></a>
          </section>
        </div>
        <div class="footer-bottom">
          <small>© ${new Date().getFullYear()} MHxD. Todos los derechos reservados.</small>
          <a href="#site-top">Volver al inicio ↑</a>
        </div>
      </div>
    </footer>
    <button class="chat-button" aria-label="Abrir chat">✦</button>`;

  renderProductList(products);

  const categoryCards = [];
  const categoryFilters = [];
  categories.forEach((category) => {
    categoryCards.push(`
      <li class="category-card">
        <article>
          <div class="category-thumb ${category.imageClass}" aria-hidden="true"></div>
          <h3>${category.name}</h3>
        </article>
      </li>`);
    if (products.some((product) => product.category === category.name)) {
      categoryFilters.push(`
        <label class="filter-option">
          <input class="category-filter" type="checkbox" value="${category.name}" />
          <span>${category.name}</span>
        </label>`);
    }
  });
  document.querySelector('.shop-categories').innerHTML = categoryCards.join('');
  document.querySelector('.filter-category-list').innerHTML = categoryFilters.join('');

  const filterForm = document.querySelector('.filter-form');
  filterForm.addEventListener('input', applyFilters);
  document.querySelector('.clear-filters').addEventListener('click', () => {
    filterForm.reset();
    applyFilters();
  });
}