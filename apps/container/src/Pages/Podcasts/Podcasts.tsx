import { useEffect, useRef } from "react";

function Podcasts() {
  const domNode = useRef(null);

  useEffect(() => {
    //@ts-ignore
    import("@semicolon/podcast/render")
      .then((postModule) => {
        const renderApp = postModule.default.renderApp;

        renderApp(domNode.current, { baseUrl: "/podcasts" });
      })
      .catch(console.error);
  }, []);

  return <div ref={domNode}></div>;
}

export default Podcasts;
