import {
  ActivityProps,
  BookProps,
  NavbarProps,
  HeroProps,
  ProfileProps,
  Activity,
  AboutProps,
  InformationProps,
} from "./type";
import mainImg from "@/src/assets/images/main_visual.jpg";
import mainSpImg from "@/src/assets/images/main_visual_sp.jpg";
import schoolImg from "@/src/assets/images/school.jpg";
import forestImg from "@/src/assets/images/forest.jpg";
import sportsImg from "@/src/assets/images/sports.jpg";
import gaiaImg from "@/src/assets/images/gaiasymphony.jpg";
import moonImg from "@/src/assets/images/moon.jpg";
import horseImg from "@/src/assets/images/horse.jpg";
import enterpriseImg from "@/src/assets/images/enterprise.jpg";
import personalImg from "@/src/assets/images/personal.jpg";
import mentorImg from "@/src/assets/images/mentor.png";
import portlaitImg from "@/src/assets/images/portlait.jpg";
import book03Img from "@/src/assets/images/book03.jpg";
import book04Img from "@/src/assets/images/book04.jpg";
import book05Img from "@/src/assets/images/book05.jpg";
import book06Img from "@/src/assets/images/book06.jpg";

export const navbarData: NavbarProps = {
  links: [
    {
      label: "プロフィール",
      href: "/profile",
    },
    {
      label: "著書一覧",
      href: "/profile#book",
    },
    {
      label: "主旨",
      href: "/about",
    },
  ],
};

export const heroData: HeroProps = {
  title: "山藤塾",
  subtitle: "今という時代の「生き方」を学ぶ塾",
  image: {
    src: mainImg,
    alt: "山藤塾",
  },
  mobileImage: {
    src: mainSpImg,
    alt: "山藤塾",
  },
};

export const aboutData: AboutProps = {
  title: "山藤塾とは",
  description:
    "年に4回、季節ごとに、塾長の山藤賢（さんどうまさる）が学びを得たいと思う人物を招待し、同じ学びを得たい同志達に無料で開放するとともに飲食を共にし語らう場が山藤塾の原点です。コロナ禍を経て新しいステージに移行し、現在は山藤自らが登壇することもありますが、イベントの参加は全て繋がりのある方に限られています。人生を「肯定的に生きる」ということをテーマの一つとして掲げていますが、ただあなたという存在が「あるだけ」で大丈夫。それが肯定的な生き方です。山藤塾はまずは感じる自分と繋がることを大切に、「やり方」ではなく「あり方」を学びながら、他者と繋がり、社会と繋がり、自然（宇宙）と繋がり、世の中が少しでも生きやすくなるといいなということを考えるための私塾でありコミュニティーです。",
};

export const educationActivity: Activity = {
  title: "山藤塾 with\nEducation",
  description:
    "山藤が学校長として関わる昭和医療技術専門学校という学び舎を中心に、「結果も出し、社会からの高い評価も受けながら、自分らしく生き生きと活動する学生達、社会人」を生み出しています。本医療法人における人材育成も含めて「他者を幸せにすることが自分の幸せである」というあり方と、日本一の国家試験合格率をほこると共に高校時代不登校だった学生も毎日生き生きと通うようになるその場創り、あたたかい実践教育は書籍を始め多くのメディアでも取り上げられ、自分と他者、そして社会を大切にする他にはない先端教育として注目されています。",
  image: {
    src: schoolImg,
    alt: "山藤塾 with Education",
  },
  mobileImage: {
    src: schoolImg,
    alt: "山藤塾 with Education",
  },
  href: "/education",
};

export const forestActivity: Activity = {
  title: "山藤塾 with\n「森のような経営」",
  description:
    "山藤が理事長を務める「医療法人社団昭和育英会」の経営を、コーチングの日本の第一人者にして「森のリトリート」創業者である山田博氏が、社員が安心してのびのびと働けるとてもユニークな経営として取り上げ、対談を通して「森のような経営」という概念で紹介しました。本法人の学校教育の現場でも、「心理的安全性」に優れた場創りを取り上げていただき、教育のカテゴリーとしても全国から注目を浴びています。またその書籍を拠り所とした対話会は現在、全国各地で開催されています。",
  image: {
    src: forestImg,
    alt: "山藤塾 with 「森のような経営」",
  },
  mobileImage: {
    src: forestImg,
    alt: "山藤塾 with 「森のような経営」",
  },
  href: "/forest",
};

export const sportsActivity: Activity = {
  title: "山藤塾 with\nsports",
  description:
    "山藤の整形外科医師としての活動の中でその中心にスポーツドクターとしての役割が大きくありました。Jリーグや、日本代表各世代のチームドクター、女子日本代表のなでしこジャパンではオリンピック、ワールドカップと多くの大会を共に戦い抜きました。横浜つづき整形外科クリニックの創設とその運営もその大事な活動と社会への還元の一端です。現在は東京都サッカー協会医学委員会委員長として東京オリンピック・パラリンピック2020のマネジメントを担当したり、スポーツのみならず文化芸能関係含めた「身体」に関わることにも依頼を受けて応対しています。また近年はメンタルやマインドのサポートも多くなり多くのアスリートや指導者にも山藤塾として個人対応や学びの場を提供しています。",
  image: {
    src: sportsImg,
    alt: "山藤塾 with sports",
  },
  mobileImage: {
    src: sportsImg,
    alt: "山藤塾 with sports",
  },
  href: "/sports",
};

export const gaiaActivity: Activity = {
  title: "山藤塾 with\nガイアシンフォニー",
  description:
    "山藤の人生に大きな影響を与えたものの一つに、「ガイアシンフォニー」という映画があります。龍村ゆかりさん、山田博さんとのご縁からその繋がりは生まれ、アラスカへの熊との対話の旅、そして2023年4月の山藤塾withガイアシンフォニーの企画（ガイアシンフォニー第三番：星野道夫編上映会と3人の対話会）へと繋がりました。このイベントにも会場に入りきれないくらいの方々の申し込みがあり、終了後の懇親会も含めてとてつもなく素晴らしい場のエネルギーとなりました。定期的な企画、イベントではありませんが、これからも繋がっていく山藤塾の大事な活動の一つです。",
  image: {
    src: gaiaImg,
    alt: "山藤塾 with ガイアシンフォニー",
  },
  mobileImage: {
    src: gaiaImg,
    alt: "山藤塾 with ガイアシンフォニー",
  },
  href: "/gaia",
};

export const moonActivity: Activity = {
  title: "山藤塾 with\n月待ち講",
  description:
    "かつて江戸時代の日本では下弦の月の出を待つ間に人々が集まって静かに語り合う「月待ち講」という文化が全国各地にあったそうです。それを現代の風習に適合させ、ネイティブアメリカンの叡智など取り入れ、女性同士が輪になって静かに語り合う場を復活させた方々がいます。その男性版が2015年から始まりました。私はその第1回のメンバーに招待され参加しましたが、その後、諸事情より、第3回目から講元を頼まれ、他の2人の代表と共に務めさせていただいております。他人の話を質問もせずにただ聞くだけの傾聴の会という珍しくそして革新的な対話の場となっております。1年ごとに参加者が入れ替わるシステムで現在は第7期を開催しております。",
  image: {
    src: moonImg,
    alt: "山藤塾 with 月待ち講",
  },
  mobileImage: {
    src: moonImg,
    alt: "山藤塾 with 月待ち講",
  },
  href: "/moon",
};

export const horseActivity: Activity = {
  title: "山藤塾 with\nhorse",
  description:
    "サラブレッド（競走馬）がその役割を全うした後の余生を、共に生き、考える立場としての活動を、当事者意識としてサポートしています。乗馬としてのリトレーニングを始め、ホースセラピーへの転用など、様々な取り組みを体験・支援しております。",
  image: {
    src: horseImg,
    alt: "山藤塾 with horse",
  },
  mobileImage: {
    src: horseImg,
    alt: "山藤塾 with horse",
  },
  href: "/horse",
};

export const enterpriseActivity: Activity = {
  title: "山藤塾 with\nenterprise",
  titleFull: "山藤塾 with\nenterprise\n(企業・教育機関向け)",
  description:
    "現代型組織マネジメント、関係性の向上、個人の質的成長、そして学生教育、人材育成、スポーツ関係、身体知などを始めとした先進的な講演を企業向け、学校向けに数多く行ってまいりました。現在は申し訳ありませんが、依頼数にお応え出来ない状況が続いたため、打ち合わせも含めた完全予約制で、90分50万円からの金額で、真に必要とされる方々のみお受けしております。企業向けワークショップは1時間10万円からでお引き受けしています。",
  image: {
    src: enterpriseImg,
    alt: "山藤塾 with enterprise",
  },
  mobileImage: {
    src: enterpriseImg,
    alt: "山藤塾 with enterprise",
  },
  href: "/enterprise",
};

export const personalActivity: Activity = {
  title: "山藤塾 with\npersonal",
  titleFull: "山藤塾 with\npersonal\n(個人サポート)",
  description:
    "企業経営者、トップアスリート、育成・指導者、芸能関係者、教育関係者などを始め、各業界を代表するような方々とのご縁で個人サポートをさせていただいております。もちろん特別な立場の方ではなく一般の方々も多数お受けしております。個人としてのポテンシャルアップや、メンタルサポートまで個々の要望に合わせて身体知も含めた深い気づきの時間を共に創造していきます。個人セッションは1時間10万円からでお引き受けしておりますが、現在は満員の状態のため知り合いの紹介など繋がりのある人に限っております。",
  image: {
    src: personalImg,
    alt: "山藤塾 with personal",
  },
  mobileImage: {
    src: personalImg,
    alt: "山藤塾 with personal",
  },
  href: "/personal",
};

export const mentorActivity: Activity = {
  title: "山藤塾～メンター塾～",
  description:
    "未来を担う若者、命に関わるようなことを抱えている方々、これからの社会をより良くしたいため指針や気づきを必要としている方々で、メンターを必要としている方には無償のサポートも行っています。完全紹介制とさせていただいております。",
  image: {
    src: mentorImg,
    alt: "山藤塾～メンター塾～",
  },
  mobileImage: {
    src: mentorImg,
    alt: "山藤塾～メンター塾～",
  },
  href: "/mentor",
};

export const activityData: ActivityProps = {
  header: {
    title: "活動内容",
    subtitle: "山藤塾で取り組んでいる\n様々な活動をご紹介します",
  },
  activities: [
    educationActivity,
    forestActivity,
    sportsActivity,
    gaiaActivity,
    moonActivity,
    horseActivity,
    enterpriseActivity,
    personalActivity,
    mentorActivity,
  ],
};

export const profileData: ProfileProps = {
  image: {
    src: portlaitImg,
    alt: "",
  },
  name: "山藤 賢",
  descriptions: [
    "医療法人社団昭和育英会理事長。昭和医療技術専門学校学校長。医学博士。",
    "1972年9月14日東京都生まれ。昭和大学医学部、同大学院医学研究科外科系整形外科修了。",
    "臨床検査技師教育の分野では日本臨床検査学教育協議会の理事を長年務め、全国短期大学専門学校部会会長なども務める。",
    "幼稚園から始めたサッカーでは暁星中学校時代にレギュラーとして東京都大会優勝、全国大会出場を経験。しかし暁星高校2年生の時に、ケガ、人間関係（顧問、両親、友人）の悩みから心を病み、サッカー部を退部、自殺をしに森を彷徨うまでの経験をした後、医学部を目指し、偏差値39からいきなり猛勉強を始め、現役で昭和大学医学部に合格。受験した大学は全て合格し、通った予備校では奇跡と言われ伝説となる(笑)",
    "医師となってからは整形外科専門医、スポーツドクターとして、Ｊリーグ、サッカー日本代表各世代のチームドクターを歴任。サッカー日本女子代表・なでしこジャパンではオリンピック、ワールドカップなどをベンチに入り共に戦い抜いた。現在は東京都サッカー協会医学委員会委員長、2020東京オリンピック・パラリンピックでは現場のトップとしてメディカルアドバイザーを務めた。",
    "その教育論、人材育成、経営論は多くの共感を呼び、講演依頼、執筆依頼も数多く、著書に『社会人になるということ』（幻冬舎）、『働き方の処方箋～人生を肯定的に生きる～』（医歯薬出版）、『森のような経営～社員が驚くほど自由で生き生きする。「心理的安全性」に溢れた組織づくり～』（山田博共著／ワニプラス）、『社会人になるということ令和版』（幻冬舎）などがあり、近著は書店週間ビジネス書ランキング1位になるなど現在注目の教育者、経営者、リーダーでもある。",
    "趣味は仕事と学校長と自ら語り、旅と冒険、馬（乗れもするけれどもちろん券を買う方）が大好き。",
    "また小学校から高校までの同級生である歌舞伎役者10代目松本幸四郎との縁で、決して得意とは言えない文化面での勉強も兼ねて毎月歌舞伎鑑賞に出かけ、帰りに楽屋で感想を述べている。その繋がりから後援会の会長を頼まれて引き受け、テレビ出演にも引っ張り出され、現在に至り、昭和医療技術専門学校40周年記念の式典では松本幸四郎から祝詞と踊り、トークショーの時間を頂いた。",
    "現在、これまでの数多くの経験と、得意などうでもいいたくさんの雑学、そしてご縁をいただいた人達との貴重な繋がりから、ボーダーレスな叡智を学ぶ場としての山藤塾という私塾、コミュニティーを楽しんで開催している。",
    "　",
    "以上　書籍のプロフィール欄、学会講演紹介プロフィールより抜粋・一部修正",
  ],
};

export const bookData: BookProps = {
  header: {
    title: "著書一覧",
  },
  books: [
    {
      title: "社会人になるということ～令和版～",
      description:
        "2013年に発売され、各書店にてランキング1位にもなりました「社会人になるということ」の令和版としての書き下ろしとなります。令和に入り、コロナ禍も経て、働き方、生き方も大きく変わろうとしています。そのような社会情勢の変化の中、山藤が学校長として昭和医療技術専門学校で教えている社会人としての「あり方」を全く新しい切り口から講義形式で伝えている本になります。この混迷の時代を生きる一つの指針として若い方のみならず、社会で活躍する多くの人に手に取っていただきたい1冊となっています。",
      image: {
        src: book06Img,
        alt: "社会人になるということ～令和版～",
      },
    },
    {
      title: "森のような経営",
      description:
        "プロコーチとしてコーチングの日本の第一人者でもあり、また森のリトリートというプログラムの創始者でもある、山田博さんが、本法人の経営、また学校教育などに触れて感銘を受け、ぜひ対談の上で書籍化を進めたいということでワニプラス社から発刊されることになったものです。学校教育に携わる人や組織マネージメント、また自然との関わりに興味がある方などにも、役立つ一冊となっております。",
      image: {
        src: book05Img,
        alt: "森のような経営",
      },
    },
    {
      title: "医療人の悩みQ&A\n働き方の処方箋 -人生を肯定的に生きる-",
      description:
        "2020年4月～2021年3月まで、1年に渡って雑誌「Medical Technology」にて掲載されていた山藤校長の連載が、読者からの反響が大きく、好評につき、2021年4月、出版社の意向で書籍化されました。学生の立場から新人臨床検査技師、また組織のマネジメントリーダーまで、幅広い方を対象にした、働き方、生き方の指南書となっています。ぜひ臨床検査技師に限らず多くの人に手に取って読んでいただきたい1冊です。",
      image: {
        src: book04Img,
        alt: "医療人の悩みQ&A 働き方の処方箋 -人生を肯定的に生きる-",
      },
    },
    {
      title: "社会人になるということ",
      description:
        "山藤校長は、経営者にして医療人、そして教育者でもあり、なでしこジャパン北京オリンピック時にもチームドクターとして帯同しました。その豊富な経験を活かした多角的な視点で、社会人として必要な素養を解説しています。世界一を目指す女子サッカー選手にも、社会人にも共通する自分のフィールドで成長し続けるために必要なことを、学生にもわかりやすい内容で紹介しております。",
      image: {
        src: book03Img,
        alt: "社会人になるということ",
      },
    },
  ],
};

export const informtionData: InformationProps = {
  header: {
    title: "2024年版 山藤塾ご案内",
  },
  callToAction: {
    text: "詳細はこちら",
    href: "/seminar-2024",
  },
};
