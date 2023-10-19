import{a as e,b as r,c as s,d as c,l as M}from"./dark-theme-626332ef.js";const g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgBrVHBDcIwDHQQf7IB2QC6CWxQJugqjMIIbECZoGUCYIJwRkY1IW4Q9KRTIvd8PjdEf8LlijHGNY5NUj4459pUO6MpEhgTS3gm0gk82HzR2Ij2HUjhwWupmzWstT5Gda9fQr7nNKPuODswCDsrZfoKN8rtN8CL5meDAPa6MB8xaGmYdiQDqcFFphDeeKvqOznZ/K4bcisEsrGiwgp78IQ/vZQ0GguwBiszAWL3IjjTJ9iwEs10eABLk1zammnIfAAAAABJRU5ErkJggg==",k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEySURBVHgB7ZbvDYIwEMUfxu/qBNYJdARG0Q0cwREYwRHcwBFwA7oBMEFtwzVWAvQfREn4JeRCoa8v1/ZaYGFOCCEKYafw0Vxh4cck5gvNH8O08CRJDvrlP9eAzERKK/qJSJQGaaVd3/sywCkyxLOlWMHDwJgMGuhFVxVEYtPxzoDUulJFPBltTD6l+gZPhgxwLd5qVwMzipoUTaqP+DbLTC1fA2NgnX9rBhC3E6IMVC2RSRgyUCPeAKPIEWBgjAzovjUmMOBSWKxrYA1/A5l8VGF5GW0PNNvyjgkMbMxGeZSqgS+tNvVvVxEaZRfsEM6eIkeAAU7xiHDCDiKFLKNbqu+ioxy79GfRB5rse9NXbbqkWLckGU/F5wqfIRQSy0U4uYtpFyNnEisdBi3p3xsW5sAbPLFFG+eM+E0AAAAASUVORK5CYII=",b="/bookshelf/assets/img-book-Mob1x-1fe4bd25.png",d="/bookshelf/assets/img-book-Mob2x-261d5249.png";console.log("😎 ~ basketMob1x:",g);console.log("😎 ~ basketMob2x:",k);console.log("😎 ~ amazon1x:",e);console.log("😎 ~ amazon2x:",r);console.log("😎 ~ book1x:",s);console.log("😎 ~ book2x:",c);console.log("😎 ~ imgBookMob1x:",b);console.log("😎 ~ imgBookMob2x:",d);document.addEventListener("DOMContentLoaded",M.onDOMContentLoaded);const m=document.querySelector(".book-list"),t="books";function h(){const o=`
  <div class="empty-list">
      <p class="empty-list-text">
        This page is empty, add some books and proceed to order.
      </p>
      <img
         class="empty-list-img"
         src="${b}"
         srcset="
         ${b} 1x,
         ${d} 2x
         "
        alt="books"
        width="265"
        height="198"
         />
      </div>`;m.innerHTML=o}function x(){const l=(JSON.parse(localStorage.getItem(t))||[]).map(({_id:i,book_image:n,title:a,description:A,author:p,amazon_product_url:w,list_name:f,buy_links:B})=>`
      <li class="book_li book js-card" data-book-id="${i}">
        <div class="book_li-img">
              <img class="book_li-i" src="${n||"../img/def-placeholder.png"}" alt="${a}" />
            </div>
            <div class="book_li-info">
              <div class="book_li-header">
                <button class="book_li-btn js-card__delete" aria-label="Remove from shopping list">
                  <img
                    class="book_li-icon js-card__delete"
                    src="${g}"
                    srcset="
                      ${g} 1x,
                      ${k} 2x
                    "
                    alt="basket"
                    width="16"
                    height="16"
                  />
                </button>
                <h2 class="book_li-title">${a.trim()}</h2>
                <h3 class="book_li-category">${f.trim()}</h3>
              </div>
              <p class="book_li-description">
                ${A.trim()}
              </p>
              <div class="book_li-footer">
                <p class="book_li-author">${p.trim()}</p>
                <ul class="book-links">
                  <li>
                    <a class="book_link" href="${w}" aria-label="Open the book in the online store" target="_blank"
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
                   <a class="book_link" href="${B[1].url}" aria-label="Open the book in the online store" target="_blank"
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
    `).join("");l.length===0?h():m.innerHTML=l}function I(o){if(o.target.classList.contains("js-card__delete")){const i=o.target.closest(".js-card").dataset.bookId,a=(JSON.parse(localStorage.getItem(t))||[]).filter(A=>A._id!==i);localStorage.setItem(t,JSON.stringify(a)),x()}}window.addEventListener("click",o=>I(o));window.onload=()=>{localStorage.getItem(t)!==null||localStorage.getItem(t)!=[]?x():h()};
