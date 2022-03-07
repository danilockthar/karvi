import * as React from 'react';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import '../public/global.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp