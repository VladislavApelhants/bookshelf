import{a as e,b as r,c as s,d as c,l as f}from"./dark-theme-626332ef.js";const g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgBrVHBDcIwDHQQf7IB2QC6CWxQJugqjMIIbECZoGUCYIJwRkY1IW4Q9KRTIvd8PjdEf8LlijHGNY5NUj4459pUO6MpEhgTS3gm0gk82HzR2Ij2HUjhwWupmzWstT5Gda9fQr7nNKPuODswCDsrZfoKN8rtN8CL5meDAPa6MB8xaGmYdiQDqcFFphDeeKvqOznZ/K4bcisEsrGiwgp78IQ/vZQ0GguwBiszAWL3IjjTJ9iwEs10eABLk1zammnIfAAAAABJRU5ErkJggg==",b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEySURBVHgB7ZbvDYIwEMUfxu/qBNYJdARG0Q0cwREYwRHcwBFwA7oBMEFtwzVWAvQfREn4JeRCoa8v1/ZaYGFOCCEKYafw0Vxh4cck5gvNH8O08CRJDvrlP9eAzERKK/qJSJQGaaVd3/sywCkyxLOlWMHDwJgMGuhFVxVEYtPxzoDUulJFPBltTD6l+gZPhgxwLd5qVwMzipoUTaqP+DbLTC1fA2NgnX9rBhC3E6IMVC2RSRgyUCPeAKPIEWBgjAzovjUmMOBSWKxrYA1/A5l8VGF5GW0PNNvyjgkMbMxGeZSqgS+tNvVvVxEaZRfsEM6eIkeAAU7xiHDCDiKFLKNbqu+ioxy79GfRB5rse9NXbbqkWLckGU/F5wqfIRQSy0U4uYtpFyNnEisdBi3p3xsW5sAbPLFFG+eM+E0AAAAASUVORK5CYII=",B="/bookshelf/assets/img-book-Mob1x-1fe4bd25.png",M="/bookshelf/assets/img-book-Mob2x-261d5249.png";console.log("😎 ~ basketMob1x:",g);console.log("😎 ~ basketMob2x:",b);console.log("😎 ~ amazon1x:",e);console.log("😎 ~ amazon2x:",r);console.log("😎 ~ book1x:",s);console.log("😎 ~ book2x:",c);console.log("😎 ~ imgBookMob1x:",B);console.log("😎 ~ imgBookMob2x:",M);document.addEventListener("DOMContentLoaded",f.onDOMContentLoaded);const k=document.querySelector(".book-list"),a="books";function d(){const o=`
  <div class="empty-list">
      <p class="empty-list-text">
        This page is empty, add some books and proceed to order.
      </p>
      
      </div>`;k.innerHTML=o}function m(){const l=(JSON.parse(localStorage.getItem(a))||[]).map(({_id:i,book_image:n,title:t,description:A,author:h,amazon_product_url:x,list_name:p,buy_links:w})=>`
      <li class="book_li book js-card" data-book-id="${i}">
        <div class="book_li-img">
              <img class="book_li-i" src="${n||"../img/def-placeholder.png"}" alt="${t}" />
            </div>
            <div class="book_li-info">
              <div class="book_li-header">
                <button class="book_li-btn js-card__delete" aria-label="Remove from shopping list">
                  <img
                    class="book_li-icon js-card__delete"
                    src="${g}"
                    srcset="
                      ${g} 1x,
                      ${b} 2x
                    "
                    alt="basket"
                    width="16"
                    height="16"
                  />
                </button>
                <h2 class="book_li-title">${t.trim()}</h2>
                <h3 class="book_li-category">${p.trim()}</h3>
              </div>
              <p class="book_li-description">
                ${A.trim()}
              </p>
              <div class="book_li-footer">
                <p class="book_li-author">${h.trim()}</p>
                <ul class="book-links">
                  <li>
                    <a class="book_link" href="${x}" aria-label="Open the book in the online store" target="_blank"
                   rel="noopener noreferrer">
                      <img
                        class="book_link-amazon"
                        src="${e}"
                        srcset="${e} 1x,
                        ${r} 2x"
                        alt="amazon"
                        width="32"
                        height="11"
                      />
                      <img
                        class="book_link-amazon hovered"
                        src="${e}"
                        srcset="${e} 1x,
                        ${r} 2x"
                        alt="amazon"
                        width="32"
                        height="11"
                      />
                    </a>
                  </li>
                  <li>
                   <a class="book_link" href="${w[1].url}" aria-label="Open the book in the online store" target="_blank"
                   rel="noopener noreferrer">

                      <img
                        class="book_link-book"
                        src="${s}"
                        srcset="${s} 1x,
                        ${c} 2x"
                        alt="book"
                        width="16"
                        height="16"
                      />
                      <img
                        class="book_link-book hovered"
                        src="${s}"
                        srcset="${s} 1x,
                        ${c} 2x"
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
    `).join("");l.length===0?d():k.innerHTML=l}function I(o){if(o.target.classList.contains("js-card__delete")){const i=o.target.closest(".js-card").dataset.bookId,t=(JSON.parse(localStorage.getItem(a))||[]).filter(A=>A._id!==i);localStorage.setItem(a,JSON.stringify(t)),m()}}window.addEventListener("click",o=>I(o));window.onload=()=>{localStorage.getItem(a)!==null||localStorage.getItem(a)!=[]?m():d()};
