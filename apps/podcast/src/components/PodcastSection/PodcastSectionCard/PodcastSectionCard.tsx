import { Component } from "solid-js";
import "./podcastSectionCard.scss";

const PodcastCard: Component<{ podcastId: number }> = (props) => {
  const podcastId = () => props.podcastId;
  return (
    <div class="podcast-section-card">
      <div class="podcast-section-card__image-container">
        <img
          class="podcast-section-card__image"
          src={`https://picsum.photos/75?random=${podcastId()}`}
          alt="podcast image"
        />
      </div>

      <div class="podcast-section-card__info">
        <h4 class="podcast-section-card__title">Is Web 3 Still Alive ?</h4>
        <div class="podcast-section-card__description">
          Lorem ipsum dolor sit ...
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;
