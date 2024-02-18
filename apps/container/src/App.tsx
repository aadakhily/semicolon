import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const domNode = useRef<HTMLDivElement>();

  useEffect(() => {
    //@ts-ignore
    // import("@semicolon/post/render")
    //   .then((postModule) => {
    //     const renderApp = postModule.default.renderApp;

    //     renderApp(domNode.current, { baseUrl: "/post" });
    //   })
    //   .catch(console.error);

    // //@ts-ignore
    // import("@semicolon/podcast/render")
    //   .then((postModule) => {
    //     const renderApp = postModule.default.renderApp;

    //     renderApp(domNode.current, { baseUrl: "/" });
    //   })
    //   .catch(console.error);

    //@ts-ignore
    import("@semicolon/user/render")
      .then((postModule) => {
        const renderApp = postModule.default.renderApp;

        renderApp(domNode.current, { baseUrl: "/" });
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div ref={domNode} id="amir"></div>
    </>
  );
}

export default App;
