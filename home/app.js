import renderImage from './render-image.js';
import images from '../data/images.js';
import htmlToDOM from '../util/html-to-DOM.js';

const list = document.getElementById('images');
const filterImage = document.getElementById('filter');

filterImage.addEventListener('change', () => {
    const filter = filterImage.value;
    let filteredImages = null;

    if (!filter) {
        filteredImages = images;
    }
    else {
        filteredImages = images.filter(image => {
            return image.keyword === filter;
        });
    }

    populateList(filteredImages);
});

populateList(images);

function populateList(imagesToRender) {
    while (list.lastElementChild) {
        list.lastElementChild.remove();
    }

    imagesToRender.forEach(image => {
        const html = renderImage(image);
        const dom = htmlToDOM(html);
        list.appendChild(dom);
    });
}
