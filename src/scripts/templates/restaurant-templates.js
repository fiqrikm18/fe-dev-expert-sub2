/* eslint-disable no-undef */
import config from '../globals/config';
import { outerHTML } from '../utils/helper';

/**
 * show restaurant overview as card
 *
 * @param restaurant
 * @returns {string}
 */
const restaurantCard = (restaurant) => `
  <div class="card" style="margin: 0 1rem">
    <div class="card__header">
      <img src="${config.image_medium_url}${restaurant.pictureId}" alt="${restaurant.name}}">
      <p>${restaurant.name}</p>
    </div>
    <div class="card__content">
      <div class="card__content__detail">
        <p>${restaurant.city}</p>
        <div class="card__content__rating">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="24" height="24"
            viewBox="0 0 172 172"
            style=" fill:#000000;"><defs><linearGradient x1="32.28225" y1="22.79" x2="136.49633" y2="162.20317" gradientUnits="userSpaceOnUse" id="color-1_8ggStxqyboK5_gr1"><stop offset="0" stop-color="#ffda1c"></stop><stop offset="1" stop-color="#feb705"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="url(#color-1_8ggStxqyboK5_gr1)"><path d="M89.27158,18.58317l19.6295,44.032l47.93783,5.06325c3.08525,0.32608 4.32508,4.1495 2.021,6.22425l-35.80825,32.26792l10.00108,47.16025c0.645,3.03508 -2.60867,5.3965 -5.29617,3.8485l-41.75658,-24.09075l-41.75658,24.08717c-2.6875,1.548 -5.93758,-0.81342 -5.29617,-3.8485l10.00108,-47.16025l-35.80825,-32.26792c-2.30408,-2.07475 -1.06067,-5.89817 2.021,-6.22425l47.93783,-5.06325l19.6295,-44.032c1.26133,-2.83083 5.28183,-2.83083 6.54317,0.00358z"></path></g></g></svg> 
          <p>${restaurant.rating}</p>
        </div>
      </div>
      <p>${restaurant.description.slice(0, 80)}... <a href="${`/#/detail/${restaurant.id}`}" class="read-more">Read more</a></p>
    </div>
  </div>
`;

/**
 * show restaurant detail page
 *
 * @param restaurant
 * @returns {string}
 */
function restaurantDetail(restaurant) {
  const categoryElement = document.createElement('div');
  categoryElement.id = 'category-container';
  categoryElement.classList.add('category__container');

  const foodsElement = document.createElement('div');
  foodsElement.id = 'foods-menus-container';

  const drinksElement = document.createElement('div');
  drinksElement.id = 'drinks-menus-container';

  const reviewElement = document.createElement('div');
  reviewElement.id = 'review-container';

  [...restaurant.categories].forEach((category) => {
    const p = `<p class="category__item">${category.name}</p>`;
    categoryElement.innerHTML += p;
  });

  [...restaurant.menus.drinks].forEach((drink) => {
    const p = `<p class="menu__item">${drink.name}</p>`;
    drinksElement.innerHTML += p;
  });

  [...restaurant.menus.foods].forEach((food) => {
    const p = `<p class="menu__item">${food.name}</p>`;
    foodsElement.innerHTML += p;
  });

  [...restaurant.customerReviews].forEach((userReview) => {
    const review = `
     <div class="review__item">
     <p style="color: #542e71">${userReview.name}</p>
     <span style="font-size: 10pt; color: #a799b7">${userReview.date}</span>
     <hr>
     <p style="margin-top: 1rem">${userReview.review}</p> 
    </div>
    `;
    reviewElement.innerHTML += review;
  });

  return `
  <div id="restaurant-container">
    <div>
      <div class="hero__wrapper">
        <img src="${config.image_high_url + restaurant.pictureId}" width="450" alt="" />
        <div class="hero__restaurant">
          <div class="hero__text">
            <p>${restaurant.name}</p>
          </div>
          <div class="hero__rating">
            <p>${restaurant.city}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
    
    <div style="margin: 1rem">
      <div>
        ${outerHTML(categoryElement)}
      </div>
      
      <div>
        <section class="accordion">
          <input type="checkbox" name="collapse" id="handle1" checked="checked">
          <h2 class="handle">
            <label for="handle1">Restaurant Overview</label>
          </h2>
          <div class="content">
            <p><strong>Rating: </strong>${restaurant.rating}</p>
            <p><strong>Address: </strong>${restaurant.address}</p>
            <p><strong>Overall: </strong>${restaurant.description}</p>
          </div>
        </section>
      </div>
      
      <div class="restaurant__menu__container">
        <p class="menu__title"><strong>Restaurant Menus</strong></p>
        <div class="menu__container">
          <div class="menu__wrapper">
            <p>Drinks</p>
            ${outerHTML(drinksElement)}
          </div>
          <div class="menu__wrapper">
            <p>Foods</p>
            ${outerHTML(foodsElement)}
          </div>
        </div>
      </div>
    </div>
    
    <div class="user__review__container">
        <p style="color: #542e71; font-weight: bold; text-align: center; margin: 1rem 0.5rem 0.5rem 0.5rem;">Customer Review</p>
        ${outerHTML(reviewElement)}
    </div>
  `;
}

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  restaurantCard,
  restaurantDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
