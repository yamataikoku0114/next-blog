import Image from 'next/image';

export default function About() {
  return (
    <div>
      <h1 className="text-2xl font-bold">About</h1>
      <div>
        <div className="flex justify-center mt-4">
          <Image
            src="/images/introductionpicture.png"
            alt="自己紹介画像"
            width={300}
            height={300}
          />
        </div>
        <div className="text-3xl font-bold mt-4">
          山本 泰暉（Yamamoto Taiki）
        </div>
        <div>年齢：22歳</div>
        <div>経歴：社会人1年目のWebエンジニアです。</div>
      </div>
    </div>
  );
}
