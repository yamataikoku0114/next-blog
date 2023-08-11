import Image from 'next/image';

export default function About() {
  return (
    <div>
      <h1 className="text-2xl font-bold">About</h1>
      <div>
        <div className="flex justify-center mt-4">
          <Image
            src="/images/Pasa.png"
            alt="自己紹介画像"
            width={300}
            height={300}
          />
        </div>
        <div className="text-3xl font-bold mt-4">Yamamoto Taiki</div>
        <div>age:</div>
        <div>経歴:</div>
        <div>説明:</div>
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      </div>
    </div>
  );
}
