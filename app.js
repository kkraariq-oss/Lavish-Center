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
            badge: 'hot',
            rating: 4.9,
            reviews: 203,
            description: 'بدلة رجالية راقية بتصميم احترافي، مثالية للمناسبات الرسمية.',
            discount: '-25%',
            filter: 'popular'
        }
    ],
    accessories: [
        {
            id: 12,
            name: 'ساعة يد فاخرة',
            price: 125000,
            oldPrice: 180000,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
            category: 'accessories',
            badge: 'sale',
            rating: 4.8,
            reviews: 156,
            description: 'ساعة يد أنيقة بتصميم عصري، مقاومة للماء.',
            discount: '-31%',
            filter: 'sale'
        },
        {
            id: 13,
            name: 'نظارة شمسية',
            price: 38000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800',
            category: 'accessories',
            badge: 'new',
            rating: 4.5,
            reviews: 89,
            description: 'نظارة شمسية عصرية، حماية 100% من الأشعة فوق البنفسجية.',
            filter: 'new'
        },
        {
            id: 14,
            name: 'حزام جلد طبيعي',
            price: 42000,
            oldPrice: 60000,
            image: 'https://images.unsplash.com/photo-1624222247344-550fb60583aa?w=800',
            category: 'accessories',
            badge: 'hot',
            rating: 4.7,
            reviews: 124,
            description: 'حزام من الجلد الطبيعي، تصميم كلاسيكي.',
            discount: '-30%',
            filter: 'popular'
        },
        {
            id: 15,
            name: 'محفظة جلدية',
            price: 55000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800',
            category: 'accessories',
            badge: 'new',
            rating: 4.6,
            reviews: 97,
            description: 'محفظة أنيقة من الجلد الطبيعي، متعددة الجيوب.',
            filter: 'new'
        },
        {
            id: 16,
            name: 'سوار معدني',
            price: 32000,
            oldPrice: 45000,
            image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800',
            category: 'accessories',
            badge: 'sale',
            rating: 4.4,
            reviews: 76,
            description: 'سوار معدني بتصميم عصري، مطلي بالذهب.',
            discount: '-29%',
            filter: 'sale'
        }
    ],
    shoes: [
        {
            id: 17,
            name: 'حذاء رياضي نايك',
            price: 95000,
            oldPrice: 125000,
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
            category: 'shoes',
            badge: 'hot',
            rating: 4.9,
            reviews: 245,
            description: 'حذاء رياضي عالي الجودة، راحة قصوى ومتانة.',
            discount: '-24%',
            filter: 'popular'
        },
        {
            id: 18,
            name: 'حذاء كلاسيكي رجالي',
            price: 78000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800',
            category: 'shoes',
            badge: 'new',
            rating: 4.6,
            reviews: 118,
            description: 'حذاء كلاسيكي أنيق للمناسبات الرسمية.',
            filter: 'new'
        },
        {
            id: 19,
            name: 'صندل نسائي صيفي',
            price: 48000,
            oldPrice: 65000,
            image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800',
            category: 'shoes',
            badge: 'sale',
            rating: 4.5,
            reviews: 92,
            description: 'صندل صيفي مريح وأنيق، مناسب للأجواء الحارة.',
            discount: '-26%',
            filter: 'sale'
        },
        {
            id: 20,
            name: 'حذاء كاجوال',
            price: 62000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800',
            category: 'shoes',
            badge: 'hot',
            rating: 4.7,
            reviews: 156,
            description: 'حذاء كاجوال عملي ومريح للاستخدام اليومي.',
            filter: 'popular'
        }
    ],
    bags: [
        {
            id: 21,
            name: 'حقيبة يد نسائية',
            price: 85000,
            oldPrice: 115000,
            image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800',
            category: 'bags',
            badge: 'sale',
            rating: 4.8,
            reviews: 134,
            description: 'حقيبة يد أنيقة من الجلد الطبيعي، تصميم عصري.',
            discount: '-26%',
            filter: 'sale'
        },
        {
            id: 22,
            name: 'حقيبة ظهر رياضية',
            price: 52000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
            category: 'bags',
            badge: 'new',
            rating: 4.6,
            reviews: 108,
            description: 'حقيبة ظهر عملية ومريحة، مناسبة للرياضة والسفر.',
            filter: 'new'
        },
        {
            id: 23,
            name: 'حقيبة كروس بودي',
            price: 68000,
            oldPrice: 90000,
            image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800',
            category: 'bags',
            badge: 'hot',
            rating: 4.7,
            reviews: 142,
            description: 'حقيبة كروس بودي صغيرة وأنيقة، مثالية للنزهات.',
            discount: '-24%',
            filter: 'popular'
        },
        {
            id: 24,
            name: 'حقيبة سفر كبيرة',
            price: 125000,
            oldPrice: 165000,
            image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800',
            category: 'bags',
            badge: 'sale',
            rating: 4.9,
            reviews: 198,
            description: 'حقيبة سفر واسعة ومتينة، مناسبة للرحلات الطويلة.',
            discount: '-24%',
            filter: 'sale'
        },
        {
            id: 25,
            name: 'شنطة لابتوب',
            price: 72000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
            category: 'bags',
            badge: 'new',
            rating: 4.5,
            reviews: 87,
            description: 'شنطة لابتوب عملية بتصميم احترافي، حماية ممتازة.',
            filter: 'new'
        }
    ]
};

// ============================================
// GLOBAL VARIABLES
// ============================================
let cart = JSON.parse(localStorage.getItem('lavishCart')) || [];
let favorites = JSON.parse(localStorage.getItem('lavishFavorites')) || [];
let currentProduct = null;
let currentCategory = 'all';
let currentFilter = 'all';
let deferredPrompt;

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loadingScreen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loadingScreen').style.display = 'none';
        }, 500);
    }, 1500);

    // Show popup ad after 3 seconds
    setTimeout(() => {
        showPopupAd();
    }, 3000);

    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Initialize Swiper
    new Swiper('.hero-swiper', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'fade',
        speed: 1000
    });

    // Load initial products
    loadProducts();
    updateCartCount();
    updateFavoritesCount();
    initializeEventListeners();
    initializeScrollToTop();
    initializePWA();
});

// ============================================
// PWA INSTALLATION
// ============================================
function initializePWA() {
    // Register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    }

    // Handle install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        const installBtn = document.getElementById('installBtn');
        installBtn.style.display = 'flex';
        
        installBtn.addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                
                if (outcome === 'accepted') {
                    showNotification('تم تثبيت التطبيق بنجاح!', 'success');
                }
                
                deferredPrompt = null;
                installBtn.style.display = 'none';
            }
        });
    });
}

// ============================================
// POPUP AD FUNCTIONS
// ============================================
function showPopupAd() {
    const overlay = document.getElementById('popupAdOverlay');
    overlay.style.display = 'flex';
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 10);
}

function closePopupAd() {
    const overlay = document.getElementById('popupAdOverlay');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 300);
}

function goToAdProduct() {
    closePopupAd();
    const product = getAllProducts().find(p => p.id === 1);
    if (product) {
        openProductDetail(product);
    }
}

// ============================================
// PRODUCT FUNCTIONS
// ============================================
function getAllProducts() {
    return [
        ...productsDatabase.women,
        ...productsDatabase.men,
        ...productsDatabase.accessories,
        ...productsDatabase.shoes,
        ...productsDatabase.bags
    ];
}

function loadProducts(category = 'all') {
    const container = document.getElementById('productsGrid');
    container.innerHTML = '';
    
    let products = [];
    
    if (category === 'all') {
        products = getAllProducts();
    } else {
        products = productsDatabase[category] || [];
    }
    
    products.forEach((product, index) => {
        const delay = (index % 10) * 100;
        container.innerHTML += createProductCard(product, delay);
    });
    
    AOS.refresh();
}

function createProductCard(product, delay = 0) {
    const isFavorite = favorites.some(f => f.id === product.id);
    
    return `
        <div class="product-card" data-aos="fade-up" data-aos-delay="${delay}">
            ${product.badge ? `<div class="product-badge ${product.badge}">${product.badge === 'sale' ? '🔥 تخفيض' : product.badge === 'new' ? '✨ جديد' : '🌟 الأكثر مبيعاً'}</div>` : ''}
            ${product.discount ? `<div class="product-discount">${product.discount}</div>` : ''}
            <button class="product-favorite ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id}, event)">
                <i class="fas fa-heart"></i>
            </button>
            <div class="product-image-container" onclick='openProductDetail(${JSON.stringify(product).replace(/'/g, "&apos;")})'>
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                <button class="quick-view-btn">
                    <i class="fas fa-eye"></i> معاينة سريعة
                </button>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <div class="product-stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="product-reviews">(${product.reviews})</span>
                </div>
                <div class="product-price-container">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    ${product.oldPrice ? `<span class="product-old-price">${formatPrice(product.oldPrice)}</span>` : ''}
                </div>
                <button class="add-to-cart-btn" onclick='addToCart(${JSON.stringify(product).replace(/'/g, "&apos;")}, 1, "", "", event)'>
                    <i class="fas fa-shopping-cart"></i>
                    <span>أضف للسلة</span>
                </button>
            </div>
        </div>
    `;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function formatPrice(price) {
    return new Intl.NumberFormat('ar-IQ', {
        style: 'currency',
        currency: 'IQD',
        minimumFractionDigits: 0
    }).format(price).replace('IQD', 'د.ع');
}

function openProductDetail(product) {
    currentProduct = product;
    
    document.getElementById('productDetailTitle').textContent = product.name;
    document.getElementById('productDetailPrice').textContent = formatPrice(product.price);
    document.getElementById('productDetailDescription').textContent = product.description;
    document.getElementById('mainProductImage').src = product.image;
    
    // Load thumbnails
    const thumbnails = document.getElementById('productThumbnails');
    thumbnails.innerHTML = '';
    for (let i = 0; i < 4; i++) {
        thumbnails.innerHTML += `
            <img src="${product.image}" alt="thumbnail" class="thumbnail ${i === 0 ? 'active' : ''}" onclick="changeMainImage('${product.image}', this)">
        `;
    }
    
    showPage('productDetail');
}

function changeMainImage(src, element) {
    document.getElementById('mainProductImage').src = src;
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
}

function selectColor(element) {
    document.querySelectorAll('.color-option').forEach(c => c.classList.remove('active'));
    element.classList.add('active');
}

function selectSize(element) {
    document.querySelectorAll('.size-option').forEach(s => s.classList.remove('active'));
    element.classList.add('active');
}

// ============================================
// CART FUNCTIONS
// ============================================
function addToCart(product, quantity = 1, color = '', size = '', event) {
    if (event) {
        event.stopPropagation();
    }
    
    const cartItem = {
        ...product,
        quantity: quantity,
        color: color,
        size: size,
        cartId: Date.now()
    };
    
    cart.push(cartItem);
    localStorage.setItem('lavishCart', JSON.stringify(cart));
    updateCartCount();
    showNotification('تم إضافة المنتج إلى السلة بنجاح', 'success');
}

function updateCartCount() {
    const count = cart.length;
    document.getElementById('cartCount').textContent = count;
    if (count > 0) {
        document.getElementById('cartCount').style.display = 'flex';
    } else {
        document.getElementById('cartCount').style.display = 'none';
    }
}

function loadCart() {
    const container = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>السلة فارغة!</h3>
                <p>ابدأ بإضافة منتجات إلى سلتك</p>
            </div>
        `;
        document.getElementById('cartTotal').textContent = '0 د.ع';
        return;
    }
    
    container.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                    <div class="cart-item-quantity">الكمية: ${item.quantity}</div>
                    ${item.color ? `<div class="cart-item-quantity">اللون: ${item.color}</div>` : ''}
                    ${item.size ? `<div class="cart-item-quantity">المقاس: ${item.size}</div>` : ''}
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.cartId})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });
    
    document.getElementById('cartTotal').textContent = formatPrice(total);
}

function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    localStorage.setItem('lavishCart', JSON.stringify(cart));
    updateCartCount();
    loadCart();
    showNotification('تم حذف المنتج من السلة', 'success');
}

// ============================================
// FAVORITES FUNCTIONS (FIXED)
// ============================================
function toggleFavorite(productId, event) {
    if (event) {
        event.stopPropagation();
    }
    
    const product = getAllProducts().find(p => p.id === productId);
    if (!product) return;
    
    const index = favorites.findIndex(f => f.id === productId);
    
    if (index > -1) {
        favorites.splice(index, 1);
        showNotification('تم إزالة المنتج من المفضلة', 'success');
    } else {
        favorites.push(product);
        showNotification('تم إضافة المنتج إلى المفضلة', 'success');
    }
    
    localStorage.setItem('lavishFavorites', JSON.stringify(favorites));
    updateFavoritesCount();
    
    // Refresh current page
    if (document.getElementById('favoritesPage').classList.contains('active')) {
        loadFavorites();
    } else {
        loadProducts(currentCategory);
    }
}

function updateFavoritesCount() {
    const count = favorites.length;
    document.getElementById('favoritesCount').textContent = count;
    if (count > 0) {
        document.getElementById('favoritesCount').style.display = 'flex';
    } else {
        document.getElementById('favoritesCount').style.display = 'none';
    }
}

function loadFavorites() {
    const container = document.getElementById('favoritesGrid');
    
    if (favorites.length === 0) {
        container.innerHTML = `
            <div class="empty-cart" style="grid-column: 1 / -1;">
                <i class="fas fa-heart"></i>
                <h3>لا توجد منتجات مفضلة!</h3>
                <p>ابدأ بإضافة منتجات إلى المفضلة</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    favorites.forEach((product, index) => {
        container.innerHTML += createProductCard(product, index * 100);
    });
    
    AOS.refresh();
}

// ============================================
// WHATSAPP FUNCTIONS
// ============================================
function sendToWhatsApp(isCart = false) {
    const phone = '9647701234567'; // رقم الواتساب
    let message = '';
    
    if (isCart) {
        if (cart.length === 0) {
            showNotification('السلة فارغة!', 'error');
            return;
        }
        
        message = 'مرحباً! أريد إتمام طلبي:\n\n';
        let total = 0;
        
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            message += `${index + 1}. ${item.name}\n`;
            message += `   السعر: ${formatPrice(item.price)}\n`;
            if (item.color) message += `   اللون: ${item.color}\n`;
            if (item.size) message += `   المقاس: ${item.size}\n`;
            message += `   الكمية: ${item.quantity}\n`;
            message += `   المجموع: ${formatPrice(itemTotal)}\n\n`;
        });
        
        message += `\nالمجموع الكلي: ${formatPrice(total)}`;
    } else if (currentProduct) {
        const qty = document.getElementById('productQty').value;
        const color = document.querySelector('.color-option.active')?.style.backgroundColor || '';
        const size = document.querySelector('.size-option.active')?.textContent || '';
        
        message = `مرحباً! أريد الاستفسار عن هذا المنتج:\n\n`;
        message += `المنتج: ${currentProduct.name}\n`;
        message += `السعر: ${formatPrice(currentProduct.price)}\n`;
        if (color) message += `اللون: ${color}\n`;
        if (size) message += `المقاس: ${size}\n`;
        message += `الكمية: ${qty}`;
    }
    
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// ============================================
// NOTIFICATION
// ============================================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// PAGE NAVIGATION
// ============================================
function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(page + 'Page').classList.add('active');
    
    closeSidebar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// EVENT LISTENERS
// ============================================
function initializeEventListeners() {
    // Mobile menu
    document.getElementById('mobileMenuToggle').addEventListener('click', openSidebar);
    document.getElementById('sidebarClose').addEventListener('click', closeSidebar);
    document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);
    
    // Navigation
    document.querySelectorAll('[data-page]').forEach(el => {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            
            if (page === 'cart') {
                loadCart();
            } else if (page === 'favorites') {
                loadFavorites();
            }
            
            showPage(page);
        });
    });
    
    // Categories
    document.querySelectorAll('[data-category]').forEach(el => {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.dataset.category;
            currentCategory = category;
            
            document.querySelectorAll('.category-item').forEach(c => c.classList.remove('active'));
            if (this.classList.contains('category-item')) {
                this.classList.add('active');
            }
            
            if (category === 'all') {
                loadProducts();
            } else {
                loadProducts(category);
            }
            
            showPage('home');
        });
    });
    
    // Cart and Favorites buttons
    document.getElementById('cartBtn').addEventListener('click', () => {
        loadCart();
        showPage('cart');
    });
    
    document.getElementById('favoritesBtn').addEventListener('click', () => {
        loadFavorites();
        showPage('favorites');
    });
    
    // Product detail actions
    document.getElementById('addToCartDetailBtn').addEventListener('click', () => {
        if (currentProduct) {
            const qty = parseInt(document.getElementById('productQty').value);
            const color = document.querySelector('.color-option.active')?.style.backgroundColor || '';
            const size = document.querySelector('.size-option.active')?.textContent || '';
            addToCart(currentProduct, qty, color, size);
        }
    });
    
    document.getElementById('whatsappDetailBtn').addEventListener('click', () => sendToWhatsApp(false));
    
    // Quantity controls
    document.getElementById('decreaseQty').addEventListener('click', () => {
        const input = document.getElementById('productQty');
        if (input.value > 1) input.value = parseInt(input.value) - 1;
    });
    
    document.getElementById('increaseQty').addEventListener('click', () => {
        const input = document.getElementById('productQty');
        input.value = parseInt(input.value) + 1;
    });
    
    // Checkout
    document.getElementById('checkoutBtn').addEventListener('click', () => sendToWhatsApp(true));
    
    // Search
    const topSearchBtn = document.getElementById('topSearchBtn');
    const mainSearchBtn = document.getElementById('mainSearchBtn');
    
    if (topSearchBtn) topSearchBtn.addEventListener('click', performSearch);
    if (mainSearchBtn) mainSearchBtn.addEventListener('click', performSearch);
    
    const topSearchInput = document.getElementById('topSearchInput');
    const mainSearchInput = document.getElementById('mainSearchInput');
    
    if (topSearchInput) {
        topSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }
    
    if (mainSearchInput) {
        mainSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }
    
    // Filters
    document.querySelectorAll('.filter-item').forEach(filter => {
        filter.addEventListener('click', function() {
            document.querySelectorAll('.filter-item').forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            filterProducts();
        });
    });
    
    // Back button
    document.getElementById('backToHomeDetail').addEventListener('click', () => {
        showPage('home');
    });
}

// ============================================
// SEARCH
// ============================================
function performSearch() {
    const searchTerm = (document.getElementById('topSearchInput')?.value || document.getElementById('mainSearchInput')?.value || '').trim().toLowerCase();
    
    if (!searchTerm) {
        showNotification('الرجاء إدخال كلمة بحث', 'error');
        return;
    }
    
    const allProducts = getAllProducts();
    const results = allProducts.filter(p => 
        p.name.toLowerCase().includes(searchTerm) || 
        p.description.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm)
    );
    
    const container = document.getElementById('productsGrid');
    container.innerHTML = '';
    
    if (results.length === 0) {
        container.innerHTML = `
            <div class="empty-cart" style="grid-column: 1 / -1;">
                <i class="fas fa-search"></i>
                <h3>لم يتم العثور على نتائج</h3>
                <p>حاول استخدام كلمات مختلفة</p>
            </div>
        `;
    } else {
        results.forEach((product, index) => {
            container.innerHTML += createProductCard(product, index * 100);
        });
    }
    
    showPage('home');
    AOS.refresh();
}

// ============================================
// FILTER PRODUCTS
// ============================================
function filterProducts() {
    const container = document.getElementById('productsGrid');
    let products = getAllProducts();
    
    if (currentFilter !== 'all') {
        products = products.filter(p => p.filter === currentFilter);
    }
    
    if (currentFilter === 'price-low') {
        products.sort((a, b) => a.price - b.price);
    } else if (currentFilter === 'price-high') {
        products.sort((a, b) => b.price - a.price);
    }
    
    container.innerHTML = '';
    products.forEach((product, index) => {
        container.innerHTML += createProductCard(product, index * 50);
    });
    
    AOS.refresh();
}

// ============================================
// SIDEBAR
// ============================================
function openSidebar() {
    document.getElementById('mobileSidebar').classList.add('active');
    document.getElementById('sidebarOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    document.getElementById('mobileSidebar').classList.remove('active');
    document.getElementById('sidebarOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// SCROLL TO TOP
// ============================================
function initializeScrollToTop() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
