import UrlParser from '../../routes/url-parser';
import RestaurantResource from '../../data/restaurant-resource';
import { restaurantDetail } from '../../templates/restaurant-templates';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = RestaurantResource.restaurantDetail(url.id);
    const dataContainer = document.getElementById('restaurant');
    data.then((res) => {
      dataContainer.innerHTML = restaurantDetail(res.restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: res.restaurant.id,
          pictureId: res.restaurant.pictureId,
          city: res.restaurant.city,
          rating: res.restaurant.rating,
          description: res.restaurant.description,
          name: res.restaurant.name,
        },
      });
    });
  },
};

export default Detail;
