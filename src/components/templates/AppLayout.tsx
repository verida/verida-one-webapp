import React from "react";
import { Footer, Header, HeaderOffset } from "components/organisms";
import { Outlet, ScrollRestoration, useMatch } from "react-router-dom";

export const AppLayout: React.FunctionComponent = () => {
  // Identitfy when the current page is the profile
  const profileRouteMatch = useMatch("/:identity");

  return (
    <>
      <div className="relative flex h-full w-full flex-col">
        <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[6px]">
          <Header />
        </div>
        <div
          className={`flex min-h-screen flex-col ${
            profileRouteMatch ? "bg-app" : ""
          }`}
        >
          <HeaderOffset />
          <main className="mx-auto flex w-full max-w-screen-sm flex-grow flex-col px-4 pt-4">
            <Outlet />
          </main>
          <div className="pt-10">
            <Footer />
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </>
  );
};
