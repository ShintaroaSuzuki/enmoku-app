import Head from "next/head";
import Image from "next/image";
import Button from "./Button";
import Footer from "./Footer";
import { TrendDown } from "iconsax-react";

const LP = () => {
  return (
    <div className="flex items-center flex-col min-h-screen my-10">
      <Head>
        <title>
          enmoku | ファンを増やすための新しいコンサート運営のプラットフォーム
        </title>
        <meta
          name="description"
          content="enmoku | ファンを増やすための新しいコンサート運営のプラットフォーム"
        />
      </Head>

      <main className="w-5/6">
        <h1 className="text-2xl font-black tracking-wide leading-relaxed">
          ファンを増やすための
          <br />
          新しいコンサート運営の
          <br />
          プラットフォーム
        </h1>

        <div className="flex flex-col items-center my-10">
          <Image
            src="/undraw_online_connection_6778.png"
            alt="home header image"
            width={1206 / 5}
            height={889 / 5}
          />
        </div>

        <Button />

        <div className="flex flex-col gap-y-6 my-16" data-aos="fade-up">
          <div className="flex flex-row gap-x-2">
            <TrendDown size={28} color="#737373" />
            <p className="text-neutral-500 text-base">
              ありがたいけど
              <br />
              いつも見覚えのある顔ばかり...
            </p>
          </div>
          <div className="flex flex-row gap-x-2">
            <TrendDown size={28} color="#737373" />
            <p className="text-neutral-500 text-base">
              一度きりのお客さんが多い...
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-14 my-16">
          <div className="flex flex-col gap-y-6" data-aos="fade-up">
            <h2 className="text-blue-900 font-black text-xl">
              独自のAIが
              <br />
              自動で広告をしてくれます
            </h2>
            <p className="text-sm">
              お客さんの属性や開催場所が近いほかのコンサートのプログラムの中に、あなたのコンサートの広告を入れることができます。この機能により、新しいお客さんの獲得が期待できます。
            </p>
          </div>
          <div className="flex flex-col gap-y-6" data-aos="fade-up">
            <h2 className="text-blue-900 font-black text-xl">
              次回の公演の前売り券を
              <br />
              プログラム上で販売できます
            </h2>
            <p className="text-sm">
              コンサートに来ていただいたお客さんが、プログラムから次回のコンサートの前売り券を直接購入できるようになります。この機能により、お客さんのリピート率の向上が期待できます。
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-6 my-16" data-aos="fade-up">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-lg font-black">
              プログラムの作成は
              <br />
              わずか10分
            </h2>
            <Image
              src="/mock.png"
              alt="mock image"
              width={725 / 8}
              height={1070 / 8}
            />
          </div>
          <p className="text-sm">
            スマートフォンで閲覧できるプログラムを最短10分で作成できます。コンサート情報を入力すると、プログラムのURLとQRコードが発行されます。無料でご利用いただけるので、まずはお気軽にお試しください。
          </p>
          <div className="flex flex-col items-center">
            <Image
              src="/undraw_Social_sharing_re_pvmr.png"
              alt="home footer image"
              width={793 / 4}
              height={714 / 4}
            />
          </div>
        </div>

        <Button />
      </main>

      <Footer />
    </div>
  );
};

export default LP;
