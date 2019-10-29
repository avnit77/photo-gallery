
import renderImage from './render-image.js';
import images from '../data/images.js';
import htmlToDOM from '../util/html-to-DOM.js';

const list = document.getElementById('images');
const filter = document.getElementById('filter');

populateList();

filter.addEventListener('change', () => {
    populateList();
});

function populateList() {
    images.forEach(image => {
        const dom = htmlToDOM(renderImage(image));
        list.appendChild(dom);
    });
}