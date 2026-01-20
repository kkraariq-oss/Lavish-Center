// ============================================
// FIREBASE CONFIGURATION & INITIALIZATION
// ============================================
const firebaseConfig = {
    apiKey: "AIzaSyDGpAHia_wEmrhnmYjrPf1n1TrAzwEMiAI",
    authDomain: "messageemeapp.firebaseapp.com",
    databaseURL: "https://messageemeapp-default-rtdb.firebaseio.com",
    projectId: "messageemeapp",
    storageBucket: "messageemeapp.appspot.com",
    messagingSenderId: "255034474844",
    appId: "1:255034474844:web:5e3b7a6bc4b2fb94cc4199",
    measurementId: "G-4QBEWRC583"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// ============================================
// GLOBAL VARIABLES
// ============================================
let productsDatabase = {
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
            rating: 4.8,
            reviews: 143,
            description: 'بدلة رجالية فاخرة للمناسبات الخاصة والرسمية.',
            discount: '-25%',
            filter: 'sale'
        },
        {
            id: 12,
            name: 'حذاء رياضي رجالي',
            price: 89000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
            category: 'men',
            badge: 'hot',
            rating: 4.9,
            reviews: 201,
            description: 'حذاء رياضي مريح وأنيق، مناسب للاستخدام اليومي.',
            filter: 'popular'
        }
    ],
    kids: [
        {
            id: 13,
            name: 'فستان أطفال مطرز',
            price: 45000,
            oldPrice: 65000,
            image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800',
            category: 'kids',
            badge: 'sale',
            rating: 4.7,
            reviews: 89,
            description: 'فستان أطفال بتطريز جميل، مثالي للمناسبات.',
            discount: '-31%',
            filter: 'sale'
        },
        {
            id: 14,
            name: 'طقم أطفال كاجوال',
            price: 55000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800',
            category: 'kids',
            badge: 'new',
            rating: 4.6,
            reviews: 72,
            description: 'طقم أطفال مريح وعملي للاستخدام اليومي.',
            filter: 'new'
        },
        {
            id: 15,
            name: 'تيشيرت أطفال ملون',
            price: 22000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1503919436766-2e66d93c0c2e?w=800',
            category: 'kids',
            badge: 'hot',
            rating: 4.5,
            reviews: 54,
            description: 'تيشيرت أطفال بألوان زاهية، قطن 100%.',
            filter: 'popular'
        },
        {
            id: 16,
            name: 'جاكيت أطفال شتوي',
            price: 75000,
            oldPrice: 95000,
            image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7e2de2?w=800',
            category: 'kids',
            badge: 'sale',
            rating: 4.8,
            reviews: 98,
            description: 'جاكيت شتوي دافئ ومريح للأطفال.',
            discount: '-21%',
            filter: 'sale'
        },
        {
            id: 17,
            name: 'فستان حفلات للبنات',
            price: 85000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?w=800',
            category: 'kids',
            badge: 'new',
            rating: 4.9,
            reviews: 67,
            description: 'فستان حفلات فاخر للمناسبات الخاصة.',
            filter: 'new'
        },
        {
            id: 18,
            name: 'حذاء رياضي للأطفال',
            price: 58000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800',
            category: 'kids',
            badge: 'hot',
            rating: 4.7,
            reviews: 112,
            description: 'حذاء رياضي مريح وآمن للأطفال.',
            filter: 'popular'
        }
    ],
    accessories: [
        {
            id: 19,
            name: 'حقيبة يد نسائية',
            price: 95000,
            oldPrice: 135000,
            image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800',
            category: 'accessories',
            badge: 'sale',
            rating: 4.6,
            reviews: 145,
            description: 'حقيبة يد أنيقة بتصميم عصري.',
            discount: '-30%',
            filter: 'sale'
        },
        {
            id: 20,
            name: 'نظارة شمسية',
            price: 45000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800',
            category: 'accessories',
            badge: 'hot',
            rating: 4.8,
            reviews: 167,
            description: 'نظارة شمسية بتصميم كلاسيكي وحماية UV.',
            filter: 'popular'
        },
        {
            id: 21,
            name: 'ساعة يد رجالية',
            price: 125000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800',
            category: 'accessories',
            badge: 'new',
            rating: 4.7,
            reviews: 89,
            description: 'ساعة يد رجالية فاخرة بتصميم عصري.',
            filter: 'new'
        },
        {
            id: 22,
            name: 'حزام جلد طبيعي',
            price: 38000,
            oldPrice: 55000,
            image: 'https://images.unsplash.com/photo-1624222247344-550fb60583c8?w=800',
            category: 'accessories',
            badge: 'sale',
            rating: 4.5,
            reviews: 73,
            description: 'حزام من الجلد الطبيعي، أنيق ومتين.',
            discount: '-31%',
            filter: 'sale'
        },
        {
            id: 23,
            name: 'محفظة جلدية',
            price: 55000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800',
            category: 'accessories',
            badge: 'hot',
            rating: 4.9,
            reviews: 198,
            description: 'محفظة جلدية فاخرة بتصميم عملي.',
            filter: 'popular'
        },
        {
            id: 24,
            name: 'وشاح صوف',
            price: 32000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800',
            category: 'accessories',
            badge: 'new',
            rating: 4.4,
            reviews: 56,
            description: 'وشاح صوف ناعم ودافئ.',
            filter: 'new'
        }
    ]
};

let categories = {};
let popupAds = [];
let banners = [];
let cart = [];
let favorites = [];

// ============================================
// LOAD DATA FROM FIREBASE
// ============================================
function loadDataFromFirebase() {
    // Load Categories
    database.ref('categories').on('value', (snapshot) => {
        if (snapshot.exists()) {
            categories = snapshot.val();
            renderCategories();
        }
    });

    // Load Products from Firebase
    database.ref('products').on('value', (snapshot) => {
        if (snapshot.exists()) {
            const products = snapshot.val();
            // Clear current database and group products by category
            const tempDatabase = {};
            Object.values(products).forEach(product => {
                if (!tempDatabase[product.category]) {
                    tempDatabase[product.category] = [];
                }
                tempDatabase[product.category].push(product);
            });
            
            // Merge with default products
            Object.keys(tempDatabase).forEach(category => {
                if (!productsDatabase[category]) {
                    productsDatabase[category] = [];
                }
                // Add Firebase products (they will override defaults with same ID)
                tempDatabase[category].forEach(newProduct => {
                    const existingIndex = productsDatabase[category].findIndex(p => p.id === newProduct.id);
                    if (existingIndex >= 0) {
                        productsDatabase[category][existingIndex] = newProduct;
                    } else {
                        productsDatabase[category].push(newProduct);
                    }
                });
            });
            
            renderAllProducts();
        }
    });

    // Load Popup Ads
    database.ref('popupAds').on('value', (snapshot) => {
        if (snapshot.exists()) {
            popupAds = Object.values(snapshot.val()).filter(ad => ad.active);
            if (popupAds.length > 0) {
                showPopupAd();
            }
        }
    });

    // Load Banners
    database.ref('banners').on('value', (snapshot) => {
        if (snapshot.exists()) {
            banners = Object.values(snapshot.val()).filter(banner => banner.active);
            renderBanners();
        }
    });
}

// ============================================
// RENDER CATEGORIES
// ============================================
function renderCategories() {
    const categoriesContainer = document.querySelector('.categories-slider .swiper-wrapper');
    if (!categoriesContainer || Object.keys(categories).length === 0) return;

    // Clear existing
    categoriesContainer.innerHTML = '';
    
    Object.values(categories).forEach(category => {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'swiper-slide';
        
        slideDiv.innerHTML = `
            <div class="category-item" data-aos="fade-up">
                <div class="category-icon">
                    <i class="fas ${category.icon}"></i>
                </div>
                <h4>${category.name}</h4>
            </div>
        `;
        
        slideDiv.querySelector('.category-item').addEventListener('click', () => {
            navigateTo(category.id);
        });
        
        categoriesContainer.appendChild(slideDiv);
    });

    // Reinitialize Swiper if exists
    if (typeof Swiper !== 'undefined') {
        new Swiper('.categories-slider', {
            slidesPerView: 'auto',
            spaceBetween: 15,
            freeMode: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
}

// ============================================
// RENDER ALL PRODUCTS
// ============================================
function renderAllProducts() {
    // Render products for each category
    ['women', 'men', 'kids', 'accessories'].forEach(category => {
        if (productsDatabase[category]) {
            renderProductsForCategory(category);
        }
    });
}

function renderProductsForCategory(categoryName) {
    const container = document.getElementById(`${categoryName}Products`);
    if (!container || !productsDatabase[categoryName]) return;

    container.innerHTML = '';
    
    productsDatabase[categoryName].forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

// ============================================
// CREATE PRODUCT CARD
// ============================================
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-filter', product.filter || '');
    
    let badgeHTML = '';
    if (product.badge === 'new') badgeHTML = '<span class="product-badge badge-new">جديد</span>';
    else if (product.badge === 'sale') badgeHTML = '<span class="product-badge badge-sale">تخفيض</span>';
    else if (product.badge === 'hot') badgeHTML = '<span class="product-badge badge-hot">مميز</span>';
    
    const isFavorite = favorites.includes(product.id);
    
    card.innerHTML = `
        ${badgeHTML}
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <button class="product-favorite ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id}, event)">
                <i class="fas fa-heart"></i>
            </button>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-rating">
                <i class="fas fa-star"></i>
                <span>${product.rating}</span>
                <span class="reviews-count">(${product.reviews} تقييم)</span>
            </div>
            <div class="product-price-container">
                ${product.oldPrice ? `<span class="product-old-price">${product.oldPrice.toLocaleString()} د.ع</span>` : ''}
                <span class="product-price">${product.price.toLocaleString()} د.ع</span>
                ${product.discount ? `<span class="product-discount">${product.discount}</span>` : ''}
            </div>
            <button class="btn-add-to-cart" onclick="addToCart(${product.id}, event)">
                <i class="fas fa-shopping-cart"></i>
                أضف إلى السلة
            </button>
        </div>
    `;
    
    return card;
}

// ============================================
// RENDER BANNERS
// ============================================
function renderBanners() {
    if (banners.length === 0) return;
    
    const swiperWrapper = document.querySelector('.hero-slider .swiper-wrapper');
    if (!swiperWrapper) return;

    swiperWrapper.innerHTML = '';
    
    banners.forEach(banner => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="hero-slide" style="background-image: url('${banner.image}')">
                <div class="hero-content">
                    <h1 class="hero-title" data-aos="fade-up">${banner.title}</h1>
                    <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="100">${banner.subtitle}</p>
                    ${banner.link ? `<button class="hero-btn" data-aos="fade-up" data-aos-delay="200" onclick="navigateTo('${banner.link}')">
                        <i class="fas fa-shopping-bag"></i>
                        تسوق الآن
                    </button>` : ''}
                </div>
            </div>
        `;
        swiperWrapper.appendChild(slide);
    });

    // Reinitialize Swiper
    if (typeof Swiper !== 'undefined') {
        new Swiper('.hero-slider', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            effect: 'fade',
            speed: 1000,
        });
    }
}

// ============================================
// SHOW POPUP AD
// ============================================
function showPopupAd() {
    if (popupAds.length === 0) return;
    
    const ad = popupAds[0];
    const overlay = document.getElementById('popupAdOverlay');
    
    if (overlay) {
        const title = overlay.querySelector('.popup-ad-title');
        const description = overlay.querySelector('.popup-ad-description');
        const image = overlay.querySelector('.popup-ad-image');
        const oldPrice = overlay.querySelector('.popup-ad-old-price');
        const newPrice = overlay.querySelector('.popup-ad-new-price');
        
        if (title) title.textContent = ad.title;
        if (description) description.textContent = ad.description;
        if (image) image.src = ad.image;
        if (oldPrice) oldPrice.textContent = ad.oldPrice.toLocaleString() + ' د.ع';
        if (newPrice) newPrice.textContent = ad.newPrice.toLocaleString() + ' د.ع';
        
        setTimeout(() => {
            overlay.style.display = 'flex';
        }, 3000);
    }
}

function closePopupAd() {
    const overlay = document.getElementById('popupAdOverlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}

function goToAdProduct() {
    if (popupAds.length > 0 && popupAds[0].productId) {
        closePopupAd();
        // Navigate to product or add to cart
        const productId = parseInt(popupAds[0].productId);
        addToCart(productId);
    }
}

// ============================================
// CART MANAGEMENT
// ============================================
function getAllProducts() {
    let allProducts = [];
    Object.values(productsDatabase).forEach(categoryProducts => {
        allProducts = allProducts.concat(categoryProducts);
    });
    return allProducts;
}

function findProductById(productId) {
    const allProducts = getAllProducts();
    return allProducts.find(p => p.id == productId);
}

function addToCart(productId, event) {
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }
    
    const product = findProductById(productId);
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    const existingItem = cart.find(item => item.id == productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartUI();
    showNotification('تم إضافة المنتج إلى السلة ✓');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id != productId);
    updateCartUI();
}

function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id == productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }

    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCart = document.querySelector('.empty-cart');
    const cartSummary = document.querySelector('.cart-summary');

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        if (emptyCart) emptyCart.style.display = 'block';
        if (cartSummary) cartSummary.style.display = 'none';
        cartItemsContainer.innerHTML = '';
    } else {
        if (emptyCart) emptyCart.style.display = 'none';
        if (cartSummary) cartSummary.style.display = 'block';
        
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.setAttribute('data-aos', 'fade-up');
            
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price">${item.price.toLocaleString()} د.ع</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="cart-item-total">
                    <span class="cart-item-total-price">${itemTotal.toLocaleString()} د.ع</span>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        const cartTotalElement = document.getElementById('cartTotal');
        if (cartTotalElement) {
            cartTotalElement.textContent = total.toLocaleString() + ' د.ع';
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

function clearCart() {
    if (confirm('هل أنت متأكد من إفراغ السلة؟')) {
        cart = [];
        updateCartUI();
        showNotification('تم إفراغ السلة');
    }
}

// ============================================
// CHECKOUT PROCESS
// ============================================
function checkout() {
    if (cart.length === 0) {
        showNotification('السلة فارغة');
        return;
    }

    showCheckoutModal();
}

function showCheckoutModal() {
    const modal = document.createElement('div');
    modal.id = 'checkoutModal';
    modal.className = 'modal-overlay';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        padding: 20px;
        animation: fadeIn 0.3s ease;
    `;

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    modal.innerHTML = `
        <div style="background: white; border-radius: 20px; padding: 30px; max-width: 600px; width: 100%; max-height: 90vh; overflow-y: auto; animation: slideUp 0.3s ease;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; padding-bottom: 15px; border-bottom: 2px solid #f0f0f0;">
                <h2 style="color: #333; font-size: 24px; margin: 0;">
                    <i class="fas fa-shopping-cart" style="color: #667eea; margin-left: 10px;"></i>
                    إتمام الطلب
                </h2>
                <button onclick="closeCheckoutModal()" style="background: none; border: none; font-size: 24px; cursor: pointer; color: #999; padding: 5px 10px;">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <form id="checkoutForm" style="font-family: 'Cairo', sans-serif;">
                <div style="margin-bottom: 20px;">
                    <label style="display: block; margin-bottom: 8px; color: #555; font-weight: 600; font-size: 15px;">
                        <i class="fas fa-user" style="margin-left: 5px; color: #667eea;"></i>
                        الاسم الكامل
                    </label>
                    <input type="text" id="customerName" required style="width: 100%; padding: 14px; border: 2px solid #e1e8ed; border-radius: 12px; font-size: 16px; font-family: 'Cairo', sans-serif; transition: all 0.3s;" placeholder="أدخل اسمك الكامل" onfocus="this.style.borderColor='#667eea'" onblur="this.style.borderColor='#e1e8ed'">
                </div>
                
                <div style="margin-bottom: 20px;">
                    <label style="display: block; margin-bottom: 8px; color: #555; font-weight: 600; font-size: 15px;">
                        <i class="fas fa-phone" style="margin-left: 5px; color: #667eea;"></i>
                        رقم الهاتف
                    </label>
                    <input type="tel" id="customerPhone" required style="width: 100%; padding: 14px; border: 2px solid #e1e8ed; border-radius: 12px; font-size: 16px; font-family: 'Cairo', sans-serif; transition: all 0.3s;" placeholder="07XXXXXXXXX" onfocus="this.style.borderColor='#667eea'" onblur="this.style.borderColor='#e1e8ed'">
                </div>
                
                <div style="margin-bottom: 20px;">
                    <label style="display: block; margin-bottom: 8px; color: #555; font-weight: 600; font-size: 15px;">
                        <i class="fas fa-map-marker-alt" style="margin-left: 5px; color: #667eea;"></i>
                        المحافظة
                    </label>
                    <input type="text" id="customerCity" required style="width: 100%; padding: 14px; border: 2px solid #e1e8ed; border-radius: 12px; font-size: 16px; font-family: 'Cairo', sans-serif; transition: all 0.3s;" placeholder="مثال: بغداد، بابل، البصرة" onfocus="this.style.borderColor='#667eea'" onblur="this.style.borderColor='#e1e8ed'">
                </div>
                
                <div style="margin-bottom: 25px;">
                    <label style="display: block; margin-bottom: 8px; color: #555; font-weight: 600; font-size: 15px;">
                        <i class="fas fa-home" style="margin-left: 5px; color: #667eea;"></i>
                        العنوان بالتفصيل
                    </label>
                    <textarea id="customerAddress" required style="width: 100%; padding: 14px; border: 2px solid #e1e8ed; border-radius: 12px; font-size: 16px; font-family: 'Cairo', sans-serif; min-height: 100px; resize: vertical; transition: all 0.3s;" placeholder="المنطقة، الشارع، رقم البناية..." onfocus="this.style.borderColor='#667eea'" onblur="this.style.borderColor='#e1e8ed'"></textarea>
                </div>
                
                <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 20px; border-radius: 15px; margin-bottom: 25px;">
                    <h3 style="color: #333; margin-bottom: 15px; font-size: 18px; display: flex; align-items: center;">
                        <i class="fas fa-receipt" style="margin-left: 8px; color: #667eea;"></i>
                        ملخص الطلب
                    </h3>
                    <div style="color: #666; font-size: 15px;">
                        ${cart.map(item => `
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px dashed #ddd;">
                                <div>
                                    <strong style="color: #333;">${item.name}</strong>
                                    <span style="color: #999; margin-right: 8px;">× ${item.quantity}</span>
                                </div>
                                <span style="font-weight: 600; color: #667eea;">${(item.price * item.quantity).toLocaleString()} د.ع</span>
                            </div>
                        `).join('')}
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-top: 15px; padding-top: 15px; border-top: 2px solid #667eea; font-weight: 700; font-size: 20px; color: #2ecc71;">
                        <span>الإجمالي:</span>
                        <span>${total.toLocaleString()} د.ع</span>
                    </div>
                </div>
                
                <div style="display: flex; gap: 12px;">
                    <button type="submit" style="flex: 1; padding: 16px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 12px; font-size: 18px; font-weight: 700; cursor: pointer; font-family: 'Cairo', sans-serif; transition: all 0.3s; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.3)'">
                        <i class="fas fa-check-circle" style="margin-left: 8px;"></i>
                        تأكيد الطلب
                    </button>
                    <button type="button" onclick="closeCheckoutModal()" style="padding: 16px 25px; background: #e74c3c; color: white; border: none; border-radius: 12px; font-size: 18px; font-weight: 600; cursor: pointer; font-family: 'Cairo', sans-serif; transition: all 0.3s;" onmouseover="this.style.background='#c0392b'" onmouseout="this.style.background='#e74c3c'">
                        <i class="fas fa-times" style="margin-left: 5px;"></i>
                        إلغاء
                    </button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('checkoutForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        await processOrder();
    });
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => modal.remove(), 300);
    }
}

async function processOrder() {
    const customerData = {
        name: document.getElementById('customerName').value.trim(),
        phone: document.getElementById('customerPhone').value.trim(),
        city: document.getElementById('customerCity').value.trim(),
        address: document.getElementById('customerAddress').value.trim()
    };

    // Validation
    if (!customerData.name || !customerData.phone || !customerData.city || !customerData.address) {
        showNotification('الرجاء ملء جميع الحقول');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const order = {
        customer: customerData,
        items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image
        })),
        total: total,
        timestamp: Date.now(),
        status: 'new'
    };

    try {
        // Show loading
        const submitBtn = document.querySelector('#checkoutForm button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
        submitBtn.disabled = true;

        // Save to Firebase
        await database.ref('orders').push(order);

        // Prepare WhatsApp message
        let whatsappMessage = `🛍 *طلب جديد من LaVish Center*\n\n`;
        whatsappMessage += `👤 *بيانات العميل:*\n`;
        whatsappMessage += `الاسم: ${customerData.name}\n`;
        whatsappMessage += `الهاتف: ${customerData.phone}\n`;
        whatsappMessage += `المحافظة: ${customerData.city}\n`;
        whatsappMessage += `العنوان: ${customerData.address}\n\n`;
        whatsappMessage += `🛒 *المنتجات المطلوبة:*\n`;
        
        cart.forEach((item, index) => {
            whatsappMessage += `\n${index + 1}. ${item.name}\n`;
            whatsappMessage += `   • الكمية: ${item.quantity}\n`;
            whatsappMessage += `   • السعر: ${item.price.toLocaleString()} د.ع\n`;
            whatsappMessage += `   • المجموع: ${(item.price * item.quantity).toLocaleString()} د.ع\n`;
        });
        
        whatsappMessage += `\n━━━━━━━━━━━━━━━━\n`;
        whatsappMessage += `💰 *الإجمالي الكلي: ${total.toLocaleString()} د.ع*\n\n`;
        whatsappMessage += `📱 للتواصل: ${customerData.phone}`;

        const whatsappNumber = '9647813798636';
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Clear cart
        cart = [];
        updateCartUI();
        closeCheckoutModal();
        
        // Show success message
        showSuccessModal();
        
        // Open WhatsApp
        setTimeout(() => {
            window.open(whatsappURL, '_blank');
        }, 1500);

    } catch (error) {
        console.error('Error processing order:', error);
        showNotification('حدث خطأ أثناء إرسال الطلب. الرجاء المحاولة مرة أخرى.');
        
        // Reset button
        const submitBtn = document.querySelector('#checkoutForm button[type="submit"]');
        if (submitBtn) {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }
}

function showSuccessModal() {
    const modal = document.createElement('div');
    modal.className = 'success-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10001;
        animation: fadeIn 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div style="background: white; border-radius: 20px; padding: 40px; text-align: center; max-width: 400px; animation: slideUp 0.3s ease;">
            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                <i class="fas fa-check" style="font-size: 40px; color: white;"></i>
            </div>
            <h2 style="color: #333; margin-bottom: 10px; font-size: 24px;">تم إرسال طلبك بنجاح!</h2>
            <p style="color: #777; margin-bottom: 20px; line-height: 1.6;">
                شكراً لك على طلبك من LaVish Center<br>
                سيتم التواصل معك قريباً لتأكيد الطلب
            </p>
            <button onclick="this.parentElement.parentElement.remove()" style="padding: 12px 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 10px; font-size: 16px; font-weight: 600; cursor: pointer; font-family: 'Cairo', sans-serif;">
                حسناً
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    setTimeout(() => {
        modal.remove();
    }, 5000);
}

// ============================================
// FAVORITES MANAGEMENT
// ============================================
function toggleFavorite(productId, event) {
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }
    
    const index = favorites.indexOf(productId);
    if (index > -1) {
        favorites.splice(index, 1);
        showNotification('تم إزالة المنتج من المفضلة');
    } else {
        favorites.push(productId);
        showNotification('تم إضافة المنتج إلى المفضلة ❤️');
    }
    
    // Update UI
    const favoriteBtn = document.querySelector(`[onclick*="toggleFavorite(${productId}"]`);
    if (favoriteBtn) {
        favoriteBtn.classList.toggle('active');
    }
    
    // Update count
    const favoritesCountElement = document.getElementById('favoritesCount');
    if (favoritesCountElement) {
        favoritesCountElement.textContent = favorites.length;
    }
    
    // Save to localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Update favorites page if open
    if (document.getElementById('favoritesPage').classList.contains('active')) {
        renderFavoritesPage();
    }
}

function renderFavoritesPage() {
    const favoritesGrid = document.getElementById('favoritesGrid');
    const emptyFavorites = document.querySelector('.empty-favorites');
    
    if (!favoritesGrid) return;
    
    favoritesGrid.innerHTML = '';
    
    if (favorites.length === 0) {
        if (emptyFavorites) emptyFavorites.style.display = 'block';
    } else {
        if (emptyFavorites) emptyFavorites.style.display = 'none';
        
        const allProducts = getAllProducts();
        favorites.forEach(favoriteId => {
            const product = allProducts.find(p => p.id == favoriteId);
            if (product) {
                const productCard = createProductCard(product);
                favoritesGrid.appendChild(productCard);
            }
        });
    }
}

// ============================================
// NAVIGATION
// ============================================
function navigateTo(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Show selected page
    const targetPage = document.getElementById(page + 'Page');
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Update active nav link
        document.querySelectorAll('[data-page]').forEach(link => {
            if (link.getAttribute('data-page') === page) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // Special handling for favorites page
    if (page === 'favorites') {
        renderFavoritesPage();
    }
}

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
    if (!searchInput) return;
    
    const query = searchInput.value.trim().toLowerCase();
    
    if (!query) {
        showNotification('الرجاء إدخال كلمة بحث');
        return;
    }

    const allProducts = getAllProducts();
    const results = allProducts.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
    );

    if (results.length > 0) {
        showNotification(`تم العثور على ${results.length} منتج`);
        // You can show results in a modal or navigate to a search results page
        console.log('Search results:', results);
    } else {
        showNotification('لم يتم العثور على نتائج');
    }
}

// ============================================
// FILTERS
// ============================================
function applyFilter(filterType, category) {
    const container = document.getElementById(`${category}Products`);
    if (!container) return;
    
    const productCards = container.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        if (filterType === 'all') {
            card.style.display = 'block';
        } else {
            const cardFilter = card.getAttribute('data-filter');
            card.style.display = cardFilter === filterType ? 'block' : 'none';
        }
    });
    
    // Update active filter button
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(filterType)) {
            btn.classList.add('active');
        }
    });
}

// ============================================
// NOTIFICATIONS
// ============================================
function showNotification(message, duration = 3000) {
    // Remove existing notifications
    const existing = document.querySelector('.custom-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'custom-notification';
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        z-index: 10000;
        animation: slideInRight 0.3s ease, slideOutRight 0.3s ease ${duration - 300}ms;
        font-family: 'Cairo', sans-serif;
        font-weight: 600;
        font-size: 15px;
        max-width: 300px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, duration);
}

// ============================================
// CART SIDEBAR
// ============================================
function toggleCart() {
    const cartSidebar = document.querySelector('.cart-sidebar');
    const overlay = document.querySelector('.cart-overlay');
    
    if (cartSidebar && overlay) {
        cartSidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

// ============================================
// MOBILE MENU
// ============================================
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    
    if (mobileMenu && overlay) {
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

// ============================================
// SCROLL TO TOP
// ============================================
function setupScrollToTop() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (!scrollBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// PWA INSTALLATION
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
                deferredPrompt = null;
                installBtn.style.display = 'none';
            }
        });
    }
});

// ============================================
// SERVICE WORKER
// ============================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => console.log('SW registered'))
            .catch(err => console.log('SW registration failed'));
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('LaVish Center App Starting...');
    
    // Load data from Firebase
    loadDataFromFirebase();
    
    // Render initial products (from default database)
    renderAllProducts();
    
    // Load cart and favorites from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            updateCartUI();
        } catch (e) {
            console.error('Error loading cart:', e);
        }
    }

    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
        try {
            favorites = JSON.parse(savedFavorites);
            const favoritesCountElement = document.getElementById('favoritesCount');
            if (favoritesCountElement) {
                favoritesCountElement.textContent = favorites.length;
            }
        } catch (e) {
            console.error('Error loading favorites:', e);
        }
    }

    // Setup search
    setupSearch();
    
    // Setup scroll to top
    setupScrollToTop();

    // Setup navigation
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            navigateTo(page);
        });
    });
    
    // Setup cart button
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', toggleCart);
    }
    
    // Setup cart overlay
    const cartOverlay = document.querySelector('.cart-overlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', toggleCart);
    }
    
    // Setup mobile menu
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', toggleMobileMenu);
    }
    
    // Setup checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
    
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50
        });
    }
    
    // Close loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 2000);
    
    console.log('LaVish Center App Ready!');
});

// Add animations to styles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    @keyframes slideUp {
        from { 
            opacity: 0; 
            transform: translateY(30px); 
        }
        to { 
            opacity: 1; 
            transform: translateY(0); 
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);