import renderImage from '../home/render-image.js';

const test = QUnit.test;

QUnit.module('image');

test('renders image string', assert => {
    const expected = /*html*/ `
        <li>
            <div class="info-container">
                <h2>UniWhal</h2>
                <p class="image-type">narwhal</p>
            </div>
            <div class="image-container">
                <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="UniWhal"/>
                <p>A unicorn and a narwhal nuzzling their horns</p>
            </div>
            <p class="horns">1</p>
        </li>
    `;

    const data = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };
    const results = renderImage(data);

    assert.equal(results, expected);
});