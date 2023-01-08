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
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AppLayout } from "components/templates";

/**
 * Routes
 *
 * /                                          -> Home
 * /:identity                                 -> Profile
 * /:identity/collectibles                    -> CollectibleList
 * /:identity/collectibles/:collectibleId     -> CollectibleDetails
 * /:identity/badges                          -> BadgeList
 * /:identity/badges/:badgeId                 -> BadgeDetails
 *
 * TODO: Strenghten with a list of routes as constant to be used throughout the app
 */

export const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomeView />} />
          <Route path=":identity">
            <Route
              index
              element={<ProfileView />}
              errorElement={<NoProfileFoundView />}
            />
            <Route path="collectibles">
              <Route index element={<CollectibleListView />} />
              <Route
                path=":contractAddress/:tokenId"
                element={<CollectibleDetailsView />}
              />
            </Route>
            <Route path="badges">
              <Route index element={<BadgeListView />} />
              <Route path=":badgeId" element={<BadgeDetailsView />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
