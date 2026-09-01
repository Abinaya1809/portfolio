import { useReducedMotion } from 'framer-motion';

const topRow = ["JAVA", "AWS", "LAMBDA", "API GATEWAY", "DYNAMODB", "SQL", "HTML", "CSS", "JAVASCRIPT", "GIT", "CLOUD COMPUTING"];
const bottomRow = ["AWS", "JAVA", "SERVERLESS", "CLOUD", "WEB DEVELOPMENT", "SOFTWARE DEVELOPMENT", "BACKEND", "DATABASE"];

const MarqueeRow = ({ items, reverse = false }: { items: string[], reverse?: boolean }) => {
  const shouldReduceMotion = useReducedMotion();

  // If reduced motion, show static list
  if (shouldReduceMotion) {
    return (
      <div className="flex flex-wrap justify-center gap-6 px-6 py-4">
        {items.map((item, i) => (
          <span key={i} className="font-mono text-xs md:text-sm font-bold tracking-widest text-[var(--color-secondary)]">
            {item} <span className="text-[var(--color-accent)] opacity-50 ml-6">·</span>
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="flex w-full overflow-hidden whitespace-nowrap py-4 md:py-6 relative cursor-default group" data-cursor-interactive="true">
      <div 
        className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:[animation-play-state:paused]`}
      >
        {/* Render twice for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="font-mono text-2xl md:text-5xl font-bold tracking-tighter text-[var(--color-secondary)] hover:text-[var(--color-heading)] transition-colors duration-300 mx-8 md:mx-16">
              {item}
            </span>
            <span className="text-[var(--color-accent)] font-bold text-3xl md:text-5xl opacity-30">·</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export function Marquee() {
  return (
    <section className="py-12 md:py-24 bg-[var(--color-bg)] border-b border-[var(--color-soft-border)] overflow-hidden">
      <div className="flex flex-col gap-4 md:gap-8 transform -rotate-1 md:-rotate-2 scale-105 opacity-90">
        <MarqueeRow items={topRow} />
        <MarqueeRow items={bottomRow} reverse />
      </div>
    </section>
  );
}
