import React from "react";
import { Header } from "components/organisms";
import { ProfileView } from "components/pages";
import { screenSize } from "lib/constants";

export const App = () => {
  return (
    <div className="h-screen">
      <Header />
      <main
        className={`mx-auto px-4 py-3.5 md:flex md:w-[${screenSize.sm}] md:flex-col md:items-center md:justify-center`}
      >
        <ProfileView />
      </main>
    </div>
  );
};
