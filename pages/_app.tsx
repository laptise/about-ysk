import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Intro, IntroCtx, IntroCtxType } from "../components/intro";

function MyApp({ Component, pageProps }: AppProps) {
  const introState = useState(false);
  const [isIntroPlayed] = introState;
  const introInit: IntroCtxType = {
    isIntroPlayedState: introState,
  };
  return <IntroCtx.Provider value={introInit}>{!isIntroPlayed ? <Intro /> : <Component {...pageProps} />}</IntroCtx.Provider>;
}

export default MyApp;
