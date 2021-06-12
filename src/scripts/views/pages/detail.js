import UrlParser from '../../routes/url-parser';
import RestaurantResource from '../../data/restaurant-resource';
import { restaurantDetail } from '../../templates/restaurant-templates';

const Detail = {
  async render() {
    return `
      <div id="restaurant"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = RestaurantResource.restaurantDetail(url.id);
    const dataContainer = document.getElementById('restaurant');
    data.then(res => {
      dataContainer.innerHTML = restaurantDetail(res.restaurant);
    });

  }
};

export default Detail;
