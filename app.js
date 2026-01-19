// ============================================
// LAVISH CENTER - COMPLETE APPLICATION
// تطبيق متكامل مع جميع الوظائف
// ============================================

// ============================================
// GLOBAL STATE MANAGEMENT
// ============================================
const AppState = {
    cart: [],
    favorites: [],
    currentPage: 'home',
    currentFilter: 'all',
    currentCategory: 'all'
};

// ============================================
// PRODUCTS DATABASE
// ============================================
const productsDatabase = {
    women: [
        {
            id: 1,
            name: 'فستان سهرة فاخر',
            price: 149900,
            oldPrice: 250000,
            image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
            category: 'women',
            badge: 'sale',
            rating: 4.8,
            reviews: 128,
            description: 'فستان سهرة فاخر من أجود الأقمشة، تصميم عصري وأنيق يناسب جميع المناسبات الخاصة. متوفر بألوان متعددة.',
            discount: '-40%',
            filter: 'sale'
        },
        {
            id: 2,
            name: 'بلوزة صيفية كاجوال',
            price: 45000,
            oldPrice: 65000,
            image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800',
            category: 'women',
            badge: 'new',
            rating: 4.6,
            reviews: 95,
            description: 'بلوزة صيفية خفيفة ومريحة، تصميم عملي يناسب الأجواء الحارة.',
            discount: '-31%',
            filter: 'new'
        },
        {
            id: 3,
            name: 'تنورة طويلة أنيقة',
            price: 55000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800',
            category: 'women',
            badge: 'hot',
            rating: 4.9,
            reviews: 156,
            description: 'تنورة طويلة بتصميم عصري، مثالية للإطلالات اليومية والرسمية.',
            filter: 'popular'
        },
        {
            id: 4,
            name: 'جاكيت جينز نسائي',
            price: 89900,
            oldPrice: 120000,
            image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800',
            category: 'women',
            badge: 'sale',
            rating: 4.7,
            reviews: 87,
            description: 'جاكيت جينز كلاسيكي بقصة عصرية، يناسب جميع الأوقات.',
            discount: '-25%',
            filter: 'sale'
        },
        {
            id: 5,
            name: 'فستان كاجوال يومي',
            price: 65000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800',
            category: 'women',
            badge: 'new',
            rating: 4.5,
            reviews: 73,
            description: 'فستان كاجوال مريح للاستخدام اليومي، قماش عالي الجودة.',
            filter: 'new'
        },
        {
            id: 6,
            name: 'طقم رياضي نسائي',
            price: 75000,
            oldPrice: 95000,
            image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800',
            category: 'women',
            badge: 'hot',
            rating: 4.8,
            reviews: 142,
            description: 'طقم رياضي عملي ومريح، مناسب للتمارين والأنشطة اليومية.',
            discount: '-21%',
            filter: 'popular'
        }
    ],
    men: [
        {
            id: 7,
            name: 'قميص رجالي كلاسيكي',
            price: 48000,
            oldPrice: 70000,
            image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800',
            category: 'men',
            badge: 'sale',
            rating: 4.6,
            reviews: 98,
            description: 'قميص رجالي أنيق بقصة كلاسيكية، مثالي للمناسبات الرسمية.',
            discount: '-31%',
            filter: 'sale'
        },
        {
            id: 8,
            name: 'بنطال جينز رجالي',
            price: 72000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800',
            category: 'men',
            badge: 'hot',
            rating: 4.9,
            reviews: 187,
            description: 'بنطال جينز بتصميم عصري ومريح، جودة عالية.',
            filter: 'popular'
        },
        {
            id: 9,
            name: 'تيشيرت قطني رجالي',
            price: 28000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800',
            category: 'men',
            badge: 'new',
            rating: 4.4,
            reviews: 62,
            description: 'تيشيرت قطني 100% مريح وعملي للاستخدام اليومي.',
            filter: 'new'
        },
        {
            id: 10,
            name: 'سترة رياضية رجالية',
            price: 95000,
            oldPrice: 130000,
            image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800',
            category: 'men',
            badge: 'sale',
            rating: 4.7,
            reviews: 115,
            description: 'سترة رياضية أنيقة، مناسبة للطقس البارد.',
            discount: '-27%',
            filter: 'sale'
        },
        {
            id: 11,
            name: 'بدلة رجالية فاخرة',
            price: 285000,
            oldPrice: 380000,
            image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800',
            category: 'men',
            badge: 'sale',
            rating: 4.9,
            reviews: 203,
            description: 'بدلة رجالية فاخرة من أفضل الأقمشة، مثالية للمناسبات الرسمية.',
            discount: '-25%',
            filter: 'sale'
        },
        {
            id: 12,
            name: 'حذاء رجالي كلاسيكي',
            price: 95000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800',
            category: 'men',
            badge: 'new',
            rating: 4.6,
            reviews: 89,
            description: 'حذاء رجالي كلاسيكي بتصميم أنيق ومريح.',
            filter: 'new'
        }
    ],
    kids: [
        {
            id: 13,
            name: 'فستان أطفال وردي',
            price: 35000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800',
            category: 'kids',
            badge: 'new',
            rating: 4.7,
            reviews: 45,
            description: 'فستان أطفال جميل ومريح، مناسب للمناسبات.',
            filter: 'new'
        },
        {
            id: 14,
            name: 'طقم أطفال رياضي',
            price: 42000,
            oldPrice: 55000,
            image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800',
            category: 'kids',
            badge: 'sale',
            rating: 4.8,
            reviews: 67,
            description: 'طقم رياضي عملي ومريح للأطفال.',
            discount: '-24%',
            filter: 'sale'
        }
    ]
};

// ============================================
// CART MANAGEMENT
// ============================================
class CartManager {
    constructor() {
        this.loadCart();
    }

    loadCart() {
        try {
            const savedCart = localStorage.getItem('lavish_cart');
            AppState.cart = savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error('Error loading cart:', error);
            AppState.cart = [];
        }
    }

    saveCart() {
        try {
            localStorage.setItem('lavish_cart', JSON.stringify(AppState.cart));
            this.updateAllCartBadges();
            this.triggerCartUpdate();
        } catch (error) {
            console.error('Error saving cart:', error);
        }
    }

    addToCart(product) {
        const existingItem = AppState.cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            AppState.cart.push({
                ...product,
                quantity: 1
            });
        }
        
        this.saveCart();
        this.showNotification('✅ تمت الإضافة إلى السلة', 'success');
        return true;
    }

    removeFromCart(productId) {
        AppState.cart = AppState.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.showNotification('🗑️ تم حذف المنتج من السلة', 'info');
    }

    updateQuantity(productId, quantity) {
        const item = AppState.cart.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
            }
        }
    }

    clearCart() {
        AppState.cart = [];
        this.saveCart();
        this.showNotification('🗑️ تم إفراغ السلة', 'info');
    }

    getCartCount() {
        return AppState.cart.reduce((total, item) => total + item.quantity, 0);
    }

    getCartTotal() {
        return AppState.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    updateAllCartBadges() {
        const count = this.getCartCount();
        
        // Update bottom nav badge
        const navBadge = document.getElementById('navCartCount');
        if (navBadge) {
            if (count > 0) {
                navBadge.textContent = count > 99 ? '99+' : count;
                navBadge.style.display = 'flex';
            } else {
                navBadge.style.display = 'none';
            }
        }

        // Update header badge
        const headerBadge = document.getElementById('cartCount');
        if (headerBadge) {
            headerBadge.textContent = count;
        }
    }

    triggerCartUpdate() {
        document.dispatchEvent(new CustomEvent('cartUpdated', {
            detail: {
                count: this.getCartCount(),
                total: this.getCartTotal()
            }
        }));
    }

    showNotification(message, type = 'success') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `cart-notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: ${type === 'success' ? '#28a745' : '#17a2b8'};
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            font-weight: 600;
        `;

        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Initialize cart manager
const cartManager = new CartManager();

// ============================================
// BOTTOM NAVIGATION
// ============================================
class BottomNavigation {
    constructor() {
        this.navItems = document.querySelectorAll('.nav-item');
        this.pages = document.querySelectorAll('.page');
        this.init();
    }

    init() {
        this.navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const page = item.getAttribute('data-page');
                
                if (item.id === 'navCartBtn') {
                    this.navigateTo('cart');
                } else if (page) {
                    this.navigateTo(page);
                }
            });
        });

        // Sync with existing navigation
        this.syncExistingNavigation();
    }

    navigateTo(pageName) {
        AppState.currentPage = pageName;

        // Update nav active states
        this.navItems.forEach(item => {
            const itemPage = item.getAttribute('data-page');
            if (itemPage === pageName) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Show page
        this.pages.forEach(page => {
            const pageId = page.id.replace('Page', '').toLowerCase();
            if (pageId === pageName.toLowerCase()) {
                page.classList.add('active');
                page.style.display = 'block';
            } else {
                page.classList.remove('active');
                page.style.display = 'none';
            }
        });

        // Render page content
        this.renderPageContent(pageName);

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    renderPageContent(pageName) {
        switch(pageName) {
            case 'home':
                renderHomeProducts();
                break;
            case 'products':
                renderAllProducts();
                break;
            case 'categories':
                setupCategories();
                break;
            case 'cart':
                renderCart();
                break;
            case 'account':
                setupAccount();
                break;
        }
    }

    syncExistingNavigation() {
        // Sync with all data-page links
        document.querySelectorAll('[data-page]').forEach(link => {
            if (!link.classList.contains('nav-item')) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const page = link.getAttribute('data-page');
                    if (page) this.navigateTo(page);
                });
            }
        });
    }
}

// ============================================
// PRODUCT RENDERING
// ============================================
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-aos', 'fade-up');
    
    // Badge HTML
    const badgeHTML = product.badge ? `
        <span class="product-badge ${product.badge}">
            ${product.badge === 'sale' ? '🔥 تخفيض' : 
              product.badge === 'new' ? '⭐ جديد' : 
              '🔥 الأكثر مبيعاً'}
        </span>
    ` : '';

    // Discount HTML
    const discountHTML = product.discount ? `
        <span class="product-discount">${product.discount}</span>
    ` : '';

    // Old price HTML
    const oldPriceHTML = product.oldPrice ? `
        <span class="old-price">${formatPrice(product.oldPrice)}</span>
    ` : '';

    card.innerHTML = `
        ${badgeHTML}
        ${discountHTML}
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="product-overlay">
                <button class="btn-quick-view" onclick="showProductDetail(${product.id})">
                    <i class="fas fa-eye"></i> عرض سريع
                </button>
                <button class="btn-favorite" onclick="toggleFavorite(${product.id})">
                    <i class="far fa-heart"></i>
                </button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                <div class="stars">
                    ${generateStars(product.rating)}
                </div>
                <span class="reviews">(${product.reviews})</span>
            </div>
            <div class="product-price">
                <span class="price">${formatPrice(product.price)}</span>
                ${oldPriceHTML}
            </div>
            <button class="btn-add-to-cart" onclick="addToCartClick(${product.id})">
                <i class="fas fa-shopping-cart"></i>
                أضف للسلة
            </button>
        </div>
    `;

    return card;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHTML = '';

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }

    return starsHTML;
}

function formatPrice(price) {
    return price.toLocaleString('ar-IQ') + ' د.ع';
}

// ============================================
// HOME PAGE PRODUCTS
// ============================================
function renderHomeProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    // Show mix of products from all categories
    const allProducts = [...productsDatabase.women, ...productsDatabase.men];
    const featuredProducts = allProducts.slice(0, 6);

    featuredProducts.forEach(product => {
        productsGrid.appendChild(createProductCard(product));
    });
}

// ============================================
// ALL PRODUCTS PAGE
// ============================================
function renderAllProducts(filter = 'all') {
    const productsGrid = document.getElementById('allProductsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    // Get all products
    const allProducts = [
        ...productsDatabase.women,
        ...productsDatabase.men,
        ...productsDatabase.kids
    ];

    // Apply filter
    let filteredProducts = allProducts;
    if (filter !== 'all') {
        filteredProducts = allProducts.filter(p => p.filter === filter);
    }

    // Render products
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search"></i>
                <p>لا توجد منتجات في هذا القسم</p>
            </div>
        `;
    } else {
        filteredProducts.forEach(product => {
            productsGrid.appendChild(createProductCard(product));
        });
    }
}

// ============================================
// CATEGORIES PAGE
// ============================================
function setupCategories() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        // Remove old listeners
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card);
        
        // Add new listener
        newCard.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterByCategory(category);
        });
    });
}

function filterByCategory(category) {
    // Navigate to products page
    if (window.bottomNav) {
        window.bottomNav.navigateTo('products');
    }

    // Apply category filter after short delay
    setTimeout(() => {
        const productsGrid = document.getElementById('allProductsGrid');
        if (!productsGrid) return;

        productsGrid.innerHTML = '';

        let products = [];
        if (category === 'all') {
            products = [...productsDatabase.women, ...productsDatabase.men, ...productsDatabase.kids];
        } else if (productsDatabase[category]) {
            products = productsDatabase[category];
        }

        products.forEach(product => {
            productsGrid.appendChild(createProductCard(product));
        });
    }, 100);
}

// ============================================
// CART PAGE
// ============================================
function renderCart() {
    const cartPage = document.getElementById('cartPage');
    if (!cartPage) return;

    const cartItemsContainer = cartPage.querySelector('.cart-items');
    const cartSummary = cartPage.querySelector('.cart-summary');

    if (!cartItemsContainer) return;

    if (AppState.cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>السلة فارغة</h3>
                <p>لم تقم بإضافة أي منتجات بعد</p>
                <button class="btn-primary" onclick="window.bottomNav.navigateTo('products')">
                    تصفح المنتجات
                </button>
            </div>
        `;
        if (cartSummary) cartSummary.style.display = 'none';
    } else {
        // Render cart items
        let itemsHTML = '';
        AppState.cart.forEach(item => {
            itemsHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p class="cart-item-price">${formatPrice(item.price)}</p>
                        <div class="quantity-controls">
                            <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span>${item.quantity}</span>
                            <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div class="cart-item-total">
                        <p class="item-total">${formatPrice(item.price * item.quantity)}</p>
                        <button class="btn-remove" onclick="removeFromCartClick(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        });

        cartItemsContainer.innerHTML = itemsHTML;

        // Update summary
        if (cartSummary) {
            const total = cartManager.getCartTotal();
            const deliveryFee = total >= 100000 ? 0 : 5000;
            const finalTotal = total + deliveryFee;

            cartSummary.style.display = 'block';
            cartSummary.innerHTML = `
                <h3>ملخص الطلب</h3>
                <div class="summary-row">
                    <span>المجموع الفرعي:</span>
                    <span>${formatPrice(total)}</span>
                </div>
                <div class="summary-row">
                    <span>رسوم التوصيل:</span>
                    <span>${deliveryFee === 0 ? 'مجاني' : formatPrice(deliveryFee)}</span>
                </div>
                <div class="summary-row total">
                    <span>المجموع النهائي:</span>
                    <span>${formatPrice(finalTotal)}</span>
                </div>
                <button class="btn-checkout" onclick="checkout()">
                    <i class="fas fa-check"></i>
                    إتمام الطلب
                </button>
                <button class="btn-clear-cart" onclick="clearCartClick()">
                    <i class="fas fa-trash"></i>
                    إفراغ السلة
                </button>
            `;
        }
    }
}

// ============================================
// ACCOUNT PAGE
// ============================================
function setupAccount() {
    const menuItems = document.querySelectorAll('.account-menu .menu-item');
    
    menuItems.forEach(item => {
        // Remove old listeners
        const newItem = item.cloneNode(true);
        item.parentNode.replaceChild(newItem, item);
        
        // Add new listener
        newItem.addEventListener('click', function() {
            const text = this.querySelector('span').textContent;
            
            if (text.includes('المفضلة')) {
                window.bottomNav.navigateTo('favorites');
            } else if (text.includes('الإشعارات')) {
                window.bottomNav.navigateTo('notifications');
            } else if (text.includes('عن LaVish')) {
                window.bottomNav.navigateTo('about');
            } else {
                alert('هذه الميزة قيد التطوير');
            }
        });
    });
}

// ============================================
// FILTER FUNCTIONALITY
// ============================================
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Apply filter
            const filter = this.getAttribute('data-filter');
            AppState.currentFilter = filter;
            renderAllProducts(filter);
        });
    });
}

// ============================================
// GLOBAL CLICK HANDLERS
// ============================================
window.addToCartClick = function(productId) {
    // Find product in database
    const allProducts = [
        ...productsDatabase.women,
        ...productsDatabase.men,
        ...productsDatabase.kids
    ];
    
    const product = allProducts.find(p => p.id === productId);
    if (product) {
        cartManager.addToCart(product);
    }
};

window.removeFromCartClick = function(productId) {
    if (confirm('هل تريد حذف هذا المنتج من السلة؟')) {
        cartManager.removeFromCart(productId);
        renderCart();
    }
};

window.updateCartQuantity = function(productId, newQuantity) {
    cartManager.updateQuantity(productId, newQuantity);
    renderCart();
};

window.clearCartClick = function() {
    if (confirm('هل تريد إفراغ السلة بالكامل؟')) {
        cartManager.clearCart();
        renderCart();
    }
};

window.checkout = function() {
    const total = cartManager.getCartTotal();
    alert(`إتمام الطلب\nالمجموع: ${formatPrice(total)}\n\nهذه الميزة قيد التطوير`);
};

window.showProductDetail = function(productId) {
    alert(`عرض تفاصيل المنتج #${productId}\nهذه الميزة قيد التطوير`);
};

window.toggleFavorite = function(productId) {
    alert(`إضافة/إزالة من المفضلة #${productId}\nهذه الميزة قيد التطوير`);
};

// ============================================
// SEARCH FUNCTIONALITY
// ============================================
function setupSearch() {
    const searchInput = document.getElementById('topSearchInput');
    const searchBtn = document.getElementById('topSearchBtn');

    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

function performSearch() {
    const searchInput = document.getElementById('topSearchInput');
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    if (!query) {
        alert('الرجاء إدخال كلمة البحث');
        return;
    }

    // Get all products
    const allProducts = [
        ...productsDatabase.women,
        ...productsDatabase.men,
        ...productsDatabase.kids
    ];

    // Search in products
    const results = allProducts.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );

    // Navigate to products page and show results
    if (window.bottomNav) {
        window.bottomNav.navigateTo('products');
    }

    setTimeout(() => {
        const productsGrid = document.getElementById('allProductsGrid');
        if (!productsGrid) return;

        productsGrid.innerHTML = '';

        if (results.length === 0) {
            productsGrid.innerHTML = `
                <div class="no-products">
                    <i class="fas fa-search"></i>
                    <p>لم يتم العثور على نتائج لـ "${query}"</p>
                </div>
            `;
        } else {
            results.forEach(product => {
                productsGrid.appendChild(createProductCard(product));
            });
        }
    }, 100);
}

// ============================================
// POPUP AD
// ============================================
function setupPopupAd() {
    setTimeout(() => {
        const popup = document.getElementById('popupAdOverlay');
        if (popup) {
            popup.style.display = 'flex';
        }
    }, 3000);
}

window.closePopupAd = function() {
    const popup = document.getElementById('popupAdOverlay');
    if (popup) {
        popup.style.display = 'none';
    }
};

window.goToAdProduct = function() {
    closePopupAd();
    if (window.bottomNav) {
        window.bottomNav.navigateTo('products');
    }
};

// ============================================
// LOADING SCREEN
// ============================================
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 2000);
    }
}

// ============================================
// PWA INSTALL
// ============================================
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    const installBtn = document.getElementById('installBtn');
    if (installBtn) {
        installBtn.style.display = 'flex';
        
        installBtn.addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === 'accepted') {
                    installBtn.style.display = 'none';
                }
                deferredPrompt = null;
            }
        });
    }
});

// ============================================
// SCROLL TO TOP
// ============================================
function setupScrollTop() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 LaVish Center App Initializing...');

    // Initialize bottom navigation
    window.bottomNav = new BottomNavigation();
    
    // Setup initial page
    renderHomeProducts();
    
    // Setup filters
    setupFilters();
    
    // Setup categories
    setupCategories();
    
    // Setup account
    setupAccount();
    
    // Setup search
    setupSearch();
    
    // Setup scroll to top
    setupScrollTop();
    
    // Hide loading screen
    hideLoadingScreen();
    
    // Show popup ad
    setupPopupAd();
    
    // Update cart badges
    cartManager.updateAllCartBadges();

    console.log('✅ LaVish Center App Ready!');
});

// ============================================
// ANIMATIONS
// ============================================
// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(-100%);
            opacity: 0;
        }
    }

    .empty-cart {
        text-align: center;
        padding: 60px 20px;
    }

    .empty-cart i {
        font-size: 80px;
        color: #ddd;
        margin-bottom: 20px;
    }

    .empty-cart h3 {
        font-size: 24px;
        color: var(--dark-color);
        margin-bottom: 10px;
    }

    .empty-cart p {
        color: #999;
        margin-bottom: 30px;
    }

    .no-products {
        grid-column: 1 / -1;
        text-align: center;
        padding: 60px 20px;
    }

    .no-products i {
        font-size: 60px;
        color: #ddd;
        margin-bottom: 15px;
    }

    .no-products p {
        font-size: 18px;
        color: #999;
    }

    .cart-item {
        display: flex;
        gap: 15px;
        padding: 15px;
        background: white;
        border-radius: 12px;
        margin-bottom: 15px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .cart-item-image {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 8px;
    }

    .cart-item-details {
        flex: 1;
    }

    .cart-item-details h4 {
        font-size: 16px;
        margin-bottom: 5px;
        color: var(--dark-color);
    }

    .cart-item-price {
        color: var(--primary-color);
        font-weight: 600;
        margin-bottom: 10px;
    }

    .quantity-controls {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .quantity-controls button {
        width: 30px;
        height: 30px;
        border: none;
        background: var(--light-color);
        border-radius: 6px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }

    .quantity-controls button:hover {
        background: var(--primary-color);
        color: white;
    }

    .quantity-controls span {
        min-width: 30px;
        text-align: center;
        font-weight: 600;
    }

    .cart-item-total {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
    }

    .item-total {
        font-size: 18px;
        font-weight: 700;
        color: var(--dark-color);
    }

    .btn-remove {
        width: 36px;
        height: 36px;
        border: none;
        background: #fee;
        color: var(--danger-color);
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .btn-remove:hover {
        background: var(--danger-color);
        color: white;
    }

    .cart-summary {
        background: white;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        margin-top: 20px;
    }

    .cart-summary h3 {
        margin-bottom: 20px;
        color: var(--dark-color);
    }

    .summary-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid #f0f0f0;
    }

    .summary-row.total {
        border-bottom: none;
        margin-top: 15px;
        font-size: 20px;
        font-weight: 700;
        color: var(--primary-color);
    }

    .btn-checkout {
        width: 100%;
        padding: 15px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 25px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        margin-top: 20px;
        transition: all 0.3s ease;
    }

    .btn-checkout:hover {
        background: var(--secondary-color);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(255, 107, 157, 0.3);
    }

    .btn-clear-cart {
        width: 100%;
        padding: 12px;
        background: #f8f9fa;
        color: var(--danger-color);
        border: 2px solid var(--danger-color);
        border-radius: 25px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        margin-top: 10px;
        transition: all 0.3s ease;
    }

    .btn-clear-cart:hover {
        background: var(--danger-color);
        color: white;
    }
`;
document.head.appendChild(style);

console.log('📱 LaVish Center - Complete Application Loaded!');
