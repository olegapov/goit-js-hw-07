import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(
  (item) =>
    `<li class = "gallery__item">
        <a class = "gallery__link" href="${item.original}"> 
            <img
            class ="gallery__image"
            loading = 'lazy'
            src="${item.preview}" 
            alt="${item.description}"
            />
        </a>
    </li>`
);

gallery.insertAdjacentHTML("beforeend", markup.join(""));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
