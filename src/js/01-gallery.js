// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line


console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const makeGallery = (images) =>
  images
    .map(
      ({ preview, original, description }) => `
        <a class="gallery__item" href="${original}">
          <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
          />
        </a>`
    )
    .join("");


gallery.innerHTML = makeGallery(galleryItems);


let galleryNew = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  
  galleryNew.on('error.simplelightbox', function (e) {
     console.log(e);
  });