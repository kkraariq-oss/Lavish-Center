#!/usr/bin/env python3
"""
LaVish Center - Icon Generator
Generates all required icons for PWA/iOS/Android
"""

import os

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("❌ خطأ: مكتبة Pillow غير مثبتة!")
    print("قم بتثبيتها باستخدام: pip install Pillow")
    exit(1)

# ألوان LaVish
PINK = "#ff6b9d"
DARK_PINK = "#c44569"
GOLD = "#ffd700"
WHITE = "#ffffff"

def hex_to_rgb(hex_color):
    """تحويل من Hex إلى RGB"""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def create_gradient_background(size):
    """إنشاء خلفية Gradient"""
    image = Image.new('RGB', size)
    draw = ImageDraw.Draw(image)
    
    pink = hex_to_rgb(PINK)
    dark_pink = hex_to_rgb(DARK_PINK)
    
    for y in range(size[1]):
        ratio = y / size[1]
        r = int(pink[0] * (1 - ratio) + dark_pink[0] * ratio)
        g = int(pink[1] * (1 - ratio) + dark_pink[1] * ratio)
        b = int(pink[2] * (1 - ratio) + dark_pink[2] * ratio)
        draw.line([(0, y), (size[0], y)], fill=(r, g, b))
    
    return image

def create_icon(size, filename):
    """إنشاء أيقونة بحجم معين"""
    # خلفية Gradient
    image = create_gradient_background((size, size))
    draw = ImageDraw.Draw(image)
    
    # رسم دائرة ذهبية في المنتصف
    margin = size // 8
    draw.ellipse([margin, margin, size-margin, size-margin], 
                 fill=hex_to_rgb(GOLD))
    
    # رسم حرف L
    try:
        # محاولة استخدام خط عربي
        font_size = size // 2
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", font_size)
    except:
        font = None
    
    text = "L"
    if font:
        # حساب موقع النص
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        x = (size - text_width) // 2
        y = (size - text_height) // 2 - size // 20
        draw.text((x, y), text, fill=hex_to_rgb(WHITE), font=font)
    else:
        # رسم بسيط بدون خط
        center = size // 2
        third = size // 3
        draw.rectangle([center-third//2, center-third, center+third//4, center+third], 
                      fill=hex_to_rgb(WHITE))
        draw.rectangle([center-third//2, center+third//2, center+third//2, center+third], 
                      fill=hex_to_rgb(WHITE))
    
    # حفظ الملف
    image.save(filename, 'PNG', quality=100, optimize=True)
    print(f"✅ تم إنشاء {filename} ({size}×{size})")

def main():
    print("🎨 LaVish Center - Icon Generator")
    print("=" * 50)
    
    # قياسات Apple Touch Icons
    apple_icons = {
        'apple-touch-icon.png': 180,
        'apple-touch-icon-152x152.png': 152,
        'apple-touch-icon-144x144.png': 144,
        'apple-touch-icon-120x120.png': 120,
        'apple-touch-icon-114x114.png': 114,
        'apple-touch-icon-76x76.png': 76,
        'apple-touch-icon-72x72.png': 72,
        'apple-touch-icon-60x60.png': 60,
        'apple-touch-icon-57x57.png': 57
    }
    
    # قياسات Android/PWA
    android_icons = {
        'icon-512.png': 512,
        'icon-384.png': 384,
        'icon-192.png': 192,
        'icon-152.png': 152,
        'icon-144.png': 144,
        'icon-128.png': 128,
        'icon-96.png': 96,
        'icon-72.png': 72,
        'icon-32.png': 32,
        'icon-16.png': 16
    }
    
    print("\n📱 إنشاء أيقونات Apple (iPhone/iPad)...")
    for filename, size in apple_icons.items():
        create_icon(size, filename)
    
    print("\n🤖 إنشاء أيقونات Android/PWA...")
    for filename, size in android_icons.items():
        create_icon(size, filename)
    
    print("\n" + "=" * 50)
    print("🎉 تم إنشاء جميع الأيقونات بنجاح!")
    print(f"📊 عدد الأيقونات: {len(apple_icons) + len(android_icons)}")
    print("\n💡 ملاحظة: يمكنك تحسين التصميم باستخدام Canva أو Photoshop")
    print("📝 راجع ملف ICON_SIZES_GUIDE.md للمزيد من التفاصيل")

if __name__ == "__main__":
    main()
