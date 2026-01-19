# 📱 LaVish Center - Bottom Navigation Bar

## 🚀 Quick Start

### Features
✅ **Fixed bottom navigation** bar visible on all pages
✅ **5 navigation items**: Home, Products, Categories, Cart, Account
✅ **RTL support** for Arabic language
✅ **Active state management** with color changes
✅ **Cart badge** showing item count
✅ **Smooth transitions** and animations
✅ **iOS Safe Area** support
✅ **Responsive design** for all screen sizes

---

## 📂 Files Structure

```
lavish-center/
├── index.html              # Main HTML with bottom nav
├── style.css               # Styling with bottom nav styles
├── app.js                  # Products database
├── bottom-nav.js           # Bottom navigation logic
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker
├── icon-*.png              # App icons
└── icon.svg                # SVG icon
```

---

## 🎯 Navigation Items

### 1. 🏠 Home (الرئيسية)
- Welcome banner
- Hero slider
- Featured products (6 items)

### 2. 🛍️ Products (المنتجات)
- All products grid
- Add to cart functionality
- Product ratings

### 3. 📦 Categories (الأقسام)
- Women's fashion
- Men's fashion
- Kids fashion
- Accessories

### 4. 🛒 Cart (السلة)
- Cart items list
- Price summary
- Checkout button
- **Badge**: Shows item count

### 5. 👤 Account (حسابي)
- My orders
- Favorites
- Addresses
- Settings
- Contact us
- About LaVish Center

---

## 💻 Installation

### 1. Upload Files
```bash
# Upload all files to your server
- index.html
- style.css
- app.js
- bottom-nav.js
- manifest.json
- sw.js
- All icon files
```

### 2. Required Libraries
```html
<!-- Bootstrap RTL 5.3.0 -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css">

<!-- Font Awesome 6.4.0 -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Swiper 11 -->
<link href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">

<!-- AOS Animation -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css">
```

### 3. Open in Browser
```bash
# Simply open index.html
# Or host on web server
```

---

## 🎨 Customization

### Change Colors
```css
/* In style.css */
:root {
    --primary-color: #ff6b9d;      /* Primary pink */
    --secondary-color: #c44569;    /* Secondary pink */
    --dark-color: #1a1a2e;         /* Text color */
}
```

### Change Icons
```html
<!-- In index.html -->
<button class="nav-item" data-page="home">
    <i class="nav-icon fas fa-house"></i>  <!-- New icon -->
    <span class="nav-label">Home</span>
</button>
```

### Add New Page
```html
<!-- 1. Add page container -->
<div class="page" id="offersPage">
    <div class="container">
        <h2 class="page-title">Special Offers</h2>
        <!-- Page content -->
    </div>
</div>

<!-- 2. Add navigation button -->
<button class="nav-item" data-page="offers">
    <i class="nav-icon fas fa-percent"></i>
    <span class="nav-label">Offers</span>
</button>
```

---

## 🔧 Key Functions

### Navigate to Page
```javascript
navigateToPage('products');
```

### Add to Cart
```javascript
addToCart(productId);
```

### Update Cart Badge
```javascript
updateNavCartBadge();
```

### Remove from Cart
```javascript
removeFromCart(productId);
```

---

## 📊 Data Structure

### Cart LocalStorage
```javascript
{
    "cart": [
        {
            "id": 1,
            "name": "Elegant Dress",
            "price": 149900,
            "image": "https://...",
            "quantity": 2
        }
    ]
}
```

### Product Object
```javascript
{
    id: 1,
    name: 'Product Name',
    price: 149900,
    oldPrice: 250000,
    image: 'image_url',
    category: 'women',
    badge: 'sale',
    rating: 4.8,
    reviews: 128,
    description: 'Product description',
    discount: '-40%'
}
```

---

## 📱 Browser Compatibility

✅ Chrome 90+ (Android)
✅ Safari 14+ (iOS)
✅ Firefox 88+ (Android)
✅ Samsung Internet 14+
✅ Edge 90+

---

## 🐛 Troubleshooting

### Bottom nav not showing
```javascript
// 1. Check if bottom-nav.js is loaded
<script src="bottom-nav.js"></script>

// 2. Check if element exists
<nav class="bottom-nav" id="bottomNav">...</nav>

// 3. Check CSS
.bottom-nav { display: flex; }
```

### Badge not updating
```javascript
// 1. Check element exists
<span class="nav-badge" id="navCartBadge">0</span>

// 2. Call update function
updateNavCartBadge();

// 3. Check localStorage
console.log(localStorage.getItem('cart'));
```

### Pages not switching
```javascript
// 1. Check data-page attribute
<button data-page="products">...</button>

// 2. Check page ID
<div class="page" id="productsPage">...</div>
```

---

## 📞 Support

- 📧 Email: [email protected]
- 📱 WhatsApp: +964 781 379 8636
- 🌐 Website: https://lavishcenter.com

---

## 📝 License

© 2025 LaVish Center - Jawhra Sama Babel Investment
All rights reserved.

---

## 🌟 Credits

**Design & Development**: Claude AI
**Icons**: Font Awesome
**Framework**: Bootstrap 5 RTL
**Slider**: Swiper.js
**Animation**: AOS

---

**Enjoy your new bottom navigation bar! 🎉**
