// Sticky nav
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Carousel scroll
function scrollCarousel(direction) {
  const carousel = document.getElementById('carousel');
  carousel.scrollBy({ left: direction * 300, behavior: 'smooth' });
}

// Lightbox
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Filter thumbnails
document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filters .active').classList.remove('active');
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    document.querySelectorAll('#carousel img').forEach(img => {
      const category = img.dataset.category;
      img.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
    });
  });
});

// Colorful click animation
document.addEventListener('click', e => {
  const burst = document.createElement('div');
  burst.classList.add('burst');
  burst.style.left = `${e.pageX}px`;
  burst.style.top = `${e.pageY}px`;
  burst.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
  document.body.appendChild(burst);
  setTimeout(() => burst.remove(), 500);
});
