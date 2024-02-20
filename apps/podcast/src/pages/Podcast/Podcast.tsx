import { A, useParams } from "@solidjs/router";
import PodcastSection from "../../components/PodcastSection/PodcastSection";
import { createEffect } from "solid-js";

function Podcast() {
  const params = useParams();

  // console.log("params :>> ", abbas());

  createEffect(() => {
    console.log("abbas() :>> ", params.podcastId);
  });

  return (
    <div>
      <h1>Podcast - {params.podcastId}</h1>
      <A href="/">All podcasts</A>
      <PodcastSection />
    </div>
  );
}

export default Podcast;
