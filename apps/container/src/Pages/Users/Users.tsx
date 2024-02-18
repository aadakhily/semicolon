import { useEffect, useRef } from "react";

function Users() {
  const domNode = useRef(null);

  useEffect(() => {
    //@ts-ignore
    import("@semicolon/user/render")
      .then((postModule) => {
        const renderApp = postModule.default.renderApp;

        renderApp(domNode.current, { baseUrl: "/users" });
      })
      .catch(console.error);
  }, []);

  return <div ref={domNode}></div>;
}

export default Users;
