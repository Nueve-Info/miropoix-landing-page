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
import { useState } from "react";

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
    description: "Mirepoix alerts you if a staple is missing from your draft order. Catch forgotten shallots or butter before you've even started service.",
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
    period: "/mo",
    description: "For the owner-operator",
    features: ["Unlimited Suppliers", "WhatsApp/Email Integration", "Basic Product Lists"],
    popular: false,
  },
  {
    name: "SMALL TEAM",
    price: "$10",
    period: "/mo",
    description: "For standard bistro kitchens",
    features: ["Approval Workflows", "Up to 5 Staff Members", "Delivery Scheduling"],
    popular: true,
  },
  {
    name: "LARGE TEAMS",
    price: "$30",
    period: "/mo",
    description: "For high-volume or multi-site",
    features: ["Advanced Price Alerts", "Unlimited Staff", "Full Invoice Archive"],
    popular: false,
  },
];

const faqs = [
  {
    question: "I'm too busy to set up another app.",
    answer: "Mirepoix is ready the moment you download it. No complex inventory spreadsheets to upload. Add your first supplier and item in 30 seconds.",
  },
  {
    question: "Is it really faster than what we do now?",
    answer: "We built this to be faster than finding a pen and a sticky note.",
  },
  {
    question: "What if my supplier only uses WhatsApp?",
    answer: "Perfect. Mirepoix formats your order into a clean, professional WhatsApp message that they can read instantly. They don't need the app—only you do.",
  },
];

// Section wrapper
function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={className}>
      {children}
    </section>
  );
}

// Step card component
function StepCard({ item }: { item: typeof steps[0] }) {
  return (
    <div className="bg-[var(--v6-warm-white)] border border-[var(--v6-border)] p-8 relative">
      <div className="absolute top-6 right-6 v6-display text-5xl text-[var(--v6-sand)]">
        {item.step}
      </div>
      <div className="w-14 h-14 border-2 border-[var(--v6-border)] flex items-center justify-center mb-6">
        <div className="text-[var(--v6-muted)]">
          <item.icon className="w-6 h-6" strokeWidth={1.5} />
        </div>
      </div>
      <h3 className="v6-display text-xl mb-3">{item.title}</h3>
      <p className="v6-serif text-[var(--v6-muted)] leading-relaxed">{item.description}</p>
    </div>
  );
}

// Feature section component
function FeatureSection({ feature, index }: { feature: typeof features[0]; index: number }) {
  return (
    <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
      <div className={`md:col-span-5 ${feature.imagePosition === "right" ? "" : "md:order-last md:col-start-8"}`}>
        <div className="v6-display text-6xl text-[var(--v6-sand)]">
          {String(index + 1).padStart(2, '0')}
        </div>
        <h3 className="v6-display text-xl md:text-2xl lg:text-3xl mb-4">
          {feature.title}
        </h3>
        <p className="v6-serif text-[var(--v6-muted)] text-lg leading-relaxed">
          {feature.description}
        </p>
      </div>
      <div className={`md:col-span-6 ${feature.imagePosition === "right" ? "md:col-start-7" : ""}`}>
        <div className="bg-[var(--v6-warm-white)] border border-[var(--v6-border)] aspect-square flex items-center justify-center relative group">
          <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[var(--v6-terracotta)] -z-10" />
          <div className="text-center">
            <div className="v6-mono text-xs text-[var(--v6-terracotta)] mb-2">// {feature.imageLabel.toLowerCase().replace(/ /g, '_')}</div>
            <span className="v6-display text-[var(--v6-muted)]">{feature.imageLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Pricing card component
function PricingCard({ plan }: { plan: typeof plans[0] }) {
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
        className={`w-full py-4 v6-display text-sm tracking-wider transition-colors ${
          plan.popular
            ? "bg-[var(--v6-terracotta)] text-white"
            : "bg-transparent text-[var(--v6-charcoal)] border-2 border-[var(--v6-charcoal)]"
        }`}
      >
        Start free trial
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
        <div style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          <Plus className="w-5 h-5 text-[var(--v6-terracotta)] flex-shrink-0" />
        </div>
      </div>
      {isOpen && (
        <div className="mt-4">
          <p className="v6-serif text-[var(--v6-muted)] leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function App() {
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
                <span className="v6-display text-[var(--v6-cream)] text-lg">M</span>
              </div>
              <span className="v6-display text-xl tracking-wide">Mirepoix</span>
            </div>
            <button className="bg-[var(--v6-terracotta)] text-white px-6 py-3 v6-display text-sm tracking-wider flex items-center gap-2">
              Start Trial <ArrowRight className="w-4 h-4" />
            </button>
          </nav>

          {/* Hero content */}
          <div className="flex-1 flex items-center px-4 md:px-8 lg:px-12 py-6 md:py-8">
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left: Text */}
                <div className="lg:col-span-7">
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
                      <span className="absolute top-1/2 left-0 w-full h-1 bg-[var(--v6-terracotta)] -translate-y-1/2" />
                    </span>
                  </h1>

                  <p className="v6-serif text-lg md:text-xl text-[var(--v6-muted)] max-w-xl mb-6 leading-relaxed">
                    Mirepoix is the supply management app that moves your kitchen from messy WhatsApp threads to a structured workflow.
                  </p>

                  {/* Social proof ticket */}
                  <div className="v6-ticket inline-block px-6 py-3 mb-6">
                    <span className="text-[var(--v6-muted)] text-sm">ORDER #</span>
                    <span className="text-[var(--v6-charcoal)] font-medium ml-2">600+ kitchens served</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-[var(--v6-terracotta)] text-white px-8 py-4 v6-display text-sm tracking-wider">
                      Start 7-Day Free Trial
                    </button>
                    <button className="bg-transparent text-[var(--v6-charcoal)] border-2 border-[var(--v6-charcoal)] px-8 py-4 v6-display text-sm tracking-wider">
                      Book a Demo
                    </button>
                  </div>
                </div>

                {/* Right: App mockup */}
                <div className="lg:col-span-5">
                  <div className="relative">
                    <div className="bg-[var(--v6-warm-white)] border border-[var(--v6-border)] p-8 aspect-[3/4] flex flex-col relative">
                      {/* Decorative offset border */}
                      <div className="absolute -top-3 -right-3 w-full h-full border-2 border-[var(--v6-charcoal)] -z-10" />

                      {/* Placeholder na zdjęcie/mockup telefonu */}
                      <div className="flex-1 flex items-center justify-center border-2 border-dashed border-[var(--v6-border)] bg-[var(--v6-cream)] relative overflow-hidden">
                        <div className="text-center p-8">
                          <div className="w-16 h-16 mx-auto mb-4 border-2 border-[var(--v6-muted)] rounded-lg flex items-center justify-center">
                            <svg
                              className="w-8 h-8 text-[var(--v6-muted)]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div className="v6-mono text-sm text-[var(--v6-muted)]">
                            Placeholder na zdjęcie<br/>mockupu telefonu
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
        <Section className="v6-section bg-[var(--v6-charcoal)] text-[var(--v6-cream)]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 md:mb-20">
              <h2 className="v6-display text-3xl md:text-5xl lg:text-6xl leading-tight">
                Your kitchen is fast.<br/>
                <span className="text-[var(--v6-terracotta)]">Your ordering process is stuck in the 90s.</span>
              </h2>
            </div>

            <div className="h-px bg-[var(--v6-cream)]/20 mb-16" />

            <div className="space-y-20 md:space-y-28">
              {/* Block 1 */}
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div>
                  <div className="v6-display text-6xl text-[var(--v6-cream)]/20">
                    01
                  </div>
                  <h3 className="v6-display text-2xl md:text-3xl mb-4">
                    Stop losing time on late night supply lists
                  </h3>
                  <p className="v6-serif text-[var(--v6-cream)]/70 text-lg leading-relaxed">
                    The service is over, but you still need to order supplies. 11 PM is not the time to run around with pen and paper. Use Mirepoix.
                  </p>
                </div>
                <div className="order-first md:order-last">
                  <div className="bg-[var(--v6-cream)]/5 border border-[var(--v6-cream)]/10 aspect-[4/3] flex flex-col items-center justify-center p-8 relative">
                    <div className="absolute top-4 left-4 v6-mono text-xs text-[var(--v6-terracotta)]">// notification.view</div>
                    <span className="v6-display text-[var(--v6-cream)]/40 text-lg">Items added via notification</span>
                  </div>
                </div>
              </div>

              {/* Block 2 */}
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div className="md:order-last">
                  <div className="v6-display text-6xl text-[var(--v6-cream)]/20">
                    02
                  </div>
                  <h3 className="v6-display text-2xl md:text-3xl mb-4">
                    WhatsApp chaos ends now
                  </h3>
                  <p className="v6-serif text-[var(--v6-cream)]/70 text-lg leading-relaxed">
                    Stop scrolling through group chats to find that one message about the missing tomatoes. One organized list, always accessible.
                  </p>
                </div>
                <div>
                  <div className="bg-[var(--v6-cream)]/5 border border-[var(--v6-cream)]/10 aspect-[4/3] flex flex-col items-center justify-center p-8 relative">
                    <div className="absolute top-4 left-4 v6-mono text-xs text-[var(--v6-terracotta)]">// approve.screen</div>
                    <span className="v6-display text-[var(--v6-cream)]/40 text-lg">Approval list screen</span>
                  </div>
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
              <div className="v6-mono text-xs uppercase tracking-widest text-[var(--v6-terracotta)] mb-4">
                Workflow
              </div>
              <h2 className="v6-display text-3xl md:text-4xl lg:text-5xl">
                3 steps to control your supply list.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {steps.map((item, i) => (
                <StepCard key={i} item={item} />
              ))}
            </div>
          </div>
        </Section>

        {/* ===== FEATURES ===== */}
        <Section className="v6-section bg-[var(--v6-warm-white)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <div className="v6-mono text-xs uppercase tracking-widest text-[var(--v6-terracotta)] mb-4">
                Features
              </div>
              <h2 className="v6-display text-3xl md:text-4xl lg:text-5xl">
                That's how you simplify supply lists
              </h2>
            </div>

            <div className="space-y-24 md:space-y-32">
              {features.map((feature, index) => (
                <FeatureSection key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </Section>

        {/* ===== PRICING ===== */}
        <Section className="v6-section v6-grid-bg">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="v6-mono text-xs uppercase tracking-widest text-[var(--v6-terracotta)] mb-4">
                Pricing
              </div>
              <h2 className="v6-display text-3xl md:text-4xl lg:text-5xl mb-4">
                Match your plan
              </h2>
              <p className="v6-serif text-[var(--v6-muted)] text-lg max-w-2xl mx-auto">
                Choose the plan that fits your kitchen. All plans include a 7-day free trial.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <PricingCard key={index} plan={plan} />
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
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="v6-display text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
                  Ready to simplify your kitchen ordering?
                </h2>
                <p className="v6-serif text-xl text-white/80 mb-10 leading-relaxed">
                  Join 600+ restaurants already saving hours every week. Start your free trial today — no credit card required.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[var(--v6-charcoal)] text-[var(--v6-cream)] px-8 py-4 v6-display text-base tracking-wider">
                    Start 7-Day Free Trial
                  </button>
                  <button className="border-2 border-white/30 px-8 py-4 v6-display text-base tracking-wider">
                    Book a Demo
                  </button>
                </div>

                <div className="mt-10 flex flex-wrap gap-6 text-white/70 v6-mono text-sm">
                  <span>No credit card</span>
                  <span>30s setup</span>
                  <span>Cancel anytime</span>
                </div>
              </div>

              <div className="order-first md:order-last">
                <div className="bg-white/10 border border-white/20 aspect-[4/3] flex items-center justify-center relative">
                  <div className="absolute -top-3 -left-3 w-full h-full border-2 border-white/20" />
                  <span className="v6-display text-white/50 text-xl">App screenshot</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ===== FAQ ===== */}
        <Section className="v6-section bg-[var(--v6-warm-white)]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="v6-mono text-xs uppercase tracking-widest text-[var(--v6-terracotta)] mb-4">
                Support
              </div>
              <h2 className="v6-display text-3xl md:text-4xl">
                FAQ
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
              ))}
            </div>
          </div>
        </Section>

        {/* ===== FOOTER ===== */}
        <footer className="py-8 px-4 md:px-8 lg:px-12 border-t border-[var(--v6-border)]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[var(--v6-charcoal)] flex items-center justify-center">
                <span className="v6-display text-[var(--v6-cream)] text-sm">M</span>
              </div>
              <span className="v6-display text-lg">Mirepoix</span>
            </div>
            <div className="v6-mono text-sm text-[var(--v6-muted)]">
              2025 Mirepoix. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
