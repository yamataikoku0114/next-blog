import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="my-10">
        <h1 className="text-3xl font-bold">About</h1>
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        <div>
          <Image
            src="/images/introductionpicture.png"
            alt="自己紹介画像"
            width={300}
            height={300}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">山本 泰暉（Yamamoto Taiki）</h1>
          <table>
            <tr>
              <td>年齢</td>
              <td>22歳</td>
            </tr>
            <tr>
              <td>経歴</td>
              <td>社会人1年目のWebエンジニアです。</td>
            </tr>
            <tr>
              <td>特記実行</td>
              <td>小学生の頃からテニスをしています。</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
