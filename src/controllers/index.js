import Home from "./home.controllers";
import Posts from "./posts.controller";
import NotFound from "./404.controller";

const pages = {
  home: Home,
  posts: Posts,
  notFound: NotFound,
};

export { pages };
