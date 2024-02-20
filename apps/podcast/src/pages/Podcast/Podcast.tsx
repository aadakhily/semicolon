import { useParams } from "@solidjs/router";

function Podcast() {
  const params = useParams();

  return (
    <div>
      <h2>Podcast page '{params.podcastId}'</h2>

      <h3>there is no content to display (this page not implemented)</h3>
    </div>
  );
}

export default Podcast;
