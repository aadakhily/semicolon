import { For, createSignal } from "solid-js";
import PodcastCard from "../../components/PodcastCard/PodcastCard";

import "./podcasts.scss";
import { A } from "@solidjs/router";

function Podcasts() {
  const [items] = createSignal(Array.from(Array(25).keys()));

  return (
    <div class="podcasts-list">
      <h1>Popular Podcasts</h1>

      <A href="/">All podcasts</A>

      <div class="podcasts-list__list">
        <For each={items()}>{(item) => <PodcastCard podcastId={item} />}</For>
      </div>
    </div>
  );
}

export default Podcasts;
