import { useEffect, useRef } from "react";

function PostsSection() {
  const postsSectionDomNode = useRef(null);

  useEffect(() => {
    Promise.all([
      //@ts-ignore
      import("@semicolon/post/render"),
      //@ts-ignore
      import("@semicolon/post/PostsSection"),
    ])
      .then((modules) => {
        const renderModule = modules[0];
        const PostsSectionModule = modules[1];

        const renderComponent = renderModule.default.renderComponent;
        const PostsSectionComponent = PostsSectionModule.default;

        renderComponent(postsSectionDomNode.current, PostsSectionComponent);
      })
      .catch(console.error);
  }, []);

  return <div ref={postsSectionDomNode} />;
}

export default PostsSection;
