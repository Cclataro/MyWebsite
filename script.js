// ═══════════════════════════════════════════════
// GALLERY LIGHTBOX — ENHANCED
// ═══════════════════════════════════════════════
let currentImageIndex = 0;
const images = document.querySelectorAll('.thumbnail');

function openLightbox(index) {
    currentImageIndex = index;
    document.getElementById('lightboxImage').src = images[currentImageIndex].src;
    document.getElementById('lightbox').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function showImage(index) {
    currentImageIndex = index;
    document.getElementById('lightboxImage').src = images[currentImageIndex].src;
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    showImage(currentImageIndex);
}

// Set each thumbnail to open the lightbox with its corresponding image
images.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
});

