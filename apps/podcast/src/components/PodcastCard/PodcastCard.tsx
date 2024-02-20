import { Component } from "solid-js";
import { A } from "@solidjs/router";

import "./podcastCard.scss";

const PodcastCard: Component<{ podcastId: number }> = (props) => {
  const podcastId = () => props.podcastId;

  return (
    <A href={`/${podcastId()}`} class="podcast-card">
      <div class="podcast-card__image-container">
        <img
          class="podcast-card__image"
          src={`https://picsum.photos/250?random=${podcastId()}`}
          alt="podcast image"
        />
      </div>

      <div class="podcast-card__info">
        <h4 class="podcast-card__title">Is Web 3 Still Alive ?</h4>
        <div class="podcast-card__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    </A>
  );
};

export default PodcastCard;
