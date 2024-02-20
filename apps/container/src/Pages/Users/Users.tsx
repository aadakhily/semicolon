import { useEffect, useRef } from "react";

//@ts-ignore
const Module = () => import("@semicolon/user/render");

function Users() {
  const domNode = useRef(null);

  useEffect(() => {
    //@ts-ignore
    Module()
      .then((postModule) => {
        const renderApp = postModule.default.renderApp;

        renderApp(domNode.current, { baseUrl: "/users" });
        console.log("Users mounted :>> ");
      })
      .catch(console.error);
  }, []);

  return <div ref={domNode}></div>;
}

export default Users;
