import React from "react";
import {
  BadgeDetailsView,
  BadgeListView,
  CollectibleDetailsView,
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
    <Route path="/" element={<AppLayout />}>
      <Route index element={<HomeView />} />
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
  return <RouterProvider router={router} />;
};
