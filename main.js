const products = [
  {
    name: 'Hunter Blade α',
    description: 'Espada larga + afinación wyvern',
    rating: '4.8',
    oldPrice: '1.059,00',
    price: '899,00',
    discount: '-15%',
    stock: 'En stock · Guild ready',
    image: './assets/img/hunter blade.jpg'
  },
  {
    name: 'Rex Impact',
    description: 'Martillo pesado + golpe de carga',
    rating: '4.8',
    oldPrice: '579,00',
    price: '389,00',
    discount: '-33%',
    stock: 'En stock · Guild ready',
    image: './assets/img/Rex impact.jpg'
  },
  {
    name: 'Rathalos X',
    description: 'Armadura de asalto + escudo',
    rating: '4.7',
    oldPrice: '1.949,00',
    price: '1.249,00',
    discount: '-36%',
    stock: 'En stock · Reembolso',
    image: './assets/img/rathalos.jpg'
  },
  {
    name: 'Digivice Nexus',
    description: 'Sincroniza con modos de batalla',
    rating: '4.9',
    oldPrice: '649,00',
    price: '459,00',
    discount: '-38%',
    stock: 'En stock · Reembolso',
    image: './assets/img/Digivice Nexus.jpg'
  },
  {
    name: 'Garras Lobo',
    description: 'Guantes de caza defensivos',
    rating: '4.6',
    oldPrice: '49,95',
    price: '39,95',
    discount: '-20%',
    stock: 'En stock · Reembolso',
    image: './assets/img/Garras Lobo.jpg'
  },
  {
    name: 'Dragón Guard+',
    description: 'Botas reforzadas para boss fights',
    rating: '4.7',
    oldPrice: '358,99',
    price: '249,99',
    discount: '-43%',
    stock: 'En stock · Reembolso',
    image: './assets/img/Dragon Guard.jpg'
  },
  {
    name: 'Omnimon Core',
    description: 'Reloj digital con modo digievolución',
    rating: '4.8',
    oldPrice: '169,00',
    price: '119,00',
    discount: '-33%',
    stock: 'En stock · Reembolso',
    image: './assets/img/Omnimon core.jpg'
  },
  {
    name: 'Bow of the Storm',
    description: 'Arco rápido con daño elemental',
    rating: '4.5',
    oldPrice: '39,99',
    price: '29,99',
    discount: '-42%',
    stock: 'En stock · Reembolso',
    image: './assets/img/Bow of the storm.jpg'
  },
  {
    name: 'Agumon Pulse',
    description: 'Audífonos con modo de batalla',
    rating: '4.7',
    oldPrice: '35,99',
    price: '24,99',
    discount: '-42%',
    stock: 'En stock · Reembolso',
    image: './assets/img/Agumon pulse.jpg'
  },
  {
    name: 'Rogue Digimon Set',
    description: 'Pack de ataque + mochila táctica',
    rating: '4.9',
    oldPrice: '299,00',
    price: '219,00',
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
  productGrid.innerHTML = productList.length
    ? productList.map(createProductCard).join('')
    : '<li class="empty-state">No hay productos que coincidan con la búsqueda.</li>';
}

if (app) {
  app.innerHTML = `
    <div class="topbar">
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
        <label class="searchbar" aria-label="Buscar productos">
          <span class="search-icon">⌕</span>
          <input class="search-input" type="search" placeholder="Busca tus armas..." aria-label="Búsqueda" />
        </label>
        <nav class="main-nav" aria-label="Navegación principal">
          <a href="https://store.monsterhunter.com/" target="_blank" rel="noopener noreferrer">Ofertas de caza</a>
          <a href="https://www.monsterhunter.com/" target="_blank" rel="noopener noreferrer">Contacto</a>
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

      <section class="offers" id="ofertas">
        <div class="section-title"><h2>Ofertas top</h2></div>
        <ul class="product-grid" aria-label="Listado de productos destacados"></ul>
        <ul class="shop-categories" aria-label="Categorías de productos"></ul>
      </section>
    </main>
    <button class="chat-button" aria-label="Abrir chat">✦</button>`;

  const productCards = [];
  products.forEach((product) => productCards.push(createProductCard(product)));
  document.querySelector('.product-grid').innerHTML = productCards.join('');

  const categoryCards = [];
  categories.forEach((category) => {
    categoryCards.push(`
      <li class="category-card">
        <article>
          <div class="category-thumb ${category.imageClass}" aria-hidden="true"></div>
          <h3>${category.name}</h3>
        </article>
      </li>`);
  });
  document.querySelector('.shop-categories').innerHTML = categoryCards.join('');

  document.querySelector('.search-input').addEventListener('input', (event) => {
    const searchTerm = event.currentTarget.value.trim().toLocaleLowerCase('es');
    const matchingProducts = products.filter((product) =>
      `${product.name} ${product.description}`.toLocaleLowerCase('es').includes(searchTerm)
    );

    renderProductList(matchingProducts);
  });
}