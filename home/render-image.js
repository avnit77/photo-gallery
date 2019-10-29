// import images from '../data/images.js';
export default function renderImage(image) {
    const html = `
        <li>
            <div class="info-container">
                <h2>${image.title}</h2>
                <p class="image-type">${image.keyword}</p>
            </div>
            <div class="image-container">
                <img src="${image.url}" alt="${image.title}"/>
                <p>A unicorn and a narwhal nuzzling their horns</p>
            </div>
            <p class="horns">${image.horns}</p>
        </li>
    `;

    return html;
}