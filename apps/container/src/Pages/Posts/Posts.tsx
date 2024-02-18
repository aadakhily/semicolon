import { useEffect, useRef } from "react";

function Posts() {
  const domNode = useRef(null);

  useEffect(() => {
    //@ts-ignore
    import("@semicolon/post/render")
      .then((postModule) => {
        const renderApp = postModule.default.renderApp;

        renderApp(domNode.current, { baseUrl: "/posts" });
      })
      .catch(console.error);
  }, []);

  return <div ref={domNode}></div>;
}

export default Posts;
