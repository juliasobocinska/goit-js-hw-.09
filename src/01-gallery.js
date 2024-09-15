import SimpleLightbox from "simplelightbox";
import { images } from "./images.js";
import "simplelightbox/dist/simple-lightbox.min.css";


const createImg = ({ preview, original, description }) => {
    const li = document.createElement("li");
    li.classList.add("gallery-item")
    li.innerHTML =` 
    <a class="gallery-link" href= "${original}">
    <img 
    class="gallery-image"
    src= "${preview}"
    alt= "${description}"
    />
</a>
`;

return li;
};

const generateImg = ( images ) => {
    const imgs = images.map(createImg);

    const fragment = document.createDocumentFragment();
    fragment.append(...imgs);
    return fragment;
};

const main = (root, images) => {
    document.querySelector(root).appendChild(generateImg(images))
};

main(".gallery", images);
    
    

const ligthbox = new SimpleLightbox("ul.gallery li a", {
    captionsData: "alt",
    sourceAttr: "href",
    captions: true,
    captionDelay: 250
});

ligthbox.on('show.simplelightbox', function () {
	console.log("lightbox on!"); 
});