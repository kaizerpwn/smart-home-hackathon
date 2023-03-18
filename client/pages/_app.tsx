import '@/styles/globals.css'
 
import type { AppProps } from 'next/app'
import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; 
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider
          session={pageProps.session}
          refetchInterval={5 * 60}
          refetchOnWindowFocus={true}>
          <Component {...pageProps} />
        </SessionProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}
