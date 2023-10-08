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
            src="${item.preview}" 
            alt="${item.description}"
            data-source = "${item.original}"
            />
        </a>
    </li>`
);

gallery.insertAdjacentHTML("beforeend", markup.join(""));

gallery.addEventListener("click", onClick);
let instance = null;

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.tagName === "IMG") {
    const targImage = evt.target.getAttribute("data-source");

    instance = basicLightbox.create(
      `
            <img src="${targImage}" alt = "${evt.target.alt}"
            />`,
      {
        onShow: () => {
          window.addEventListener("keydown", handleKeyPress);
        },
        onClose: () => {
          window.removeEventListener("keydown", handleKeyPress);
        },
      }
    );
    instance.show();
  }
}
function handleKeyPress(evt) {
  if (evt.key === "Escape") {
    instance.close();
  }
}
