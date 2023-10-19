// import amazonMob1x from '../img/amazon-mob-1x.svg';
// import amazonMobT1x from '../img/amazon-mob-t1x.svg';

import basketMob1x from '../img/basket-mob1x.png';
console.log('😎 ~ basketMob1x:', basketMob1x);
import basketMob2x from '../img/basket-mob2x.png';
console.log('😎 ~ basketMob2x:', basketMob2x);

// import bookMob1x from '../img/book-mob1x.svg';
// import bookMobT1x from '../img/book-mob-t1x.svg';

import amazon1x from '../img/amazon@1x.png';
console.log('😎 ~ amazon1x:', amazon1x);
import amazon2x from '../img/amazon@2x.png';
console.log('😎 ~ amazon2x:', amazon2x);

import book1x from '../img/apple-books@1x.png';
console.log('😎 ~ book1x:', book1x);
import book2x from '../img/apple-books@2x.png';
console.log('😎 ~ book2x:', book2x);

import imgBookMob1x from '../img/img-book-Mob1x.png';
console.log('😎 ~ imgBookMob1x:', imgBookMob1x);
import imgBookMob2x from '../img/img-book-Mob2x.png';
console.log('😎 ~ imgBookMob2x:', imgBookMob2x);

import { handlerClickMenu } from './header';
import logoModuleFunction from './support';
document.addEventListener(
  'DOMContentLoaded',
  logoModuleFunction.onDOMContentLoaded
);

// delete potom
// import { booksJson } from './_example-data.js';

// localStorage.setItem('books', JSON.stringify(booksJson));

const bookList = document.querySelector('.book-list');

const STORAGE_KEY = 'books';

function createEmptyCart() {
  const markup = `
  <div class="empty-list">
      <p class="empty-list-text">
        This page is empty, add some books and proceed to order.
      </p>
      <img
         class="empty-list-img"
         src="${imgBookMob1x}"
         srcset="
         ${imgBookMob1x} 1x,
         ${imgBookMob2x} 2x
         "
        alt="books"
        width="265"
        height="198"
         />
      </div>`;
  bookList.innerHTML = markup;
}

function createFullCart() {
  // Отримати дані з localStorage або встановити порожній масив, якщо немає даних
  const bookItems = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  const markup = bookItems
    .map(
      ({
        _id,
        book_image,
        title,
        description,
        author,
        amazon_product_url,
        list_name,
        buy_links,
      }) => `
      <li class="book_li book js-card" data-book-id="${_id}">
        <div class="book_li-img">
              <img class="book_li-i" src="${
                book_image ? book_image : '../img/def-placeholder.png'
              }" alt="${title}" />
            </div>
            <div class="book_li-info">
              <div class="book_li-header">
                <button class="book_li-btn js-card__delete" aria-label="Remove from shopping list">
                  <img
                    class="book_li-icon js-card__delete"
                    src="${basketMob1x}"
                    srcset="
                      ${basketMob1x} 1x,
                      ${basketMob2x} 2x
                    "
                    alt="basket"
                    width="16"
                    height="16"
                  />
                </button>
                <h2 class="book_li-title">${title.trim()}</h2>
                <h3 class="book_li-category">${list_name.trim()}</h3>
              </div>
              <p class="book_li-description">
                ${description.trim()}
              </p>
              <div class="book_li-footer">
                <p class="book_li-author">${author.trim()}</p>
                <ul class="book-links">
                  <li>
                    <a class="book_link" href="${amazon_product_url}" aria-label="Open the book in the online store" target="_blank"
                   rel="noopener noreferrer">
                      <img
                        class="book_link-amazon"
                        src="${amazon1x}"
                        srcset="${amazon1x} 1x,
                        ${amazon2x} 2x"
                        alt="amazon"
                        width="32"
                        height="11"
                      />
                      <img
                        class="book_link-amazon hovered"
                        src="${amazon1x}"
                        srcset="${amazon1x} 1x,
                        ${amazon2x} 2x"
                        alt="amazon"
                        width="32"
                        height="11"
                      />
                    </a>
                  </li>
                  <li>
                   <a class="book_link" href="${
                     buy_links[1].url
                   }" aria-label="Open the book in the online store" target="_blank"
                   rel="noopener noreferrer">

                      <img
                        class="book_link-book"
                        src="${book1x}"
                        srcset="${book1x} 1x,
                        ${book2x} 2x"
                        alt="book"
                        width="16"
                        height="16"
                      />
                      <img
                        class="book_link-book hovered"
                        src="${book1x}"
                        srcset="${book1x} 1x,
                        ${book2x} 2x"
                        alt="book"
                        width="16"
                        height="16"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
      </li>
    `
    )
    .join('');

  if (markup.length === 0) {
    createEmptyCart();
  } else {
    bookList.innerHTML = markup;
  }
}

function deleteCard(evt) {
  if (evt.target.classList.contains('js-card__delete')) {
    const card = evt.target.closest('.js-card');
    const bookId = card.dataset.bookId;
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const newStorageData = storageData.filter(object => object._id !== bookId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newStorageData));

    createFullCart();
  }
}

window.addEventListener('click', evt => deleteCard(evt));

window.onload = () => {
  if (
    localStorage.getItem(STORAGE_KEY) !== null ||
    localStorage.getItem(STORAGE_KEY) != []
  ) {
    createFullCart();
  } else {
    createEmptyCart();
  }
};
