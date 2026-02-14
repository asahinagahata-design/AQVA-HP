
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

const serviceData: Record<string, any> = {
  apparel: {
    title: 'スポーツアパレル事業',
    hero: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1600&auto=format&fit=crop',
    content: 'トップアスリート向けの競技用ウェアから、一般向けのフィットネスウェアまで。機能性とデザイン性を融合させた製品を企画・開発・販売しています。',
    points: ['競技用スイムウェアの開発', 'フィットネス・トレーニングウェア', 'オリジナルチームウェア制作', 'D2Cストアの運営']
  },
  event: {
    title: 'イベント・エンターテイメント事業',
    hero: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop',
    content: 'スポーツの魅力を最大限に引き出すイベント企画・運営を得意としています。シンクロナイズドスイミングショー、ダンスパフォーマンスなど、感動を生み出すイベントの企画から実施まで一貫してサポート。同時に、タレント・パフォーマー・インストラクターのキャスティング事業も手がけており、最適な人材配置でイベント価値を最大化します。',
    points: ['シンクロ・ダンスショー企画', 'パフォーマー派遣・キャスティング', 'スポーツ大会運営サポート', '音響・演出プロデュース']
  },
  digital: {
    title: 'IT・デジタルソリューション事業',
    hero: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop',
    content: 'スポーツ・教育施設の成長を支援するホームページ開発・運営管理システムの構築を行っています。学習塾、フィットネスクラブ、スイミングスクール、公共施設など、多様な業態のデジタル化を支援。顧客管理、会員登録、スケジュール管理など、施設運営に必要な機能を一体化したシステムで、業務効率化と顧客満足度向上を実現します。',
    points: ['施設向けCMS開発', '会員管理システムの構築', 'DX推進コンサルティング', '集客マーケティング支援']
  },
  operation: {
    title: 'スイミング・フィットネス運営事業',
    hero: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop',
    content: '施設運営の経験を活かした総合的な施設管理・運営委託サービスを提供しています。単なる施設管理にとどまらず、水泳指導、トレーニング指導の専門知識を活かした質の高いプログラム運営を実現。利用者の成長と施設の収益向上の両立を目指します。',
    points: ['スイミングスクール運営', '公共スポーツ施設管理', '水泳・トレーニング指導', 'オリジナルプログラム開発']
  },
  global: {
    title: '海外展開支援事業',
    hero: 'https://images.unsplash.com/photo-1529651737248-dad5e287768e?q=80&w=1600&auto=format&fit=crop',
    content: 'グローバル市場への進出をお考えの事業者様向けに、中国市場のフィットネス事業調査・進出支援を行っています。市場動向分析、現地パートナーのネットワーク、運営ノウハウの提供を通じて、アジア市場での成功をサポートします。',
    points: ['中国・アジア市場調査', '海外拠点設立サポート', '現地パートナーマッチング', 'グローバルブランディング']
  },
  precision: {
    title: '精密機構事業',
    hero: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop',
    content: 'アクアの精密機構部門では、長年培った技術力で高度なものづくりをサポートします。旋盤、マシニング等の精密切削加工を中心に、ダイカストから最終加工までの一貫体制。試作品の製作から月産10万個〜100万個の量産対応まで、幅広いニーズに高品質・短納期で応えます。',
    details: [
      { label: '精密切削加工', desc: 'NC旋盤、マシニングセンタを用いた高精度な部品加工。' },
      { label: '一貫生産体制', desc: 'ダイカスト鋳造から精密加工、仕上げまで。' },
      { label: '試作から量産', desc: '試作開発、小ロットから月産100万個の量産まで対応。' }
    ]
  }
};

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const data = id ? serviceData[id] : null;

  if (!data) return <Navigate to="/" />;

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={data.hero} className="absolute inset-0 w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center text-white px-6 animate-fade-in-up">
          <p className="text-primary text-xs font-black tracking-[0.4em] uppercase mb-4">Our Service Division</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">{data.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-black text-navy mb-8 border-l-4 border-primary pl-6">事業概要</h2>
        <p className="text-gray-600 text-lg leading-loose mb-16 whitespace-pre-wrap">
          {data.content}
        </p>

        {data.points && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {data.points.map((p: string, i: number) => (
              <div key={i} className="flex items-center gap-4 bg-off-white p-6 rounded-2xl">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-bold text-navy">{p}</span>
              </div>
            ))}
          </div>
        )}

        {data.details && (
          <div className="space-y-4 mb-16">
             {data.details.map((d: any, i: number) => (
               <div key={i} className="border-b border-gray-100 pb-6">
                 <h4 className="font-black text-navy text-xl mb-2">{d.label}</h4>
                 <p className="text-gray-500">{d.desc}</p>
               </div>
             ))}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-20">
          <Link to="/#service" className="bg-navy text-white px-10 py-5 rounded-full font-black text-xs tracking-widest text-center hover:bg-gray-800 transition-all">
            サービス一覧へ戻る
          </Link>
          <Link to="/contact" className="bg-primary text-white px-10 py-5 rounded-full font-black text-xs tracking-widest text-center hover:bg-sky-500 transition-all shadow-lg shadow-primary/20">
            この事業について問い合わせる
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
