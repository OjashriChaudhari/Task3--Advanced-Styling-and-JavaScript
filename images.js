document.querySelectorAll('.carousel').forEach(carousel => {
      const images = carousel.querySelector('.carousel-images');
      const prevBtn = carousel.querySelector('.prev');
      const nextBtn = carousel.querySelector('.next');
      const totalImages = carousel.querySelectorAll('.carousel-images img').length;
      let index = 0;

      function showImage() {
        images.style.transform = `translateX(${-index * 100}%)`;
      }

      nextBtn.addEventListener('click', () => {
        index = (index + 1) % totalImages;
        showImage();
      });

      prevBtn.addEventListener('click', () => {
        index = (index - 1 + totalImages) % totalImages;
        showImage();
      });

    });