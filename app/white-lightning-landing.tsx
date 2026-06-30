"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const whatsappUrl =
  "https://wa.me/91XXXXXXXXXX?text=Hi%20Premraj%2C%20I%20want%20to%20order%20the%20White%20Lightning%20Jacket";
const premrajInstagramHandle = "@premrajjjjjjj";
const premrajInstagramUrl = "https://www.instagram.com/premrajjjjjjj/";
const brandInstagramHandle = "@yourbeast";
const brandInstagramUrl = "https://www.instagram.com/yourrbeast/";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const productViews = [
  {
    title: "Side View",
    image: "/side.png",
    detail: "Reflective glow panels frame the jacket like mission armor.",
  },
  {
    title: "Front View",
    image: "/front.png",
    detail: "Reflective glow panels frame the jacket like mission armor.",
  },
  {
    title: "Back View",
    image: "/back-product-image.png",
    detail: "Reflective glow panels frame the jacket like mission armor  .",
  },
];

const badges = [
  "Glow in the dark",
  "Premium fabric",

  "Limited stock",
];

const features = [
  {
    title: "Night Glow Technology",
    copy: "Engineered to catch light, hold attention, and turn dark streets into a runway.",
  },
  {
    title: "Streetwear Design",
    copy: "Oversized confidence, clean lines, and a futuristic profile that looks premium on camera.",
  },
  {
    title: "Comfortable Fabric",
    copy: "Soft, wearable construction made for late-night plans, travel, and everyday flex.",
  },
  {
    title: "Limited Edition",
    copy: "A low-stock statement piece for people who prefer being seen before they explain themselves.",
  },
];

const reviews = [
  {
    name: "Aarav K.",
    text: "The glow is unreal at night. It instantly made my reels look more expensive.",
    rating: "5.0",
  },
  {
    name: "Isha M.",
    text: "Comfortable, premium, and different from anything I have in my wardrobe.",
    rating: "4.9",
  },
  {
    name: "Rohan S.",
    text: "Feels like streetwear from a space mission. People kept asking where I got it.",
    rating: "5.0",
  },
];

const reels = [
  {
    title: "Night Glow Test",
    url: "https://www.instagram.com/reel/DZwnl37sDlX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    thumbnail: "/reel-thmbnail-1.png"
  },
  {
    title: "Jacket in mirror",
    url: "https://www.instagram.com/reel/DZ9SR3_NxvN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    thumbnail: "/thumbnail-3.png"
  },
  {
    title: "Night Glow Test",
    url: "https://www.instagram.com/reel/DZyu7q5B8Kz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    thumbnail: "/thumbnail-5.png"
  },
  {
    title: "Jacket Review",
    url: "https://www.instagram.com/reel/DZ9SR3_NxvN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    thumbnail: "/thumbnail-4.png"
  },

];

function SectionTitle({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={fadeUp}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.38em] text-sky-200/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-base leading-8 text-zinc-300 sm:text-lg">{copy}</p>
      ) : null}
    </motion.div>
  );
}

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5.4 19.1 6.2 16A8 8 0 1 1 9 18.5z" />
      <path d="M9.7 8.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.4.6c-.1.1-.1.3 0 .4.5 1 1.3 1.7 2.3 2.2.1.1.3.1.4 0l.7-.5c.2-.1.4-.1.6 0l1.6.8c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.5.3-1.2.6-2 .5-2.8-.3-6-3.2-6.5-6-.1-.8.2-1.5.5-2z" />
    </svg>
  );
}

function MailIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function ShieldIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3 19 6v5c0 4.5-2.9 8-7 10-4.1-2-7-5.5-7-10V6z" />
      <path d="m9.5 12 1.7 1.7 3.6-4" />
    </svg>
  );
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="relative block h-5 w-5" aria-hidden="true">
      <span
        className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "translate-y-1.5 rotate-45" : ""}`}
      />
      <span
        className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`}
      />
      <span
        className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
      />
    </span>
  );
}

export default function WhiteLightningLanding() {
  const reelsTrackRef = useRef<HTMLDivElement>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const glowX = useSpring(mouseX, { stiffness: 90, damping: 24 });
  const glowY = useSpring(mouseY, { stiffness: 90, damping: 24 });
  const canSlideReels = reels.length >= 4;
  const visibleReels = canSlideReels ? [...reels, ...reels] : reels;

  const scrollReels = (direction: -1 | 1) => {
    const track = reelsTrackRef.current;

    if (!track) {
      return;
    }

    const firstSlide = track.firstElementChild as HTMLElement | null;
    const trackStyles = window.getComputedStyle(track);
    const gap = Number.parseFloat(trackStyles.columnGap || trackStyles.gap || "0");
    const slideWidth = firstSlide ? firstSlide.offsetWidth + gap : track.clientWidth;
    const loopPoint = track.scrollWidth / 2;

    if (direction === -1 && track.scrollLeft <= 2) {
      track.scrollLeft = loopPoint;
    }

    if (direction === 1 && track.scrollLeft >= loopPoint) {
      track.scrollLeft -= loopPoint;
    }

    track.scrollBy({
      left: direction * slideWidth,
      behavior: "smooth",
    });
  };

  const handleReelsScroll = () => {
    const track = reelsTrackRef.current;

    if (!track || !canSlideReels) {
      return;
    }

    const loopPoint = track.scrollWidth / 2;

    if (track.scrollLeft >= loopPoint) {
      track.scrollLeft -= loopPoint;
    }
  };

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - 180);
      mouseY.set(event.clientY - 180);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050608] text-white">
      <motion.div
        className="pointer-events-none fixed z-30 h-[360px] w-[360px] rounded-full bg-sky-200/12 blur-3xl"
        style={{ x: glowX, y: glowY }}
      />
      <div className="starscape" />
      <div className="shooting-stars" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_70%_10%,rgba(125,211,252,0.14),transparent_28%),radial-gradient(circle_at_18%_28%,rgba(255,255,255,0.09),transparent_26%),linear-gradient(180deg,#050608_0%,#111318_48%,#050608_100%)]" />

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="White Lightning home">
          <Image
            src="/logo-3 brand-name.png"
            alt="White Lightning"
            width={172}
            height={62}
            priority
            className="h-12 w-auto object-contain"
          />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex bg-white/20 px-8 py-2 rounded-full">
          <a className="transition hover:text-white" href="#showcase">
            Showcase
          </a>
          <a className="transition hover:text-white" href="#reels">
            Reels
          </a>
          <a className="transition hover:text-white" href="#founder">
            Premraj
          </a>
        </nav>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="glow-button hidden rounded-full px-5 py-3 text-sm font-semibold text-black sm:inline-flex"
        >
          Order Now
        </a>
      </header>

      <section
        id="top"
        className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-center gap-10 px-5 pb-16 pt-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="relative z-10"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-100 backdrop-blur"
          >
            Limited night drop
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="max-w-3xl text-5xl font-semibold leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            Own The Night.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-lg leading-8 text-zinc-300 sm:text-xl"
          >
            A futuristic glow jacket designed to make you stand out after dark.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-base font-bold text-black"
            >
              Buy Now
            </a>
            <a
              href="#reels"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur transition hover:border-sky-200/70 hover:bg-white/10"
            >
              Watch Reel
            </a>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {badges.map((badge) => (
              <div
                key={badge}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-zinc-200 backdrop-blur"
              >
                {badge}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto flex min-h-[520px] w-full max-w-[680px] items-end justify-center lg:min-h-[690px] bottom-24"
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="absolute inset-x-8 bottom-10 h-48 rounded-full bg-sky-200/20 blur-3xl" />
          <div className="orbit-ring" />
          <div className="astronaut" aria-hidden="true">


            <span />
          </div>
          <Image
            src="/BEASTmodel2.png"
            alt="Model wearing the White Lightning glow jacket"
            width={820}
            height={1060}
            priority
            sizes="(min-width: 1024px) 52vw, 92vw"
            className="relative z-10 max-h-[78vh] w-auto object-contain drop-shadow-[0_0_42px_rgba(186,230,253,0.34)]"
          />
          <div className="absolute bottom-12 left-2 z-20 rounded-lg border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:left-8">
            <p className="text-xs uppercase tracking-[0.28em] text-sky-100">Glow index</p>
            <p className="mt-2 text-3xl font-semibold">98%</p>
          </div>
        </motion.div>
      </section>

      <section id="showcase" className="relative z-10 px-5 py-20 sm:px-8">
        <SectionTitle
          eyebrow="Product showcase"
          title="Built For After Dark"
          copy="Three campaign views of the jacket, framed like a premium fashion mission briefing."
        />
        <div className="mx-auto text-center grid max-w-7xl gap-5 md:grid-cols-3 justify-items-center">
          {productViews.map((view, index) => (
            <motion.article
              key={view.title}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              variants={fadeUp}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-x-8 top-12 h-40 bg-sky-200/14 blur-3xl transition group-hover:bg-sky-100/24" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-black/30">
                <Image
                  src={view.image}
                  alt={`${view.title} of the White Lightning jacket`}
                  fill
                  sizes="(min-width: 768px) 31vw, 92vw"
                  className="object-contain p-4 transition duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-center">{view.title}</h3>
              <p className="mt-3 leading-5 text-zinc-300">{view.detail}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 sm:px-8">
        <SectionTitle
          eyebrow="Why choose White Lightning"
          title="Luxury Streetwear, Space-Mission Energy"
        />
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              className="rounded-lg border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:border-sky-200/40 hover:bg-white/[0.09]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              variants={fadeUp}
            >
              <div className="mb-8 h-10 w-10 rounded-full border border-sky-100/40 bg-sky-100/10 shadow-[0_0_28px_rgba(186,230,253,0.25)]" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-4 leading-7 text-zinc-300">{feature.copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="reels" className="relative z-10 px-5 py-20 sm:px-8 ">
        <SectionTitle eyebrow="Seen across social media" title="Campaign Reels In Motion" />
        <div className="relative mx-auto max-w-6xl px-0 md:px-14">
          {canSlideReels ? (
            <>
              <button
                type="button"
                onClick={() => scrollReels(-1)}
                aria-label="Previous reels"
                className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-3xl text-white shadow-[0_0_28px_rgba(125,211,252,0.2)] backdrop-blur transition hover:border-sky-200/70 hover:bg-white/15 md:flex"
              >
                <span aria-hidden="true">‹</span>
              </button>
              <button
                type="button"
                onClick={() => scrollReels(1)}
                aria-label="Next reels"
                className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-3xl text-white shadow-[0_0_28px_rgba(125,211,252,0.2)] backdrop-blur transition hover:border-sky-200/70 hover:bg-white/15 md:flex"
              >
                <span aria-hidden="true">›</span>
              </button>
              <div className="mb-5 flex justify-center gap-3 md:hidden">
                <button
                  type="button"
                  onClick={() => scrollReels(-1)}
                  aria-label="Previous reels"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl text-white backdrop-blur transition hover:border-sky-200/70 hover:bg-white/15"
                >
                  <span aria-hidden="true">&lsaquo;</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollReels(1)}
                  aria-label="Next reels"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl text-white backdrop-blur transition hover:border-sky-200/70 hover:bg-white/15"
                >
                  <span aria-hidden="true">&rsaquo;</span>
                </button>
              </div>
            </>
          ) : null}
          <div
            ref={reelsTrackRef}
            onScroll={handleReelsScroll}
            className={
              canSlideReels
                ? "flex snap-x gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                : "grid items-start gap-5 md:grid-cols-4"
            }
          >
            {visibleReels.map((reel, index) => (

              <Link key={`${reel.url}-${index}`}
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  canSlideReels
                    ? "block min-w-0 flex-none basis-[82%] snap-start sm:basis-[48%] lg:basis-[calc((100%_-_60px)/4)]"
                    : undefined
                }>
                <motion.div
                  className="relative overflow-hidden rounded-lg border border-white/10 bg-black/50 p-3 backdrop-blur-xl"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  variants={fadeUp}
                >
                  <div className="relative   aspect-[9/16] overflow-hidden rounded-md">
                    <Image
                      src={reel.thumbnail}
                      alt={reel.title}
                      fill
                      className="object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                      <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl backdrop-blur">
                        ▶
                      </span>

                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-100">
                        Instagram Reel
                      </p>

                      <h3 className="mt-4 text-2xl font-semibold text-white">
                        {reel.title}
                      </h3>
                    </div>
                  </div>

                </motion.div></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 sm:px-8">
        <SectionTitle eyebrow="Social proof" title="The Night Has Reviews" />
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <div className="grid lg:grid-cols-2 gap-4">
            {reviews.map((review, index) => (
              <motion.article
                key={review.name}
                className="rounded-lg border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                variants={fadeUp}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-bold text-black">
                    {review.rating}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-zinc-300">&quot;{review.text}&quot;</p>
              </motion.article>
            ))}
          </div>
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {["/BEASTmodel2.png", "/BEASTmodel1.png"].map(
              (image, index) => (
                <motion.div
                  key={`${image}-${index}`}
                  variants={fadeUp}
                  className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10 bg-white/[0.05]"
                >
                  <Image
                    src={image}
                    alt="Customer styling the White Lightning jacket"
                    fill
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="object-contain p-3"
                  />
                </motion.div>
              ),
            )}
          </motion.div>
        </div>
      </section>

      <section id="founder" className="relative z-10 px-5  sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-lg border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <motion.div
            className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg bg-black/30"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/thumbnail-3.png"
              alt="Premraj, founder of White Lightning"
              fill
              sizes="(min-width: 768px) 34vw, 90vw"
              className="object-contain p-3"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.38em] text-sky-200/80">
              Founder
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Meet Premraj
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Premraj is a content creator and entrepreneur building a unique streetwear
              brand inspired by confidence, creativity, and futuristic fashion.
            </p>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              <a
                href={premrajInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.055] p-4 transition hover:border-sky-200/50 hover:bg-white/[0.09]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-sky-100 transition group-hover:bg-sky-100 group-hover:text-black">
                  <InstagramIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.26em] text-zinc-400">
                    Premraj
                  </span>
                  <span className="mt-1 block text-base font-semibold text-white">
                    {premrajInstagramHandle}
                  </span>
                </span>
              </a>
              <a
                href={brandInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.055] p-4 transition hover:border-sky-200/50 hover:bg-white/[0.09]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-sky-100 transition group-hover:bg-sky-100 group-hover:text-black">
                  <InstagramIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.26em] text-zinc-400">
                    Our Brand
                  </span>
                  <span className="mt-1 block text-base font-semibold text-white">
                    {brandInstagramHandle}
                  </span>
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 sm:px-8">
        <motion.div
          className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-sky-100/20 bg-[radial-gradient(circle_at_50%_0%,rgba(186,230,253,0.25),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] px-6 py-16 text-center shadow-[0_0_80px_rgba(125,211,252,0.14)] backdrop-blur-xl sm:px-10 sm:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          variants={fadeUp}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-sky-100">
            Final call
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-7xl">
            Ready To Shine?
          </h2>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button mt-9 inline-flex min-h-14 items-center justify-center rounded-full px-9 text-base font-bold text-black"
          >
            Order On WhatsApp
          </a>
        </motion.div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>White Lightning by Premraj. Futuristic glow streetwear.</p>
          <div className="flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 transition hover:border-sky-200/50 hover:text-white" href={brandInstagramUrl} target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
              Brand Instagram
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 transition hover:border-sky-200/50 hover:text-white" href={premrajInstagramUrl} target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
              Premraj
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 transition hover:border-sky-200/50 hover:text-white" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              WhatsApp
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 transition hover:border-sky-200/50 hover:text-white" href="mailto:contact@whitelightning.store">
              <MailIcon />
              Contact
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 transition hover:border-sky-200/50 hover:text-white" href="#top">
              <ShieldIcon />
              Privacy Policy
            </a>
          </div>

        </div>
        <div className="text-sm text-center mt-4 text-sm text-zinc-400 ">Developed By Harish   :   2026</div>
      </footer>
    </main>
  );
}
