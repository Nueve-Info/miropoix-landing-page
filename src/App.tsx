/**
 * INDUSTRIAL EDITORIAL FUSION
 *
 * Direction: High-end food magazine meets working kitchen
 * - Warm cream background with charcoal and terracotta accents
 * - Bold condensed display (Oswald) + refined sans-serif (Inter)
 * - Large typographic statements with utilitarian ticket details
 * - Asymmetric editorial layouts with industrial grid overlays
 */

import { ListTodo, CheckCircle, Send, ArrowRight, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import createOrderMobilePortrait from "../assets/create-order-mobile-portrait.png";
import createOrderMobileLeft from "../assets/create-order-mobile-left.png";
import dashboardMobilePortrait from "../assets/dashboard-mobile-portrait.png";
import invoicePortrait from "../assets/incoice-portrait.png";
import handAsset from "../assets/hand-asset.png";
import logoBrandBackground from "../assets/logo-brand-background.svg";
import heroAnimationVideo from "../assets/hero-animation (2).webm";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

  .v6-landing {
    --v6-cream: #FAF8F5;
    --v6-warm-white: #FFFDFB;
    --v6-charcoal: #1C1917;
    --v6-charcoal-light: #292524;
    --v6-terracotta: #C2410C;
    --v6-terracotta-light: #EA580C;
    --v6-copper: #B45309;
    --v6-sand: #E7E5E4;
    --v6-muted: #78716C;
    --v6-border: #D6D3D1;
    font-family: 'Inter', sans-serif;
    background: var(--v6-cream);
    color: var(--v6-charcoal);
  }

  .v6-landing * {
    box-sizing: border-box;
  }

  .v6-display {
    font-family: 'Oswald', sans-serif;
    font-weight: 600;
    letter-spacing: -0.01em;
    text-transform: uppercase;
  }

  .v6-mono {
    font-family: 'IBM Plex Mono', monospace;
  }

  .v6-serif {
    font-family: 'Inter', sans-serif;
  }

  .v6-section {
    padding: 5rem 1.5rem;
    position: relative;
  }

  @media (min-width: 768px) {
    .v6-section {
      padding: 7rem 2rem;
    }
  }

  @media (min-width: 1024px) {
    .v6-section {
      padding: 8rem 3rem;
    }
  }

  .v6-ticket {
    background: linear-gradient(135deg, #FFFEF7 0%, #FDF9F3 100%);
    font-family: 'IBM Plex Mono', monospace;
    border: 1px dashed var(--v6-border);
    position: relative;
  }

  .v6-ticket::before,
  .v6-ticket::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: var(--v6-cream);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }

  .v6-ticket::before {
    left: -6px;
    border-right: 1px dashed var(--v6-border);
  }

  .v6-ticket::after {
    right: -6px;
    border-left: 1px dashed var(--v6-border);
  }

  .v6-grid-bg {
    background-image:
      linear-gradient(rgba(28,25,23,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(28,25,23,0.03) 1px, transparent 1px);
    background-size: 48px 48px;
  }

  .v6-giant-text {
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: clamp(40px, 8vw, 100px);
    line-height: 0.9;
    letter-spacing: -0.02em;
    text-transform: uppercase;
  }

  .v6-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--v6-border), transparent);
  }

  .v6-cursor {
    display: inline-block;
    width: 2px;
    height: 14px;
    background: var(--v6-terracotta);
    margin-left: 2px;
  }
`;

const steps = [
  {
    step: "01",
    title: "Capture Needs Fast",
    description: "Your team adds items to the list the moment they see they're low.",
    icon: ListTodo,
  },
  {
    step: "02",
    title: "Chef Approves",
    description: "You review the full list. Catch duplicates, adjust quantities.",
    icon: CheckCircle,
  },
  {
    step: "03",
    title: "One-Click Dispatch",
    description: "Send orders directly to your suppliers via WhatsApp or Email.",
    icon: Send,
  },
];

const features = [
  {
    title: "Save 5 hours a week by centralizing your ordering",
    description: "Ditch the sticky notes and scattered messages. Staff add items to one shared list instantly, keeping every request in one organized place for you to review.",
    imageLabel: "Adding list elements",
    imagePosition: "right" as const,
  },
  {
    title: "End the 6 AM emergency grocery run",
    description: "Miropoix alerts you if a staple is missing from your draft order. Catch forgotten shallots or butter before you've even started service.",
    imageLabel: "Products suggestion",
    imagePosition: "left" as const,
  },
  {
    title: "Verify every delivery without being there",
    description: "Track every delivery and price hike from your phone. Your team knows exactly what is arriving and what it costs, ending disputes with suppliers forever.",
    imageLabel: "Delivery tracking",
    imagePosition: "right" as const,
  },
];

const plans = [
  {
    name: "SOLO",
    price: "$1",
    priceValue: 1,
    period: "/mo",
    description: "For the owner-operator",
    features: ["Unlimited Suppliers", "WhatsApp/Email Integration", "Basic Product Lists"],
    popular: false,
    planType: "solo",
    billing: "monthly",
    currency: "USD",
    stripeUrl: "https://buy.stripe.com/[TUTAJLINKSTIRPE!!!]",
  },
  {
    name: "SMALL TEAM",
    price: "$10",
    priceValue: 10,
    period: "/mo",
    description: "For standard bistro kitchens",
    features: ["Approval Workflows", "Up to 5 Staff Members", "Delivery Scheduling"],
    popular: true,
    planType: "small team",
    billing: "monthly",
    currency: "USD",
    stripeUrl: "https://buy.stripe.com/[TUTAJLINKSTIRPE!!!]",
  },
  {
    name: "LARGE TEAMS",
    price: "$30",
    priceValue: 30,
    period: "/mo",
    description: "For high-volume or multi-site",
    features: ["Advanced Price Alerts", "Unlimited Staff", "Full Invoice Archive"],
    popular: false,
    planType: "large teams",
    billing: "monthly",
    currency: "USD",
    stripeUrl: "https://buy.stripe.com/[TUTAJLINKSTIRPE!!!]",
  },
];

const faqs = [
  {
    question: "I'm too busy to set up another app.",
    answer: "Miropoix is ready the moment you download it. No complex inventory spreadsheets to upload. Add your first supplier and item in 30 seconds.",
  },
  {
    question: "Is it really faster than what we do now?",
    answer: "We built this to be faster than finding a pen and a sticky note.",
  },
  {
    question: "What if my supplier only uses WhatsApp?",
    answer: "Perfect. Miropoix formats your order into a clean, professional WhatsApp message that they can read instantly. They don't need the app—only you do.",
  },
];

// Helper component for reveal animations
function Reveal({ children, delay = 0, className = "", width = "100%" }: { children: React.ReactNode; delay?: number; className?: string; width?: "fit-content" | "100%" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      style={{ width }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Section wrapper
function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

// Step card component
function StepCard({ item }: { item: typeof steps[0] }) {
  return (
    <div className="bg-[var(--v6-warm-white)] border border-[var(--v6-border)] p-8 relative flex flex-col h-full">
      <div className="absolute top-6 right-6 v6-display text-5xl text-[var(--v6-sand)]">
        {item.step}
      </div>
      <div className="w-14 h-14 border-2 border-[var(--v6-border)] flex items-center justify-center mb-6">
        <div className="text-[var(--v6-muted)]">
          <item.icon className="w-6 h-6" strokeWidth={1.5} />
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="v6-display text-xl mb-3">{item.title}</h3>
        <p className="v6-serif text-[var(--v6-muted)] leading-relaxed mb-6">{item.description}</p>
      </div>
      {/* Video embed for "Capture Needs Fast" and "Chef Approves" steps, placeholder for others */}
      {item.step === "01" ? (
        <div className="w-full aspect-[4/3] bg-[var(--v6-cream)] border border-[var(--v6-border)] relative overflow-hidden">
          <div style={{ padding: '75% 0 0 0', position: 'relative' }}>
            <iframe
              src="https://player.vimeo.com/video/1156876234?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
              title="add to order"
            />
          </div>
        </div>
      ) : item.step === "02" ? (
        <div className="w-full aspect-[4/3] bg-[var(--v6-cream)] border border-[var(--v6-border)] relative overflow-hidden">
          <div style={{ padding: '75% 0 0 0', position: 'relative' }}>
            <iframe
              src="https://player.vimeo.com/video/1156864909?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
              title="notifications"
            />
          </div>
        </div>
      ) : (
        <div className="w-full aspect-[4/3] bg-[var(--v6-cream)] border border-[var(--v6-border)] relative overflow-hidden">
          <div style={{ padding: '75% 0 0 0', position: 'relative' }}>
            <iframe
              src="https://player.vimeo.com/video/1156879255?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
              title="sent"
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Feature section component
function FeatureSection({ feature, index }: { feature: typeof features[0]; index: number }) {
  return (
    <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
      <div className={`md:col-span-5 ${feature.imagePosition === "right" ? "" : "md:order-last md:col-start-8"}`}>
        <Reveal delay={0.1}>
          <div className="v6-display text-6xl text-[var(--v6-sand)]">
            {String(index + 1).padStart(2, '0')}
          </div>
          <h3 className="v6-display text-xl md:text-2xl lg:text-3xl mb-4">
            {feature.title}
          </h3>
          <p className="v6-serif text-[var(--v6-muted)] text-lg leading-relaxed">
            {feature.description}
          </p>
        </Reveal>
      </div>
      <div className={`md:col-span-6 ${feature.imagePosition === "right" ? "md:col-start-7" : ""}`}>
        <Reveal delay={0.2}>
          <div className="bg-[var(--v6-warm-white)] aspect-square flex items-center justify-center relative group overflow-hidden">
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[var(--v6-terracotta)] -z-10" />
            {index === 0 ? (
              <div className="w-full h-full absolute inset-0">
                <iframe
                  src="https://player.vimeo.com/video/1156864931?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full"
                  title="phone-notification"
                />
              </div>
            ) : index === 1 ? (
              <div className="w-full h-full absolute inset-0">
                <img
                  src={createOrderMobileLeft}
                  alt={feature.imageLabel}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : index === 2 ? (
              <div className="w-full h-full absolute inset-0">
                <img
                  src={invoicePortrait}
                  alt={feature.imageLabel}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="text-center">
                <div className="v6-mono text-xs text-[var(--v6-terracotta)] mb-2">// {feature.imageLabel.toLowerCase().replace(/ /g, '_')}</div>
                <span className="v6-display text-[var(--v6-muted)]">{feature.imageLabel}</span>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

// Pricing card component
function PricingCard({ plan }: { plan: typeof plans[0] }) {
  const handleSelectPlan = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'select_plan',
      plan_type: plan.planType,
      billing: plan.billing,
      price: plan.priceValue,
      currency: plan.currency
    });

    // Wait for GTM to capture event before redirecting to Stripe
    setTimeout(() => {
      window.location.href = plan.stripeUrl;
    }, 200);
  };

  return (
    <div
      className={`bg-[var(--v6-warm-white)] border p-8 relative ${
        plan.popular ? "border-[var(--v6-terracotta)] border-2" : "border-[var(--v6-border)]"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-6 bg-[var(--v6-terracotta)] text-white px-4 py-1 v6-mono text-xs uppercase tracking-wider">
          Most Popular
        </div>
      )}
      <div className="v6-mono text-xs uppercase tracking-wider text-[var(--v6-terracotta)] mb-2">{plan.name}</div>
      <div className="flex items-baseline mb-2">
        <span className="v6-display text-4xl">
          {plan.price}
        </span>
        <span className="v6-serif text-[var(--v6-muted)] ml-1">{plan.period}</span>
      </div>
      <p className="v6-serif text-sm text-[var(--v6-muted)] mb-8">{plan.description}</p>
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, fIndex) => (
          <li
            key={fIndex}
            className="flex items-center gap-3 text-sm"
          >
            <span
              className={`w-2 h-2 ${plan.popular ? 'bg-[var(--v6-terracotta)]' : 'bg-[var(--v6-charcoal)]'}`}
            />
            <span className="v6-serif">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={`js-select-plan w-full py-4 v6-display text-sm tracking-wider transition-colors ${
          plan.popular
            ? "bg-[var(--v6-terracotta)] text-white hover:bg-[var(--v6-terracotta-light)]"
            : "bg-transparent text-[var(--v6-charcoal)] border-2 border-[var(--v6-charcoal)] hover:bg-[var(--v6-charcoal)] hover:text-white"
        }`}
        data-plan-type={plan.planType}
        data-billing={plan.billing}
        data-price={plan.priceValue}
        data-currency={plan.currency}
        data-stripe-url={plan.stripeUrl}
        onClick={handleSelectPlan}
      >
        START FREE TRIAL
      </button>
    </div>
  );
}

// FAQ Item component
function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-[var(--v6-warm-white)] border border-[var(--v6-border)] p-6 md:p-8 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="v6-display text-lg md:text-xl">
          "{faq.question}"
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Plus className="w-5 h-5 text-[var(--v6-terracotta)] flex-shrink-0" />
        </motion.div>
      </div>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="mt-4">
          <p className="v6-serif text-[var(--v6-muted)] leading-relaxed">{faq.answer}</p>
        </div>
      </motion.div>
    </div>
  );
}

// Declare global types for GTM
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    Vimeo?: {
      Player: new (iframe: HTMLIFrameElement) => VimeoPlayer;
    };
  }
}

interface VimeoPlayer {
  getVideoId(): Promise<number>;
  getVideoTitle(): Promise<string>;
  getDuration(): Promise<number>;
  getCurrentTime(): Promise<number>;
  on(event: string, callback: (data?: { percent?: number; seconds?: number }) => void): void;
}

export default function App() {
  // Initialize Vimeo tracking for GTM
  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];

    const initVimeoTracking = () => {
      const THRESHOLDS = [10, 25, 50, 75];

      const dlPush = (payload: Record<string, unknown>) => {
        window.dataLayer.push(payload);
      };

      // Get all vimeo iframes on the page
      const iframes = document.querySelectorAll('iframe[src*="player.vimeo.com/video/"]');
      if (!iframes.length || !window.Vimeo || !window.Vimeo.Player) return;

      iframes.forEach((iframe) => {
        const player = new window.Vimeo!.Player(iframe as HTMLIFrameElement);

        let started = false;
        const fired = new Set<number>(); // thresholds per video

        Promise.all([player.getVideoId(), player.getVideoTitle(), player.getDuration()])
          .then(([videoId, title, duration]) => {
            const base = {
              video_provider: "vimeo",
              video_id: String(videoId),
              video_title: title,
              video_duration: Math.round(duration || 0),
            };

            player.on("play", async () => {
              if (started) return;
              started = true;

              const seconds = await player.getCurrentTime().catch(() => 0);
              dlPush({
                event: "video_start",
                ...base,
                video_seconds: Math.round(seconds || 0),
              });
            });

            player.on("timeupdate", (data) => {
              const percent = Math.floor((data?.percent || 0) * 100);

              THRESHOLDS.forEach((t) => {
                if (percent >= t && !fired.has(t)) {
                  fired.add(t);
                  dlPush({
                    event: "video_progress",
                    ...base,
                    video_percent: t,
                    video_seconds: Math.round(data?.seconds || 0),
                  });
                }
              });
            });

            player.on("ended", () => {
              dlPush({
                event: "video_complete",
                ...base,
                video_percent: 100,
              });
            });
          })
          .catch((err) => {
            console.warn("[vimeoTracking] init error", err);
          });
      });
    };

    // Wait for Vimeo API to load and iframes to be ready
    const checkVimeo = setInterval(() => {
      if (window.Vimeo && window.Vimeo.Player) {
        clearInterval(checkVimeo);
        // Small delay to ensure iframes are rendered
        setTimeout(initVimeoTracking, 1000);
      }
    }, 100);

    // Cleanup
    return () => {
      clearInterval(checkVimeo);
    };
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="v6-landing overflow-x-hidden min-h-screen">
        {/* ===== HERO ===== */}
        <section className="flex flex-col relative v6-grid-bg overflow-hidden">
          {/* Terracotta stripe */}
          <div className="absolute w-1 bg-[var(--v6-terracotta)] top-0 bottom-0 left-0 hidden lg:block" />

          {/* Navbar */}
          <nav className="flex items-center justify-between py-3 px-4 md:px-8 lg:px-12 border-b border-[var(--v6-border)] bg-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[var(--v6-charcoal)] flex items-center justify-center">
                <img src={logoBrandBackground} alt="Miropoix logo" className="w-full h-full object-contain" />
              </div>
              <span className="v6-display text-xl tracking-wide">Miropoix</span>
            </div>
            <button
              type="button"
              data-gtm="cta_click"
              data-cta-type="start_trial"
              data-cta-placement="nav"
              className="bg-[var(--v6-terracotta)] text-white px-6 py-3 v6-display text-sm tracking-wider flex items-center gap-2 hover:bg-[var(--v6-terracotta-light)] transition-colors"
              onClick={() => {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: 'cta_click',
                  cta_type: 'start_trial',
                  cta_placement: 'nav'
                });
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Start Trial <ArrowRight className="w-4 h-4" />
            </button>
          </nav>

          {/* Hero content */}
          <div className="flex-1 flex items-center px-4 md:px-8 lg:px-12 py-12 md:py-16">
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left: Text */}
                <div className="lg:col-span-6">
                  <Reveal>
                    <div className="v6-mono text-xs uppercase tracking-widest text-[var(--v6-terracotta)] mb-4">
                      Kitchen Supply Management
                    </div>

                    <h1 className="v6-giant-text mb-6">
                      Never forget<br />
                      the{" "}
                      <span className="text-[var(--v6-terracotta)]">
                        shallots
                      </span>
                      <br />
                      <span className="relative inline-block">
                        again.
                        <motion.span
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                          className="absolute top-1/2 left-0 w-full h-1 bg-[var(--v6-terracotta)] -translate-y-1/2 origin-left"
                        />
                      </span>
                    </h1>

                    <p className="v6-serif text-lg md:text-xl text-[var(--v6-muted)] max-w-xl mb-6 leading-relaxed">
                      Miropoix is the supply management app that moves your kitchen from messy WhatsApp threads to a structured workflow.
                    </p>

                    {/* Social proof ticket */}
                    <div className="v6-ticket inline-block px-6 py-3 mb-6">
                      <span className="text-[var(--v6-muted)] text-sm">ORDER #</span>
                      <span className="text-[var(--v6-charcoal)] font-medium ml-2">600+ kitchens served</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        type="button"
                        data-gtm="cta_click"
                        data-cta-type="start_trial"
                        data-cta-placement="hero"
                        className="bg-[var(--v6-terracotta)] text-white px-8 py-4 v6-display text-sm tracking-wider hover:bg-[var(--v6-terracotta-light)] transition-colors"
                        onClick={() => {
                          window.dataLayer = window.dataLayer || [];
                          window.dataLayer.push({
                            event: 'cta_click',
                            cta_type: 'start_trial',
                            cta_placement: 'hero'
                          });
                          const pricingSection = document.getElementById('pricing');
                          if (pricingSection) {
                            pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                      >
                        Start 7-Day Free Trial
                      </button>
                      <button
                        type="button"
                        data-gtm="cta_click"
                        data-cta-type="book_demo"
                        data-cta-placement="hero"
                        className="bg-transparent text-[var(--v6-charcoal)] border-2 border-[var(--v6-charcoal)] px-8 py-4 v6-display text-sm tracking-wider hover:bg-[var(--v6-charcoal)] hover:text-white transition-colors"
                        onClick={() => {
                          window.dataLayer = window.dataLayer || [];
                          window.dataLayer.push({
                            event: 'cta_click',
                            cta_type: 'book_demo',
                            cta_placement: 'hero'
                          });
                        }}
                      >
                        Book a Demo
                      </button>
                    </div>
                  </Reveal>
                </div>

                {/* Right: App mockup */}
                <div className="lg:col-span-6">
                  <Reveal delay={0.3}>
                    <div className="relative">
                      {/* Hero animation video */}
                      <div style={{ padding: '75% 0 0 0', position: 'relative' }}>
                        <video
                          src={heroAnimationVideo}
                          autoPlay
                          muted
                          loop
                          playsInline
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                          title="Hero animation"
                        />
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>

          {/* Background text - editorial style */}
          <div className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2 v6-display text-[var(--v6-sand)] text-8xl leading-none select-none opacity-50 text-right">
            No more<br/>sticky<br/>notes.
          </div>
        </section>

        {/* ===== PROBLEM ===== */}
        <Section className="v6-section bg-[var(--v6-charcoal)] text-[var(--v6-cream)] py-32 md:py-40 lg:py-48">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 md:mb-20">
              <Reveal>
                <h2 className="v6-display text-3xl md:text-5xl lg:text-6xl leading-tight">
                  Your kitchen is fast.<br/>
                  <span className="text-[var(--v6-terracotta)]">Your ordering process is stuck in the 90s.</span>
                </h2>
              </Reveal>
            </div>

            <div className="h-px bg-[var(--v6-cream)]/20 mb-16" />

            <div className="space-y-20 md:space-y-28">
              {/* Block 1 */}
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div className="mb-8 md:mb-0">
                  <Reveal delay={0.1}>
                    <div className="v6-display text-6xl text-[var(--v6-cream)]/20">
                      01
                    </div>
                    <h3 className="v6-display text-2xl md:text-3xl mb-4">
                      Stop losing time on late night supply lists
                    </h3>
                    <p className="v6-serif text-[var(--v6-cream)]/70 text-lg leading-relaxed">
                      The service is over, but you still need to order supplies. 11 PM is not the time to run around with pen and paper. Use Miropoix.
                    </p>
                  </Reveal>
                </div>
                <div className="flex items-center justify-center w-full">
                  <Reveal delay={0.3} className="w-full">
                    <div className="w-full max-w-sm md:max-w-none md:w-full flex items-center justify-center relative">
                      <div className="w-full md:aspect-[4/3] flex items-center justify-center">
                        <img
                          src={createOrderMobilePortrait}
                          alt="Create order mobile view"
                          className="w-full h-auto object-contain md:h-full md:w-auto md:object-contain"
                        />
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>

              {/* Block 2 */}
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div className="md:order-last mb-8 md:mb-0">
                  <Reveal delay={0.1}>
                    <div className="v6-display text-6xl text-[var(--v6-cream)]/20">
                      02
                    </div>
                    <h3 className="v6-display text-2xl md:text-3xl mb-4">
                      WhatsApp chaos ends now
                    </h3>
                    <p className="v6-serif text-[var(--v6-cream)]/70 text-lg leading-relaxed">
                      Stop scrolling through group chats to find that one message about the missing tomatoes. One organized list, always accessible.
                    </p>
                  </Reveal>
                </div>
                <div className="flex items-center justify-center w-full">
                  <Reveal delay={0.3} className="w-full">
                    <div className="w-full max-w-sm md:max-w-none md:w-full flex items-center justify-center relative">
                      <div className="w-full md:aspect-[4/3] flex items-center justify-center">
                        <img
                          src={dashboardMobilePortrait}
                          alt="Approval list screen mobile view"
                          className="w-full h-auto object-contain md:h-full md:w-auto md:object-contain"
                        />
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ===== STEPS ===== */}
        <Section className="v6-section relative">
          <div className="absolute w-1 bg-[var(--v6-terracotta)] top-0 bottom-0 right-0 hidden lg:block" />

          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:mb-16">
              <Reveal>
                <div className="v6-mono text-xs uppercase tracking-widest text-[var(--v6-terracotta)] mb-4">
                  Workflow
                </div>
                <h2 className="v6-display text-3xl md:text-4xl lg:text-5xl">
                  3 steps to control your supply list.
                </h2>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {steps.map((item, i) => (
                <Reveal key={i} delay={i * 0.2}>
                  <StepCard item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        {/* ===== FEATURES ===== */}
        <Section className="v6-section bg-[var(--v6-warm-white)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <Reveal>
                <div className="v6-mono text-xs uppercase tracking-widest text-[var(--v6-terracotta)] mb-4">
                  Features
                </div>
                <h2 className="v6-display text-3xl md:text-4xl lg:text-5xl">
                  That's how you simplify supply lists
                </h2>
              </Reveal>
            </div>

            <div className="space-y-24 md:space-y-32">
              {features.map((feature, index) => (
                <FeatureSection key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </Section>

        {/* ===== PRICING ===== */}
        <Section id="pricing" className="v6-section v6-grid-bg">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <Reveal>
                <div className="v6-mono text-xs uppercase tracking-widest text-[var(--v6-terracotta)] mb-4">
                  Pricing
                </div>
                <h2 className="v6-display text-3xl md:text-4xl lg:text-5xl mb-4">
                  Match your plan
                </h2>
                <p className="v6-serif text-[var(--v6-muted)] text-lg max-w-2xl mx-auto">
                  Choose the plan that fits your kitchen. All plans include a 7-day free trial.
                </p>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <PricingCard plan={plan} />
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        {/* ===== CTA ===== */}
        <Section className="v6-section bg-[var(--v6-terracotta)] text-white relative overflow-hidden">
          {/* Background text */}
          <div className="absolute top-0 right-0 v6-display text-[18vw] leading-none text-white/5 select-none pointer-events-none">
            GO
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <div>
                <Reveal>
                  <h2 className="v6-display text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
                    Ready to simplify your kitchen ordering?
                  </h2>
                  <p className="v6-serif text-xl text-white/80 mb-10 leading-relaxed">
                    Join 600+ restaurants already saving hours every week. Start your free trial today — no credit card required.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="button"
                      data-gtm="cta_click"
                      data-cta-type="start_trial"
                      data-cta-placement="cta_section"
                      className="bg-[var(--v6-charcoal)] text-[var(--v6-cream)] px-8 py-4 v6-display text-base tracking-wider hover:bg-[var(--v6-charcoal-light)] transition-colors"
                      onClick={() => {
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({
                          event: 'cta_click',
                          cta_type: 'start_trial',
                          cta_placement: 'cta_section'
                        });
                        const pricingSection = document.getElementById('pricing');
                        if (pricingSection) {
                          pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                    >
                      Start 7-Day Free Trial
                    </button>
                    <button
                      type="button"
                      data-gtm="cta_click"
                      data-cta-type="book_demo"
                      data-cta-placement="cta_section"
                      className="border-2 border-white/30 px-8 py-4 v6-display text-base tracking-wider hover:bg-white/10 hover:border-white/50 transition-colors"
                      onClick={() => {
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({
                          event: 'cta_click',
                          cta_type: 'book_demo',
                          cta_placement: 'cta_section'
                        });
                      }}
                    >
                      Book a Demo
                    </button>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-6 text-white/70 v6-mono text-sm">
                    <span>No credit card</span>
                    <span>30s setup</span>
                    <span>Cancel anytime</span>
                  </div>
                </Reveal>
              </div>

              <div className="order-first md:order-last">
                <Reveal delay={0.3}>
                  <div className="bg-white/10 border border-white/20 aspect-[4/3] flex items-end justify-center relative">
                    <div className="absolute -bottom-3 -left-3 w-full h-full border-2 border-white/20 flex items-end">
                      <img
                        src={handAsset}
                        alt="Hand holding phone"
                        className="w-full h-full object-contain scale-150 object-bottom"
                      />
                    </div>
                    <span className="v6-display text-white/50 text-xl">App screenshot</span>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Section>

        {/* ===== FAQ ===== */}
        <Section className="v6-section bg-[var(--v6-warm-white)]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <Reveal>
                <div className="v6-mono text-xs uppercase tracking-widest text-[var(--v6-terracotta)] mb-4">
                  Support
                </div>
                <h2 className="v6-display text-3xl md:text-4xl">
                  FAQ
                </h2>
              </Reveal>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <FAQItem faq={faq} />
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        {/* ===== FOOTER ===== */}
        <footer className="py-8 px-4 md:px-8 lg:px-12 border-t border-[var(--v6-border)]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[var(--v6-charcoal)] flex items-center justify-center">
                <img src={logoBrandBackground} alt="Miropoix logo" className="w-full h-full object-contain" />
              </div>
              <span className="v6-display text-lg">Miropoix</span>
            </div>
            <div className="v6-mono text-sm text-[var(--v6-muted)]">
              2025 Miropoix. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
