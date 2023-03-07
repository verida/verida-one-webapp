import React from "react";
import { SkeletonBase } from "components/atoms";

export const AssetDetailsViewSkeleton: React.FunctionComponent = () => {
  return (
    <div className="grid animate-pulse grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <SkeletonBase
          rounded="rounded-xl"
          className="aspect-square w-full opacity-5"
        />
        <SkeletonBase
          rounded="rounded-lg"
          className="mt-6 hidden h-12 w-full opacity-5 sm:block"
        />
      </div>
      <div>
        <SkeletonBase className="mb-2 h-4 w-2/5 opacity-10" />
        <SkeletonBase className="mb-6 h-4 w-full opacity-5" />
        <SkeletonBase className="mb-2 h-4 w-2/5 opacity-10" />
        <div className="flex flex-col space-y-2">
          <SkeletonBase className="h-4 w-full opacity-5" />
          <div className="flex space-x-1">
            <SkeletonBase className="h-4 w-1/3 opacity-5" />
            <SkeletonBase className="h-4 flex-grow opacity-5" />
          </div>
          <SkeletonBase className="h-4 w-full opacity-5" />
          <div className="flex space-x-1">
            <SkeletonBase className="h-4 w-2/3 opacity-5" />
            <SkeletonBase className="h-4 flex-grow opacity-5" />
          </div>
          <SkeletonBase className="h-4 w-1/3 opacity-5" />
        </div>
      </div>
    </div>
  );
};
