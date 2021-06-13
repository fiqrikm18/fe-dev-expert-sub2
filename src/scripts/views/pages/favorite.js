import Database from '../../data/database';
import { restaurantCard } from '../../templates/restaurant-templates';

const Favorite = {
  async render() {
    return `
      <div class="hero__wrapper">
        <img src="./images/heros/hero-image_4.jpg" width="450" alt="" />
        <div class="hero__text">
          <p>Cobalt Restaurant</p>
        </div>
      </div>
    
      <div class="content__header">
        <p>Favorite Restaurant</p>
      </div>
      <div id="content_data" class="content__data"></div>
    `;
  },

  async afterRender() {
    const data = Database.getAllRestaurant();
    const contentContainer = document.getElementById('content_data');
    data.then((res) => {
      if (res.length < 1) {
        contentContainer.innerHTML += `<p style="text-align: center; font-weight: bold; width: 100%; height: 100vh;">Anda Belum meiliki Restaurant Favorit.</p>`;
      } else {
        res.forEach((favorite) => {
          contentContainer.innerHTML += restaurantCard(favorite);
        });
      }
    });
  },
};

export default Favorite;
