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
      image: "/pancryptan.jpg",
      name: "PanCryptan",
      type: "Telegram Placement",
      views: "9.7k avg views",
      audience: "53k subs",
      price: "$575",
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
      name: "Слезы Сатоши",
      type: "Telegram Placement",
      views: "25k avg views",
      audience: "135k subs",
      price: "$2,000",
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
      views: "23.6k avg views",
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
      image: "/pro-blockchain_media.jpg",
      name: "Pro Blockchain",
      type: "YouTube + Telegram Placement",
      views: "70k+ YouTube views",
      audience: "232k subs",
      price: "$5,625",
    },
    {
      image: "/slezi_satoshi.jpg",
      name: "Satoshi",
      type: "YouTube Integration",
      views: "TBD",
      audience: "237k subs",
      price: "$5,000",
    },
    {
      image: "/pro-blockchain_media.jpg",
      name: "Pro Blockchain",
      type: "Full Ecosystem Campaign",
      views: "2M+ estimated views",
      audience: "Multi-platform",
      price: "$31,250",
    },
  ];

  const fullNetworkPages = [];
  for (let i = 0; i < fullNetworkRows.length; i += 10) {
    fullNetworkPages.push(fullNetworkRows.slice(i, i + 10));
  }

  const topOffers = [
    {
      name: "Криптобош",
      image: "/crypto_bosh.jpg",
      badge: "Flagship Creator",
      headline:
        "Multi-platform crypto creator with high-trust distribution across YouTube and Telegram",
      description:
        "A premium creator asset combining narrative-driven YouTube integrations with a verified Telegram channel and optional Instagram amplification. Best suited for flagship campaigns, exchange launches, wallets, and high-quality crypto products that require strong positioning.",
      platforms: [
        { label: "YouTube Review", value: "$18,750" },
        { label: "Instagram Bonus", value: "230k audience" },
      ],
      metrics: ["382k YouTube • 155k Telegram • Verified channel"],
    },
    {
      name: "Сатоши",
      image: "/slezi_satoshi.jpg",
      badge: "Top Offer",
      headline:
        "Bitcoin-first media ecosystem with YouTube authority and Telegram reinforcement",
      description:
        "A trusted crypto media environment combining strong long-form YouTube presence with high-retention Telegram reach. Best suited for brands that want authority, repeat exposure, and deeper distribution across a Bitcoin-first audience.",
      platforms: [
        { label: "YouTube Integration", value: "$5,000" },
        { label: "Telegram Placement", value: "$2,000" },
        { label: "Combined Entry", value: "$7,000" },
      ],
      metrics: ["237k YouTube • 134k Telegram • Extended ecosystem"],
    },
    {
      name: "Gennady M",
      image: "/gennady_m_youtube.jpg",
      badge: "Flagship Creator",
      headline:
        "Performance-driven trading creator with strong YouTube + Telegram synergy",
      description:
        "A reliable creator asset built around practical trading content and consistent audience engagement. Best suited for exchanges, trading tools, and products requiring direct response from an active trader audience.",
      platforms: [
        { label: "YouTube Integration", value: "$3,750" },
        { label: "Full Sponsored Video", value: "$8,750" },
        { label: "Telegram Placement", value: "$875" },
      ],
      metrics: ["227k YouTube • 64k Telegram • ~80k avg views"],
    },
    {
      name: "Сайлер",
      image: "/sailer_1.jpg",
      badge: "Top Offer",
      headline: "Accessible trading creator for scalable campaign testing",
      description:
        "A reliable mid-tier asset suited for cost-efficient integrations and performance testing. Best used for validating creatives, expanding reach, and supporting larger campaign rollouts.",
      platforms: [
        { label: "YouTube Integration", value: "$1,625" },
        { label: "Telegram Placement", value: "$500" },
        { label: "Combined Entry", value: "$2,125" },
      ],
      metrics: ["220k YouTube • ~30k avg views"],
    },
    {
      name: "001k.trade",
      image: "/trade001k.jpg",
      badge: "Premium Channel",
      headline:
        "Flagship trader-focused Telegram channel with high-intent audience",
      description:
        "A premium Telegram asset within the a01k ecosystem, built around real trading activity and experienced market participants. Best suited for exchanges, trading tools, and infrastructure targeting active traders.",
      platforms: [{ label: "Telegram Placement", value: "$3,125" }],
      metrics: [
        "116k subscribers • 23–25k avg views • Advanced trader audience",
      ],
    },
    {
      name: "Pro Blockchain",
      image: "/pro-blockchain_media.jpg",
      badge: "Strategic Partner",
      headline:
        "Crypto media ecosystem built for scaled multi-channel campaigns",
      description:
        "A broader media asset built for brands that need more than one-off placement inventory. Best suited for exchanges, launches, and premium crypto campaigns requiring repeated visibility across Telegram and YouTube.",
      platforms: [
        { label: "YouTube + Telegram Placement", value: "$5,625" },
        { label: "Full Ecosystem Campaign", value: "$31,250" },
      ],
      metrics: [
        "188k Telegram • 232k YouTube • 67k YouTube Live • Ecosystem format",
      ],
    },
  ];

  const LOGOS = [
    "/a01k.jpg",
    "/a01ktraders.jpg",
    "/altador.jpg",
    "/artur_ict.jpg",
    "/bogdan_gde_x.jpg",
    "/crypto_bosh.jpg",
    "/crypto_headlines.jpg",
    "/crypto_lady.jpg",
    "/cryptomera.jpg",
    "/dnevnick_capitanicka.jpg",
    "/forex_trade_wit.jpg",
    "/gennady_m_telegram.jpg",
    "/gennady_m_youtube.jpg",
    "/muhtov.jpg",
    "/pancryptan.jpg",
    "/pitupi.jpg",
    "/pro_blockchain_squad.jpg",
    "/pro_blockchain_youtube.jpg",
    "/pro_crypto_trading.jpg",
    "/pro-blockchain_media.jpg",
    "/sailer_1.jpg",
    "/sailer_2.jpg",
    "/satoshi_finance.jpg",
    "/satoshi_news.jpg",
    "/slezi_satoshi.jpg",
    "/speculantt.jpg",
    "/trade_ultra.jpg",
    "/trade001k.jpg",
    "/trader_s_life.jpg",
  ];

  const HERO_LOGO_POSITIONS = [
    { top: "2%", left: "-2%", size: 118, rotate: -10, opacity: 0.95 },
    { top: "6%", left: "11%", size: 92, rotate: 7, opacity: 0.9 },
    { top: "0%", left: "23%", size: 108, rotate: -6, opacity: 0.88 },
    { top: "8%", left: "37%", size: 96, rotate: 11, opacity: 0.92 },
    { top: "3%", left: "50%", size: 120, rotate: -8, opacity: 0.9 },
    { top: "9%", left: "64%", size: 100, rotate: 9, opacity: 0.86 },
    { top: "2%", left: "78%", size: 112, rotate: -7, opacity: 0.93 },
    { top: "7%", left: "91%", size: 98, rotate: 10, opacity: 0.88 },

    { top: "28%", left: "4%", size: 104, rotate: 8, opacity: 0.84 },
    { top: "23%", left: "18%", size: 126, rotate: -9, opacity: 0.9 },
    { top: "31%", left: "33%", size: 94, rotate: 6, opacity: 0.86 },
    { top: "24%", left: "45%", size: 118, rotate: -11, opacity: 0.9 },
    { top: "30%", left: "58%", size: 96, rotate: 7, opacity: 0.84 },
    { top: "22%", left: "71%", size: 130, rotate: -5, opacity: 0.9 },
    { top: "29%", left: "86%", size: 102, rotate: 8, opacity: 0.86 },

    { top: "52%", left: "-1%", size: 110, rotate: -7, opacity: 0.9 },
    { top: "58%", left: "13%", size: 92, rotate: 10, opacity: 0.84 },
    { top: "49%", left: "26%", size: 124, rotate: -9, opacity: 0.9 },
    { top: "57%", left: "39%", size: 98, rotate: 8, opacity: 0.84 },
    { top: "50%", left: "51%", size: 116, rotate: -6, opacity: 0.9 },
    { top: "59%", left: "64%", size: 90, rotate: 11, opacity: 0.82 },
    { top: "52%", left: "75%", size: 128, rotate: -10, opacity: 0.9 },
    { top: "60%", left: "90%", size: 106, rotate: 7, opacity: 0.86 },

    { top: "81%", left: "6%", size: 114, rotate: 9, opacity: 0.88 },
    { top: "86%", left: "21%", size: 96, rotate: -8, opacity: 0.82 },
    { top: "79%", left: "36%", size: 122, rotate: 7, opacity: 0.88 },
    { top: "87%", left: "53%", size: 100, rotate: -11, opacity: 0.84 },
    { top: "80%", left: "69%", size: 118, rotate: 8, opacity: 0.9 },
    { top: "85%", left: "87%", size: 108, rotate: -7, opacity: 0.86 },
  ];

  return (
    <div className="bg-[#07090f] text-white min-h-screen ">
      <div className="mx-auto w-[1100px] px-10 py-10 space-y-8 print:w-[1100px]">
        <section className="relative min-h-[1320px] rounded-[36px] overflow-hidden border border-white/10 bg-[#07090f] px-14 py-14 flex flex-col justify-between print:break-after-page">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(77,163,255,0.10),transparent_24%),radial-gradient(circle_at_78%_14%,rgba(138,92,246,0.10),transparent_22%),linear-gradient(180deg,#0a0d14_0%,#07090f_100%)]" />
          <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute left-1/2 top-[26%] h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-[#4DA3FF]/18 blur-[130px]" />
          <div className="absolute left-[62%] top-[16%] h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[#8a5cf6]/14 blur-[120px]" />

          <div className="relative z-20 flex items-center justify-between">
            <div className="text-sm uppercase tracking-[0.38em] text-white/45">
              TeleScope Media Kit
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/55">
              Q1 2026
            </div>
          </div>

          <div className="relative z-20 pt-14">
            <div className="max-w-[920px]">
              <h1 className="text-[72px] leading-[0.92] font-semibold tracking-[-0.05em] text-white">
                The Premier Web3
                <br />
                Media Infrastructure
              </h1>

              <div className="mt-8 max-w-[860px] space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-[10px] h-[7px] w-[7px] rounded-full bg-[#59c7ff]" />
                  <p className="text-[19px] leading-8 text-white/76">
                    Omnichannel Market Domination: Synchronize your campaigns
                    across the 40+ most influential crypto communities in the
                    CIS region simultaneously.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-[10px] h-[7px] w-[7px] rounded-full bg-[#59c7ff]" />
                  <p className="text-[19px] leading-8 text-white/76">
                    Unified Corporate Billing: Eliminate accounting friction.
                    Launch massive network-wide takeovers using one legally
                    compliant, centralized contract.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-[10px] h-[7px] w-[7px] rounded-full bg-[#59c7ff]" />
                  <p className="text-[19px] leading-8 text-white/76">
                    Deterministic Analytics: Stop guessing your ROI. We provide
                    pixel-perfect click attribution for every single creator and
                    platform. Bot traffic is filtered out — only real live
                    users.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-16 h-[560px] overflow-hidden rounded-[30px] border border-white/8 bg-white/[0.02]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,163,255,0.08),transparent_45%)]" />
              <div className="absolute inset-0">
                {LOGOS.map(function (src, index) {
                  const item = HERO_LOGO_POSITIONS[index];
                  return (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="absolute rounded-[22px] object-cover border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                      style={{
                        top: item.top,
                        left: item.left,
                        width: `${item.size}px`,
                        height: `${item.size}px`,
                        transform: `rotate(${item.rotate}deg)`,
                        opacity: item.opacity,
                      }}
                    />
                  );
                })}
              </div>

              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07090f] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07090f] to-transparent" />
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#07090f] to-transparent" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#07090f] to-transparent" />
            </div>
          </div>

          <div className="relative z-20 flex items-end justify-between gap-10 pt-14">
            <div className="max-w-[520px]">
              <div className="text-[13px] uppercase tracking-[0.22em] text-white/35">
                For brands that need reach, trust, and execution
              </div>
              <div className="mt-4 text-[15px] leading-7 text-white/52">
                Built for exchanges, wallets, tax software, trading tools, and
                crypto products looking for scalable access to high-intent
                trader audiences across CIS.
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 min-w-[520px]">
              <div className="rounded-[24px] border border-white/10 bg-black/20 px-5 py-5 backdrop-blur-md">
                <div className="text-[30px] font-semibold tracking-tight text-white">
                  4M+
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-white/45">
                  Combined Audience
                </div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-black/20 px-5 py-5 backdrop-blur-md">
                <div className="text-[30px] font-semibold tracking-tight text-white">
                  45
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-white/45">
                  Verified Communities
                </div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-black/20 px-5 py-5 backdrop-blur-md">
                <div className="text-[30px] font-semibold tracking-tight text-white">
                  Multi
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-white/45">
                  Channel Access
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-[1320px] rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,_#0b0f18_0%,_#07090f_100%)] px-14 py-14 print:break-after-page">
          <div className="space-y-10">
            <div className="flex items-end justify-between gap-8">
              <div>
                <div className="text-sm uppercase tracking-[0.32em] text-white/45">
                  Our Top Offers
                </div>
                <h2 className="pt-4 text-[58px] leading-[0.95] font-semibold tracking-[-0.04em] text-white">
                  Flagship Creators
                  <br />& Premium Campaign Assets
                </h2>
              </div>
              <div className="max-w-[360px] text-[15px] leading-7 text-white/55">
                A selected group of the strongest creator and media placements
                inside the TeleScope network, built for premium launches and
                high-intent crypto trader exposure.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {topOffers.slice(0, 2).map(function (offer) {
                return (
                  <div
                    key={offer.name}
                    className="rounded-[30px] border border-white/10 bg-white/[0.04] overflow-hidden"
                  >
                    <div className="relative h-[300px] overflow-hidden">
                      <img
                        src={offer.image}
                        alt={offer.name}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-[#07090f]/20 to-transparent" />
                      <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#a8d1ff] backdrop-blur-md">
                        {offer.badge}
                      </div>
                    </div>

                    <div className="p-7 space-y-5">
                      <div>
                        <h3 className="text-[34px] leading-none font-semibold tracking-[-0.03em] text-white">
                          {offer.name}
                        </h3>
                        <p className="pt-4 text-[18px] leading-8 text-white/76">
                          {offer.headline}
                        </p>
                      </div>

                      <p className="text-[15px] leading-7 text-white/58">
                        {offer.description}
                      </p>

                      <div className="pt-1 text-[13px] leading-6 text-white/50">
                        {offer.metrics[0]}
                      </div>

                      <div className="space-y-3 pt-1">
                        {offer.platforms.map(function (item, index) {
                          return (
                            <div
                              key={item.label}
                              className={`flex items-center justify-between rounded-[18px] border border-white/10 px-5 py-4 ${
                                index === 0 ? "bg-black/25" : "bg-black/20"
                              }`}
                            >
                              <div className="text-[12px] uppercase tracking-[0.18em] text-white/45">
                                {item.label}
                              </div>
                              <div
                                className={`font-semibold tracking-[-0.02em] text-white ${
                                  index === 0 ? "text-[22px]" : "text-[15px]"
                                }`}
                              >
                                {item.value}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {topOffers.slice(2, 4).map(function (offer) {
                return (
                  <div
                    key={offer.name}
                    className="rounded-[30px] border border-white/10 bg-white/[0.04] overflow-hidden"
                  >
                    <div className="relative h-[260px] overflow-hidden">
                      <img
                        src={offer.image}
                        alt={offer.name}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-[#07090f]/20 to-transparent" />
                      <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#a8d1ff] backdrop-blur-md">
                        {offer.badge}
                      </div>
                    </div>

                    <div className="p-7 space-y-5">
                      <div>
                        <h3 className="text-[32px] leading-none font-semibold tracking-[-0.03em] text-white">
                          {offer.name}
                        </h3>
                        <p className="pt-4 text-[17px] leading-8 text-white/76">
                          {offer.headline}
                        </p>
                      </div>

                      <p className="text-[15px] leading-7 text-white/58">
                        {offer.description}
                      </p>

                      <div className="pt-1 text-[13px] leading-6 text-white/50">
                        {offer.metrics[0]}
                      </div>

                      <div className="space-y-3 pt-1">
                        {offer.platforms.map(function (item, index) {
                          return (
                            <div
                              key={item.label}
                              className={`flex items-center justify-between rounded-[18px] border border-white/10 px-5 py-4 ${
                                index === 0 ? "bg-black/25" : "bg-black/20"
                              }`}
                            >
                              <div className="text-[12px] uppercase tracking-[0.18em] text-white/45">
                                {item.label}
                              </div>
                              <div
                                className={`font-semibold tracking-[-0.02em] text-white ${
                                  index === 0 ? "text-[22px]" : "text-[15px]"
                                }`}
                              >
                                {item.value}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="min-h-[1320px] rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,_#0b0f18_0%,_#07090f_100%)] px-14 py-14 print:break-after-page">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-[30px] border border-white/10 bg-white/[0.04] overflow-hidden">
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src="/trade001k.jpg"
                    alt="001k.trade"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-[#07090f]/20 to-transparent" />
                  <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#a8d1ff] backdrop-blur-md">
                    Premium Channel
                  </div>
                </div>

                <div className="p-7 space-y-5">
                  <div>
                    <h3 className="text-[36px] leading-none font-semibold tracking-[-0.03em] text-white">
                      001k.trade
                    </h3>
                    <p className="pt-4 text-[18px] leading-8 text-white/76">
                      Flagship trader-focused Telegram channel with high-intent
                      audience
                    </p>
                  </div>

                  <p className="text-[15px] leading-7 text-white/58">
                    A premium Telegram asset within the a01k ecosystem, built
                    around real trading activity and experienced market
                    participants. Best suited for exchanges, trading tools, and
                    infrastructure targeting active traders.
                  </p>

                  <div className="pt-1 text-[13px] leading-6 text-white/50">
                    116k subscribers • 23–25k avg views • Advanced trader
                    audience
                  </div>

                  <div className="space-y-3 pt-1">
                    <div className="flex items-center justify-between rounded-[18px] border border-white/10 bg-black/25 px-5 py-4">
                      <div className="text-[12px] uppercase tracking-[0.18em] text-white/45">
                        Telegram Placement
                      </div>
                      <div className="text-[22px] font-semibold tracking-[-0.02em] text-white">
                        $3,125
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-white/[0.04] overflow-hidden">
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src="/crypto_headlines.jpg"
                    alt="Crypto Headlines"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-[#07090f]/20 to-transparent" />
                  <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#a8d1ff] backdrop-blur-md">
                    Network Asset
                  </div>
                </div>

                <div className="p-7 space-y-5">
                  <div>
                    <h3 className="text-[36px] leading-none font-semibold tracking-[-0.03em] text-white">
                      Crypto Headlines
                    </h3>
                    <p className="pt-4 text-[18px] leading-8 text-white/76">
                      Broad crypto media reach with strong Telegram distribution
                      value
                    </p>
                  </div>

                  <p className="text-[15px] leading-7 text-white/58">
                    A larger-scale Telegram media asset suited for broader
                    awareness, campaign reinforcement, and visibility expansion
                    across active crypto audiences.
                  </p>

                  <div className="pt-1 text-[13px] leading-6 text-white/50">
                    137k subscribers • 26k avg views • Broad crypto audience
                  </div>

                  <div className="space-y-3 pt-1">
                    <div className="flex items-center justify-between rounded-[18px] border border-white/10 bg-black/25 px-5 py-4">
                      <div className="text-[12px] uppercase tracking-[0.18em] text-white/45">
                        Placement Range
                      </div>
                      <div className="text-[18px] font-semibold tracking-[-0.02em] text-white">
                        $750–$1,875
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#7e6cff]/20 bg-[linear-gradient(135deg,rgba(77,163,255,0.06),rgba(138,92,246,0.10))] overflow-hidden">
              <div className="grid grid-cols-[0.95fr_1.25fr] min-h-[340px] border-b border-white/8">
                <div className="relative overflow-hidden border-r border-white/8">
                  <img
                    src="/pro-blockchain_media.jpg"
                    alt="Pro Blockchain"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-[#07090f]/20 to-transparent" />
                  <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#d7c9ff] backdrop-blur-md">
                    Strategic Partner
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <h3 className="text-[40px] leading-[0.94] font-semibold tracking-[-0.04em] text-white">
                          Pro Blockchain
                        </h3>
                        <p className="pt-4 max-w-[720px] text-[18px] leading-8 text-white/76">
                          Multi-platform crypto media ecosystem with YouTube and
                          Telegram scale
                        </p>
                        <p className="pt-5 max-w-[760px] text-[15px] leading-7 text-white/58">
                          A broader media asset built for brands that need more
                          than one-off placement inventory. Best suited for
                          exchanges, launches, and premium crypto campaigns
                          requiring repeated visibility across YouTube and
                          Telegram.
                        </p>
                      </div>

                      <div className="shrink-0 rounded-[22px] border border-white/10 bg-black/25 px-6 py-5 text-right">
                        <div className="text-[11px] uppercase tracking-[0.2em] text-white/42">
                          YouTube + Telegram
                        </div>
                        <div className="pt-2 text-[34px] leading-none font-semibold tracking-[-0.03em] text-white">
                          $5,625
                        </div>
                      </div>
                    </div>

                    <div className="mt-7 text-[13px] leading-6 text-white/50">
                      188k Telegram • 232k YouTube • 67k YouTube Live •
                      Ecosystem format
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 py-8 bg-[radial-gradient(circle_at_52%_8%,rgba(77,163,255,0.10),transparent_22%),radial-gradient(circle_at_65%_24%,rgba(138,92,246,0.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.015)_0%,rgba(255,255,255,0.005)_100%)]">
                <div className="flex items-start justify-between gap-8">
                  <div className="max-w-[520px]">
                    <div className="text-[12px] uppercase tracking-[0.24em] text-[#9fcbff]/80">
                      Full Ecosystem Campaign
                    </div>

                    <h3 className="pt-5 text-[56px] leading-[0.9] font-semibold tracking-[-0.05em] text-white">
                      Special
                      <br />
                      Project
                    </h3>

                    <p className="pt-5 text-[16px] leading-8 text-white/66">
                      A broader month-long media deployment across Pro
                      Blockchain assets, combining repeated visibility, social
                      distribution, short-form amplification, and
                      lead-generation funnels.
                    </p>
                  </div>

                  <div className="w-[280px] shrink-0 rounded-[26px] border border-white/10 bg-black/25 px-6 py-6">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white/42">
                      Campaign Price
                    </div>
                    <div className="pt-3 text-[44px] leading-none font-semibold tracking-[-0.04em] text-[#9fcbff]">
                      $31,250
                    </div>

                    <div className="mt-6 h-px bg-white/10" />

                    <div className="mt-6 text-[11px] uppercase tracking-[0.18em] text-white/42">
                      Estimated Views
                    </div>
                    <div className="pt-2 text-[34px] leading-none font-semibold tracking-[-0.03em] text-white">
                      2M+
                    </div>

                    <div className="mt-6 text-[11px] uppercase tracking-[0.18em] text-white/42">
                      Period
                    </div>
                    <div className="pt-2 text-[22px] leading-none font-semibold text-white">
                      1 Month
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
                  <div className="flex items-start gap-3 rounded-[20px] border border-white/10 bg-black/20 px-5 py-4">
                    <div className="pt-[1px] text-[20px] leading-none text-[#59c7ff]">
                      +
                    </div>
                    <div className="text-[15px] leading-7 text-white/76">
                      Video review of the project on YouTube
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-[20px] border border-white/10 bg-black/20 px-5 py-4">
                    <div className="pt-[1px] text-[20px] leading-none text-[#59c7ff]">
                      +
                    </div>
                    <div className="text-[15px] leading-7 text-white/76">
                      Media blocks in YouTube and Telegram for 30 days
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-[20px] border border-white/10 bg-black/20 px-5 py-4">
                    <div className="pt-[1px] text-[20px] leading-none text-[#59c7ff]">
                      +
                    </div>
                    <div className="text-[15px] leading-7 text-white/76">
                      4 YouTube integrations in mention or pre-roll format
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-[20px] border border-white/10 bg-black/20 px-5 py-4">
                    <div className="pt-[1px] text-[20px] leading-none text-[#59c7ff]">
                      +
                    </div>
                    <div className="text-[15px] leading-7 text-white/76">
                      6 posts across the PB Telegram channel network
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-[20px] border border-white/10 bg-black/20 px-5 py-4">
                    <div className="pt-[1px] text-[20px] leading-none text-[#59c7ff]">
                      +
                    </div>
                    <div className="text-[15px] leading-7 text-white/76">
                      4 vertical videos for Instagram Reels, YouTube Shorts, and
                      other short-form social media
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-[20px] border border-white/10 bg-black/20 px-5 py-4">
                    <div className="pt-[1px] text-[20px] leading-none text-[#59c7ff]">
                      +
                    </div>
                    <div className="text-[15px] leading-7 text-white/76">
                      Vertical funnels: lead generation through Reels and Shorts
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-[24px] border border-white/10 bg-black/20 px-6 py-5">
                  <div className="grid grid-cols-7 gap-4">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-[#59c7ff]/90">
                        YouTube
                      </div>
                      <div className="pt-2 text-[14px] leading-6 text-white/80">
                        PRO BLOCKCHAIN
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-[#59c7ff]/90">
                        YouTube
                      </div>
                      <div className="pt-2 text-[14px] leading-6 text-white/80">
                        PRO BLOCKCHAIN LIVE
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-[#59c7ff]/90">
                        Telegram
                      </div>
                      <div className="pt-2 text-[14px] leading-6 text-white/80">
                        PRO BLOCKCHAIN
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-[#59c7ff]/90">
                        Telegram
                      </div>
                      <div className="pt-2 text-[14px] leading-6 text-white/80">
                        PB Channel Network
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-[#59c7ff]/90">
                        Instagram
                      </div>
                      <div className="pt-2 text-[14px] leading-6 text-white/80">
                        Reels
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-[#59c7ff]/90">
                        YouTube
                      </div>
                      <div className="pt-2 text-[14px] leading-6 text-white/80">
                        Shorts
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-[#59c7ff]/90">
                        TikTok
                      </div>
                      <div className="pt-2 text-[14px] leading-6 text-white/80">
                        Video
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {fullNetworkPages.map(function (pageRows, pageIndex) {
          return (
            <section
              key={`full-network-page-${pageIndex}`}
              className="min-h-[1320px] rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,_#0b0f18_0%,_#07090f_100%)] p-14 print:break-after-page"
            >
              <div className="space-y-8">
                <div className="flex items-end justify-between gap-8">
                  <div>
                    <div className="text-sm uppercase tracking-[0.3em] text-white/55">
                      {pageIndex === 0
                        ? "Full Network"
                        : "Full Network Continued"}
                    </div>
                    <h2 className="pt-3 text-[56px] leading-[0.94] font-semibold tracking-[-0.04em] text-white">
                      {pageIndex === 0 ? (
                        <>
                          Complete Media
                          <br />
                          Inventory
                        </>
                      ) : (
                        <>
                          Network
                          <br />
                          Directory
                        </>
                      )}
                    </h2>
                  </div>

                  <div className="max-w-[420px] text-[15px] leading-7 text-white/55">
                    {pageIndex === 0
                      ? "A complete directory of available placements, creator integrations, and bundled campaign assets across the TeleScope network."
                      : "Continued inventory of available services across Telegram, YouTube, and bundled campaign formats."}
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  {pageRows.map(function (item) {
                    return (
                      <div
                        key={item.name + item.type + item.price}
                        className="grid grid-cols-[88px_1.45fr_0.9fr_0.9fr_0.75fr] items-center gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-5"
                      >
                        <div className="h-[72px] w-[72px] overflow-hidden rounded-[18px] border border-white/10 bg-black/20">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <div className="min-w-0">
                          <div className="text-[22px] leading-none font-semibold tracking-[-0.03em] text-white">
                            {item.name}
                          </div>
                          <div className="pt-2 text-[13px] uppercase tracking-[0.18em] text-white/42">
                            {item.type}
                          </div>
                        </div>

                        <div className="rounded-[18px] border border-white/10 bg-black/20 px-4 py-4">
                          <div className="text-[11px] uppercase tracking-[0.18em] text-white/42">
                            Avg Views
                          </div>
                          <div className="pt-2 text-[15px] leading-6 font-medium text-white/80">
                            {item.views}
                          </div>
                        </div>

                        <div className="rounded-[18px] border border-white/10 bg-black/20 px-4 py-4">
                          <div className="text-[11px] uppercase tracking-[0.18em] text-white/42">
                            Audience
                          </div>
                          <div className="pt-2 text-[15px] leading-6 font-medium text-white/80">
                            {item.audience}
                          </div>
                        </div>

                        <div className="rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(77,163,255,0.12),rgba(255,255,255,0.03))] px-4 py-4 text-right">
                          <div className="text-[11px] uppercase tracking-[0.18em] text-white/42">
                            Price
                          </div>
                          <div className="pt-2 text-[22px] leading-none font-semibold tracking-[-0.03em] text-white">
                            {item.price}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
