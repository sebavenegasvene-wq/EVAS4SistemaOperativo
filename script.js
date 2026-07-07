// Datos de productos
// Datos de productos
const products = [
    {
        id: 1,
        name: 'Mouse Logitech G305',
        category: 'Periféricos',
        price: 19990,
        stock: 20,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop',
        description: 'Mouse inalámbrico para gaming con sensor HERO de alta precisión.'
    },
    {
        id: 2,
        name: 'Teclado Redragon Kumara',
        category: 'Periféricos',
        price: 45990,
        stock: 10,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop',
        description: 'Teclado mecánico gaming con switches Outemu Blue.'
    },
    {
        id: 3,
        name: 'Monitor LG 24"',
        category: 'Monitores',
        price: 149990,
        stock: 8,
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d51ab?w=400&h=300&fit=crop',
        description: 'Monitor Full HD IPS de 24 pulgadas con tecnología FreeSync.'
    },
    {
        id: 4,
        name: 'SSD Kingston 1 TB',
        category: 'Almacenamiento',
        price: 69990,
        stock: 15,
        image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop',
        description: 'Disco SSD de 1TB con velocidades de lectura de hasta 500MB/s.'
    },
    {
        id: 5,
        name: 'Notebook Lenovo IdeaPad',
        category: 'Computadores',
        price: 649990,
        stock: 5,
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
        description: 'Notebook con procesador Intel Core i5, 8GB RAM y 256GB SSD.'
    },
    {
        id: 6,
        name: 'Audífonos HyperX Cloud II',
        category: 'Periféricos',
        price: 89990,
        stock: 12,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
        description: 'Audífonos gaming con sonido envolvente 7.1 y micrófono desmontable.'
    },
    {
        id: 7,
        name: 'Monitor Samsung 27" Curvo',
        category: 'Monitores',
        price: 249990,
        stock: 6,
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d51ab?w=400&h=300&fit=crop',
        description: 'Monitor curvo de 27 pulgadas con resolución QHD y 144Hz.'
    },
    {
        id: 8,
        name: 'Disco Duro Externo 2TB',
        category: 'Almacenamiento',
        price: 54990,
        stock: 25,
        image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400&h=300&fit=crop',
        description: 'Disco duro externo portátil de 2TB con conexión USB 3.0.'
    },
    {
        id: 9,
        name: 'Webcam Logitech C920',
        category: 'Periféricos',
        price: 79990,
        stock: 18,
        image: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400&h=300&fit=crop',
        description: 'Cámara web Full HD 1080p con micrófono estéreo integrado.'
    },
    {
        id: 10,
        name: 'Mousepad RGB Corsair',
        category: 'Periféricos',
        price: 34990,
        stock: 30,
        image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&h=300&fit=crop',
        description: 'Mousepad gaming con iluminación RGB personalizable.'
    },
    {
        id: 11,
        name: 'Notebook HP Pavilion',
        category: 'Computadores',
        price: 549990,
        stock: 7,
        image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&h=300&fit=crop',
        description: 'Notebook HP Pavilion con Ryzen 5, 16GB RAM y 512GB SSD.'
    },
    {
        id: 12,
        name: 'MacBook Air M2',
        category: 'Computadores',
        price: 1299990,
        stock: 3,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
        description: 'MacBook Air con chip M2, 8GB RAM y 256GB SSD.'
    },
    {
        id: 13,
        name: 'Monitor Dell 32" 4K',
        category: 'Monitores',
        price: 399990,
        stock: 4,
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d51ab?w=400&h=300&fit=crop',
        description: 'Monitor Dell UltraSharp 4K UHD de 32 pulgadas para profesionales.'
    },
    {
        id: 14,
        name: 'SSD Samsung 2TB EVO',
        category: 'Almacenamiento',
        price: 129990,
        stock: 10,
        image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop',
        description: 'SSD Samsung 870 EVO de 2TB con velocidades de hasta 560MB/s.'
    },
    {
        id: 15,
        name: 'Pendrive USB 3.0 128GB',
        category: 'Almacenamiento',
        price: 9990,
        stock: 50,
        image: 'https://images.unsplash.com/photo-1627851610883-8bc9e50e4a2c?w=400&h=300&fit=crop',
        description: 'Memoria USB 3.0 de 128GB de alta velocidad.'
    },
    {
        id: 16,
        name: 'Hub USB-C 7 en 1',
        category: 'Periféricos',
        price: 29990,
        stock: 22,
        image: 'https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=400&h=300&fit=crop',
        description: 'Hub multipuerto USB-C con HDMI, USB 3.0, SD y más.'
    },
    {
        id: 17,
        name: 'Impresora HP LaserJet',
        category: 'Periféricos',
        price: 199990,
        stock: 6,
        image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=300&fit=crop',
        description: 'Impresora láser monocromática HP LaserJet Pro.'
    },
    {
        id: 18,
        name: 'Tablet Samsung Galaxy Tab',
        category: 'Computadores',
        price: 349990,
        stock: 8,
        image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb7?w=400&h=300&fit=crop',
        description: 'Tablet Samsung Galaxy Tab S7 con S Pen incluido.'
    },
    {
        id: 19,
        name: 'Router WiFi 6 TP-Link',
        category: 'Periféricos',
        price: 89990,
        stock: 15,
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
        description: 'Router WiFi 6 de doble banda con velocidad de hasta 1800Mbps.'
    },
    {
        id: 20,
        name: 'Teclado Mecánico Keychron K2',
        category: 'Periféricos',
        price: 99990,
        stock: 11,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop',
        description: 'Teclado mecánico inalámbrico 75% con switches Gateron.'
    },
    {
        id: 21,
        name: 'Mouse Logitech MX Master 3',
        category: 'Periféricos',
        price: 89990,
        stock: 14,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop',
        description: 'Mouse ergonómico premium para productividad.'
    },
    {
        id: 22,
        name: 'Cámara Seguridad WiFi',
        category: 'Periféricos',
        price: 49990,
        stock: 20,
        image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=400&h=300&fit=crop',
        description: 'Cámara de seguridad IP WiFi con visión nocturna.'
    },
    {
        id: 23,
        name: 'SSD NVMe WD Black 1TB',
        category: 'Almacenamiento',
        price: 119990,
        stock: 9,
        image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop',
        description: 'SSD NVMe WD Black SN850 de 1TB con velocidades de 7000MB/s.'
    },
    {
        id: 24,
        name: 'PC Gamer Armada Ryzen 7',
        category: 'Computadores',
        price: 899990,
        stock: 4,
        image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop',
        description: 'PC Gamer con Ryzen 7, RTX 3060, 32GB RAM y 1TB SSD.'
    },
    {
        id: 25,
        name: 'Monitor Gaming ASUS 27"',
        category: 'Monitores',
        price: 329990,
        stock: 7,
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d51ab?w=400&h=300&fit=crop',
        description: 'Monitor gaming ASUS TUF 27" 165Hz 1ms FreeSync Premium.'
    },
    {
        id: 26,
        name: 'Disco Duro NAS 4TB',
        category: 'Almacenamiento',
        price: 89990,
        stock: 12,
        image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400&h=300&fit=crop',
        description: 'Disco duro para NAS Seagate IronWolf de 4TB.'
    },
    {
        id: 27,
        name: 'Batería Externa 20000mAh',
        category: 'Periféricos',
        price: 24990,
        stock: 35,
        image: 'https://images.unsplash.com/photo-1609592807808-5f255e0d7ef5?w=400&h=300&fit=crop',
        description: 'Power bank de 20000mAh con carga rápida y USB-C.'
    },
    {
        id: 28,
        name: 'Audífonos Sony WH-1000XM4',
        category: 'Periféricos',
        price: 249990,
        stock: 6,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
        description: 'Audífonos inalámbricos con cancelación de ruido activa premium.'
    },
    {
        id: 29,
        name: 'Silla Gamer Racing',
        category: 'Periféricos',
        price: 199990,
        stock: 5,
        image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=300&fit=crop',
        description: 'Silla gamer ergonómica con soporte lumbar y reposabrazos ajustables.'
    },
    {
        id: 30,
        name: 'Micrófono Blue Yeti',
        category: 'Periféricos',
        price: 119990,
        stock: 8,
        image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=300&fit=crop',
        description: 'Micrófono USB profesional para streaming y grabación.'
    },
    {
        id: 31,
        name: 'Monitor Portátil 15.6"',
        category: 'Monitores',
        price: 179990,
        stock: 10,
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d51ab?w=400&h=300&fit=crop',
        description: 'Monitor portátil USB-C Full HD ideal para trabajo móvil.'
    },
    {
        id: 32,
        name: 'Notebook Dell XPS 15',
        category: 'Computadores',
        price: 1599990,
        stock: 2,
        image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&h=300&fit=crop',
        description: 'Notebook Dell XPS 15 con i7, 16GB RAM, 512GB SSD y pantalla 4K.'
    },
    {
        id: 33,
        name: 'Tarjeta SD 256GB',
        category: 'Almacenamiento',
        price: 29990,
        stock: 40,
        image: 'https://images.unsplash.com/photo-1627851610883-8bc9e50e4a2c?w=400&h=300&fit=crop',
        description: 'Tarjeta de memoria SDXC UHS-I de 256GB clase 10.'
    },
    {
        id: 34,
        name: 'Base Refrigerante Laptop',
        category: 'Periféricos',
        price: 19990,
        stock: 25,
        image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop',
        description: 'Base refrigerante para laptop con 5 ventiladores y luces LED.'
    },
    {
        id: 35,
        name: 'Adaptador USB-C a HDMI',
        category: 'Periféricos',
        price: 14990,
        stock: 45,
        image: 'https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=400&h=300&fit=crop',
        description: 'Adaptador USB Type-C a HDMI 4K compatible con MacBook y más.'
    }
];

// Estado de la aplicación
let cart = [];
let currentFilter = 'all';

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderProducts(products);
    initEventListeners();
    animateStats();
}

// Renderizar productos
function renderProducts(productsToRender) {
    renderProductCards(productsToRender);
    renderProductTable(productsToRender);
}

function renderProductCards(productsToRender) {
    const cardsContainer = document.getElementById('productCards');
    cardsContainer.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="price">$${product.price.toLocaleString()}</div>
            <div class="stock-info">
                <span class="badge badge-${product.category}">${product.category}</span>
                <span class="stock-badge ${product.stock > 10 ? 'stock-high' : product.stock > 5 ? 'stock-medium' : 'stock-low'}">
                    Stock: ${product.stock}
                </span>
            </div>
            <div class="product-actions">
                <button class="btn btn-primary btn-sm" onclick="viewProduct(${product.id})">
                    <i class="fas fa-eye"></i> Ver
                </button>
                <button class="btn btn-secondary btn-sm" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Agregar
                </button>
            </div>
        </div>
    `).join('');
}

function renderProductTable(productsToRender) {
    const tbody = document.getElementById('productTableBody');
    tbody.innerHTML = productsToRender.map(product => `
        <tr data-category="${product.category}">
            <td>
                <img src="${product.image}" alt="${product.name}" class="product-img">
            </td>
            <td>${product.name}</td>
            <td><span class="badge badge-${product.category}">${product.category}</span></td>
            <td class="price">$${product.price.toLocaleString()}</td>
            <td>
                <span class="stock-badge ${product.stock > 10 ? 'stock-high' : product.stock > 5 ? 'stock-medium' : 'stock-low'}">
                    ${product.stock}
                </span>
            </td>
            <td>
                <span class="status-badge ${product.stock > 5 ? 'status-active' : 'status-low'}"></span>
                ${product.stock > 10 ? 'Disponible' : product.stock > 5 ? 'Poco stock' : 'Últimas unidades'}
            </td>
            <td>
                <button class="btn-action" onclick="viewProduct(${product.id})" title="Ver detalles">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn-action" onclick="addToCart(${product.id})" title="Agregar al carrito">
                    <i class="fas fa-cart-plus"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Funciones de productos
function viewProduct(id) {
    const product = products.find(p => p.id === id);
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="modal-product-img">
        <h2>${product.name}</h2>
        <p class="price">$${product.price.toLocaleString()}</p>
        <span class="badge badge-${product.category}">${product.category}</span>
        <p style="margin-top: 1rem;">${product.description}</p>
        <div style="margin-top: 1rem;">
            <strong>Stock disponible:</strong> 
            <span class="stock-badge ${product.stock > 10 ? 'stock-high' : product.stock > 5 ? 'stock-medium' : 'stock-low'}">
                ${product.stock} unidades
            </span>
        </div>
        <button class="btn btn-primary" style="margin-top: 1rem;" onclick="addToCart(${product.id}); closeModal();">
            <i class="fas fa-cart-plus"></i> Agregar al carrito
        </button>
    `;
    
    modal.classList.add('show');
}

function closeModal() {
    document.getElementById('productModal').classList.remove('show');
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity++;
            showToast(`${product.name} agregado al carrito`);
        } else {
            showToast('No hay más stock disponible', 'error');
            return;
        }
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
        showToast(`${product.name} agregado al carrito`);
    }
    
    updateCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
    showToast('Producto removido del carrito');
}

function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">El carrito está vacío</p>';
        cartTotal.textContent = '$0';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="price">$${item.price.toLocaleString()}</p>
                    <div class="quantity-controls">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <button class="btn-action" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `$${total.toLocaleString()}`;
    }
}

function updateQuantity(id, newQuantity) {
    const product = products.find(p => p.id === id);
    const cartItem = cart.find(item => item.id === id);
    
    if (newQuantity < 1) {
        removeFromCart(id);
        return;
    }
    
    if (newQuantity > product.stock) {
        showToast('No hay suficiente stock', 'error');
        return;
    }
    
    cartItem.quantity = newQuantity;
    updateCart();
}

// Filtros y búsqueda
function filterProducts(filter) {
    currentFilter = filter;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    applyFilters(searchTerm, filter);
}

function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    applyFilters(searchTerm, currentFilter);
}

function applyFilters(searchTerm, filter) {
    let filtered = products;
    
    if (filter !== 'all') {
        filtered = filtered.filter(p => p.category === filter);
    }
    
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.category.toLowerCase().includes(searchTerm)
        );
    }
    
    renderProducts(filtered);
    
    // Actualizar botones de filtro
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
}

// Animación de estadísticas
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetNumber = parseFloat(target.dataset.target);
                const duration = 2000;
                const steps = 50;
                const increment = targetNumber / steps;
                let current = 0;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= targetNumber) {
                        target.textContent = targetNumber % 1 === 0 ? targetNumber : targetNumber.toFixed(1);
                        clearInterval(timer);
                    } else {
                        target.textContent = Math.floor(current);
                    }
                }, duration / steps);
                observer.unobserve(target);
            }
        });
    });
    
    statNumbers.forEach(number => observer.observe(number));
}

// Toast notifications
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Event Listeners
function initEventListeners() {
    // Menú móvil
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
        document.getElementById('navLinks').classList.toggle('active');
    });
    
    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                document.getElementById('navLinks').classList.remove('active');
            }
        });
    });
    
    // Búsqueda
    document.getElementById('searchInput').addEventListener('input', searchProducts);
    
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => filterProducts(btn.dataset.filter));
    });
    
    // Carrito
    document.getElementById('cartBtn').addEventListener('click', () => {
        document.getElementById('cartSidebar').classList.add('open');
    });
    
    document.getElementById('closeCart').addEventListener('click', () => {
        document.getElementById('cartSidebar').classList.remove('open');
    });
    
    // Modal
    document.getElementById('closeModal').addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === document.getElementById('productModal')) {
            closeModal();
        }
    });
    
    // Formulario de contacto
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Mensaje enviado exitosamente');
        e.target.reset();
    });
    
    // Newsletter
    document.getElementById('newsletterForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('¡Gracias por suscribirte!');
        e.target.reset();
    });
    
    // Checkout
    document.getElementById('checkoutBtn').addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('El carrito está vacío', 'error');
        } else {
            showToast('¡Compra realizada con éxito!');
            cart = [];
            updateCart();
            document.getElementById('cartSidebar').classList.remove('open');
        }
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-menu') && !e.target.closest('.mobile-menu-btn')) {
            document.getElementById('navLinks').classList.remove('active');
        }
    });
}