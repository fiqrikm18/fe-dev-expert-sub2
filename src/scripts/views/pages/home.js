import RestaurantResource from '../../data/restaurant-resource';
import { restaurantCard } from '../../templates/restaurant-templates';

const Home = {
  async render() {
    return `
      <div class="hero__wrapper">
        <img src="./images/heros/hero-image_4.jpg" width="450" alt="" />
        <div class="hero__text">
          <p>Cobalt Restaurant</p>
        </div>
      </div>
    
      <div class="content__header">
        <p>Explore Restaurant</p>
      </div>
      <div id="content_data" class="content__data"></div>
    `;
  },

  async afterRender() {
    const data = RestaurantResource.restaurantList();
    const contentContainer = document.getElementById('content_data');
    data.then((result) => {
      result.restaurants.forEach((restaurant) => {
        contentContainer.innerHTML += restaurantCard(restaurant);
      });
    });
  },
};

export default Home;
