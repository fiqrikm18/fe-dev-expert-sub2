import config from '../globals/config';

class RestaurantResource {
  static async restaurantList() {
    const url = `${config.base_url}list`;
    const res = await fetch(url);
    const resJson = await res.json();
    return resJson;
  }

  static async restaurantDetail(id) {
    const url = `${config.base_url}detail/${id}`;
    const res = await fetch(url);
    const resJson = await res.json();
    return resJson;
  }
}

export default RestaurantResource;
