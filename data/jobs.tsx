import { ReactNode } from "react";

export type BioType = "bio" | "dev" | "music" | "art";
export class BioLog {
  constructor(public time: string, public content: string, public type: BioType[], public desc?: string) {}
}

export const bioList = [
  new BioLog("1991.10.25", "👶 韓国釜山生まれ", ["bio"], `釜山の方言はできないが実は釜山で生まれている。`),
  new BioLog(
    "2006.1",
    "🇯🇵 日本に移住",
    ["bio"],
    `父親が日本に駐在員として派遣されることになった。家族揃って東京新宿区に移住した。不安も多かった。
  
  自分の環境がいっぺんに変化し、世界観が崩れる気がした。同じ時間線の上にこんな世界も存在していたんだと衝撃を受けた。`
  ),
  new BioLog(
    "2006.7",
    "🎸 バンドを始める",
    ["bio", "music"],
    `人生の大きな節目となるできごと。スクールバンドでギターを弾くことになる。学祭に出演した。
  
  作曲の楽しさを知るようになり、いつも放課後は作曲に夢中になっていた。
  
  恐らく、ものづくりが好きになったのはここからだった気がする。`
  ),
  new BioLog(
    "2012.2",
    "🇰🇷 韓国に帰国",
    ["bio"],
    `東北大震災以降、父親の会社が派遣を引き上げる方針となる。兵役が残っていたので一緒に帰国を決定した。
    
    久々に母国に戻り、自国民として暮らすことの楽さを感じた。しかし、軍人になりたくはなかった。`
  ),
  new BioLog("2013", "🎛 音響を専門的に学び始める", ["music"], "兵役が免れる。夢だった音楽活動をするためにアカデミーに入学し音響学を学ぶ。"),
  new BioLog("2014", "💿 初シングル・アルバム発売", ["music"], "ベーシストとしてインディーズデビューに成功。"),
  new BioLog("2015", "🎉 初めてAdobe Illustratorに触れる", ["art"], "所属のバンドのアルバム・ジャケットを入稿するためIllustratorを触れる。"),
  new BioLog("2015", "💿 「SERRER」ファーストフルアルバム発売", ["music"], "念願のフルアルバムが発売される。"),
  new BioLog(
    "2017.1",
    "🇯🇵 日本に復帰",
    ["bio"],
    `所属していたバンドが解散した。

    日本で芸能事務所で練習生をしていた友人から一緒に活動しないかと誘われ、日本で機会を掴むため戻ってきた。`
  ),
  new BioLog(
    "2018",
    "🧑‍💻 初めてのホームページ制作",
    ["dev"],
    `バンドのプロモーションになればと思い、ホームページ制作に挑戦する。ネットからテンプレートを購入しHTMLやCSSを少し修正した。
    
    Webサイトの文字が変えられるだけでプログラマーになった気がした。`
  ),
  new BioLog(
    "2018",
    "🎨 アルバムジャケット・CD盤面デザイン制作する",
    ["art"],
    `Illustratorを使って、チラシを作り始めた。PCでデータを作成して印刷所で印刷をした。ボーカルが絵が上手だったので、その絵を編集して盤面のデザインにした。
    
    自分で思い描けば、モノが作れるという楽しさを感じた。どんな分野でも、頑張れば何でもできる気がした。

    友人に「お前なら宇宙ステーションでも作れそう」って言われた。嬉しかった。`
  ),
  new BioLog(
    "2018",
    "💿 「Foxee」ファーストフルアルバム発売",
    ["music"],
    `日本で初めてのフルアルバムを発売した。
  
  `
  ),
  new BioLog("2018", "🧑‍💻 ホームページにイベント告知・予約機能を追加する", ["dev"]),
  new BioLog("2018", "🎨 新大久保の化粧品店POP制作", ["art"]),
  new BioLog("2018.6", "🎨 アシスタントデザイナーとしてハーフタイム勤務", ["bio", "art"]),
  new BioLog("2019.2", "💼 アシスタントデザイナーを退職", ["bio"]),
  new BioLog(
    "2019.3",
    "💼 友人と音楽事務所設立",
    ["bio", "music"],
    `音楽事務所をやることにした。将来性のあるアイドルグループを見つけ、専属契約を成約させた。`
  ),
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
