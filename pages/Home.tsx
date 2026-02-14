
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const services = [
    {
      id: 'apparel',
      title: 'スポーツアパレル事業',
      category: 'APPAREL',
      desc: 'トップアスリート向けの競技用ウェアから、一般向けのフィットネスウェアまで。機能性とデザイン性を融合させた製品を企画・開発・販売しています。',
      img: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1600&auto=format&fit=crop',
      color: 'bg-primary'
    },
    {
      id: 'event',
      title: 'イベント・エンターテイメント事業',
      category: 'EVENT & ENTERTAINMENT',
      desc: 'シンクロナイズドスイミングショーやダンスパフォーマンスなど、感動を生み出すイベントをプロデュース。キャスティング事業も手がけます。',
      img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop',
      color: 'bg-orange-500'
    },
    {
      id: 'digital',
      title: 'IT・デジタルソリューション事業',
      category: 'DIGITAL SOLUTIONS',
      desc: 'フィットネスや教育施設向けの運営管理システム構築。ホームページ開発から会員管理まで、施設のDXを強力に支援します。',
      img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop',
      color: 'bg-indigo-600'
    },
    {
      id: 'operation',
      title: 'スイミング・フィットネス運営事業',
      category: 'OPERATION',
      desc: '施設管理・運営委託サービス。水泳やトレーニング指導の専門知識を活かした質の高いプログラム運営を実現します。',
      img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop',
      color: 'bg-teal-500'
    },
    {
      id: 'global',
      title: '海外展開支援事業',
      category: 'GLOBAL SUPPORT',
      desc: '中国市場を中心としたアジア圏へのフィットネス事業進出支援。市場動向分析から現地パートナー開拓までサポートします。',
      img: 'https://images.unsplash.com/photo-1529651737248-dad5e287768e?q=80&w=1600&auto=format&fit=crop',
      color: 'bg-sky-400'
    },
    {
      id: 'precision',
      title: '精密機構事業',
      category: 'PRECISION',
      desc: '旋盤・マシニング等の精密切削加工。試作からダイカスト、月産100万個規模の量産まで柔軟に対応可能な製造体制を構築しています。',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop',
      color: 'bg-gray-700'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-navy/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-primary"></div>
            <p className="text-primary font-black tracking-[0.3em] uppercase text-xs">Innovation & Performance</p>
          </div>
          <h2 className="text-white text-5xl md:text-8xl font-black leading-[1.1] tracking-tight mb-8">
            無限の可能性を、<br />
            <span className="text-gradient aqva-logo normal-case">Aqva</span> <span className="text-gradient">が支える。</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl font-medium max-w-2xl mb-10 leading-relaxed pl-6 border-l-2 border-primary/40">
            スポーツ、デジタル、そして精密なものづくりまで。<br />
            アクア株式会社は、革新的な技術と多角的な事業で<br />
            社会の未来を切り拓きます。
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/#service" className="bg-primary text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-sky-500 transition-all flex items-center gap-2 group">
              Our Services
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
            <Link to="/contact" className="bg-transparent border border-white/40 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2 group">
              Contact Us
              <span className="material-symbols-outlined">mail</span>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] text-white/50 font-black tracking-widest uppercase">Scroll</span>
          <span className="material-symbols-outlined text-white/50">keyboard_arrow_down</span>
        </div>
      </section>

      {/* Mission Section */}
      <section id="company" className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-primary text-xs font-black tracking-[0.4em] uppercase mb-8">Corporate Mission</p>
          <h2 className="text-3xl md:text-5xl font-black leading-tight text-navy mb-10">
            Passion for Excellence,<br />
            Precision for Future.
          </h2>
          <p className="text-gray-500 font-medium text-lg leading-loose">
            私たちは、スポーツから精密機械まで幅広いフィールドで挑戦し続けます。<br />
            人々の感動を生む「コト」づくりと、社会の基盤を支える「モノ」づくり。<br />
            アクアは多角的な視点で新しい価値を創造します。
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section id="service" className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl font-black tracking-tighter text-navy mb-4">SERVICE</h2>
              <p className="text-gray-500 font-medium">
                アクア株式会社が展開する多角的な事業領域。<br />
                各分野のプロフェッショナルが最高水準のサービスを提供します。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => (
              <div 
                key={idx} 
                className={`relative overflow-hidden rounded-2xl aspect-[4/5] group shadow-lg bg-white transition-all hover:-translate-y-2`}
              >
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                  <span className={`${item.color} text-white text-[10px] font-black tracking-[0.2em] px-3 py-1.5 rounded uppercase mb-4 inline-block`}>
                    {item.category}
                  </span>
                  <h3 className="text-white text-2xl font-black mb-3 leading-tight">{item.title}</h3>
                  <p className="text-gray-300 text-sm font-medium leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                    {item.desc}
                  </p>
                  <Link to={`/service/${item.id}`} className="flex items-center gap-2 text-white font-black text-xs tracking-widest border-b border-white/30 pb-1 w-fit group-hover:border-primary transition-all">
                    詳細を見る
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Info Summary */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-navy rounded-3xl p-12 text-white flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
              <h2 className="text-3xl font-black mb-4 tracking-tighter">会社情報</h2>
              <p className="text-gray-400 font-medium mb-6">アクア株式会社 スポーツ事業部</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>〒577-0066</p>
                <p>大阪府東大阪市高井田本通７丁目６番１５号</p>
              </div>
            </div>
            <Link to="/contact" className="bg-white text-navy px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all flex items-center gap-3">
              お問い合わせはこちら
              <span className="material-symbols-outlined">send</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
