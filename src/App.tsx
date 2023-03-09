import React from "react";
import {
  AssetDetailsView,
  BadgeListView,
  CollectibleListView,
  HomeView,
  ProfileView,
} from "components/pages";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { AppLayout } from "components/templates";
import { ErrorBoundary, RouterErrorHandler } from "components/molecules";

/**
 * Routes:
 * /
 * /:identity
 * /:identity/collectibles
 * /:identity/collectibles/:chain/:contractAddress/:tokenId
 * /:identity/badges
 * /:identity/badges/:chain/:contractAddress/:tokenId
 *
 * TODO: Strengthen with a list of routes as constant to be used throughout the app
 */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<AppLayout />}
      errorElement={<RouterErrorHandler />}
    >
      <Route index element={<HomeView />} />
      <Route path=":identity">
        <Route index element={<ProfileView />} />
        <Route path="collectibles">
          <Route index element={<CollectibleListView />} />
          <Route
            path=":chain/:contractAddress/:tokenId"
            element={<AssetDetailsView />}
          />
        </Route>
        <Route path="badges">
          <Route index element={<BadgeListView />} />
          <Route
            path=":chain/:contractAddress/:tokenId"
            element={<AssetDetailsView />}
          />
        </Route>
      </Route>
    </Route>
  )
);

export const App: React.FunctionComponent = () => {
  return (
    <ErrorBoundary defaultFallbackCardClassName="h-screen w-screen flex flex-col items-center justify-center">
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};
