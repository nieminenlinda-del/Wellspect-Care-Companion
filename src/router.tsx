import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routerBasepath } from "./lib/public-url";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Vite `base` and router `basepath` must match (Pages subdirectory vs Capacitor `/`).
    basepath: routerBasepath(),
  });

  return router;
};
