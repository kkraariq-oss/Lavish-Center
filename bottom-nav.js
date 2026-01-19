// ============================================
// BOTTOM NAVIGATION BAR SYSTEM
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize bottom navigation
    initBottomNavigation();
});

function initBottomNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');
    const navCartBadge = document.getElementById('navCartBadge');
    
    // Add click listeners to nav items
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            navigateToPage(targetPage);
        });
    });
    
    // Navigate to specific page
    function navigateToPage(pageName) {
        const targetPageId = pageName + 'Page';
        const targetPage = document.getElementById(targetPageId);
        const targetNavItem = document.querySelector(`.nav-item[data-page="${pageName}"]`);
        
        if (!targetPage || !targetNavItem) return;
        
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        // Show target page
        targetPage.classList.add('active');
        
        // Update active nav item
        setActiveNavItem(targetNavItem);
        
        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Load page-specific content
        loadPageContent(pageName);
    }
    
    // Set active navigation item
    function setActiveNavItem(activeItem) {
        navItems.forEach(item => {
            item.classList.remove('active');
        });
        activeItem.classList.add('active');
    }
    
    // Load page content based on page name
    function loadPageContent(pageName) {
        switch(pageName) {
            case 'home':
                loadFeaturedProducts();
                initHeroSlider();
                break;
            case 'products':
                loadAllProducts();
                break;
            case 'cart':
                loadCartPage();
                break;
            case 'categories':
                initCategoryListeners();
                break;
        }
    }
    
    // Update cart badge in navigation
    function updateNavCartBadge() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
        
        if (navCartBadge) {
            navCartBadge.textContent = itemCount;
            if (itemCount > 0) {
                navCartBadge.classList.add('show');
            } else {
                navCartBadge.classList.remove('show');
            }
        }
        
        // Also update top header badge
        const topCartBadge = document.getElementById('cartCount');
        if (topCartBadge) {
            topCartBadge.textContent = itemCount;
        }
    }
    
    // Initialize hero slider
    function initHeroSlider() {
        if (typeof Swiper !== 'undefined') {
            new Swiper('.hero-swiper', {
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }
    }
    
    // Load featured products for home page
    function loadFeaturedProducts() {
        const homeProductsGrid = document.getElementById('homeProductsGrid');
        if (!homeProductsGrid || typeof productsDatabase === 'undefined') return;
        
        const allProducts = [...productsDatabase.women, ...productsDatabase.men];
        const featuredProducts = allProducts.slice(0, 6);
        
        homeProductsGrid.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    }
    
    // Load all products
    function loadAllProducts() {
        const allProductsGrid = document.getElementById('allProductsGrid');
        if (!allProductsGrid || typeof productsDatabase === 'undefined') return;
        
        const allProducts = [...productsDatabase.women, ...productsDatabase.men];
        allProductsGrid.innerHTML = allProducts.map(product => createProductCard(product)).join('');
    }
    
    // Create product card HTML
    function createProductCard(product) {
        return `
            <div class="product-card" data-aos="fade-up">
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                    ${product.badge ? `<span class="product-badge ${product.badge}">${getBadgeText(product.badge)}</span>` : ''}
                    ${product.discount ? `<span class="product-discount">${product.discount}</span>` : ''}
                    <button class="btn-wishlist" onclick="toggleWishlist(${product.id})">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="product-details">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-rating">
                        ${getStarRating(product.rating)}
                        <span class="product-reviews">(${product.reviews})</span>
                    </div>
                    <div class="product-price-container">
                        ${product.oldPrice ? `<span class="product-old-price">${formatPrice(product.oldPrice)}</span>` : ''}
                        <span class="product-price">${formatPrice(product.price)}</span>
                    </div>
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> أضف للسلة
                    </button>
                </div>
            </div>
        `;
    }
    
    // Load cart page
    function loadCartPage() {
        const cartItems = document.getElementById('cartItems');
        const cartSummary = document.getElementById('cartSummary');
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>سلة التسوق فارغة</p>
                    <button class="btn-primary" onclick="navigateToPage('products')">ابدأ التسوق</button>
                </div>
            `;
            if (cartSummary) cartSummary.style.display = 'none';
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p class="cart-item-price">${formatPrice(item.price)}</p>
                        <div class="quantity-controls">
                            <button onclick="updateCartQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateCartQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <button class="btn-remove" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');
            
            // Calculate totals
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const shipping = 5000;
            const total = subtotal + shipping;
            
            document.getElementById('cartSubtotal').textContent = formatPrice(subtotal);
            document.getElementById('cartShipping').textContent = formatPrice(shipping);
            document.getElementById('cartTotal').textContent = formatPrice(total);
            
            if (cartSummary) cartSummary.style.display = 'block';
        }
    }
    
    // Initialize category listeners
    function initCategoryListeners() {
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            card.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                navigateToPage('products');
                // Filter products by category (implement as needed)
            });
        });
    }
    
    // Helper Functions
    function getBadgeText(badge) {
        const badges = {
            'new': 'جديد',
            'sale': 'تخفيض',
            'hot': 'الأكثر مبيعاً'
        };
        return badges[badge] || '';
    }
    
    function getStarRating(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    }
    
    function formatPrice(price) {
        return price.toLocaleString('ar-IQ') + ' د.ع';
    }
    
    // Global Functions for Cart Management
    window.addToCart = function(productId) {
        if (typeof productsDatabase === 'undefined') return;
        
        const allProducts = [...productsDatabase.women, ...productsDatabase.men];
        const product = allProducts.find(p => p.id === productId);
        
        if (!product) return;
        
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateNavCartBadge();
        showNotification('تم إضافة المنتج للسلة بنجاح', 'success');
    };
    
    window.updateCartQuantity = function(productId, change) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const item = cart.find(item => item.id === productId);
        
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                cart = cart.filter(item => item.id !== productId);
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            updateNavCartBadge();
            loadCartPage();
        }
    };
    
    window.removeFromCart = function(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateNavCartBadge();
        loadCartPage();
        showNotification('تم حذف المنتج من السلة', 'info');
    };
    
    window.toggleWishlist = function(productId) {
        showNotification('تم إضافة المنتج للمفضلة', 'success');
    };
    
    window.navigateToPage = navigateToPage;
    
    // Show notification
    function showNotification(message, type = 'success') {
        const colors = {
            success: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
            error: 'linear-gradient(135deg, #dc3545 0%, #ff6b6b 100%)',
            info: 'linear-gradient(135deg, #17a2b8 0%, #00d4ff 100%)'
        };
        
        const notification = document.createElement('div');
        notification.className = 'toast-notification';
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: ${colors[type]};
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 10px;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2500);
    }
    
    // Add notification animations
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
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
        `;
        document.head.appendChild(style);
    }
    
    // Initialize cart badge on load
    updateNavCartBadge();
    
    // Listen for storage changes (for multi-tab sync)
    window.addEventListener('storage', function(e) {
        if (e.key === 'cart') {
            updateNavCartBadge();
            if (document.querySelector('#cartPage.active')) {
                loadCartPage();
            }
        }
    });
}
