/*!
 * Resume Reza v2
 * Copyright (c) 2020 Reza Sariful Fikri
*/
define(function () { 'use strict';

  function _readOnlyError(name) {
    throw new Error("\"" + name + "\" is read-only");
  }

  /** lazy loading **/
  document.addEventListener('DOMContentLoaded', function () {
    var _document$querySelect;

    var lazyImages = (_document$querySelect = document.querySelectorAll('img.lazy')) !== null && _document$querySelect !== void 0 ? _document$querySelect : []; // cek apakah object IntersectionObserver, function IntersectionObserverEntry property IntersectionRatio ada

    if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
      var lazyImagesObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove('lazy');
            lazyImagesObserver.unobserve(lazyImage);
          }
        });
      }, {
        root: null,
        rootMargin: '50px',
        threshold: [0]
      });
      lazyImages.forEach(function (lazyImage) {
        lazyImagesObserver.observe(lazyImage);
      });
    } else {
      // jika tidak ada
      var active = false;

      var lazyLoad = function lazyLoad() {
        if (active === false) {
          active = true;
          setTimeout(function () {
            lazyImages.forEach(function (lazyImage) {
              if (lazyImage.getBoundingClientRect().top - 50 <= window.innerHeight && lazyImage.getBoundingClientRect().bottom + 50 >= 0 && getComputedStyle(lazyImage).display !== 'none') {
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.classList.remove('lazy'); // hapus lazyImage dari array lazyImages

                lazyImages = (_readOnlyError("lazyImages"), lazyImage.filter(function (image) {
                  return image !== lazyImage;
                }));
              }
            });
            active = false;
          }, 200);
        }
      };

      document.addEventListener('scroll', lazyLoad);
      window.addEventListener('resize', lazyLoad);
      window.addEventListener('orientationchange', lazyLoad);
    }
  });

});
