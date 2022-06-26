import type { NextPage } from "next";
import { FC, useEffect, useState } from "react";
import { Layout } from "../components/header";
import styles from "../styles/Home.module.scss";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Checkbox, FormControlLabel, FormGroup, Stack, Typography } from "@mui/material";
import Image from "next/image";
type SingleTimeLineProps = {
  viewOn: boolean;
  time: string;
  content: string;
};
const SingleTimeLine: FC<SingleTimeLineProps> = ({ viewOn, time, content }) => (
  <TimelineItem data-tl-opened={viewOn} className={styles.tl} sx={{ paddingLeft: 0 }}>
    <TimelineOppositeContent sx={{ maxWidth: 90, paddingLeft: 0 }} color="text.secondary">
      {time}
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>{content}</TimelineContent>
  </TimelineItem>
);
function BioGraphy() {
  const [viewBio, setViewBio] = useState(true);
  const [viewMusic, setViewMusic] = useState(false);
  const [viewDesign, setViewDesing] = useState(false);
  const [viewDev, setViewDev] = useState(false);
  return (
    <Stack className={styles.bioGraphy}>
      <Typography variant="h3">Life</Typography>
      <FormGroup sx={{ flexDirection: "row" }}>
        <FormControlLabel control={<Checkbox checked={viewBio} onChange={(e) => setViewBio(e.currentTarget.checked)} />} label="bio" />
        <FormControlLabel control={<Checkbox checked={viewMusic} onChange={(e) => setViewMusic(e.currentTarget.checked)} />} label="music" />
        <FormControlLabel control={<Checkbox checked={viewDesign} onChange={(e) => setViewDesing(e.currentTarget.checked)} />} label="graphic" />
        <FormControlLabel control={<Checkbox checked={viewDev} onChange={(e) => setViewDev(e.currentTarget.checked)} />} label="dev" />
      </FormGroup>
      <Stack direction="row">
        <Timeline sx={{ flex: 1, paddingLeft: 0 }}>
          <SingleTimeLine viewOn={viewBio} time={"1991.10.25"} content={"👶 韓国釜山生まれ"} />
          <SingleTimeLine viewOn={viewBio} time={"2006.1"} content={"🇯🇵 日本に移住"} />
          <SingleTimeLine viewOn={viewMusic} time={"2006.7"} content={"🎸 バンドを始める"} />
          <SingleTimeLine viewOn={viewBio} time={"2012.2"} content={"🇰🇷 韓国に帰国"} />
          <SingleTimeLine viewOn={viewMusic} time={"2013"} content={"🎛 音響を専門的に学び始める"} />
          <SingleTimeLine viewOn={viewMusic} time={"2014"} content={"💿 初シングル・アルバム発売"} />
          <SingleTimeLine viewOn={viewDesign} time={"2015"} content={"🎉 初めてAdobe Illustratorに触れる"} />
          <SingleTimeLine viewOn={viewMusic} time={"2015"} content={"💿 「SERRER」ファーストフルアルバム発売"} />
          <SingleTimeLine viewOn={viewBio} time={"2017.1"} content={"🇯🇵 日本に復帰"} />
          <SingleTimeLine viewOn={viewDev} time={"2018"} content={"🧑‍💻 初めてのホームページ制作"} />
          <SingleTimeLine viewOn={viewDesign} time={"2018"} content={"🎨 アルバムジャケット制作・グッズ制作を担当する"} />
          <SingleTimeLine viewOn={viewMusic} time={"2018"} content={"💿 「Foxee」ファーストフルアルバム発売"} />
          <SingleTimeLine viewOn={viewDev} time={"2018"} content={"🧑‍💻 ホームページにイベント告知・予約機能を追加する"} />
          <SingleTimeLine viewOn={viewDesign} time={"2018"} content={"🎨 新大久保の化粧品店POP制作"} />
          <SingleTimeLine viewOn={viewBio || viewDesign} time={"2018.6"} content={"🎨 アシスタントデザイナーとしてハーフタイム勤務"} />
          <SingleTimeLine viewOn={viewBio} time={"2019.2"} content={"💼 アシスタントデザイナーを退職"} />
          <SingleTimeLine viewOn={viewBio} time={"2019.3"} content={"💼 友人と音楽事務所設立"} />
          <SingleTimeLine viewOn={viewDev} time={"2019.4"} content={"💼 会社のホームページを制作"} />
          <SingleTimeLine viewOn={viewDev} time={"2019.6"} content={"🧑‍💻 所属アーティストのイベント予約サイトを開設"} />
          <SingleTimeLine viewOn={viewDev} time={"2019.9"} content={"🧑‍💻 事務所用のバーコード式在庫管理システムを解説"} />
          <SingleTimeLine viewOn={viewBio || viewDev} time={"2019.11"} content={"📝 情報セキュリティマネジメント資格取得"} />
          <SingleTimeLine viewOn={viewBio} time={"2020.1"} content={"💼 音楽事務所を退職"} />
          <SingleTimeLine viewOn={viewBio || viewDev} time={"2020.2"} content={"🧑‍💻 エンジニアとして入社しキャリアを始める"} />
          <SingleTimeLine viewOn={viewDev} time={"2020.2"} content={"🧑‍💻 コーポレートサイトを改修"} />
          <SingleTimeLine viewOn={viewDev} time={"2020.3"} content={"🧑‍💻 コーポレートサイトを改修"} />
          <SingleTimeLine viewOn={viewDev} time={"2020.4"} content={"🧑‍💻 エンジニア紹介システムを開発"} />
          <SingleTimeLine viewOn={viewDev} time={"2020.6"} content={"🧑‍💻 常駐先に出向"} />
          <SingleTimeLine viewOn={viewBio} time={"2021.4"} content={"💼 所属会社の移籍"} />
        </Timeline>
        <Specific />
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
  return <div className={styles.spec}>sorewa..</div>;
};

const Home: NextPage = () => {
  useEffect(() => {
    document.body.dataset.page = "home";
  }, []);
  return (
    <Layout pageId={"home"}>
      <AboutMe />
      <BioGraphy />
    </Layout>
  );
};

export default Home;
