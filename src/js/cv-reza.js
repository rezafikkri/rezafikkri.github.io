/** lazy loading **/
document.addEventListener('DOMContentLoaded', () => {
	const lazyImages = document.querySelectorAll('img.lazy')??[];

	// cek apakah object IntersectionObserver, function IntersectionObserverEntry property IntersectionRatio ada
	if('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

		const lazyImagesObserver = new IntersectionObserver( entries => {
			entries.forEach((entry) => {
				if(entry.isIntersecting) {
					const lazyImage = entry.target;
					lazyImage.src = lazyImage.dataset.src;
					lazyImage.classList.remove('lazy');
					lazyImagesObserver.unobserve(lazyImage);
				}
			});

		}, { root: null, rootMargin: '50px', threshold: [0] });

		lazyImages.forEach( lazyImage => {
			lazyImagesObserver.observe(lazyImage);
		});

	} else {
		// jika tidak ada
		let active = false;

		const lazyLoad = () => {
			if(active === false) {
				active = true;

				setTimeout(() => {
					lazyImages.forEach((lazyImage) => {
						if((lazyImage.getBoundingClientRect().top - 50) <= window.innerHeight && (lazyImage.getBoundingClientRect().bottom + 50) >= 0 && getComputedStyle(lazyImage).display !== 'none') {
							lazyImage.src = lazyImage.dataset.src;
							lazyImage.classList.remove('lazy');

							// hapus lazyImage dari array lazyImages
							lazyImages = lazyImage.filter(image => image !== lazyImage);
						}
					});

					active = false;
				}, 200);
			}
		}

		document.addEventListener('scroll', lazyLoad);
		window.addEventListener('resize', lazyLoad);
		window.addEventListener('orientationchange', lazyLoad);
		}
});