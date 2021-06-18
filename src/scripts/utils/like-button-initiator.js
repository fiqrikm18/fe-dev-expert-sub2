import Database from '../data/database';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../templates/restaurant-templates';

const LikeButtonInitiator = {
  async init({
    likeButtonContainer,
    restaurant,
  }) {
    this.likeButtonContainer = likeButtonContainer;
    this.restaurant = restaurant;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.restaurant;

    if (await this.isMovieExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async isMovieExist(id) {
    const restaurant = await Database.getRestaurant(id);
    return !!restaurant;
  },

  renderLike() {
    this.likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await Database.putRestaurant(this.restaurant);
      this.renderButton();
    });
  },

  renderLiked() {
    this.likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await Database.deleteRestaurant(this.restaurant.id);
      this.renderButton();
    });
  },
};

export default LikeButtonInitiator;
