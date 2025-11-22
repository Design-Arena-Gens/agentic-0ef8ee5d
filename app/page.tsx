import {
  BarChart3,
  Facebook,
  Globe2,
  ShieldCheck,
  Target,
  TrendingUp
} from "lucide-react";

type Market = {
  country: string;
  marketFit: string;
  cpm: string;
  cpc: string;
  rationale: string;
  launchPlan: string[];
};

type Persona = {
  name: string;
  summary: string;
  painPoints: string[];
  triggers: string[];
  creativeHooks: string[];
};

type SWOTItem = {
  title: string;
  points: string[];
};

const launchMarkets: Market[] = [
  {
    country: "Germany",
    marketFit: "High disposable income, strong pet accessory spend, mature e-commerce habits.",
    cpm: "€4.80",
    cpc: "€0.72",
    rationale:
      "Germany has the largest cat population in the EU (~16M) with a proven appetite for premium pet gear. Consumer trust in safety engineering favours structured backpacks over soft carriers.",
    launchPlan: [
      "Localize creative with German copy emphasizing TÜV-like safety cues.",
      "Segment interest stacks: Haustiere > Katzenliebhaber + Outdoor/Urban commuters.",
      "Retarget cart view and product video viewers with free-shipping urgency."
    ]
  },
  {
    country: "France",
    marketFit: "Strong social commerce culture, cat ownership density, and lifestyle-shift towards pet mobility.",
    cpm: "€5.10",
    cpc: "€0.68",
    rationale:
      "French consumers respond well to aesthetic-forward storytelling. Existing competitor (FlyBird) has brand awareness—you can position with improved ventilation and ergonomic design.",
    launchPlan: [
      "Run split-test on aesthetic lifestyle video vs. functional demo to gauge positioning.",
      "Use Advantage+ shopping campaigns paired with catalogue retargeting.",
      "Partner with 2-3 mid-tier Parisian pet influencers for UGC retargeting."
    ]
  },
  {
    country: "Netherlands",
    marketFit: "High urban cycling culture and willingness to invest in pet safety solutions.",
    cpm: "€4.20",
    cpc: "€0.64",
    rationale:
      "Dutch cat owners prioritise mobility and design. Facebook penetration and cross-posting to Instagram yields efficient reach. Lower saturation compared with DACH region.",
    launchPlan: [
      "Highlight backpack stability on bikes/scooters with dynamic motion shots.",
      "Bundle offer: backpack + safety leash to increase AOV during launch window.",
      "Leverage Dutch-language landing page with klarna/afterpay style payment options."
    ]
  }
];

const personas: Persona[] = [
  {
    name: "Urban Explorer Couple",
    summary:
      "30-40yo professionals living in Tier-1 EU cities who treat pets as family members and travel on weekends.",
    painPoints: [
      "Existing carriers are bulky, unattractive, or unsafe for public transport.",
      "Cats resist traditional cages, leading to stressful vet trips.",
      "Desire for Instagrammable experiences with pets."
    ],
    triggers: [
      "Visual proof of cat comfort (ventilation, window bubble).",
      "Testimonials about stress-free commuting.",
      "Limited launch bundles or exclusive colours."
    ],
    creativeHooks: [
      "Split-screen showing stressed vs. relaxed cat in FlyBird backpack.",
      "POV reel of weekend getaway using trains and cafés.",
      "Lifestyle carousel documenting 'Day in the life with Luna'."
    ]
  },
  {
    name: "Micro-Adventure Solo Owner",
    summary:
      "25-34yo female cat owners who enjoy cycling, hiking, and casual outdoor activities.",
    painPoints: [
      "Fear of cat overheating in enclosed carriers.",
      "Clunky designs clash with minimalist wardrobe.",
      "Limited storage for personal items alongside the cat."
    ],
    triggers: [
      "Ventilation diagrams with temperature callouts.",
      "Emphasis on ergonomic weight distribution and pockets.",
      "Eco-friendly material certification."
    ],
    creativeHooks: [
      "Thermal imaging overlay showing airflow in motion.",
      "UGC selfie series: 'My cat's first bike ride'.",
      "Quick pack-and-go tutorial featuring storage compartments."
    ]
  },
  {
    name: "Frequent Vet Visitor",
    summary:
      "35-55yo owners whose cats require regular vet checks; trust and safety focused.",
    painPoints: [
      "Cats panic in noisy waiting rooms.",
      "Difficulty cleaning after accidents.",
      "Need for hands-free solution when juggling paperwork."
    ],
    triggers: [
      "Demonstrate stability on the floor and during lifting.",
      "Antimicrobial lining and easy-clean removable pads.",
      "Reassuring vet endorsements."
    ],
    creativeHooks: [
      "Expert testimonial: veterinarian walkthrough.",
      "Time-lapse of disassembly and cleaning within 60 seconds.",
      "Retargeting infographic: '5 reasons vets recommend FlyBird'."
    ]
  }
];

const swot: SWOTItem[] = [
  {
    title: "Strengths",
    points: [
      "Premium aesthetic differentiates from utilitarian carriers.",
      "Rigid frame and 180° visibility creates emotional appeal for owners.",
      "Existing user-generated content demonstrates social proof."
    ]
  },
  {
    title: "Weaknesses",
    points: [
      "Higher price point (>€120) limits impulse purchases.",
      "Product weight may concern petite owners.",
      "Limited SKU variety could slow repeat purchase velocity."
    ]
  },
  {
    title: "Opportunities",
    points: [
      "Growth in pet humanisation and travel accessories across EU.",
      "Facebook Advantage+ Shopping automations lower creative testing overhead.",
      "Cross-sell potential with calming accessories and travel bundles."
    ]
  },
  {
    title: "Threats",
    points: [
      "Cheaper Asian imports undercut with aggressive pricing.",
      "Potential regulatory scrutiny on animal transport equipment.",
      "Meta ad costs rising Q4; need strong CRO to maintain ROAS."
    ]
  }
];

const growthTimeline = [
  {
    phase: "Weeks 1-2: Validation Sprint",
    focus:
      "Launch localized landing pages for Germany, France, Netherlands. Use 3 creative pillars (Comfort, Safety, Lifestyle) with dynamic copy testing.",
    kpis: ["CTR > 1.8%", "ATC rate > 8%", "Initial ROAS >= 1.5"]
  },
  {
    phase: "Weeks 3-6: Scale and Optimize",
    focus:
      "Shift budget to highest-ROAS country, expand lookalike audiences (1%, 3%, 5%), introduce Advantage+ shopping campaigns with catalog feeds.",
    kpis: ["Stable ROAS >= 2.5", "CPM < €6", "CAC < €45"]
  },
  {
    phase: "Weeks 7-12: Retention & Bundling",
    focus:
      "Launch post-purchase automation (email + Messenger), introduce seasonal colour drops, retarget with vet partnership seal.",
    kpis: ["Repeat purchase rate 12%", "Email open rate 38%", "NPS > 50"]
  }
];

const adAngles = [
  {
    title: "Calmer Commutes",
    body:
      "Show before/after of anxious cat transforming into calm explorer. Emphasize breathable mesh, 3-side airflow, and whisper-quiet zippers."
  },
  {
    title: "Designed for EU Transit",
    body:
      "Highlight compatibility with trains, metro, and cycling. Feature EU-compliant size specs and ergonomic straps for long walks."
  },
  {
    title: "Vet-Approved Safety",
    body:
      "Co-create testimonial with partner vets. Include clip of vet demonstrating secure base, removable pad, and sanitized surfaces."
  },
  {
    title: "Stylish Storytelling",
    body:
      "Lean into Instagrammable visuals. Contrast drab cages vs. FlyBird's modern design. Encourage UGC with hashtag challenge."
  }
];

export default function Page() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16">
      <header className="flex flex-col gap-4">
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-secondary">
          <Globe2 className="h-4 w-4" />
          EU Go-To-Market Blueprint
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl">
          FlyBird Cat Backpack: Facebook Ads Launch Strategy
        </h1>
        <p className="max-w-3xl text-lg text-slate-700">
          Detailed market readiness assessment, country prioritization, audience
          segmentation, and creative roadmap to profitably launch FlyBird in the
          European Union using Meta&apos;s ad ecosystem.
        </p>
      </header>

      <section className="grid gap-8 lg:grid-cols-[1fr,1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3 text-primary">
            <TrendingUp className="h-6 w-6" />
            <h2 className="font-heading text-2xl">Snapshot</h2>
          </div>
          <ul className="space-y-4 text-slate-700">
            <li>
              EU premium pet accessory market grows at 7.8% CAGR with Germany
              and France contributing 46% of spend.
            </li>
            <li>
              Meta ads remain efficient for niche pet verticals thanks to
              interest stacking and pet-owner lookalikes.
            </li>
            <li>
              FlyBird’s perceived quality justifies a premium positioning so
              long as creative stresses comfort and safety certifications.
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3 text-primary">
            <ShieldCheck className="h-6 w-6" />
            <h2 className="font-heading text-2xl">Success Conditions</h2>
          </div>
          <ul className="space-y-4 text-slate-700">
            <li>Localize landing pages and ad copy for trust and relevance.</li>
            <li>
              Use blended ROAS/CPA targets with weekly creative refresh to avoid
              fatigue.
            </li>
            <li>
              Build retention loops (email + Messenger) from day one to offset
              paid acquisition costs.
            </li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="mb-8 flex items-center gap-3 text-primary">
          <Target className="h-6 w-6" />
          <h2 className="font-heading text-2xl">Priority Launch Markets</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {launchMarkets.map((market) => (
            <article
              key={market.country}
              className="flex flex-col gap-4 rounded-2xl bg-slate-50 p-6"
            >
              <div>
                <h3 className="font-heading text-xl text-slate-900">
                  {market.country}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-widest text-secondary">
                  Market Fit
                </p>
                <p className="mt-1 text-slate-700">{market.marketFit}</p>
              </div>
              <div className="flex items-center gap-6 text-sm font-semibold text-slate-800">
                <span>CPM {market.cpm}</span>
                <span>CPC {market.cpc}</span>
              </div>
              <p className="text-sm text-slate-600">{market.rationale}</p>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                  Launch Moves
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  {market.launchPlan.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="mb-8 flex items-center gap-3 text-primary">
          <BarChart3 className="h-6 w-6" />
          <h2 className="font-heading text-2xl">SWOT Lens</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {swot.map((item) => (
            <div key={item.title} className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-heading text-lg text-slate-900">
                {item.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="mb-8 flex items-center gap-3 text-primary">
          <Facebook className="h-6 w-6" />
          <h2 className="font-heading text-2xl">Persona-Driven Creative Matrix</h2>
        </div>
        <div className="space-y-8">
          {personas.map((persona) => (
            <div
              key={persona.name}
              className="grid gap-6 rounded-2xl bg-slate-50 p-6 md:grid-cols-[220px,1fr]"
            >
              <div>
                <h3 className="font-heading text-xl text-slate-900">
                  {persona.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{persona.summary}</p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                    Pain Points
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    {persona.painPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                    Purchase Triggers
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    {persona.triggers.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                    Creative Hooks
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    {persona.creativeHooks.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="mb-8 flex items-center gap-3 text-primary">
          <TrendingUp className="h-6 w-6" />
          <h2 className="font-heading text-2xl">Scaling Timeline</h2>
        </div>
        <div className="space-y-6">
          {growthTimeline.map((phase) => (
            <div
              key={phase.phase}
              className="rounded-2xl bg-slate-50 p-6 shadow-sm"
            >
              <h3 className="font-heading text-lg text-slate-900">
                {phase.phase}
              </h3>
              <p className="mt-2 text-sm text-slate-700">{phase.focus}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-secondary">
                North Star KPIs
              </p>
              <ul className="mt-2 flex flex-wrap gap-3 text-sm text-slate-700">
                {phase.kpis.map((kpi) => (
                  <li
                    key={kpi}
                    className="rounded-full bg-white px-3 py-1 shadow-sm"
                  >
                    {kpi}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="mb-8 flex items-center gap-3 text-primary">
          <Target className="h-6 w-6" />
          <h2 className="font-heading text-2xl">High-Converting Ad Angles</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {adAngles.map((angle) => (
            <div key={angle.title} className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-heading text-lg text-slate-900">
                {angle.title}
              </h3>
              <p className="mt-3 text-sm text-slate-700">{angle.body}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-2xl text-slate-900">
            Recommendation
          </h2>
          <p className="text-slate-700">
            Begin with Germany and France at a combined €600 daily Meta budget,
            using 60% for Prospecting (Advantage+ Shopping + stacked interests)
            and 40% for Retargeting (UGC, testimonials, bundle offers). Expand
            to the Netherlands once stable ROAS &gt;= 2.5 is sustained for two
            consecutive weeks. Reinforce the premium positioning with localized
            landing experiences, highlight comfort and safety, and nurture
            post-purchase communities to drive word-of-mouth and referrals.
          </p>
        </div>
      </footer>
    </main>
  );
}
