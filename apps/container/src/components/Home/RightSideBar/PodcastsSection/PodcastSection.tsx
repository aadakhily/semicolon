import React, { useEffect, useRef } from "react";

function PodcastSection() {
  const podcastSectionDomRef = useRef(null);

  useEffect(() => {
    Promise.all([
      //@ts-ignore
      import("@semicolon/podcast/render"),
      //@ts-ignore
      import("@semicolon/podcast/PodcastSection"),
    ])
      .then((modules) => {
        const renderModule = modules[0];
        const podcastSectionModule = modules[1];

        const renderComponent = renderModule.default.renderComponent;
        const PodcastSectionComponent = podcastSectionModule.default;

        renderComponent(podcastSectionDomRef.current, PodcastSectionComponent);
      })
      .catch(console.error);
  }, []);

  return <div ref={podcastSectionDomRef} />;
}

export default PodcastSection;
