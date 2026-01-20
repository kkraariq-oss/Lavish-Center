/**
 * بيانات تجريبية لاختبار التطبيق
 * يمكن إضافة هذه البيانات من لوحة التحكم أو من Firebase Console مباشرة
 */

// ============================================
// الأقسام (Categories)
// ============================================
// يمكن إضافتها من لوحة التحكم > الأقسام

const categoriesExample = {
  "women": {
    "name": "ملابس نسائية",
    "id": "women",
    "icon": "fa-venus",
    "createdAt": 1704067200000
  },
  "men": {
    "name": "ملابس رجالية",
    "id": "men",
    "icon": "fa-mars",
    "createdAt": 1704067200000
  },
  "kids": {
    "name": "ملابس أطفال",
    "id": "kids",
    "icon": "fa-child",
    "createdAt": 1704067200000
  },
  "accessories": {
    "name": "الإكسسوارات",
    "id": "accessories",
    "icon": "fa-shopping-bag",
    "createdAt": 1704067200000
  }
};

// ============================================
// المنتجات (Products)
// ============================================
// يمكن إضافتها من لوحة التحكم > المنتجات

const productsExample = {
  "-NqZ7X8Y9ZaB1cD2eF3g": {
    "id": "-NqZ7X8Y9ZaB1cD2eF3g",
    "name": "فستان سهرة فاخر",
    "category": "women",
    "price": 149900,
    "oldPrice": 250000,
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
    "description": "فستان سهرة فاخر من أجود الأقمشة، تصميم عصري وأنيق يناسب جميع المناسبات الخاصة. متوفر بألوان متعددة.",
    "badge": "sale",
    "rating": 4.8,
    "reviews": 128,
    "discount": "-40%",
    "createdAt": 1704067200000
  },
  "-NqZ7X8Y9ZaB1cD2eF3h": {
    "id": "-NqZ7X8Y9ZaB1cD2eF3h",
    "name": "بلوزة صيفية كاجوال",
    "category": "women",
    "price": 45000,
    "oldPrice": 65000,
    "image": "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800",
    "description": "بلوزة صيفية خفيفة ومريحة، تصميم عملي يناسب الأجواء الحارة.",
    "badge": "new",
    "rating": 4.6,
    "reviews": 95,
    "discount": "-31%",
    "createdAt": 1704067200000
  },
  "-NqZ7X8Y9ZaB1cD2eF3i": {
    "id": "-NqZ7X8Y9ZaB1cD2eF3i",
    "name": "قميص رجالي كلاسيكي",
    "category": "men",
    "price": 48000,
    "oldPrice": 70000,
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800",
    "description": "قميص رجالي أنيق بقصة كلاسيكية، مثالي للمناسبات الرسمية.",
    "badge": "sale",
    "rating": 4.6,
    "reviews": 98,
    "discount": "-31%",
    "createdAt": 1704067200000
  }
};

// ============================================
// الإعلانات المنبثقة (Popup Ads)
// ============================================
// يمكن إضافتها من لوحة التحكم > الإعلانات المنبثقة

const popupAdsExample = {
  "-NqZ7X8Y9ZaB1cD2eF3j": {
    "id": "-NqZ7X8Y9ZaB1cD2eF3j",
    "title": "فستان سهرة فاخر",
    "description": "تصميم عصري وأنيق - متوفر بألوان متعددة",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
    "oldPrice": 250000,
    "newPrice": 149900,
    "productId": "-NqZ7X8Y9ZaB1cD2eF3g",
    "active": true,
    "createdAt": 1704067200000
  }
};

// ============================================
// البنرات المتحركة (Banners)
// ============================================
// يمكن إضافتها من لوحة التحكم > الإعلانات المتحركة

const bannersExample = {
  "-NqZ7X8Y9ZaB1cD2eF3k": {
    "id": "-NqZ7X8Y9ZaB1cD2eF3k",
    "title": "تخفيضات الصيف",
    "subtitle": "خصومات تصل إلى 50% على جميع المنتجات",
    "image": "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200",
    "link": "women",
    "active": true,
    "createdAt": 1704067200000
  },
  "-NqZ7X8Y9ZaB1cD2eF3l": {
    "id": "-NqZ7X8Y9ZaB1cD2eF3l",
    "title": "وصول جديد",
    "subtitle": "أحدث صيحات الموضة التركية",
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200",
    "link": "women",
    "active": true,
    "createdAt": 1704067200000
  },
  "-NqZ7X8Y9ZaB1cD2eF3m": {
    "id": "-NqZ7X8Y9ZaB1cD2eF3m",
    "title": "عروض حصرية",
    "subtitle": "لفترة محدودة - لا تفوت الفرصة",
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200",
    "link": "accessories",
    "active": true,
    "createdAt": 1704067200000
  }
};

// ============================================
// مثال على طلب (Order)
// ============================================
// يتم إنشاء الطلبات تلقائياً عند إتمام الطلب من التطبيق الرئيسي

const orderExample = {
  "-NqZ7X8Y9ZaB1cD2eF3n": {
    "id": "-NqZ7X8Y9ZaB1cD2eF3n",
    "customer": {
      "name": "أحمد محمد",
      "phone": "07812345678",
      "city": "بغداد",
      "address": "حي الجامعة، شارع الكندي، بناية 15، الطابق 3"
    },
    "items": [
      {
        "id": "-NqZ7X8Y9ZaB1cD2eF3g",
        "name": "فستان سهرة فاخر",
        "price": 149900,
        "quantity": 1,
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800"
      },
      {
        "id": "-NqZ7X8Y9ZaB1cD2eF3h",
        "name": "بلوزة صيفية كاجوال",
        "price": 45000,
        "quantity": 2,
        "image": "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800"
      }
    ],
    "total": 239900,
    "timestamp": 1704067200000,
    "status": "new"
  }
};

// ============================================
// كيفية إضافة البيانات التجريبية في Firebase Console
// ============================================

/**
 * الطريقة 1: استخدام Firebase Console
 * 
 * 1. افتح Firebase Console: https://console.firebase.google.com
 * 2. اختر مشروعك (messageemeapp)
 * 3. اذهب إلى Realtime Database
 * 4. انقر على "+" بجانب الجذر
 * 5. أضف الأقسام التالية:
 *    - categories
 *    - products
 *    - popupAds
 *    - banners
 * 6. انقر على "+" بجانب كل قسم وأضف البيانات التجريبية
 * 
 * الطريقة 2: استخدام لوحة التحكم (الأسهل)
 * 
 * 1. افتح admin.html
 * 2. سجّل الدخول
 * 3. أضف الأقسام من تبويب "الأقسام"
 * 4. أضف المنتجات من تبويب "المنتجات"
 * 5. أضف الإعلانات من تبويبات الإعلانات
 */

// ============================================
// روابط صور مجانية يمكن استخدامها
// ============================================

/**
 * Unsplash (صور مجانية عالية الجودة):
 * https://unsplash.com/s/photos/fashion
 * https://unsplash.com/s/photos/clothing
 * https://unsplash.com/s/photos/dress
 * 
 * Pexels (صور مجانية):
 * https://www.pexels.com/search/fashion/
 * 
 * نصيحة: استخدم روابط صور بحجم 800x800 بكسل للحصول على أفضل أداء
 * 
 * مثال على رابط Unsplash:
 * https://images.unsplash.com/photo-[ID]?w=800
 * 
 * يمكنك التحكم بحجم الصورة عن طريق تغيير w=800 إلى الحجم المطلوب
 */

// ============================================
// ملاحظات مهمة
// ============================================

/**
 * 1. السعر يجب أن يكون بالدينار العراقي (بدون فاصلة)
 *    مثال: 149900 (وليس 149,900)
 * 
 * 2. التقييم يجب أن يكون بين 0 و 5
 * 
 * 3. الشارات المتاحة:
 *    - new: جديد
 *    - sale: تخفيض
 *    - hot: مميز
 * 
 * 4. أيقونات الأقسام (Font Awesome):
 *    https://fontawesome.com/icons
 *    ابحث عن الأيقونة المناسبة واستخدم اسمها (مثال: fa-venus)
 * 
 * 5. معرفات الأقسام يجب أن تكون بالإنجليزية فقط
 *    وبدون مسافات (استخدم - أو _ للفصل)
 * 
 * 6. تأكد من أن رابط الصورة يبدأ بـ https://
 */