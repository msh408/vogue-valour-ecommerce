# تحلیل پروژه React + Redux Toolkit — Heritage Beauty

## تشخیص پروژه

آرشیو شامل ۸ صفحه مستقل است: خانه، دسته‌بندی و فیلتر، فهرست محصولات، جزئیات محصول، علاقه‌مندی‌ها، سبد خرید، ورود و ثبت‌نام. این صفحات HTML ایستا هستند و برای تبدیل به React باید اجزای مشترک، routing، داده‌ها و stateهای تعاملی از صفحه‌ها جدا شوند.

## معماری پیشنهادی

- React + Vite
- React Router DOM
- Redux Toolkit برای stateهای سبد، علاقه‌مندی، فیلتر، احراز هویت و UI
- RTK Query برای خواندن `products.json` و اتصال بعدی به API
- CSS Modules یا Tailwind CSS
- localStorage برای نگهداری cart، wishlist و session

## ساختار درختی

```text
heritage-beauty-store/
├── public/
│   ├── data/
│   │   └── products.json
│   ├── images/
│   │   ├── products/
│   │   ├── banners/
│   │   ├── categories/
│   │   └── auth/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── store.js
│   │   ├── rootReducer.js
│   │   └── listenerMiddleware.js
│   ├── assets/
│   │   ├── icons/
│   │   └── fonts/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── EmptyState.jsx
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── MainLayout.jsx
│   │   │   └── AnnouncementBar.jsx
│   │   ├── product/
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductGrid.jsx
│   │   │   ├── ProductGallery.jsx
│   │   │   ├── ProductInfo.jsx
│   │   │   ├── ProductFilters.jsx
│   │   │   ├── ProductSort.jsx
│   │   │   └── ProductSkeleton.jsx
│   │   └── cart/
│   │       ├── CartItem.jsx
│   │       ├── CartDrawer.jsx
│   │       └── OrderSummary.jsx
│   ├── features/
│   │   ├── products/
│   │   │   ├── productsApi.js
│   │   │   ├── productSelectors.js
│   │   │   └── productUtils.js
│   │   ├── filters/
│   │   │   ├── filtersSlice.js
│   │   │   └── filterSelectors.js
│   │   ├── cart/
│   │   │   ├── cartSlice.js
│   │   │   ├── cartSelectors.js
│   │   │   └── cartStorage.js
│   │   ├── wishlist/
│   │   │   ├── wishlistSlice.js
│   │   │   └── wishlistSelectors.js
│   │   ├── auth/
│   │   │   ├── authSlice.js
│   │   │   ├── authApi.js
│   │   │   └── ProtectedRoute.jsx
│   │   └── ui/
│   │       └── uiSlice.js
│   ├── hooks/
│   │   ├── useAppDispatch.js
│   │   ├── useAppSelector.js
│   │   └── useLocalStorage.js
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ProductsPage.jsx
│   │   ├── CategoryPage.jsx
│   │   ├── ProductDetailsPage.jsx
│   │   ├── WishlistPage.jsx
│   │   ├── CartPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── SignUpPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── globals.css
│   │   └── utilities.css
│   ├── utils/
│   │   ├── currency.js
│   │   └── validators.js
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## تعداد پوشه‌ها و فایل‌ها

در ساختار کامل پیشنهادی حدود ۲۱ پوشه و ۵۷ فایل وجود دارد. نسخه MVP را می‌توان با حدود ۱۲ پوشه و ۳۵ فایل شروع کرد.

## تقسیم Redux State

- `productsApi`: دریافت فهرست و جزئیات محصولات
- `filtersSlice`: دسته‌بندی، برند، بازه قیمت، نوع پوست، مرتب‌سازی و pagination
- `cartSlice`: افزودن، حذف، تغییر تعداد، کد تخفیف و جمع سفارش
- `wishlistSlice`: افزودن و حذف علاقه‌مندی‌ها
- `authSlice`: کاربر، token و وضعیت ورود
- `uiSlice`: drawer، modal، notification و mobile menu

## نکات داده‌ها

نام‌ها و قیمت‌های قابل مشاهده از mockupها استخراج شده‌اند. فیلدهای SKU، موجودی، امتیاز و برخی مشخصات تکمیلی در طرح اصلی وجود نداشتند و برای آماده‌شدن مدل فروشگاه به شکل منطقی تولید شده‌اند.
