import { createSignal, For } from "solid-js";
import PodcastSectionCard from "./PodcastSectionCard/PodcastSectionCard";

import "./podcastSection.scss";

function PodcastSection() {
  const [items] = createSignal(Array.from(Array(5).keys()));

  return (
    <div class="podcast-section">
      <h4 class="podcast-section__title">Top Podcasts</h4>
      <div class="podcast-section__list">
        <For each={items()}>
          {(item) => <PodcastSectionCard podcastId={item} />}
        </For>
      </div>
    </div>
  );
}

export default PodcastSection;
