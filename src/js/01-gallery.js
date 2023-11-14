
import SimpleLightbox from "simplelightbox";
// Importación adicional de estilos
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const lightbox = new SimpleLightbox('.gallery');
// Selecciona el elemento de la galería
const gallery = document.querySelector('.gallery');

// Función para crear elementos de la galería
function createGalleryItems() {
  galleryItems.forEach((item) => {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = item.original;

    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.src = item.preview;
    galleryImage.alt = item.description;

    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);
    gallery.appendChild(galleryItem);
  });
}

// Función para inicializar la librería SimpleLightbox
function initializeLightbox() {
  // Selecciona los elementos de la galería con la clase 'gallery__link'
  const galleryItems = document.querySelectorAll('.gallery__link');

  // Inicializa SimpleLightbox
  new SimpleLightbox(galleryItems, {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
}

// Inicializa la galería y SimpleLightbox
createGalleryItems();
initializeLightbox();
console.log(galleryItems);
