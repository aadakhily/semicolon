import { useEffect, useRef } from "react";

function PostsSection() {
  const postsSectionDomNode = useRef(null);

  useEffect(() => {
    Promise.all([
      //@ts-ignore
      import("@semicolon/post/render"),
      //@ts-ignore
      import("@semicolon/post/PostsList"),
    ])
      .then((modules) => {
        const renderModule = modules[0];
        const postListModule = modules[1];

        const renderComponent = renderModule.default.renderComponent;
        const PostListComponent = postListModule.default;

        renderComponent(postsSectionDomNode.current, PostListComponent);
      })
      .catch(console.error);
  }, []);

  return <div ref={postsSectionDomNode} />;
}

export default PostsSection;
