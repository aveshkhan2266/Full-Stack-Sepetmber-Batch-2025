// Fiama Ecommerce - Main JS

document.addEventListener('DOMContentLoaded', function () {

  // ===========================
  // SCROLL TO TOP
  // ===========================
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    });
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===========================
  // QUANTITY CONTROLS
  // ===========================
  document.querySelectorAll('.qty-plus').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const input = this.closest('.qty-control').querySelector('input');
      input.value = parseInt(input.value) + 1;
    });
  });
  document.querySelectorAll('.qty-minus').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const input = this.closest('.qty-control').querySelector('input');
      if (parseInt(input.value) > 1) input.value = parseInt(input.value) - 1;
    });
  });

  // ===========================
  // PRODUCT SLIDER (Swiper)
  // ===========================
  if (typeof Swiper !== 'undefined') {

    // Hero Slider
    new Swiper('.hero-swiper', {
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      effect: 'fade',
      navigation: {
        nextEl: '.hero-swiper .swiper-button-next',
        prevEl: '.hero-swiper .swiper-button-prev',
      },
      pagination: { el: '.hero-swiper .swiper-pagination', clickable: true }
    });

    // Products Carousel
    new Swiper('.products-swiper', {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: '.products-swiper .swiper-button-next',
        prevEl: '.products-swiper .swiper-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 }
      }
    });

    // News Carousel
    new Swiper('.news-swiper', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: '.news-swiper .swiper-button-next',
        prevEl: '.news-swiper .swiper-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 }
      }
    });

    // Brands Carousel
    new Swiper('.brands-swiper', {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 30,
      autoplay: { delay: 2500, disableOnInteraction: false },
      breakpoints: {
        0: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 }
      }
    });
  }

  // ===========================
  // MOBILE NAV ACCORDION
  // ===========================
  document.querySelectorAll('.nav-mobile .dropdown-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      const parent = this.closest('li');
      const menu = parent.querySelector('.dropdown-menu');
      if (menu) {
        menu.classList.toggle('show');
      }
    });
  });

  // ===========================
  // CART DELETE ITEMS
  // ===========================
  document.querySelectorAll('.cart-item-delete').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item = this.closest('.cart-item');
      if (item) item.style.display = 'none';
    });
  });

  // ===========================
  // SMOOTH NAVIGATION
  // ===========================
  // Replace all page links to demo
  document.querySelectorAll('a[href="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });

});
