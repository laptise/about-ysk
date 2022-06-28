import type { NextPage } from "next";
import { createContext, FC, useContext, useEffect, useRef, useState } from "react";
import { Layout } from "../components/header";
import styles from "../styles/Home.module.scss";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Checkbox, Divider, FormControlLabel, FormGroup, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { bioList, BioLog, BioType } from "../data/jobs";

type SingleTimeLineProps = {
  data: BioLog;
  views: { viewDev: boolean; viewBio: boolean; viewMusic: boolean; viewArt: boolean; viewLife: boolean };
  onClick?: () => void;
};

const PickedBioCtx = createContext<{ pickedBioState: State<BioLog | null> }>(null as any);

const SingleTimeLine: FC<SingleTimeLineProps> = ({ data, views, onClick }) => {
  const [pickedBio, setPickedBio] = useContext(PickedBioCtx).pickedBioState;

  const view =
    (data.type.includes("dev") && views.viewDev) ||
    (data.type.includes("art") && views.viewArt) ||
    (data.type.includes("bio") && views.viewBio) ||
    (data.type.includes("music") && views.viewMusic) ||
    (data.type.includes("life") && views.viewLife);
  return (
    <TimelineItem onClick={() => setPickedBio(data)} data-tl-opened={view} className={styles.tl} sx={{ paddingLeft: 0 }}>
      <TimelineOppositeContent sx={{ maxWidth: 90, paddingLeft: 0 }} color="text.secondary">
        {data.time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>{data.content}</TimelineContent>
    </TimelineItem>
  );
};
function BioGraphy() {
  const [viewBio, setViewBio] = useState(true);
  const [viewLife, setViewLife] = useState(true);
  const [viewMusic, setViewMusic] = useState(false);
  const [viewDesign, setViewDesing] = useState(false);
  const [viewDev, setViewDev] = useState(false);
  const views = { viewDev, viewMusic, viewArt: viewDesign, viewBio, viewLife };
  return (
    <Stack className={styles.bioGraphy}>
      <Typography variant="h3">Life</Typography>
      <FormGroup sx={{ flexDirection: "row" }}>
        <FormControlLabel control={<Checkbox checked={viewBio} onChange={(e) => setViewBio(e.currentTarget.checked)} />} label="bio" />
        <FormControlLabel control={<Checkbox checked={viewMusic} onChange={(e) => setViewMusic(e.currentTarget.checked)} />} label="music" />
        <FormControlLabel control={<Checkbox checked={viewDesign} onChange={(e) => setViewDesing(e.currentTarget.checked)} />} label="graphic" />
        <FormControlLabel control={<Checkbox checked={viewDev} onChange={(e) => setViewDev(e.currentTarget.checked)} />} label="dev" />
        <FormControlLabel control={<Checkbox checked={viewLife} onChange={(e) => setViewLife(e.currentTarget.checked)} />} label="life" />
      </FormGroup>
      <Stack direction="row">
        <Timeline sx={{ flex: 1, padding: 0 }}>
          {bioList.map((bio) => (
            <SingleTimeLine key={bio.content} views={views} data={bio} />
          ))}
        </Timeline>
        <Stack sx={{ flex: 1 }}>
          <Specific />
        </Stack>
      </Stack>
    </Stack>
  );
}

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <div className={`${styles.inner} ${styles.pic}`}>
        <div id={styles.selfIcon}>
          <Image alt="profile image" width={200} height={200} src="https://avatars.githubusercontent.com/u/39040007?v=4" />
        </div>
      </div>
      <div className={`${styles.inner} ${styles.bio}`}>
        <span className={styles.name}>金 潤洙(Kim Yoonsoo)</span>
        <span className={styles.desc}>
          <span className={styles.badgeNow}>現</span>フロントエンドエンジニア・フルスタックエンジニア
        </span>
        <span className={styles.desc}>
          <span className={styles.badgeEx}>前</span>
          Webデザイナー・アシスタントデザイナー・アーティストマネージャー・音楽プロデューサー・作曲家・サウンドエンジニア・ギタリスト・ベーシスト・カフェ店員・化粧品店通訳販売員
        </span>
        <div className={styles.links}>
          <a>
            <EmailIcon /> laptise@live.jp
          </a>
          <a href="https://github.com/laptise" target={"_blank"} rel="noreferrer">
            <GitHubIcon /> @laptise
          </a>
        </div>
      </div>
    </div>
  );
};

const Specific = () => {
  const div = useRef<HTMLDivElement>(null);
  const [pickedBio] = useContext(PickedBioCtx).pickedBioState;
  useEffect(() => {
    const clientRect = div.current!.getBoundingClientRect();

    // 画面の上端から、要素の上端までの距離
    var y = clientRect.top;
    const py = window.pageYOffset + clientRect.top;
    const offset = 50;
    console.log(py);
    document.onscroll = (e) => {
      const { scrollY } = window;
      if (scrollY + 64.5 > py) {
        div.current!.classList.add(styles.fixed);
      } else {
        div.current!.classList.remove(styles.fixed);
      }
    };
    return () => {
      document.onscroll = () => {};
    };
  }, []);
  const typeToString = (type: BioType) => {
    switch (type) {
      case "bio":
        return "Bio";
      case "art":
        return "Graphic";
      case "music":
        return "Music";
      case "dev":
        return "Dev";
      case "life":
        return "Life";
    }
  };
  return (
    <div ref={div} className={styles.spec}>
      <div style={{ flex: 1 }}></div>
      <Stack sx={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span className={styles.time}>{pickedBio?.time}</span>
          <span className={styles.tags}>
            {pickedBio?.type.map((t) => (
              <span className="" key={t}>
                {typeToString(t)}
              </span>
            ))}
          </span>
        </div>
        <span className={styles.title}>{pickedBio?.content}</span>
        {Boolean(pickedBio?.desc) && (
          <div>
            <Divider sx={{ m: 1, borderWidth: 2 }} />
            <span style={{ paddingLeft: 8, display: "inline-block", width: "100%", fontSize: "0.9rem", whiteSpace: "pre-line" }}>
              {pickedBio?.desc || ""}
            </span>
          </div>
        )}
      </Stack>
    </div>
  );
};

const Home: NextPage = () => {
  const pickedBioState = useState<BioLog | null>(null);
  const initCtx = { pickedBioState };
  useEffect(() => {
    document.body.dataset.page = "home";
  }, []);
  return (
    <Layout pageId={"home"}>
      <PickedBioCtx.Provider value={initCtx}>
        <AboutMe />
        <BioGraphy />
      </PickedBioCtx.Provider>
    </Layout>
  );
};

export default Home;
