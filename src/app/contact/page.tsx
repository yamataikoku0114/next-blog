export default function Contact() {
  return (
    <div className="mb-4">
      <div className="text-2xl font-bold mb-4">お問い合わせ</div>
      <form action="" method="post">
        <label htmlFor="name" className="block font-bold mb-2">
          お名前
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 mb-2"
          required
        />
        <label htmlFor="email" className="block font-bold mb-2">
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 mb-2"
          required
        />
        <label htmlFor="message" className="block font-bold mb-2">
          お問い合わせ内容
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 mb-2"
          rows={4}
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          送信
        </button>
      </form>
    </div>
  );
}
