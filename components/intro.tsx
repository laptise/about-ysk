import { createContext, useContext, useEffect, useState } from "react";

export type IntroCtxType = { isIntroPlayedState: State<boolean> };
export const IntroCtx = createContext<IntroCtxType>(null as any);

export const Intro = () => {
  const ctx = useContext(IntroCtx);
  const [introPlayed, setIntroPlayed] = ctx.isIntroPlayedState;
  const [buttonView, setButtonView] = useState(false);
  const [introGoOut, setIntroGoOut] = useState(false);
  const introEnd = () => {
    setIntroGoOut(true);
    setTimeout(() => {
      setIntroPlayed(true);
    }, 1000);
  };
  useEffect(() => {
    setTimeout(() => {
      setButtonView(true);
    }, 1900);
  }, []);
  useContext(IntroCtx);
  return (
    <div id="intro" data-intro-out={introGoOut}>
      <h1>Welcome</h1>
      <button onClick={introEnd} className={buttonView ? "animEnd" : ""}>
        ENTER
      </button>
    </div>
  );
};
