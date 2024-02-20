import { useEffect, useRef } from "react";

function PublishersSection() {
  const PublishersSectionDomRef = useRef(null);

  useEffect(() => {
    Promise.all([
      //@ts-ignore
      import("@semicolon/user/render"),
      //@ts-ignore
      import("@semicolon/user/PublishersSection"),
    ])
      .then((modules) => {
        const renderModule = modules[0];
        const PublishersSectionModule = modules[1];

        const renderComponent = renderModule.default.renderComponent;
        const PublishersSectionComponent = PublishersSectionModule.default;

        renderComponent(
          PublishersSectionDomRef.current,
          PublishersSectionComponent
        );
      })
      .catch(console.error);
  }, []);

  return <div ref={PublishersSectionDomRef} />;
}

export default PublishersSection;
