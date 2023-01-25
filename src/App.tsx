import React from "react";
import {
  BadgeDetailsView,
  BadgeListView,
  CollectibleDetailsView,
  CollectibleListView,
  HomeView,
  NoProfileFoundView,
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
 * Routes
 *
 * /                                                          -> Home
 * /:identity                                                 -> Profile
 * /:identity/collectibles                                    -> CollectibleList
 * /:identity/collectibles/:chain/:contractAddress/:tokenId   -> CollectibleDetails
 * /:identity/badges                                          -> BadgeList
 * /:identity/badges/:chain/:contractAddress/:tokenId         -> BadgeDetails
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
      <Route path="no-profile-found" element={<NoProfileFoundView />} />
      <Route path=":identity">
        <Route index element={<ProfileView />} />
        <Route path="collectibles">
          <Route index element={<CollectibleListView />} />
          <Route
            path=":chain/:contractAddress/:tokenId"
            element={<CollectibleDetailsView />}
          />
        </Route>
        <Route path="badges">
          <Route index element={<BadgeListView />} />
          <Route
            path=":chain/:contractAddress/:tokenId"
            element={<BadgeDetailsView />}
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
