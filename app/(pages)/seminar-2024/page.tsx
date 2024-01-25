const Page = () => {
  return (
    <div className="mx-auto mt-4 max-w-4xl">
      <div className="my-5 flex flex-col items-center justify-center">
        <h1 className="my-5 whitespace-pre-wrap text-center text-3xl font-bold sm:text-4xl md:whitespace-nowrap">
          2024年版 山藤塾ご案内
        </h1>
        <h3 className="text-md my-5 text-right font-semibold sm:text-lg">
          主宰&emsp;山藤 賢（さんどう まさる）
        </h3>
        <article className="prose-sm max-w-none">
          <p className="px-4">
            &emsp;今年度より、山藤塾の新たな試みとして、年間を通しての講座を開催することにいたしました。その第1期生として30名限定で募集を行います。コンセプトとしては、「非宗教的宗教～宗教ではなくとも我々には拠り所は必要である～」としました。言葉としては奇妙で難しいと感じるかもしれませんが、我々が信じる「拠り所」というものは本来生きていく上で必要なものであると私は常々思っています。それが宗教であってももちろんいいのですが、宗教という括りではなくとも（それが執着という弊害になることも人によってはあるでしょうし…）何か自分で握っておくものがあればそれでもいいのではないかなと。と、いうところから、今年の塾の物語は始まっています。そしてそれは日本人らしい自分自身の価値観に寄り添うもの、日常的な倫理観、または大きな世界観、自然観、宇宙観のようなものでもいいのではとも。もしかしたら会社さえもその拠り所としてのコミュニティーという存在でもいいのではないかと思いますし、ウチの法人も専門学校もそういう拠り所だと自負しています。なので、宗教も入れてあるし宗教じゃないのも色々入れてある。そんな今年度の塾です。実際の本校の教育の中で私が実践してる外部講師による「医療人特論」の講座をそのまま大人向けにしてみました。さて、大人には理解できて響くのかなぁ～…(^^;
            (笑)
          </p>
          <p className="px-4">
            &emsp;そして、このたびの講座は、その自分形成において、様々な分野で私が「ホンモノ」と信じている方々の話を聞き、対話を繰り広げることによって自分の中の「体験」を増やすことを目的としています。この講座を受けたらどういう効果があるとか、最終的な目標とかは設定いたしません。自分自身の中に響くものがあると感じた方にご自身の判断でご参加いただけたらと思っています。ただ、講師陣がスペシャルであることだけは胸を張って言わせていただきます。そして何より私自身が一番話を聞くのを楽しみにしています。時間やお金、家族、仕事の制約など、様々な葛藤や壁を乗り越えてこの塾に参加される1期生の方々は後々きっと伝説となる…と私は思っています。
          </p>
        </article>
      </div>
      <section id="schedule" className="my-5 px-4">
        <h3 className="text-md font-semibold sm:text-lg">開催概要</h3>
        <p className="mb-4 text-sm">4月春開講～12月冬閉講（全8回）</p>
        <table className="w-full table-fixed border-collapse border border-slate-400">
          <tbody>
            <tr>
              <td className="w-24 border border-slate-300 p-2 text-center text-sm">
                4月21日
                <br />
                教育
              </td>
              <td className="border border-slate-300 p-2 text-sm">
                「開講式＆人間性教育とは」（仮）
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 p-2 text-center text-sm">
                5月19日
                <br />
                いのち
              </td>
              <td className="border border-slate-300 p-2 text-sm">
                「宇宙のリズム」（仮）
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 p-2 text-center text-sm">
                6月9日
                <br />
                瞑想
              </td>
              <td className="border border-slate-300 p-2 text-sm">
                「マインドフルネス」（仮）
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 p-2 text-center text-sm">
                7月21日
              </td>
              <td className="border border-slate-300 p-2 text-sm">
                シークレットゲスト
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 p-2 text-center text-sm">
                8月
              </td>
              <td className="border border-slate-300 p-2 text-sm">
                <span>夏休み</span>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 p-2 text-center text-sm">
                9月8日
                <br />
                スピリチュアル
              </td>
              <td className="border border-slate-300 p-2 text-sm">
                「喜びに生きる」（仮）
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 p-2 text-center text-sm">
                10月20日
                <br />
                地球
              </td>
              <td className="border border-slate-300 p-2 text-sm">
                「ガイアシンフォニー」（仮）
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 p-2 text-center text-sm">
                11月17日
                <br />
                自然
              </td>
              <td className="border border-slate-300 p-2 text-sm">
                「森のような経営」（仮）
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 p-2 text-center text-sm">
                12月22日
                <br />
                宗教
              </td>
              <td className="border border-slate-300 p-2 text-sm">
                「年忘れ仏教説法会」（仮）
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="participation" className="my-5 px-4">
        <h3 className="text-md mb-4 font-semibold sm:text-lg">参加概要</h3>
        <table className="w-full table-fixed border-collapse border border-slate-400">
          <tbody>
            <tr>
              <td className="w-24 border border-slate-300 p-2 text-center text-sm">
                場所
              </td>
              <td className="border border-slate-300 p-2 text-sm">
                昭和医療技術専門学校
              </td>
            </tr>
            <tr>
              <td className="w-24 border border-slate-300 p-2 text-center text-sm">
                時間
              </td>
              <td className="border border-slate-300 p-2 text-sm">
                日曜の13時～18時
                <br />
                終了後の直会（なおらい：懇親会のことですね）の飲食提供あり
              </td>
            </tr>
            <tr>
              <td className="w-24 border border-slate-300 p-2 text-center text-sm">
                形式
              </td>
              <td className="border border-slate-300 p-2 text-sm">
                対面参加のみ
                <br />
                （オンライン、録画視聴等はなし）
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="fee" className="my-5 px-4">
        <h3 className="text-md mb-4 font-semibold sm:text-lg">参加費用</h3>
        <table className="w-full table-fixed border-collapse border border-slate-400">
          <tbody>
            <tr>
              <td className="w-24 border border-slate-300 p-2 text-center text-sm">
                一般
              </td>
              <td className="border border-slate-300 p-2 text-sm">
                15万円～
                <br />
                （基本15万円ですが、好意で15万円を超えた金額は寄付として学生・若者への支援金額にまわさせていただきます）
              </td>
            </tr>
            <tr>
              <td className="w-24 border border-slate-300 p-2 text-center text-sm">
                経営者
                <br />
                高額所得者
              </td>
              <td className="border border-slate-300 p-2 text-sm">
                30万円～
                <br />
                （同じく基本30万円ですが、好意で30万円を超えた金額は寄付として学生・若者への支援金額にまわさせていただきます。尚、高額所得者の定義はもちろん自己判断です。）
              </td>
            </tr>
            <tr>
              <td className="w-24 border border-slate-300 p-2 text-center text-sm">
                学生
                <br />
                若者
              </td>
              <td className="border border-slate-300 p-2 text-sm">
                本気で学びたい対象者に関しては無料といたします
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="qualification" className="my-5 px-4">
        <h3 className="text-md mb-4 font-semibold sm:text-lg">参加資格</h3>
        <p className="mb-4 text-sm">完全紹介制</p>
        <p className="prose-sm max-w-none">
          今回の塾の参加は山藤との繋がり、もしくは講演者との繋がりのある人に限ります。その中でもこの場創り（コミュニティー）に馴染む方を厳選させていただきますので、希望があっても申し訳ありませんが、お断りをする可能性もあります。それゆえ一般の初見の方は参加を認めておりません。
          <br />
          参加表明は1月末日までとさせていただきます。
          <br />
          参加が確定した方に振込先、その後の詳細などはご案内させていただきます。
        </p>
      </section>
    </div>
  );
};

export default Page;
