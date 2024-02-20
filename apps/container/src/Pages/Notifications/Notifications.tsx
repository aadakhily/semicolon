import React, { useEffect, useRef } from "react";

function Notifications() {
  const domNode = useRef(null);
  useEffect(() => {
    //@ts-ignore
    import("@semicolon/notification/render")
      .then((postModule) => {
        const renderApp = postModule.default.renderApp;

        renderApp(domNode.current);
      })
      .catch(console.error);
  }, []);
  return <div ref={domNode} />;
}

export default Notifications;
