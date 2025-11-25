import Home from "./home.controller.js";
import Posts from "./posts.controller.js";
import NotFound from "./404.controller.js";

const pages = {
  home: Home,
  posts: Posts,
  notFound: NotFound,
};

export { pages };
