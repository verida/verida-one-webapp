import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10, // 10 seconds, to avoid multiple calls for queries required by others.
      retry: false,
    },
  },
});

interface QueryContextProps {
  children: React.ReactNode;
}

export const QueryProvider: React.FunctionComponent<QueryContextProps> = (
  props
) => {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
