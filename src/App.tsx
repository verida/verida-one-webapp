import React from "react";
import { Footer, Header, HeaderOffset } from "components/organisms";
import { ProfileView } from "components/pages";

export const App = () => {
  return (
    <div className="relative flex h-full w-full flex-col">
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[6px]">
        <Header />
      </div>
      <div className="bg-app">
        <HeaderOffset />
        <div className="z-10 flex-grow pt-4">
          <main className={`mx-auto w-full max-w-screen-sm px-4`}>
            <ProfileView />
          </main>
          <div className="pt-10 pb-10">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
