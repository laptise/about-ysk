import { ReactNode } from "react";

type bioType = "bio" | "dev" | "music" | "art";
export class BioLog {
  constructor(public time: string, public content: string, public type: bioType[], public desc?: ReactNode) {}
}

export const bioList = [
  new BioLog("1991.10.25", "👶 韓国釜山生まれ", ["bio"], <div>hi</div>),
  new BioLog("2006.1", "🇯🇵 日本に移住", ["bio"]),
  new BioLog("2006.7", "🎸 バンドを始める", ["music"]),
  new BioLog("2012.2", "🇰🇷 韓国に帰国", ["bio"]),
  new BioLog("2013", "🎛 音響を専門的に学び始める", ["music"]),
  new BioLog("2014", "💿 初シングル・アルバム発売", ["music"]),
  new BioLog("2015", "🎉 初めてAdobe Illustratorに触れる", ["art"]),
  new BioLog("2015", "💿 「SERRER」ファーストフルアルバム発売", ["music"]),
  new BioLog("2017.1", "🇯🇵 日本に復帰", ["bio"]),
  new BioLog("2018", "🧑‍💻 初めてのホームページ制作", ["dev"]),
  new BioLog("2018", "🎨 アルバムジャケット制作・グッズ制作を担当する", ["music"]),
  new BioLog("2018", "💿 「Foxee」ファーストフルアルバム発売", ["music"]),
  new BioLog("2018", "🧑‍💻 ホームページにイベント告知・予約機能を追加する", ["dev"]),
  new BioLog("2018", "🎨 新大久保の化粧品店POP制作", ["art"]),
  new BioLog("2018.6", "🎨 アシスタントデザイナーとしてハーフタイム勤務", ["bio", "art"]),
  new BioLog("2019.2", "💼 アシスタントデザイナーを退職", ["bio"]),
  new BioLog("2019.3", "💼 友人と音楽事務所設立", ["bio", "music"]),
  new BioLog("2019.4", "💼 会社のホームページを制作", ["dev"]),
  new BioLog("2019.6", "🧑‍💻 所属アーティストのイベント予約サイトを開設", ["dev"]),
  new BioLog("2019.9", "🧑‍💻 事務所用のバーコード式在庫管理システムを解説", ["dev"]),
  new BioLog("2019.11", "📝 情報セキュリティマネジメント資格取得", ["bio", "dev"]),
  new BioLog("2020.1", "💼 音楽事務所を退職", ["bio"]),
  new BioLog("2020.2", "🧑‍💻 エンジニアとして入社しキャリアを始める", ["bio", "dev"]),
  new BioLog("2020.2", "🧑‍💻 コーポレートサイトを改修", ["dev"]),
  new BioLog("2020.3", "🧑‍💻 コーポレートサイトを改修", ["dev"]),
  new BioLog("2020.4", "🧑‍💻 エンジニア紹介システムを開発", ["dev"]),
  new BioLog("2020.6", "🧑‍💻 常駐先に出向", ["dev"]),
  new BioLog("2021.4", "💼 所属会社の移籍", ["bio"]),
];
