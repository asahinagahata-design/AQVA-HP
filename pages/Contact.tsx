
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-32 bg-off-white text-center">
        <div className="max-w-xl mx-auto px-6 bg-white p-12 rounded-3xl shadow-xl">
          <span className="material-symbols-outlined text-6xl text-primary mb-6">check_circle</span>
          <h1 className="text-3xl font-black text-navy mb-4">お問い合わせを受け付けました</h1>
          <p className="text-gray-500 mb-10 leading-relaxed">
            内容を確認の上、担当者より3営業日以内にご連絡させていただきます。<br />
            自動返信メールが届かない場合は、再度お問い合わせください。
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-navy text-white px-10 py-4 rounded-full font-black text-xs tracking-widest hover:bg-primary transition-all"
          >
            トップページへ戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-off-white">
      {/* Hero */}
      <section className="bg-navy text-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-primary text-xs font-black tracking-[0.4em] uppercase mb-6">Contact Us</p>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">お問い合わせ</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            製品、サービス、採用に関するご質問など、<br />
            以下のフォームよりお気軽にお問い合わせください。
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-xl font-black text-navy mb-6 pb-2 border-b-2 border-primary w-fit">お電話での窓口</h2>
              <div className="flex items-center gap-4 text-2xl font-black text-navy mb-2">
                <span className="material-symbols-outlined text-primary">phone</span>
                03-1234-5678
              </div>
              <p className="text-xs text-gray-400 font-bold">受付時間：平日 9:00 - 18:00</p>
            </div>

            <div>
              <h2 className="text-xl font-black text-navy mb-6 pb-2 border-b-2 border-primary w-fit">本社所在地</h2>
              <p className="text-navy font-bold mb-2">アクア株式会社 スポーツ事業部</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                〒108-0023<br />
                東京都港区芝浦1-1-1 芝浦ビル 12F
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg grayscale">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.0464293963424!2d139.754770315258!3d35.65158198020089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bc894569653%3A0x6335f606886e8854!2z6Iqd5rWm!5e0!3m2!1sja!2sjp!4v1625000000000!5m2!1sja!2sjp" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-black tracking-widest text-navy uppercase mb-3">お名前 <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      type="text" 
                      placeholder="アクア 太郎"
                      className="w-full bg-off-white border-transparent focus:border-primary focus:ring-0 rounded-xl px-5 py-4 text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black tracking-widest text-navy uppercase mb-3">メールアドレス <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      type="email" 
                      placeholder="contact@aqua-sports.com"
                      className="w-full bg-off-white border-transparent focus:border-primary focus:ring-0 rounded-xl px-5 py-4 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black tracking-widest text-navy uppercase mb-3">お問い合わせ項目 <span className="text-red-500">*</span></label>
                  <select required className="w-full bg-off-white border-transparent focus:border-primary focus:ring-0 rounded-xl px-5 py-4 text-sm transition-all">
                    <option value="">選択してください</option>
                    <option value="product">製品について</option>
                    <option value="service">サービス・店舗について</option>
                    <option value="recruit">採用について</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black tracking-widest text-navy uppercase mb-3">お問い合わせ内容 <span className="text-red-500">*</span></label>
                  <textarea 
                    required 
                    rows={6} 
                    placeholder="こちらに詳細をご記入ください。"
                    className="w-full bg-off-white border-transparent focus:border-primary focus:ring-0 rounded-xl px-5 py-4 text-sm transition-all"
                  ></textarea>
                </div>

                <div className="flex items-center gap-3">
                  <input required type="checkbox" className="rounded text-primary focus:ring-primary h-5 w-5" />
                  <label className="text-xs text-gray-500 font-bold">
                    <a href="#" className="text-primary underline">プライバシーポリシー</a>に同意します
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary text-white py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-primary/30 hover:bg-navy hover:shadow-none transition-all"
                >
                  送信する
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
