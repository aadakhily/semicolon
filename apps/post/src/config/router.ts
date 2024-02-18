import {
  createRouter as createVueRouter,
  RouterOptions,
  createWebHistory,
} from "vue-router";

//@ts-ignore
const Post = () => import("../pages/Post/Post.vue");
const Posts = () => import("../pages/Posts/Posts.vue");
const CreatePost = () => import("../pages/CreatePost/CreatePost.vue");

const routes: RouterOptions["routes"] = [
  {
    path: "",
    component: Posts,
  },
  {
    path: "/create-post",
    component: CreatePost,
  },
  {
    path: "/:postId",
    component: Post,
  },
];

export function createRouter(baseUrl: string = "") {
  return createVueRouter({
    routes,
    history: createWebHistory(baseUrl),
  });
}
