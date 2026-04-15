export default function TelescopeMediaKit() {
  const fullNetworkRows = [
    {
      image: "/crypto_bosh.jpg",
      name: "Cryptobosh",
      type: "Telegram Placement",
      views: "14.3k avg views",
      audience: "155k subs",
      price: "$3,125",
    },
    {
      image: "/itpedia.jpg",
      name: "itpedia",
      type: "YouTube Integration",
      views: "450 000 - 1 000 000 (Negotiable)",
      audience: "2.5M+ subs",
      price: "$8,125",
    },
    {
      image: "/шевцов.jpg",
      name: "Алексей Шевцов",
      type: "YouTube Integration",
      views: "700 000–2 000 000+ (Negotiable)",
      audience: "2.08M subs",
      price: "$10,000",
    },
    {
      image: "/igor_link.jpg",
      name: "Игорь Линк",
      type: "YouTube Integration",
      views: "300 000–700 000+ (Negotiable)",
      audience: "1.24M subs",
      price: "$4,750",
    },
    {
      image: "/trade001k.jpg",
      name: "001k.trade",
      type: "Telegram Placement",
      views: "23.1k avg views",
      audience: "116k subs",
      price: "$3,125",
    },
    {
      image: "/a01k.jpg",
      name: "a01k.Crypto",
      type: "Telegram Placement",
      views: "2.5k avg views",
      audience: "34k subs",
      price: "$812.5",
    },
    {
      image: "/trade_ultra.jpg",
      name: "trade_ultra",
      type: "Telegram Placement",
      views: "9k avg views",
      audience: "32k subs",
      price: "$1,750",
    },
    {
      image: "/dnevnick_capitanicka.jpg",
      name: "DnevnikCapitanika",
      type: "Telegram Placement",
      views: "2.8k avg views",
      audience: "18k subs",
      price: "$750",
    },
    {
      image: "/sailer_2.jpg",
      name: "Криптокрип Сайлер",
      type: "Telegram Placement",
      views: "10.3k avg views",
      audience: "63k subs",
      price: "$500",
    },
    {
      image: "/pitupi.jpg",
      name: "Питупи",
      type: "Telegram Placement",
      views: "12k avg views",
      audience: "100k subs",
      price: "$1,500–$3,000",
    },
    {
      image: "/slezi_satoshi.jpg",
      name: "Satoshi",
      type: "YouTube Integration",
      views: "60k views over a week",
      audience: "237k subs",
      price: "$6,000",
    },
    {
      image: "/соболев.jpg",
      name: "Николай Соболев",
      type: "YouTube Integration",
      views: "400k–900k+ avg views",
      audience: "5M+ subs",
      price: "$25,000",
    },
    {
      image: "/соболев.jpg",
      name: "Николай Соболев",
      type: "Telegram: 1 Post",
      views: "30k+ avg views",
      audience: "113k subs",
      price: "$1,125",
    },
    {
      image: "/соболев.jpg",
      name: "Николай Соболев",
      type: "Telegram: 2 Posts",
      views: "30k+ avg views",
      audience: "113k subs",
      price: "$2,000",
    },
    {
      image: "/соболев.jpg",
      name: "Николай Соболев",
      type: "Telegram: 5 Posts",
      views: "30k+ avg views",
      audience: "113k subs",
      price: "$6,250",
    },
    {
      image: "/соболев.jpg",
      name: "Николай Соболев",
      type: "Late May Bundle (YT + Posts)",
      views: "Combined Reach",
      audience: "5M+ YT / 113k TG",
      price: "$25,000",
    },

    {
      image: "/satoshi_news.jpg",
      name: "Satoshi News",
      type: "Telegram Placement",
      views: "6k avg views",
      audience: "30k subs",
      price: "$500",
    },
    {
      image: "/satoshi_finance.jpg",
      name: "Satoshi Finance",
      type: "Telegram Placement",
      views: "3.6k avg views",
      audience: "18k subs",
      price: "$750",
    },
    {
      image: "/олег_артемьев.jpg",
      name: "Олег Артемьев",
      type: "YouTube + Telegram Integration",
      views: "40k–250k+ views Youtube, 30k+ Telegram",
      audience: "900 000",
      price: "$12,500+",
    },
    {
      image: "/олег_артемьев.jpg",
      name: "Олег Артемьев",
      type: "Telegram Placement",
      views: "30k+ avg views",
      audience: "165 000",
      price: "$6,250 – $8,750",
    },
    {
      image: "/muhtov.jpg",
      name: "Мухтов — Инвестиции",
      type: "Telegram Placement",
      views: "4.7k avg views",
      audience: "18k subs",
      price: "$500",
    },
    {
      image: "/bogdan_gde_x.jpg",
      name: "Богдан Где Иксы?",
      type: "Telegram Placement",
      views: "5.1k avg views",
      audience: "30k subs",
      price: "$800",
    },
    {
      image: "/crypto_headlines.jpg",
      name: "Crypto Headlines",
      type: "Telegram Placement",
      views: "26k avg views",
      audience: "137k subs",
      price: "$750–$1,875",
    },
    {
      image: "/tvs.jpg",
      name: "Темка в схеме",
      type: "Telegram Placement",
      views: "5.5k avg views",
      audience: "42k subs",
      price: "$1,250",
    },
    {
      image: "/pro-blockchain_media.jpg",
      name: "Pro Blockchain",
      type: "Telegram Placement",
      views: "25k avg views over first 2 days",
      audience: "190k subs",
      price: "$2,000",
    },
    {
      image: "/pro_blockchain_squad.jpg",
      name: "Pro Blockchain Squad",
      type: "Telegram Placement",
      views: "12.4k avg views",
      audience: "376k subs",
      price: "$2,000",
    },
    {
      image: "/pro_crypto_trading.jpg",
      name: "Pro Crypto Trading",
      type: "Telegram Placement",
      views: "10.3k avg views",
      audience: "56.7k subs",
      price: "$1,500",
    },
    {
      image: "/cryptomera.jpg",
      name: "CrypTomera",
      type: "Telegram Placement",
      views: "15.8k avg views",
      audience: "47k subs",
      price: "$2,500",
    },
    {
      image: "/gennady_m_telegram.jpg",
      name: "Gennady M",
      type: "Telegram Placement",
      views: "25k avg views",
      audience: "64k subs",
      price: "$875",
    },
    {
      image: "/altador.jpg",
      name: "Альтадор",
      type: "Telegram Placement",
      views: "3k over 2 days",
      audience: "30k subs",
      price: "$750",
    },
    {
      image: "/artur_ict.jpg",
      name: "Artur | ICT",
      type: "Telegram Placement",
      views: "3.3k over 2 days",
      audience: "18k subs",
      price: "$875",
    },
    {
      image: "/crypto_lady.jpg",
      name: "Crypto || Lady",
      type: "Telegram Placement",
      views: "5k over 2 days",
      audience: "24k subs",
      price: "$1,875",
    },
    {
      image: "/speculantt.jpg",
      name: "speculantt",
      type: "Telegram Placement",
      views: "3k over 2 days",
      audience: "18k",
      price: "$625",
    },
    {
      image: "/forex_trade_wit.jpg",
      name: "Forex trade wit",
      type: "Telegram Placement",
      views: "1.4k avg views",
      audience: "17k subs",
      price: "$500",
    },
    {
      image: "/trader_s_life.jpg",
      name: "TRADER’S LIFE",
      type: "Telegram Placement",
      views: "1.2k avg views",
      audience: "8k subs",
      price: "$125",
    },
    {
      image: "/gennady_m_youtube.jpg",
      name: "Gennady M",
      type: "YouTube Integration",
      views: "80k+ avg views",
      audience: "227k subs",
      price: "$3,750",
    },
    {
      image: "/gennady_m_youtube.jpg",
      name: "Gennady M",
      type: "Full Sponsored Video",
      views: "80k+ avg views",
      audience: "227k subs",
      price: "$8,750",
    },
    {
      image: "/crypto_bosh.jpg",
      name: "Cryptobosh",
      type: "YouTube Review",
      views: "140k+ avg views",
      audience: "389k subs",
      price: "$18,750",
    },
    {
      image: "/sailer_1.jpg",
      name: "Sailer",
      type: "YouTube Integration",
      views: "30k+ avg views",
      audience: "220k subs",
      price: "$1,625",
    },
    {
      image: "/sailer_1.jpg",
      name: "Sailer",
      type: "Dedicated YouTube Review",
      views: "30k+ avg views",
      audience: "220k subs",
      price: "$3,125+",
    },
    {
      image: "/pro-blockchain_media.jpg",
      name: "Pro Blockchain",
      type: "YouTube + Telegram Placement",
      views: "70k+ views",
      audience: "232k subs",
      price: "$5,625",
    },
    {
      image: "/pro-blockchain_media.jpg",
      name: "Pro Blockchain",
      type: "YouTube Integration",
      views: "25–55k YouTube views",
      audience: "232k subs",
      price: "$2,500",
    },
  ];

  const topOffers = [
    {
      name: "Криптобош",
      image: "/crypto_bosh.jpg",
      badge: "Flagship Creator",
      headline:
        "One of the highest engagement creators in the CIS space, focused on actionable trading content and platform deep-dives.",
      description:
        "YouTube channel videos get 140k+ views; the entire audience consists of crypto traders, with massive trust and conversion.",
      platforms: [
        { label: "YouTube Review", value: "$18,750" },
        { label: "Telegram Placement", value: "$3,125" },
        { label: "Instagram Bonus", value: "230k audience" },
      ],
      metrics: ["382k YouTube • 155k Telegram • Verified channel"],
    },
    {
      name: "Олег Артемьев",
      image: "/олег_артемьев.jpg",
      badge: "Most Trusted",
      headline:
        "The most trusted blogger in the CIS crypto space with elite audience engagement.",
      description:
        "Both the highest viewed and trusted blogger with insane audience engagement both in telegram and youtube. Audience is entirely made of people trying to learn from him to trade and to see which projects/people online are either scammers or can be trusted. His recommendation will not just will yield lots of targeted audience but will improve the image of the brand.",
      platforms: [
        { label: "YouTube + Telegram", value: "$12,500+" },
        { label: "Telegram Placement", value: "$6,250–$8,750" },
      ],
      metrics: ["40k–250k+ YouTube • 30k+ Telegram • Elite Engagement"],
    },
    {
      name: "Gennady M",
      image: "/gennady_m_youtube.jpg",
      badge: "Flagship Creator",
      headline:
        "A premier media resource for long-term investors and high-net-worth (HNW) crypto holders.",
      description:
        "Focused on market cycles, global economics, and risk management, attracting a mature audience with above-average deposits.",
      platforms: [
        { label: "YouTube Integration", value: "$3,750" },
        { label: "Full Sponsored Video", value: "$8,750" },
        { label: "Telegram Placement", value: "$875" },
      ],
      metrics: ["227k YouTube • 64k Telegram • ~80k avg views"],
    },
    {
      name: "Sailer",
      image: "/sailer_1.jpg",
      badge: "Top Offer",
      headline:
        "Award-winning trusted cryptocurrency influencer with a loyal fanbase",
      description:
        "The best deal in the network for the combination of very affordable price and result.",
      platforms: [
        { label: "Dedicated YouTube Review", value: "$3,125+" },
        { label: "YouTube Integration", value: "$1,625" },
        { label: "Telegram Placement", value: "$500" },
      ],
      metrics: ["220k YouTube • ~30k avg views"],
    },
  ];

  const LOGOS = [
    "/crypto_lady.jpg",
    "/itpedia.jpg",
    "/sobolev_youtube.webp",
    "/igor_link.jpg",
    "/a01k.jpg",
    "/a01ktraders.jpg",
    "/altador.jpg",
    "/artur_ict.jpg",
    "/bogdan_gde_x.jpg",
    "/crypto_bosh.jpg",
    "/sailer_1.jpg",
    "/олег_артемьев.jpg",
    "/cryptomera.jpg",
    "/dnevnick_capitanicka.jpg",
    "/forex_trade_wit.jpg",
    "/gennady_m_telegram.jpg",
    "/gennady_m_youtube.jpg",
    "/muhtov.jpg",
    "/pitupi.jpg",
    "/шевцов.jpg",
    "/pro_blockchain_youtube.jpg",
    "/pro_crypto_trading.jpg",
    "/pro-blockchain_media.jpg",
    "/crypto_headlines.jpg",
    "/sailer_2.jpg",
    "/satoshi_finance.jpg",
    "/satoshi_news.jpg",
    "/slezi_satoshi.jpg",
    "/speculantt.jpg",
    "/trade_ultra.jpg",
    "/trade001k.jpg",
    "/trader_s_life.jpg",
    "/tvs.jpg",
  ];

  const MOBILE_LOGOS = [
    "/шевцов.jpg",
    "/igor_link.jpg",
    "/sobolev_youtube.webp",
    "/gennady_m_youtube.jpg",
    "/crypto_bosh.jpg",
    "/sailer_1.jpg",
    "/олег_артемьев.jpg",
    "/trade001k.jpg",
    "/pro-blockchain_media.jpg",
    "/slezi_satoshi.jpg",
    "/muhtov.jpg",
    "/cryptomera.jpg",
  ];

  const massAwarenessOffers = [
    {
      name: "itpedia",
      image: "/itpedia.jpg",
      badge: "Industry Icon",
      views: "450,000 — 1,000,000+",
      desc: "The primary tech trendsetter in the CIS with a colossal credit of trust. His reviews shape market opinion, and integrations are perceived as personal expert recommendations, which is critical for high-risk crypto products. The perfect choice for capturing dominant market share and building long-term brand authority.",
      price: "$8,125",
    },
    {
      name: "Алексей Шевцов",
      image: "/шевцов.jpg",
      badge: "Primary Opinion Leader",
      views: "700,000 — 2,000,000+",
      desc: "The absolute leader in engagement with direct access to the most active tech and crypto community. His audience is not just viewers, but loyal followers ready for action. Integration here provides explosive growth in brand awareness and a flood of new audience that no one else in the CIS among non-crypto focused channels can provide.",
      price: "$10,000",
    },
    {
      name: "Igor Link",
      image: "/igor_link.jpg",
      badge: "Massive Trust",
      views: "300,000 — 700,000+",
      desc: "Igor himself is a blogger on anything tech related, his videos are deep but clear and easy to understand reviews which hundreads of thousands watch and trust deeply. Had partnered with crypto exchange companies before and very successfuly, thanks to his audience being active crypto users and him showcasing on video exactly how the product works",
      price: "$4,750",
    },
  ];

  return (
    <div className="min-h-screen bg-[#07090f] text-white">
      <div className="mx-auto w-full max-w-[1100px] space-y-4 px-3 py-3 sm:space-y-5 sm:px-4 sm:py-4 md:space-y-8 md:px-10 md:py-10">
        <section className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#07090f] px-4 py-5 sm:px-5 sm:py-6 md:min-h-[1320px] md:rounded-[36px] md:px-14 md:py-14 print:break-after-page">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(77,163,255,0.10),transparent_24%),radial-gradient(circle_at_78%_14%,rgba(138,92,246,0.10),transparent_22%),linear-gradient(180deg,#0a0d14_0%,#07090f_100%)]" />
          <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />

          <div className="relative z-20 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/45 sm:text-sm sm:tracking-[0.38em]">
              TeleScope Media Kit
            </div>
            <div className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/55 sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.24em]">
              Q1 2026
            </div>
          </div>

          <div className="relative z-20 pt-6 sm:pt-8 md:pt-14">
            <div className="max-w-[950px]">
              <h1 className="text-[28px] font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-[38px] md:text-[58px] md:leading-[1.02]">
                Access <span className="text-[#59c7ff]">15M+</span> High Net
                Worth Crypto Trading & Tech Audience across most trusted
                communities in the CIS Region
              </h1>

              <div className="mt-6 text-[18px] italic leading-[1.35] tracking-[-0.01em] text-white/85 sm:mt-8 sm:text-[22px] md:mt-10 md:text-[26px]">
                But without headaches thanks to:
              </div>

              <div className="mt-6 space-y-4 sm:mt-7 sm:space-y-5 md:mt-8">
                {[
                  {
                    title: "Single Split Payment and One Invoice:",
                    text: "Execute a single payment and receive one invoice. No coordination on your part.",
                  },
                  {
                    title: "Real-Time Analytics:",
                    text: "Track campaign success live with anti-bot filtering and performance graphs for every channel.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <div className="mt-[9px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#59c7ff] sm:mt-[11px]" />
                    <p className="text-[15px] leading-6 text-white/80 sm:text-[17px] sm:leading-7 md:text-[19px] md:leading-8">
                      <strong className="font-semibold text-white">
                        {item.title}
                      </strong>{" "}
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 overflow-hidden rounded-[24px] border border-white/8 bg-white/[0.02] p-3 sm:mt-10 sm:p-4 md:mt-16 md:h-[560px] md:rounded-[30px] md:p-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,163,255,0.08),transparent_45%)]" />

              <div className="relative z-10 grid grid-cols-3 gap-3 sm:grid-cols-4 md:hidden">
                {MOBILE_LOGOS.map((src, index) => (
                  <div
                    key={`${src}-${index}`}
                    className="aspect-square overflow-hidden rounded-[18px] border border-white/10 bg-black/20 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                  >
                    <img
                      src={src}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 hidden md:block">
                {[
                  {
                    top: "2%",
                    left: "-2%",
                    size: 118,
                    rotate: -10,
                    opacity: 0.95,
                  },
                  { top: "6%", left: "11%", size: 92, rotate: 7, opacity: 0.9 },
                  {
                    top: "0%",
                    left: "23%",
                    size: 108,
                    rotate: -6,
                    opacity: 0.88,
                  },
                  {
                    top: "8%",
                    left: "37%",
                    size: 96,
                    rotate: 11,
                    opacity: 0.92,
                  },
                  {
                    top: "3%",
                    left: "50%",
                    size: 120,
                    rotate: -8,
                    opacity: 0.9,
                  },
                  {
                    top: "9%",
                    left: "64%",
                    size: 100,
                    rotate: 9,
                    opacity: 0.86,
                  },
                  {
                    top: "2%",
                    left: "78%",
                    size: 112,
                    rotate: -7,
                    opacity: 0.93,
                  },
                  {
                    top: "7%",
                    left: "91%",
                    size: 98,
                    rotate: 10,
                    opacity: 0.88,
                  },
                  {
                    top: "28%",
                    left: "4%",
                    size: 104,
                    rotate: 8,
                    opacity: 0.84,
                  },
                  {
                    top: "23%",
                    left: "18%",
                    size: 126,
                    rotate: -9,
                    opacity: 0.9,
                  },
                  {
                    top: "31%",
                    left: "33%",
                    size: 94,
                    rotate: 6,
                    opacity: 0.86,
                  },
                  {
                    top: "24%",
                    left: "45%",
                    size: 118,
                    rotate: -11,
                    opacity: 0.9,
                  },
                  {
                    top: "30%",
                    left: "58%",
                    size: 96,
                    rotate: 7,
                    opacity: 0.84,
                  },
                  {
                    top: "22%",
                    left: "71%",
                    size: 130,
                    rotate: -5,
                    opacity: 0.9,
                  },
                  {
                    top: "29%",
                    left: "86%",
                    size: 102,
                    rotate: 8,
                    opacity: 0.86,
                  },
                  {
                    top: "52%",
                    left: "-1%",
                    size: 110,
                    rotate: -7,
                    opacity: 0.9,
                  },
                  {
                    top: "58%",
                    left: "13%",
                    size: 92,
                    rotate: 10,
                    opacity: 0.84,
                  },
                  {
                    top: "49%",
                    left: "26%",
                    size: 124,
                    rotate: -9,
                    opacity: 0.9,
                  },
                  {
                    top: "57%",
                    left: "39%",
                    size: 98,
                    rotate: 8,
                    opacity: 0.84,
                  },
                  {
                    top: "50%",
                    left: "51%",
                    size: 116,
                    rotate: -6,
                    opacity: 0.9,
                  },
                  {
                    top: "59%",
                    left: "64%",
                    size: 90,
                    rotate: 11,
                    opacity: 0.82,
                  },
                  {
                    top: "52%",
                    left: "75%",
                    size: 128,
                    rotate: -10,
                    opacity: 0.9,
                  },
                  {
                    top: "60%",
                    left: "90%",
                    size: 106,
                    rotate: 7,
                    opacity: 0.86,
                  },
                  {
                    top: "81%",
                    left: "6%",
                    size: 114,
                    rotate: 9,
                    opacity: 0.88,
                  },
                  {
                    top: "86%",
                    left: "21%",
                    size: 96,
                    rotate: -8,
                    opacity: 0.82,
                  },
                  {
                    top: "79%",
                    left: "36%",
                    size: 122,
                    rotate: 7,
                    opacity: 0.88,
                  },
                  {
                    top: "87%",
                    left: "53%",
                    size: 100,
                    rotate: -11,
                    opacity: 0.84,
                  },
                  {
                    top: "80%",
                    left: "69%",
                    size: 118,
                    rotate: 8,
                    opacity: 0.9,
                  },
                  {
                    top: "85%",
                    left: "87%",
                    size: 108,
                    rotate: -7,
                    opacity: 0.86,
                  },
                ].map((item, index) => (
                  <img
                    key={`${LOGOS[index % LOGOS.length]}-${index}`}
                    src={LOGOS[index % LOGOS.length]}
                    alt=""
                    className="absolute rounded-[22px] border border-white/10 object-cover shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                    style={{
                      top: item.top,
                      left: item.left,
                      width: `${item.size}px`,
                      height: `${item.size}px`,
                      transform: `rotate(${item.rotate}deg)`,
                      opacity: item.opacity,
                    }}
                  />
                ))}
              </div>

              <div className="absolute inset-x-0 top-0 hidden h-24 bg-gradient-to-b from-[#07090f] to-transparent md:block" />
              <div className="absolute inset-x-0 bottom-0 hidden h-24 bg-gradient-to-t from-[#07090f] to-transparent md:block" />
              <div className="absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-[#07090f] to-transparent md:block" />
              <div className="absolute inset-y-0 right-0 hidden w-16 bg-gradient-to-l from-[#07090f] to-transparent md:block" />
            </div>
          </div>

          <div className="relative z-20 pt-8 sm:pt-10 md:flex md:items-end md:justify-between md:gap-10 md:pt-14">
            <div className="max-w-[520px]">
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/35 sm:text-[12px] md:text-[13px] md:tracking-[0.22em]">
                The Ultimate Gateway to CIS Digital Markets
              </div>
              <div className="mt-3 text-[14px] leading-6 text-white/52 sm:text-[15px] sm:leading-7 md:mt-4">
                Built for brands looking for scalable access to high-intent
                investor and tech-savvy audiences across the region.
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-0 md:min-w-[520px] md:gap-4">
              {[
                ["15M+", "Combined Reach"],
                ["40+", "Verified Communities"],
                ["Multi", "Channel Access"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[18px] border border-white/10 bg-black/20 px-4 py-4 text-center backdrop-blur-md sm:rounded-[20px] md:px-5 md:py-5"
                >
                  <div className="text-[24px] font-semibold tracking-tight text-white sm:text-[26px] md:text-[30px]">
                    {value}
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/45 sm:text-[11px] md:tracking-[0.22em]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,_#0b0f18_0%,_#07090f_100%)] px-4 py-5 sm:px-5 sm:py-6 md:min-h-[1320px] md:rounded-[36px] md:px-14 md:py-14 print:break-after-page">
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
              <div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/45 sm:text-sm sm:tracking-[0.32em]">
                  Our Top Offers
                </div>
                <h2 className="pt-3 text-[30px] font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-[38px] md:pt-4 md:text-[58px] md:leading-[0.95]">
                  Flagship Creators
                  <br />& Premium Campaign Assets
                </h2>
              </div>
              <div className="max-w-[360px] text-[14px] leading-6 text-white/55 md:text-[15px] md:leading-7">
                A selected group of the strongest creator and media placements
                inside the TeleScope network, built for premium launches and
                high-intent crypto trader exposure.
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              {topOffers.map((offer) => (
                <div
                  key={offer.name}
                  className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] md:rounded-[30px]"
                >
                  <div className="relative h-[220px] overflow-hidden sm:h-[260px] md:h-[280px]">
                    <img
                      src={offer.image}
                      alt={offer.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-[#07090f]/20 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[#a8d1ff] backdrop-blur-md sm:left-6 sm:top-6 sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.22em]">
                      {offer.badge}
                    </div>
                  </div>

                  <div className="space-y-4 p-4 sm:p-5 md:space-y-5 md:p-7">
                    <div>
                      <h3 className="text-[28px] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[30px] md:text-[34px]">
                        {offer.name}
                      </h3>
                      <p className="pt-3 text-[16px] leading-7 text-white/76 sm:text-[17px] md:pt-4 md:text-[18px] md:leading-8">
                        {offer.headline}
                      </p>
                    </div>

                    <p className="text-[14px] leading-6 text-white/58 md:text-[15px] md:leading-7">
                      {offer.description}
                    </p>

                    <div className="text-[12px] leading-5 text-white/50 md:text-[13px] md:leading-6">
                      {offer.metrics[0]}
                    </div>

                    <div className="space-y-3 pt-1">
                      {offer.platforms.map((item, index) => (
                        <div
                          key={item.label}
                          className={`flex items-center justify-between gap-4 rounded-[16px] border border-white/10 px-4 py-3 md:rounded-[18px] md:px-5 md:py-4 ${index === 0 ? "bg-black/25" : "bg-black/20"}`}
                        >
                          <div className="text-[11px] uppercase tracking-[0.15em] text-white/45 md:text-[12px] md:tracking-[0.18em]">
                            {item.label}
                          </div>
                          <div
                            className={`font-semibold tracking-[-0.02em] text-white ${index === 0 ? "text-[18px] md:text-[22px]" : "text-[14px] md:text-[15px]"}`}
                          >
                            {item.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,_#0b0f18_0%,_#07090f_100%)] px-4 py-5 sm:px-5 sm:py-6 md:min-h-[1320px] md:rounded-[36px] md:px-14 md:py-14 print:break-after-page">
          <div className="space-y-5 md:space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] md:rounded-[30px]">
                <div className="relative h-[220px] overflow-hidden sm:h-[250px] md:h-[280px]">
                  <img
                    src="/trade001k.jpg"
                    alt="001k.trade"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-[#07090f]/20 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[#a8d1ff] backdrop-blur-md sm:left-6 sm:top-6 sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.22em]">
                    Premium Channel
                  </div>
                </div>

                <div className="space-y-4 p-4 sm:p-5 md:space-y-5 md:p-7">
                  <div>
                    <h3 className="text-[28px] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[30px] md:text-[36px]">
                      001k.trade
                    </h3>
                    <p className="pt-3 text-[16px] leading-7 text-white/76 sm:text-[17px] md:pt-4 md:text-[18px] md:leading-8">
                      Flagship trader-focused Telegram channel with high-intent
                      audience
                    </p>
                  </div>

                  <p className="text-[14px] leading-6 text-white/58 md:text-[15px] md:leading-7">
                    A premium Telegram asset within the a01k ecosystem, built
                    around real trading activity and experienced market
                    participants. Best suited for exchanges, trading tools, and
                    infrastructure targeting active traders.
                  </p>

                  <div className="text-[12px] leading-5 text-white/50 md:text-[13px] md:leading-6">
                    116k subscribers • 23–25k avg views • Advanced trader
                    audience
                  </div>

                  <div className="rounded-[16px] border border-white/10 bg-black/25 px-4 py-3 md:rounded-[18px] md:px-5 md:py-4">
                    <div className="text-[11px] uppercase tracking-[0.15em] text-white/45 md:text-[12px] md:tracking-[0.18em]">
                      Telegram Placement
                    </div>
                    <div className="pt-2 text-[18px] font-semibold tracking-[-0.02em] text-white md:text-[22px]">
                      $3,125
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] md:rounded-[30px]">
                <div className="relative h-[220px] overflow-hidden sm:h-[250px] md:h-[280px]">
                  <img
                    src="/slezi_satoshi.jpg"
                    alt="Сатоши"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-[#07090f]/20 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[#a8d1ff] backdrop-blur-md sm:left-6 sm:top-6 sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.22em]">
                    Top Offer
                  </div>
                </div>

                <div className="space-y-4 p-4 sm:p-5 md:space-y-5 md:p-7">
                  <div>
                    <h3 className="text-[28px] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[30px] md:text-[36px]">
                      Сатоши
                    </h3>
                    <p className="pt-3 text-[16px] leading-7 text-white/76 sm:text-[17px] md:pt-4 md:text-[18px] md:leading-8">
                      A cornerstone media ecosystem with long-term audience
                      loyalty.
                    </p>
                  </div>

                  <p className="text-[14px] leading-6 text-white/58 md:text-[15px] md:leading-7">
                    YouTube channel is a go-to for technical deep-dives,
                    attracting high-LTV traders and seasoned investors who
                    prioritize platform stability.
                  </p>
                  <div className="text-[12px] leading-5 text-white/50 md:text-[13px] md:leading-6">
                    237k YouTube • 134k Telegram • Extended ecosystem
                  </div>

                  <div className="rounded-[16px] border border-white/10 bg-black/25 px-4 py-3 md:rounded-[18px] md:px-5 md:py-4">
                    <div className="text-[11px] uppercase tracking-[0.15em] text-white/45 md:text-[12px] md:tracking-[0.18em]">
                      Combined Entry
                    </div>
                    <div className="pt-2 text-[18px] font-semibold tracking-[-0.02em] text-white md:text-[22px]">
                      $8,500
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[22px] border border-[#7e6cff]/20 bg-[linear-gradient(135deg,rgba(77,163,255,0.06),rgba(138,92,246,0.10))] md:rounded-[30px]">
              <div className="p-4 sm:p-5 md:p-9">
                <div className="max-w-[760px]">
                  <div className="inline-flex rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[#d7c9ff] backdrop-blur-md sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.22em]">
                    Strategic Partner
                  </div>

                  <h3 className="pt-4 text-[30px] font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-[34px] md:pt-6 md:text-[40px] md:leading-[0.94]">
                    Pro Blockchain
                  </h3>

                  <p className="pt-3 text-[16px] leading-7 text-white/76 sm:text-[17px] md:pt-4 md:text-[18px] md:leading-8">
                    The largest crypto media network in the CIS region since
                    2017, providing massive presence across YouTube and
                    Telegram.
                  </p>

                  <p className="pt-4 text-[14px] leading-6 text-white/58 md:pt-5 md:text-[15px] md:leading-7">
                    High-frequency exposure through 25k+ views per Telegram post
                    and 25–55k views on YouTube deep dives and podcasts. Massive
                    reach and market dominance, trusted by Tier-1 exchanges for
                    major launches and wide-scale user acquisition.
                  </p>
                </div>

                <div className="mt-5 text-[12px] leading-5 text-white/50 md:mt-7 md:text-[13px] md:leading-6">
                  190k Pro Blockchain Telegram • 56.7k Pro Crypto Trading
                  Telegram • 232k YouTube • 25k+ Telegram post views • 25–55k
                  YouTube views
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-8 md:gap-4">
                  {[
                    {
                      type: "Telegram Channel",
                      title: "Pro Blockchain",
                      desc: "Premium Telegram placement inside the flagship Pro Blockchain channel.",
                      metricLabel: "Avg Views",
                      metric: "25k avg views over first 2 days",
                      price: "$2,000",
                    },
                    {
                      type: "Telegram Channel",
                      title: "Pro Crypto Trading",
                      desc: "Additional Telegram exposure through the Pro Crypto Trading audience.",
                      metricLabel: "Avg Views",
                      metric: "10.3k avg views",
                      price: "$1,500",
                    },
                    {
                      type: "Bundle",
                      title: "YouTube Review + Pro Blockchain Telegram",
                      desc: "Full YouTube review combined with a Pro Blockchain Telegram placement.",
                      metricLabel: "Views",
                      metric: "25–55k YouTube + 25k Telegram (first 2 days)",
                      price: "$5,625",
                    },
                    {
                      type: "YouTube",
                      title: "YouTube Integration",
                      desc: "Native YouTube integration inside Pro Blockchain video content.",
                      metricLabel: "Expected Views",
                      metric: "25–55k YouTube views",
                      price: "$2,500",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[18px] border border-white/10 bg-black/20 px-4 py-4 md:rounded-[22px] md:px-5 md:py-5"
                    >
                      <div className="text-[10px] uppercase tracking-[0.16em] text-[#9fcbff]/90 md:text-[11px] md:tracking-[0.18em]">
                        {item.type}
                      </div>
                      <div className="pt-2 text-[22px] font-semibold leading-[1.05] tracking-[-0.03em] text-white md:pt-3 md:text-[24px]">
                        {item.title}
                      </div>
                      <div className="pt-3 text-[14px] leading-6 text-white/58">
                        {item.desc}
                      </div>
                      <div className="pt-4 text-[11px] uppercase tracking-[0.14em] text-white/42 md:text-[12px] md:tracking-[0.16em]">
                        {item.metricLabel}
                      </div>
                      <div className="pt-2 text-[15px] leading-6 font-medium text-white/82 md:text-[16px]">
                        {item.metric}
                      </div>
                      <div className="pt-4 text-[24px] font-semibold leading-none tracking-[-0.03em] text-white md:pt-5 md:text-[28px]">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#080a12] px-4 py-5 sm:px-5 sm:py-6 md:min-h-[1320px] md:rounded-[48px] md:px-12 md:py-20 print:break-after-page">
          <div className="absolute left-0 top-0 h-[500px] w-full bg-[radial-gradient(circle_at_30%_0%,rgba(126,108,255,0.1),transparent_70%)]" />

          <div className="relative z-10 space-y-7 sm:space-y-8 md:space-y-12">
            <div className="border-b border-white/5 pb-6 md:flex md:items-end md:justify-between md:pb-12">
              <div className="max-w-[700px]">
                <h2 className="text-[32px] font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-[42px] md:text-[68px] md:leading-[0.9]">
                  Mass Production <br />
                  <span className="text-white/30">& Brand Awareness</span>
                </h2>
              </div>
            </div>

            <div>
              <div className="text-[18px] italic leading-[1.35] tracking-[-0.01em] text-white/85 sm:text-[22px] md:text-[26px]">
                Why them:
              </div>

              <div className="mt-6 space-y-4 md:mt-8 md:space-y-5">
                {[
                  "Each one has promoted crypto projects before, advertisers came back for more integrations as they did extremely well.",
                  "They have authority, engagement and trust of their audiences on one of a kind level, making their integrations genuine recommendation which their community listens and follows passionately.",
                  "Audiences themselves are tech and crypto people, most use crypto wallets, exchanges etc. and are advanced, capable individuals.",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3 sm:gap-4">
                    <div className="mt-[9px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#59c7ff] sm:mt-[11px]" />
                    <p className="text-[15px] leading-6 text-white/80 sm:text-[17px] sm:leading-7 md:text-[19px] md:leading-8">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-2 md:space-y-6 md:pt-6">
              {massAwarenessOffers.map((item) => (
                <div
                  key={item.name}
                  className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] md:flex md:min-h-[360px] md:rounded-[36px]"
                >
                  <div className="relative h-[220px] w-full shrink-0 overflow-hidden sm:h-[260px] md:h-auto md:w-[450px]">
                    <img
                      src={item.image}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      alt={item.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080a12] via-transparent to-transparent md:bg-gradient-to-r" />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-4 sm:p-5 md:px-10 md:pb-8 md:pt-7">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7e6cff] md:mb-4">
                          {item.badge}
                        </div>
                        <h3 className="text-[30px] font-bold leading-none tracking-tighter text-white sm:text-[36px] md:text-[42px]">
                          {item.name}
                        </h3>
                        <p className="max-w-[580px] pt-4 text-[15px] leading-6 text-white/50 sm:text-[16px] sm:leading-7 md:pt-6 md:text-[17px] md:leading-[1.65]">
                          {item.desc}
                        </p>
                      </div>
                      <div className="md:text-right">
                        <div className="mb-1 text-[10px] uppercase tracking-[0.18em] text-white/30 md:tracking-widest">
                          Standard Integration
                        </div>
                        <div className="text-[28px] font-bold leading-none tracking-tighter text-white sm:text-[32px] md:text-[36px]">
                          {item.price}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-4 border-t border-white/5 pt-5 md:mt-8 md:flex-row md:items-center md:justify-between md:pt-6">
                      <div className="space-y-1">
                        <div className="text-[10px] uppercase tracking-[0.18em] text-white/30 md:tracking-widest">
                          Target Views
                        </div>
                        <div className="text-[17px] font-semibold text-white/90 md:text-[18px]">
                          {item.views}
                        </div>
                      </div>
                      <div className="max-w-[340px] space-y-1">
                        <div className="text-[10px] uppercase tracking-[0.18em] text-[#a8d1ff] md:tracking-widest">
                          Strategic Advantage
                        </div>
                        <div className="text-[12px] leading-5 text-white/40">
                          Placement can be negotiated for specific high-traffic
                          video topics to maximize conversion.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Exclusive Sobolev Block */}
              <div className="mt-8 group relative overflow-hidden rounded-[22px] border border-[#ffd700]/20 bg-white/[0.03] transition-all duration-500 hover:border-[#ffd700]/40 hover:bg-white/[0.05] md:mt-12 md:flex md:min-h-[360px] md:rounded-[36px]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,215,0,0.03),transparent_50%)]" />

                <div className="relative h-[280px] w-full shrink-0 overflow-hidden sm:h-[320px] md:h-auto md:w-[450px]">
                  <img
                    src="/соболев.jpg"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Николай Соболев"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080a12] via-transparent to-transparent md:bg-gradient-to-r" />
                  <div className="absolute left-4 top-4 md:left-6 md:top-6">
                    <div className="rounded-full border border-[#ffd700]/30 bg-[#ffd700]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ffd700] backdrop-blur-md sm:px-4 sm:py-2">
                      Exclusive Late May Offer
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex flex-1 flex-col justify-between p-4 sm:p-5 md:px-10 md:pb-8 md:pt-7">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-[480px]">
                      <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 md:mb-4">
                        Flagship Mass Awareness Asset
                      </div>
                      <h3 className="text-[30px] font-bold leading-none tracking-tighter text-white sm:text-[36px] md:text-[42px]">
                        Николай Соболев
                      </h3>
                      <p className="pt-4 text-[15px] leading-6 text-white/50 sm:text-[16px] sm:leading-7 md:pt-6 md:text-[17px] md:leading-[1.65]">
                        One of the strongest broad-reach integrations in the
                        entire media kit. Built for maximum brand awareness.
                        Instead of paying the standard visible YouTube rate, get
                        a bundled premium placement with Telegram posts included
                        at a much stronger entry point.
                      </p>
                    </div>
                    <div className="md:text-right">
                      <div className="mb-1 text-[10px] uppercase tracking-[0.18em] text-[#ffd700]/70 md:tracking-widest">
                        Bundle Price (YT + 5 TG Posts)
                      </div>
                      <div className="text-[28px] font-bold leading-none tracking-tighter text-[#ffd700] sm:text-[32px] md:text-[36px]">
                        $25,000
                      </div>
                      <div className="mt-1 text-[12px] text-white/30 line-through">
                        Standard YT: $31,250
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-4 border-t border-[#ffd700]/10 pt-5 md:mt-8 md:flex-row md:items-center md:justify-between md:pt-6">
                    <div className="flex gap-6 sm:gap-8">
                      <div className="space-y-1">
                        <div className="text-[10px] uppercase tracking-[0.18em] text-white/30 md:tracking-widest">
                          YT Views
                        </div>
                        <div className="text-[17px] font-semibold text-white/90 md:text-[18px]">
                          400k–900k+
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] uppercase tracking-[0.18em] text-white/30 md:tracking-widest">
                          TG Subs
                        </div>
                        <div className="text-[17px] font-semibold text-white/90 md:text-[18px]">
                          113,000
                        </div>
                      </div>
                    </div>
                    <div className="max-w-[340px] space-y-1">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-[#ffd700]/60 md:tracking-widest">
                        Strategic Advantage
                      </div>
                      <div className="text-[12px] leading-5 text-white/40">
                        Bundles YT + TG into one entry point, increasing ROI
                        while keeping creator-level trust intact.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,_#0b0f18_0%,_#07090f_100%)] px-4 py-5 sm:px-5 sm:py-6 md:rounded-[32px] md:p-14 print:break-after-page">
          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
              <div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/55 sm:text-sm sm:tracking-[0.3em]">
                  Full Network
                </div>
                <h2 className="pt-3 text-[30px] font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-[38px] md:text-[56px] md:leading-[0.94]">
                  Complete Media
                  <br />
                  Inventory
                </h2>
              </div>

              <div className="max-w-[420px] text-[14px] leading-6 text-white/55 md:text-[15px] md:leading-7">
                A complete directory of available placements, creator
                integrations, and bundled campaign assets across the TeleScope
                network.
              </div>
            </div>

            <div className="space-y-3 pt-1 md:space-y-4 md:pt-4">
              {fullNetworkRows.map((item) => (
                <div
                  key={item.name + item.type + item.price}
                  className="rounded-[18px] border border-white/10 bg-white/[0.04] p-3 sm:p-4 md:grid md:grid-cols-[88px_1.45fr_0.9fr_0.9fr_0.75fr] md:gap-4 md:rounded-[24px] md:p-5"
                >
                  <div className="flex items-start gap-3 md:block">
                    <div className="h-[64px] w-[64px] shrink-0 overflow-hidden rounded-[16px] border border-white/10 bg-black/20 md:h-[72px] md:w-[72px] md:rounded-[18px]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0 md:hidden">
                      <div className="text-[18px] font-semibold leading-tight tracking-[-0.03em] text-white">
                        {item.name}
                      </div>
                      <div className="pt-1 text-[11px] uppercase tracking-[0.14em] text-white/42">
                        {item.type}
                      </div>
                    </div>
                  </div>

                  <div className="hidden min-w-0 md:block">
                    <div className="text-[22px] leading-none font-semibold tracking-[-0.03em] text-white">
                      {item.name}
                    </div>
                    <div className="pt-2 text-[13px] uppercase tracking-[0.18em] text-white/42">
                      {item.type}
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3 md:mt-0 md:contents">
                    <div className="rounded-[14px] border border-white/10 bg-black/20 px-3 py-3 md:rounded-[18px] md:px-4 md:py-4">
                      <div className="text-[10px] uppercase tracking-[0.14em] text-white/42 md:text-[11px] md:tracking-[0.18em]">
                        Avg Views
                      </div>
                      <div className="pt-1.5 text-[14px] leading-5 font-medium text-white/80 md:pt-2 md:text-[15px] md:leading-6">
                        {item.views}
                      </div>
                    </div>

                    <div className="rounded-[14px] border border-white/10 bg-black/20 px-3 py-3 md:rounded-[18px] md:px-4 md:py-4">
                      <div className="text-[10px] uppercase tracking-[0.14em] text-white/42 md:text-[11px] md:tracking-[0.18em]">
                        Audience
                      </div>
                      <div className="pt-1.5 text-[14px] leading-5 font-medium text-white/80 md:pt-2 md:text-[15px] md:leading-6">
                        {item.audience}
                      </div>
                    </div>

                    <div className="rounded-[14px] border border-white/10 bg-[linear-gradient(180deg,rgba(77,163,255,0.12),rgba(255,255,255,0.03))] px-3 py-3 sm:text-right md:rounded-[18px] md:px-4 md:py-4 md:text-right">
                      <div className="text-[10px] uppercase tracking-[0.14em] text-white/42 md:text-[11px] md:tracking-[0.18em]">
                        Price
                      </div>
                      <div className="pt-1.5 text-[18px] font-semibold leading-none tracking-[-0.03em] text-white md:pt-2 md:text-[22px]">
                        {item.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
