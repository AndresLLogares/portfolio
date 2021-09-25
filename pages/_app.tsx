import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Router from "next/router";
import React, { useCallback, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const resetWindowScrollPosition = useCallback(
    () => window.scrollTo(0, 0),
    []
  );

  useEffect(() => {
    Router.events.on("routeChangeComplete", resetWindowScrollPosition);

    return () => {
      Router.events.off("routeChangeComplete", resetWindowScrollPosition);
    };
  }, [resetWindowScrollPosition]);
  return <Component {...pageProps} />;
}
export default MyApp
