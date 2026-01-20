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
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();

// ============================================
// ADMIN AUTHENTICATION
// ============================================
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin';
let isAdminLoggedIn = false;

function openAdminLogin() {
    document.getElementById('adminLoginModal').style.display = 'flex';
}

function closeAdminLogin() {
    document.getElementById('adminLoginModal').style.display = 'none';
}

function logoutAdmin() {
    isAdminLoggedIn = false;
    localStorage.removeItem('adminLoggedIn');
    document.getElementById('adminDashboard').style.display = 'none';
    document.querySelector('main').style.display = 'block';
    document.querySelector('.top-header').style.display = 'block';
    document.querySelector('.bottom-nav').style.display = 'flex';
}

// Admin Login Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('adminLoginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('adminUsername').value;
            const password = document.getElementById('adminPassword').value;
            
            if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
                isAdminLoggedIn = true;
                localStorage.setItem('adminLoggedIn', 'true');
                closeAdminLogin();
                showAdminDashboard();
            } else {
                alert('اسم المستخدم أو كلمة المرور غير صحيحة');
            }
        });
    }
    
    // Check if admin is already logged in
    if (localStorage.getItem('adminLoggedIn') === 'true') {
        isAdminLoggedIn = true;
    }
    
    // Add secret key combination to open admin login (Ctrl+Shift+A)
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'A') {
            openAdminLogin();
        }
    });
});

function showAdminDashboard() {
    document.getElementById('adminDashboard').style.display = 'flex';
    document.querySelector('main').style.display = 'none';
    document.querySelector('.top-header').style.display = 'none';
    const bottomNav = document.querySelector('.bottom-nav');
    if (bottomNav) bottomNav.style.display = 'none';
    
    loadAdminData();
}

// Admin Navigation
document.addEventListener('click', function(e) {
    if (e.target.closest('.admin-nav-btn')) {
        const btn = e.target.closest('.admin-nav-btn');
        const section = btn.dataset.section;
        
        // Update active button
        document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Show corresponding section
        document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
        document.getElementById(section + 'Section').classList.add('active');
    }
});

// ============================================
// CART SYSTEM
// ============================================
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
    const product = findProductById(productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification('تمت إضافة المنتج إلى السلة', 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
}

function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCartItems();
        }
    }
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function openCartModal() {
    document.getElementById('cartModal').style.display = 'flex';
    renderCartItems();
}

function closeCartModal() {
    document.getElementById('cartModal').style.display = 'none';
}

function renderCartItems() {
    const cartItemsEl = document.getElementById('cartItems');
    const cartFooterEl = document.getElementById('cartFooter');
    
    if (cart.length === 0) {
        cartItemsEl.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>السلة فارغة</p>
            </div>
        `;
        cartFooterEl.style.display = 'none';
        return;
    }
    
    let total = 0;
    cartItemsEl.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">${formatPrice(item.price)}</p>
                </div>
                <div class="cart-item-quantity">
                    <button onclick="updateCartQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateCartQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    }).join('');
    
    cartFooterEl.style.display = 'block';
    document.getElementById('cartTotalAmount').textContent = formatPrice(total);
}

function showCheckoutForm() {
    closeCartModal();
    document.getElementById('checkoutModal').style.display = 'flex';
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('checkoutTotal').textContent = formatPrice(total);
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').style.display = 'none';
}

// Checkout Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const customerName = document.getElementById('customerName').value;
            const customerPhone = document.getElementById('customerPhone').value;
            const customerAddress = document.getElementById('customerAddress').value;
            const customerNotes = document.getElementById('customerNotes').value;
            
            const order = {
                id: Date.now(),
                date: new Date().toISOString(),
                customer: {
                    name: customerName,
                    phone: customerPhone,
                    address: customerAddress,
                    notes: customerNotes
                },
                items: cart,
                total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                status: 'pending'
            };
            
            try {
                // Save order to Firebase
                await database.ref('orders').push(order);
                
                // Send to WhatsApp
                sendOrderToWhatsApp(order);
                
                // Clear cart
                cart = [];
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
                
                closeCheckoutModal();
                showNotification('تم إرسال طلبك بنجاح! سيتم التواصل معك قريباً', 'success');
                
                // Reset form
                checkoutForm.reset();
            } catch (error) {
                console.error('Error saving order:', error);
                showNotification('حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.', 'error');
            }
        });
    }
});

function sendOrderToWhatsApp(order) {
    let message = `🛍️ *طلب جديد من LaVish Center*\n\n`;
    message += `📋 *رقم الطلب:* ${order.id}\n`;
    message += `👤 *اسم العميل:* ${order.customer.name}\n`;
    message += `📱 *رقم الهاتف:* ${order.customer.phone}\n`;
    message += `📍 *العنوان:* ${order.customer.address}\n`;
    
    if (order.customer.notes) {
        message += `📝 *ملاحظات:* ${order.customer.notes}\n`;
    }
    
    message += `\n🛒 *المنتجات:*\n`;
    order.items.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`;
        message += `   الكمية: ${item.quantity}\n`;
        message += `   السعر: ${formatPrice(item.price)}\n`;
        message += `   المجموع: ${formatPrice(item.price * item.quantity)}\n\n`;
    });
    
    message += `💰 *المجموع الكلي:* ${formatPrice(order.total)}`;
    
    const whatsappUrl = `https://wa.me/9647813798636?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// ============================================
// FIREBASE DATA MANAGEMENT
// ============================================
async function loadAdminData() {
    loadCategories();
    loadProducts();
    loadPopupAds();
    loadSliderAds();
    loadOrders();
}

// Categories Management
async function loadCategories() {
    const snapshot = await database.ref('categories').once('value');
    const categories = snapshot.val() || {};
    renderCategoriesTable(categories);
    updateCategoryFilters(categories);
}

function renderCategoriesTable(categories) {
    const tbody = document.getElementById('categoriesTableBody');
    const categoriesArray = Object.entries(categories).map(([key, val]) => ({...val, key}));
    
    if (categoriesArray.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center">لا توجد أقسام</td></tr>';
        return;
    }
    
    tbody.innerHTML = categoriesArray.map((cat, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${cat.name}</td>
            <td><i class="fas fa-${cat.icon}"></i></td>
            <td>${cat.productCount || 0}</td>
            <td>
                <button class="admin-edit-btn" onclick='editCategory(${JSON.stringify(cat).replace(/'/g, "&#39;")})'>
                    <i class="fas fa-edit"></i>
                </button>
                <button class="admin-delete-btn" onclick="deleteCategory('${cat.key}')">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function updateCategoryFilters(categories) {
    const categoriesArray = Object.values(categories);
    const filterSelect = document.getElementById('productCategoryFilter');
    
    filterSelect.innerHTML = '<option value="all">جميع الأقسام</option>' +
        categoriesArray.map(cat => `<option value="${cat.id}">${cat.name}</option>`).join('');
}

async function showAddCategoryModal() {
    const name = prompt('أدخل اسم القسم:');
    if (!name) return;
    
    const icon = prompt('أدخل رمز الأيقونة (مثال: th-large):');
    if (!icon) return;
    
    const id = name.toLowerCase().replace(/\s+/g, '-');
    
    await database.ref('categories').push({
        id,
        name,
        icon,
        productCount: 0
    });
    
    loadCategories();
    showNotification('تم إضافة القسم بنجاح', 'success');
}

async function editCategory(category) {
    const newName = prompt('أدخل الاسم الجديد:', category.name);
    if (!newName) return;
    
    const newIcon = prompt('أدخل الرمز الجديد:', category.icon);
    if (!newIcon) return;
    
    await database.ref(`categories/${category.key}`).update({
        name: newName,
        icon: newIcon
    });
    
    loadCategories();
    showNotification('تم تحديث القسم بنجاح', 'success');
}

async function deleteCategory(key) {
    if (!confirm('هل أنت متأكد من حذف هذا القسم؟')) return;
    
    await database.ref(`categories/${key}`).remove();
    loadCategories();
    showNotification('تم حذف القسم بنجاح', 'success');
}

// Products Management
async function loadProducts() {
    const snapshot = await database.ref('products').once('value');
    const products = snapshot.val() || {};
    renderProductsTable(products);
}

function renderProductsTable(products, categoryFilter = 'all') {
    const tbody = document.getElementById('productsTableBody');
    let productsArray = Object.entries(products).map(([key, val]) => ({...val, key}));
    
    if (categoryFilter !== 'all') {
        productsArray = productsArray.filter(p => p.category === categoryFilter);
    }
    
    if (productsArray.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="text-center">لا توجد منتجات</td></tr>';
        return;
    }
    
    tbody.innerHTML = productsArray.map((product, index) => `
        <tr>
            <td>${index + 1}</td>
            <td><img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;"></td>
            <td>${product.name}</td>
            <td>${product.categoryName || product.category}</td>
            <td>${formatPrice(product.price)}</td>
            <td><span class="badge badge-${product.badge}">${product.badge}</span></td>
            <td>
                <button class="admin-edit-btn" onclick='editProduct(${JSON.stringify(product).replace(/'/g, "&#39;")})'>
                    <i class="fas fa-edit"></i>
                </button>
                <button class="admin-delete-btn" onclick="deleteProduct('${product.key}')">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

async function filterProductsByCategory() {
    const filter = document.getElementById('productCategoryFilter').value;
    const snapshot = await database.ref('products').once('value');
    const products = snapshot.val() || {};
    renderProductsTable(products, filter);
}

async function showAddProductModal() {
    const name = prompt('أدخل اسم المنتج:');
    if (!name) return;
    
    const price = parseFloat(prompt('أدخل السعر:'));
    if (!price) return;
    
    const image = prompt('أدخل رابط الصورة:');
    if (!image) return;
    
    const description = prompt('أدخل وصف المنتج:');
    const category = prompt('أدخل القسم (women/men/accessories):');
    const badge = prompt('أدخل الشارة (sale/new/hot):') || 'new';
    
    const oldPrice = parseFloat(prompt('أدخل السعر القديم (اختياري):') || price);
    
    await database.ref('products').push({
        id: Date.now(),
        name,
        price,
        oldPrice,
        image,
        description,
        category,
        badge,
        rating: 4.5,
        reviews: 0
    });
    
    loadProducts();
    showNotification('تم إضافة المنتج بنجاح', 'success');
}

async function editProduct(product) {
    const newName = prompt('أدخل الاسم الجديد:', product.name);
    if (!newName) return;
    
    const newPrice = parseFloat(prompt('أدخل السعر الجديد:', product.price));
    if (!newPrice) return;
    
    const newImage = prompt('أدخل رابط الصورة الجديد:', product.image);
    const newDescription = prompt('أدخل الوصف الجديد:', product.description);
    
    await database.ref(`products/${product.key}`).update({
        name: newName,
        price: newPrice,
        image: newImage || product.image,
        description: newDescription || product.description
    });
    
    loadProducts();
    showNotification('تم تحديث المنتج بنجاح', 'success');
}

async function deleteProduct(key) {
    if (!confirm('هل أنت متأكد من حذف هذا المنتج؟')) return;
    
    await database.ref(`products/${key}`).remove();
    loadProducts();
    showNotification('تم حذف المنتج بنجاح', 'success');
}

// Popup Ads Management
async function loadPopupAds() {
    const snapshot = await database.ref('popupAds').once('value');
    const ads = snapshot.val() || {};
    renderPopupAdsTable(ads);
}

function renderPopupAdsTable(ads) {
    const tbody = document.getElementById('popupAdsTableBody');
    const adsArray = Object.entries(ads).map(([key, val]) => ({...val, key}));
    
    if (adsArray.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="text-center">لا توجد إعلانات منبثقة</td></tr>';
        return;
    }
    
    tbody.innerHTML = adsArray.map((ad, index) => `
        <tr>
            <td>${index + 1}</td>
            <td><img src="${ad.image}" alt="${ad.title}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;"></td>
            <td>${ad.title}</td>
            <td>${formatPrice(ad.newPrice)}</td>
            <td><span class="badge ${ad.active ? 'badge-success' : 'badge-secondary'}">${ad.active ? 'نشط' : 'غير نشط'}</span></td>
            <td>
                <button class="admin-edit-btn" onclick='editPopupAd(${JSON.stringify(ad).replace(/'/g, "&#39;")})'>
                    <i class="fas fa-edit"></i>
                </button>
                <button class="admin-delete-btn" onclick="deletePopupAd('${ad.key}')">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

async function showAddPopupAdModal() {
    const title = prompt('أدخل عنوان الإعلان:');
    if (!title) return;
    
    const description = prompt('أدخل وصف الإعلان:');
    const image = prompt('أدخل رابط الصورة:');
    const oldPrice = parseFloat(prompt('أدخل السعر القديم:'));
    const newPrice = parseFloat(prompt('أدخل السعر الجديد:'));
    
    await database.ref('popupAds').push({
        title,
        description,
        image,
        oldPrice,
        newPrice,
        active: true
    });
    
    loadPopupAds();
    showNotification('تم إضافة الإعلان بنجاح', 'success');
}

async function editPopupAd(ad) {
    const newTitle = prompt('أدخل العنوان الجديد:', ad.title);
    if (!newTitle) return;
    
    const active = confirm('هل تريد تفعيل هذا الإعلان؟');
    
    await database.ref(`popupAds/${ad.key}`).update({
        title: newTitle,
        active
    });
    
    loadPopupAds();
    showNotification('تم تحديث الإعلان بنجاح', 'success');
}

async function deletePopupAd(key) {
    if (!confirm('هل أنت متأكد من حذف هذا الإعلان؟')) return;
    
    await database.ref(`popupAds/${key}`).remove();
    loadPopupAds();
    showNotification('تم حذف الإعلان بنجاح', 'success');
}

// Slider Ads Management
async function loadSliderAds() {
    const snapshot = await database.ref('sliderAds').once('value');
    const ads = snapshot.val() || {};
    renderSliderAdsTable(ads);
}

function renderSliderAdsTable(ads) {
    const tbody = document.getElementById('sliderAdsTableBody');
    const adsArray = Object.entries(ads).map(([key, val]) => ({...val, key}));
    
    if (adsArray.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center">لا توجد إعلانات سلايدر</td></tr>';
        return;
    }
    
    tbody.innerHTML = adsArray.map((ad, index) => `
        <tr>
            <td>${index + 1}</td>
            <td><img src="${ad.image}" alt="${ad.title}" style="width: 80px; height: 50px; object-fit: cover; border-radius: 5px;"></td>
            <td>${ad.title}</td>
            <td>${ad.description}</td>
            <td>
                <button class="admin-edit-btn" onclick='editSliderAd(${JSON.stringify(ad).replace(/'/g, "&#39;")})'>
                    <i class="fas fa-edit"></i>
                </button>
                <button class="admin-delete-btn" onclick="deleteSliderAd('${ad.key}')">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

async function showAddSliderAdModal() {
    const title = prompt('أدخل عنوان الإعلان:');
    if (!title) return;
    
    const description = prompt('أدخل وصف الإعلان:');
    const image = prompt('أدخل رابط الصورة:');
    
    await database.ref('sliderAds').push({
        title,
        description,
        image
    });
    
    loadSliderAds();
    showNotification('تم إضافة الإعلان بنجاح', 'success');
}

async function editSliderAd(ad) {
    const newTitle = prompt('أدخل العنوان الجديد:', ad.title);
    if (!newTitle) return;
    
    const newDescription = prompt('أدخل الوصف الجديد:', ad.description);
    const newImage = prompt('أدخل رابط الصورة الجديد:', ad.image);
    
    await database.ref(`sliderAds/${ad.key}`).update({
        title: newTitle,
        description: newDescription || ad.description,
        image: newImage || ad.image
    });
    
    loadSliderAds();
    showNotification('تم تحديث الإعلان بنجاح', 'success');
}

async function deleteSliderAd(key) {
    if (!confirm('هل أنت متأكد من حذف هذا الإعلان؟')) return;
    
    await database.ref(`sliderAds/${key}`).remove();
    loadSliderAds();
    showNotification('تم حذف الإعلان بنجاح', 'success');
}

// Orders Management
async function loadOrders() {
    const snapshot = await database.ref('orders').once('value');
    const orders = snapshot.val() || {};
    renderOrdersTable(orders);
    updateOrdersCount(orders);
}

function renderOrdersTable(orders, statusFilter = 'all') {
    const tbody = document.getElementById('ordersTableBody');
    let ordersArray = Object.entries(orders).map(([key, val]) => ({...val, key}));
    
    // Sort by date (newest first)
    ordersArray.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    if (statusFilter !== 'all') {
        ordersArray = ordersArray.filter(o => o.status === statusFilter);
    }
    
    if (ordersArray.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="text-center">لا توجد طلبات</td></tr>';
        return;
    }
    
    tbody.innerHTML = ordersArray.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>${new Date(order.date).toLocaleDateString('ar-IQ')}</td>
            <td>${order.customer.name}</td>
            <td><a href="tel:${order.customer.phone}">${order.customer.phone}</a></td>
            <td>${formatPrice(order.total)}</td>
            <td><span class="order-status order-status-${order.status}">${getStatusText(order.status)}</span></td>
            <td>
                <button class="admin-view-btn" onclick='viewOrderDetails(${JSON.stringify(order).replace(/'/g, "&#39;")})'>
                    <i class="fas fa-eye"></i>
                </button>
                <select onchange="updateOrderStatus('${order.key}', this.value)" class="admin-status-select">
                    <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>قيد الانتظار</option>
                    <option value="processing" ${order.status === 'processing' ? 'selected' : ''}>قيد المعالجة</option>
                    <option value="completed" ${order.status === 'completed' ? 'selected' : ''}>مكتمل</option>
                    <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>ملغي</option>
                </select>
                <button class="admin-delete-btn" onclick="deleteOrder('${order.key}')">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function updateOrdersCount(orders) {
    const pendingOrders = Object.values(orders).filter(o => o.status === 'pending').length;
    document.getElementById('ordersCount').textContent = pendingOrders;
}

async function filterOrdersByStatus() {
    const filter = document.getElementById('orderStatusFilter').value;
    const snapshot = await database.ref('orders').once('value');
    const orders = snapshot.val() || {};
    renderOrdersTable(orders, filter);
}

async function updateOrderStatus(key, newStatus) {
    await database.ref(`orders/${key}`).update({ status: newStatus });
    loadOrders();
    showNotification('تم تحديث حالة الطلب', 'success');
}

async function deleteOrder(key) {
    if (!confirm('هل أنت متأكد من حذف هذا الطلب؟')) return;
    
    await database.ref(`orders/${key}`).remove();
    loadOrders();
    showNotification('تم حذف الطلب بنجاح', 'success');
}

function viewOrderDetails(order) {
    let details = `📋 *تفاصيل الطلب #${order.id}*\n\n`;
    details += `📅 التاريخ: ${new Date(order.date).toLocaleString('ar-IQ')}\n\n`;
    details += `👤 *بيانات العميل:*\n`;
    details += `الاسم: ${order.customer.name}\n`;
    details += `الهاتف: ${order.customer.phone}\n`;
    details += `العنوان: ${order.customer.address}\n`;
    
    if (order.customer.notes) {
        details += `ملاحظات: ${order.customer.notes}\n`;
    }
    
    details += `\n🛒 *المنتجات:*\n`;
    order.items.forEach((item, index) => {
        details += `${index + 1}. ${item.name}\n`;
        details += `   الكمية: ${item.quantity}\n`;
        details += `   السعر: ${formatPrice(item.price)}\n`;
    });
    
    details += `\n💰 المجموع: ${formatPrice(order.total)}`;
    details += `\n📊 الحالة: ${getStatusText(order.status)}`;
    
    alert(details);
}

function getStatusText(status) {
    const statusTexts = {
        pending: 'قيد الانتظار',
        processing: 'قيد المعالجة',
        completed: 'مكتمل',
        cancelled: 'ملغي'
    };
    return statusTexts[status] || status;
}

// ============================================
// HELPER FUNCTIONS
// ============================================
function formatPrice(price) {
    return new Intl.NumberFormat('ar-IQ', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price) + ' د.ع';
}

function findProductById(id) {
    for (let category in productsDatabase) {
        const product = productsDatabase[category].find(p => p.id === id);
        if (product) return product;
    }
    return null;
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Initialize cart count on load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Cart button handler
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', openCartModal);
    }
    
    // Load products from Firebase on app start
    loadProductsFromFirebase();
    loadAdsFromFirebase();
});

async function loadProductsFromFirebase() {
    try {
        const snapshot = await database.ref('products').once('value');
        const firebaseProducts = snapshot.val();
        
        if (firebaseProducts) {
            // Merge with local products
            Object.values(firebaseProducts).forEach(product => {
                const category = product.category;
                if (!productsDatabase[category]) {
                    productsDatabase[category] = [];
                }
                
                // Check if product already exists
                const exists = productsDatabase[category].find(p => p.id === product.id);
                if (!exists) {
                    productsDatabase[category].push(product);
                }
            });
            
            // Refresh products display if on home page
            if (typeof displayProducts === 'function') {
                displayProducts();
            }
        }
    } catch (error) {
        console.error('Error loading products from Firebase:', error);
    }
}

async function loadAdsFromFirebase() {
    try {
        // Load popup ads
        const popupSnapshot = await database.ref('popupAds').once('value');
        const popupAds = popupSnapshot.val();
        
        if (popupAds) {
            const activeAd = Object.values(popupAds).find(ad => ad.active);
            if (activeAd && typeof updatePopupAd === 'function') {
                updatePopupAd(activeAd);
            }
        }
        
        // Load slider ads
        const sliderSnapshot = await database.ref('sliderAds').once('value');
        const sliderAds = sliderSnapshot.val();
        
        if (sliderAds && typeof updateSliderAds === 'function') {
            updateSliderAds(Object.values(sliderAds));
        }
    } catch (error) {
        console.error('Error loading ads from Firebase:', error);
    }
}

// ============================================
// PRODUCTS DATABASE (Local Fallback)
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
    ],
    silver: [
        {
            id: 26,
            name: 'سلسلة فضة إيطالية',
            price: 120000,
            oldPrice: 165000,
            image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800',
            category: 'silver',
            badge: 'hot',
            rating: 4.9,
            reviews: 215,
            description: 'سلسلة فضة إيطالية عيار 925، تصميم فاخر وأنيق.',
            discount: '-27%',
            filter: 'popular'
        },
        {
            id: 27,
            name: 'خاتم فضة بحجر كريم',
            price: 85000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800',
            category: 'silver',
            badge: 'new',
            rating: 4.7,
            reviews: 143,
            description: 'خاتم فضة عيار 925 مرصع بحجر كريم أصلي.',
            filter: 'new'
        },
        {
            id: 28,
            name: 'أقراط فضة',
            price: 65000,
            oldPrice: 90000,
            image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800',
            category: 'silver',
            badge: 'sale',
            rating: 4.8,
            reviews: 167,
            description: 'أقراط فضة ناعمة، مثالية للإطلالات اليومية.',
            discount: '-28%',
            filter: 'sale'
        }
    ],
    gifts: [
        {
            id: 29,
            name: 'طقم هدايا فاخر',
            price: 125000,
            oldPrice: 175000,
            image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800',
            category: 'gifts',
            badge: 'hot',
            rating: 4.9,
            reviews: 198,
            description: 'طقم هدايا فاخر يحتوي على عدة قطع أنيقة، مثالي للمناسبات.',
            discount: '-29%',
            filter: 'popular'
        },
        {
            id: 30,
            name: 'صندوق هدايا مخملي',
            price: 45000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800',
            category: 'gifts',
            badge: 'new',
            rating: 4.6,
            reviews: 112,
            description: 'صندوق هدايا مخملي فاخر بتصميم راقي.',
            filter: 'new'
        },
        {
            id: 31,
            name: 'باقة ورد صناعي',
            price: 38000,
            oldPrice: 55000,
            image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800',
            category: 'gifts',
            badge: 'sale',
            rating: 4.5,
            reviews: 89,
            description: 'باقة ورد صناعي بألوان جذابة، تدوم طويلاً.',
            discount: '-31%',
            filter: 'sale'
        }
    ],
    perfumes: [
        {
            id: 32,
            name: 'عطر فرنسي فاخر',
            price: 185000,
            oldPrice: 250000,
            image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800',
            category: 'perfumes',
            badge: 'hot',
            rating: 5.0,
            reviews: 287,
            description: 'عطر فرنسي أصلي برائحة ساحرة تدوم طويلاً.',
            discount: '-26%',
            filter: 'popular'
        },
        {
            id: 33,
            name: 'عطر نسائي زهري',
            price: 145000,
            oldPrice: null,
            image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800',
            category: 'perfumes',
            badge: 'new',
            rating: 4.8,
            reviews: 176,
            description: 'عطر نسائي بروائح زهرية منعشة، مثالي للصيف.',
            filter: 'new'
        },
        {
            id: 34,
            name: 'عطر رجالي كلاسيكي',
            price: 165000,
            oldPrice: 220000,
            image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800',
            category: 'perfumes',
            badge: 'sale',
            rating: 4.9,
            reviews: 234,
            description: 'عطر رجالي بتركيبة كلاسيكية وأنيقة.',
            discount: '-25%',
            filter: 'sale'
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
    const phone = '9647813798636'; // رقم الواتساب
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
    
    // ============================================
    // NOTIFICATIONS
    // ============================================
    const notificationsBtn = document.getElementById('notificationsBtn');
    if (notificationsBtn) {
        notificationsBtn.addEventListener('click', () => {
            showPage('notificationsPage');
            updateNotificationsCount(0);
        });
    }
    
    function updateNotificationsCount(count) {
        const badge = document.getElementById('notificationsCount');
        if (badge) {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        }
    }
    
    // ============================================
    // ENHANCED PAGE NAVIGATION WITH SCROLL
    // ============================================
    const originalShowPage = showPage;
    showPage = function(pageId) {
        originalShowPage(pageId);
        
        // إذا كان الانتقال إلى الصفحة الرئيسية، قم بالتمرير إلى المنتجات
        if (pageId === 'homePage') {
            setTimeout(() => {
                const productsSection = document.querySelector('.products-section');
                if (productsSection) {
                    productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    };
    
    // ============================================
    // LOADING COUNTDOWN
    // ============================================
    const countdown = document.getElementById('loadingCountdown');
    if (countdown) {
        let count = 3;
        const countdownInterval = setInterval(() => {
            count--;
            countdown.textContent = count;
            if (count === 0) {
                clearInterval(countdownInterval);
            }
        }, 1000);
    }
}
