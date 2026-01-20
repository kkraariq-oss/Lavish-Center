// ============================================
// FIREBASE CONFIGURATION
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
let productsDatabase = {};
let categories = {};
let popupAds = [];
let banners = [];
let cart = [];
let favorites = [];
let currentPage = 'home';

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

    // Load Products
    database.ref('products').on('value', (snapshot) => {
        if (snapshot.exists()) {
            const products = snapshot.val();
            // Group products by category
            productsDatabase = {};
            Object.values(products).forEach(product => {
                if (!productsDatabase[product.category]) {
                    productsDatabase[product.category] = [];
                }
                productsDatabase[product.category].push(product);
            });
            renderAllProducts();
        }
    });

    // Load Popup Ads
    database.ref('popupAds').on('value', (snapshot) => {
        if (snapshot.exists()) {
            popupAds = Object.values(snapshot.val()).filter(ad => ad.active);
            if (popupAds.length > 0) {
                setTimeout(() => showPopupAd(), 3000);
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
    const categoriesContainer = document.querySelector('.categories-slider');
    if (!categoriesContainer) return;

    categoriesContainer.innerHTML = '';
    
    Object.values(categories).forEach((category, index) => {
        const categoryItem = document.createElement('div');
        categoryItem.className = 'category-item';
        categoryItem.setAttribute('data-aos', 'fade-up');
        categoryItem.setAttribute('data-aos-delay', (index * 50).toString());
        categoryItem.innerHTML = `
            <div class="category-icon">
                <i class="fas ${category.icon}"></i>
            </div>
            <h4>${category.name}</h4>
        `;
        categoryItem.onclick = () => navigateTo(category.id);
        categoriesContainer.appendChild(categoryItem);
    });
}

// ============================================
// RENDER PRODUCTS
// ============================================
function renderAllProducts() {
    Object.keys(productsDatabase).forEach(categoryId => {
        renderProductsForCategory(categoryId);
    });
}

function renderProductsForCategory(categoryId) {
    const container = document.getElementById(`${categoryId}Products`);
    if (!container) return;

    container.innerHTML = '';
    const products = productsDatabase[categoryId] || [];
    
    products.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        container.appendChild(productCard);
    });
}

// ============================================
// CREATE PRODUCT CARD
// ============================================
function createProductCard(product, index = 0) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', ((index % 3) * 50).toString());
    
    let badgeHTML = '';
    if (product.badge === 'new') badgeHTML = '<span class="product-badge badge-new">جديد</span>';
    else if (product.badge === 'sale') badgeHTML = '<span class="product-badge badge-sale">تخفيض</span>';
    else if (product.badge === 'hot') badgeHTML = '<span class="product-badge badge-hot">مميز</span>';
    
    const isFavorite = favorites.includes(product.id);
    
    card.innerHTML = `
        ${badgeHTML}
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <button class="product-favorite ${isFavorite ? 'active' : ''}" onclick="toggleFavorite('${product.id}', event)">
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
            <button class="btn-add-to-cart" onclick="addToCart('${product.id}', event)">
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
    const swiperWrapper = document.querySelector('.hero-slider .swiper-wrapper');
    if (!swiperWrapper || banners.length === 0) return;

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
        const titleElement = overlay.querySelector('.popup-ad-title');
        const descElement = overlay.querySelector('.popup-ad-description');
        const imageElement = overlay.querySelector('.popup-ad-image');
        const oldPriceElement = overlay.querySelector('.popup-ad-old-price');
        const newPriceElement = overlay.querySelector('.popup-ad-new-price');
        
        if (titleElement) titleElement.textContent = ad.title;
        if (descElement) descElement.textContent = ad.description;
        if (imageElement) imageElement.src = ad.image;
        if (oldPriceElement) oldPriceElement.textContent = ad.oldPrice.toLocaleString() + ' د.ع';
        if (newPriceElement) newPriceElement.textContent = ad.newPrice.toLocaleString() + ' د.ع';
        
        overlay.style.display = 'flex';
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
        // Navigate to product or category
    }
}

// ============================================
// CART MANAGEMENT
// ============================================
function addToCart(productId, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    // Find product
    let product = null;
    Object.values(productsDatabase).forEach(categoryProducts => {
        const found = categoryProducts.find(p => p.id === productId);
        if (found) product = found;
    });

    if (!product) return;

    // Check if already in cart
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartUI();
    showNotification('✅ تم إضافة المنتج إلى السلة');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showNotification('🗑️ تم حذف المنتج من السلة');
}

function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
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
    // Update cart count
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }

    // Update cart items
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartSummary = document.getElementById('cartSummary');

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
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">${item.price.toLocaleString()} د.ع</p>
                    <div class="cart-item-quantity">
                        <button onclick="updateCartQuantity('${item.id}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateCartQuantity('${item.id}', 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        const cartTotalElement = document.getElementById('cartTotal');
        if (cartTotalElement) {
            cartTotalElement.textContent = total.toLocaleString() + ' د.ع';
        }
    }

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function clearCart() {
    if (confirm('هل أنت متأكد من إفراغ السلة؟')) {
        cart = [];
        updateCartUI();
    }
}

// ============================================
// CHECKOUT
// ============================================
function checkout() {
    if (cart.length === 0) {
        showNotification('⚠️ السلة فارغة');
        return;
    }
    showCheckoutModal();
}

function showCheckoutModal() {
    // Create checkout modal
    const modal = document.createElement('div');
    modal.id = 'checkoutModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        padding: 20px;
        animation: fadeIn 0.3s ease;
    `;

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    modal.innerHTML = `
        <div style="background: white; border-radius: 20px; padding: 30px; max-width: 500px; width: 100%; max-height: 90vh; overflow-y: auto; animation: slideUp 0.3s ease;">
            <h2 style="text-align: center; color: #333; margin-bottom: 20px; font-family: 'Cairo', sans-serif;">
                <i class="fas fa-shopping-cart"></i> إتمام الطلب
            </h2>
            
            <form id="checkoutForm">
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px; color: #555; font-weight: 600; font-family: 'Cairo', sans-serif;">الاسم الكامل *</label>
                    <input type="text" id="customerName" required style="width: 100%; padding: 12px; border: 2px solid #e1e8ed; border-radius: 10px; font-size: 16px; font-family: 'Cairo', sans-serif;">
                </div>
                
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px; color: #555; font-weight: 600; font-family: 'Cairo', sans-serif;">رقم الهاتف *</label>
                    <input type="tel" id="customerPhone" required style="width: 100%; padding: 12px; border: 2px solid #e1e8ed; border-radius: 10px; font-size: 16px; font-family: 'Cairo', sans-serif;" placeholder="07XXXXXXXXX">
                </div>
                
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px; color: #555; font-weight: 600; font-family: 'Cairo', sans-serif;">المحافظة *</label>
                    <input type="text" id="customerCity" required style="width: 100%; padding: 12px; border: 2px solid #e1e8ed; border-radius: 10px; font-size: 16px; font-family: 'Cairo', sans-serif;">
                </div>
                
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px; color: #555; font-weight: 600; font-family: 'Cairo', sans-serif;">العنوان بالتفصيل *</label>
                    <textarea id="customerAddress" required style="width: 100%; padding: 12px; border: 2px solid #e1e8ed; border-radius: 10px; font-size: 16px; font-family: 'Cairo', sans-serif; min-height: 80px; resize: vertical;"></textarea>
                </div>
                
                <div style="background: #f8f9fa; padding: 15px; border-radius: 10px; margin-bottom: 20px;">
                    <h3 style="color: #333; margin-bottom: 10px; font-size: 16px; font-family: 'Cairo', sans-serif;">ملخص الطلب</h3>
                    <div style="color: #666; font-family: 'Cairo', sans-serif;">
                        ${cart.map(item => `<div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span>${item.name} × ${item.quantity}</span>
                            <span>${(item.price * item.quantity).toLocaleString()} د.ع</span>
                        </div>`).join('')}
                    </div>
                    <hr style="margin: 10px 0; border: none; border-top: 2px solid #e1e8ed;">
                    <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 18px; color: #2ecc71; font-family: 'Cairo', sans-serif;">
                        <span>الإجمالي:</span>
                        <span>${total.toLocaleString()} د.ع</span>
                    </div>
                </div>
                
                <div style="display: flex; gap: 10px;">
                    <button type="submit" style="flex: 1; padding: 14px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 10px; font-size: 16px; font-weight: 600; cursor: pointer; font-family: 'Cairo', sans-serif;">
                        <i class="fas fa-check"></i> تأكيد الطلب
                    </button>
                    <button type="button" onclick="closeCheckoutModal()" style="padding: 14px 25px; background: #e74c3c; color: white; border: none; border-radius: 10px; font-size: 16px; font-weight: 600; cursor: pointer; font-family: 'Cairo', sans-serif;">
                        <i class="fas fa-times"></i> إلغاء
                    </button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(modal);

    // Handle form submission
    document.getElementById('checkoutForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        await processOrder();
    });
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (modal) modal.remove();
}

async function processOrder() {
    const customerData = {
        name: document.getElementById('customerName').value,
        phone: document.getElementById('customerPhone').value,
        city: document.getElementById('customerCity').value,
        address: document.getElementById('customerAddress').value
    };

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
        // Save to Firebase
        await database.ref('orders').push(order);

        // Send to WhatsApp
        let whatsappMessage = `🛍 *طلب جديد من LaVish Center*\n\n`;
        whatsappMessage += `👤 *بيانات العميل:*\n`;
        whatsappMessage += `الاسم: ${customerData.name}\n`;
        whatsappMessage += `الهاتف: ${customerData.phone}\n`;
        whatsappMessage += `المحافظة: ${customerData.city}\n`;
        whatsappMessage += `العنوان: ${customerData.address}\n\n`;
        whatsappMessage += `🛒 *المنتجات:*\n`;
        
        cart.forEach(item => {
            whatsappMessage += `• ${item.name}\n`;
            whatsappMessage += `  الكمية: ${item.quantity}\n`;
            whatsappMessage += `  السعر: ${(item.price * item.quantity).toLocaleString()} د.ع\n\n`;
        });
        
        whatsappMessage += `💰 *الإجمالي: ${total.toLocaleString()} د.ع*`;

        const whatsappNumber = '9647813798636';
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Clear cart
        cart = [];
        updateCartUI();
        closeCheckoutModal();
        
        // Show success message
        showNotification('✅ تم إرسال طلبك بنجاح!');
        
        // Open WhatsApp
        setTimeout(() => {
            window.open(whatsappURL, '_blank');
        }, 500);

    } catch (error) {
        console.error('Error processing order:', error);
        showNotification('❌ حدث خطأ أثناء إرسال الطلب');
    }
}

// ============================================
// FAVORITES MANAGEMENT
// ============================================
function toggleFavorite(productId, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    const index = favorites.indexOf(productId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(productId);
    }
    
    // Update all favorite buttons for this product
    const favoriteButtons = document.querySelectorAll(`[onclick*="toggleFavorite('${productId}'"]`);
    favoriteButtons.forEach(btn => {
        btn.classList.toggle('active');
    });
    
    // Update count
    const favCountElement = document.getElementById('favoritesCount');
    if (favCountElement) {
        favCountElement.textContent = favorites.length;
    }
    
    // Save to localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    const message = index > -1 ? '💔 تم إزالة المنتج من المفضلة' : '❤️ تم إضافة المنتج للمفضلة';
    showNotification(message);
}

// ============================================
// NAVIGATION
// ============================================
function navigateTo(page) {
    currentPage = page;
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Show selected page
    const targetPage = document.getElementById(page + 'Page');
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ============================================
// NOTIFICATIONS
// ============================================
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        font-family: 'Cairo', sans-serif;
        font-weight: 600;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
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
    const query = searchInput.value.trim().toLowerCase();
    
    if (!query) return;

    // Search through all products
    const results = [];
    Object.values(productsDatabase).forEach(categoryProducts => {
        categoryProducts.forEach(product => {
            if (product.name.toLowerCase().includes(query) || 
                product.description.toLowerCase().includes(query)) {
                results.push(product);
            }
        });
    });

    // Display results
    if (results.length > 0) {
        showNotification(`تم العثور على ${results.length} منتج`);
        // You can create a search results page here if needed
    } else {
        showNotification('لم يتم العثور على نتائج');
    }
}

// ============================================
// CART SIDEBAR TOGGLE
// ============================================
function toggleCart() {
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.click();
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
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Load data from Firebase
    loadDataFromFirebase();

    // Load cart and favorites from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }

    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
        favorites = JSON.parse(savedFavorites);
        const favCountElement = document.getElementById('favoritesCount');
        if (favCountElement) {
            favCountElement.textContent = favorites.length;
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

    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

    // Close loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }, 2000);
});

// ============================================
// SERVICE WORKER FOR PWA
// ============================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => console.log('SW registered'))
            .catch(err => console.log('SW registration failed'));
    });
}

// Install PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const installBtn = document.getElementById('installBtn');
    if (installBtn) {
        installBtn.style.display = 'flex';
        installBtn.addEventListener('click', async () => {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            deferredPrompt = null;
            installBtn.style.display = 'none';
        });
    }
});

// ============================================
// ANIMATIONS
// ============================================
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
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