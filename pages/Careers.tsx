
import React from 'react';

const Careers: React.FC = () => {
  const jobs = [
    {
      title: 'プロダクトデザイナー',
      type: '正社員',
      dept: 'R&D 部門',
      desc: '次世代のスイムウェアやフィットネスウェアのデザイン開発。'
    },
    {
      title: 'デジタルマーケティングマネージャー',
      type: '正社員',
      dept: 'マーケティング部門',
      desc: 'D2Cストアの運営およびグローバルマーケティング戦略の立案。'
    },
    {
      title: 'スイミングインストラクター',
      type: '契約社員',
      dept: 'サービス運営部門',
      desc: '直営スイミングスクールでの指導および店舗運営。'
    }
  ];

  return (
    <div className="pt-24 bg-white">
      {/* Hero */}
      <section className="bg-navy text-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-primary text-xs font-black tracking-[0.4em] uppercase mb-6">Join Our Team</p>
          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
            才能を、<br />
            水のように自由に。
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            アクア株式会社では、スポーツの未来を共に創る仲間を募集しています。<br />
            枠にとらわれない発想と、情熱。あなたの挑戦が、新しい世界を拓きます。
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://picsum.photos/id/1/800/600" 
              alt="Office Life" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-black text-navy mb-6">働く環境</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              私たちは「健康」を提供する企業として、社員自身のウェルビーイングを大切にしています。
              最新のトレーニング設備の利用や、リモートワークと出社を組み合わせた柔軟な働き方を推奨しています。
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <p className="text-sm font-bold text-navy">各種社会保険完備・自社製品割引制度</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <p className="text-sm font-bold text-navy">スキルアップ支援金（年間10万円まで）</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <p className="text-sm font-bold text-navy">リフレッシュ休暇・スポーツ奨励手当</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-black text-navy mb-12 tracking-tighter">OPEN POSITIONS</h2>
          <div className="grid grid-cols-1 gap-4">
            {jobs.map((job, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row justify-between md:items-center gap-6 group">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-black tracking-widest text-primary border border-primary px-2 py-0.5 rounded">{job.type}</span>
                    <span className="text-[10px] font-black tracking-widest text-gray-400">{job.dept}</span>
                  </div>
                  <h3 className="text-xl font-black text-navy group-hover:text-primary transition-colors">{job.title}</h3>
                  <p className="text-gray-500 text-sm mt-2">{job.desc}</p>
                </div>
                <button className="bg-navy text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-primary transition-all self-start md:self-center">
                  詳細を見る
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-8">まずはカジュアルに話してみませんか？</h2>
          <p className="mb-10 text-white/80">募集ポジション以外でも、私たちの事業に興味をお持ちの方はぜひお気軽にご連絡ください。</p>
          <button className="bg-white text-primary px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-navy hover:text-white transition-all shadow-xl">
            タレント募集に応募する
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
