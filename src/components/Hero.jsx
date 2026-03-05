'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DIGIT_H = 100;

const Hero = () => {
  const sectionRef = useRef(null);
  const heroWrapperRef = useRef(null);
  const imageRef = useRef(null);
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const digit1Ref = useRef(null);
  const digit2Ref = useRef(null);
  const digit3Ref = useRef(null);
  const titleRef = useRef(null);
  const archTextRef = useRef(null);

  const heroImages = [
    "/images/internal.jpg",
    "/images/Gallery4.jpg",
    "/images/hero3.jpg",
    "/images/Slide1.jpg",
    "/images/hero2.jpg",
    "/images/M_W_0107-Edit.jpg",
  ];

  const col1 = [0, 1];
  const col2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const col3 = [...Array(21).keys()].map((i) => i % 10);

  const headingText = "Steric Spes".split("");

  useEffect(() => {
    // ── Scroll lock helpers ───────────────────────────────────────────────────
    const lockScroll = () => {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    };

    const unlockScroll = () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };

    let ctx = gsap.context(() => {
      lockScroll();

      const initScrollTrigger = () => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        });

        gsap.to(imageRef.current, {
          yPercent: 5,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      };

      // ── 1. The Reveal Timeline ───────────────────────────
      const revealTl = gsap.timeline({
        paused: true,
        onComplete: () => {
          unlockScroll();
          initScrollTrigger();
        },
      });

      revealTl.to(progressRef.current, { opacity: 0, duration: 0.4, ease: 'power3.out' })
        // 👇 The Loader now wipes away Right-to-Left, exactly like the images
        .to(loaderRef.current, {
          clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
          duration: 2,
          ease: 'power4.inOut'
        })
        // The images stagger in right behind it
        .to('.hero-img-reveal', {
          clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',
          duration: 2,
          ease: 'power4.inOut',
          stagger: 0.5,
        }, '-=1.8') // Tight overlap so the images chase the loader
        // Safely remove loader from DOM to prevent blocking clicks
        .set(loaderRef.current, { autoAlpha: 0, display: 'none' })
        .fromTo(heroWrapperRef.current,
          { scale: 1.05 },
          { scale: 1, duration: 3, ease: 'power3.inOut' },
          '-=2.5'
        )
        .fromTo(titleRef.current.querySelectorAll('.char'),
          { y: '100%', opacity: 0 },
          { y: '0%', opacity: 1, stagger: 0.1, duration: 1, ease: 'power3.out' },
          '-=1.5'
        )
        .fromTo(archTextRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
          '-=0.8'
        );

      // ── 2. Real Image Preloading Logic ──────────────────────────────────────
      let loadedImages = 0;
      const totalImages = heroImages.length;
      let loadProgress = { value: 0 };

      const updateLoaderUI = () => {
        const val = loadProgress.value;
        const dec = val / 100;

        if (progressRef.current) progressRef.current.style.width = `${val}%`;

        if (digit3Ref.current) gsap.set(digit3Ref.current, { y: -dec * (20 * DIGIT_H) });
        if (digit2Ref.current) gsap.set(digit2Ref.current, { y: -dec * (10 * DIGIT_H) });
        if (digit1Ref.current) gsap.set(digit1Ref.current, { y: -dec * (1 * DIGIT_H) });
      };

      const handleImageLoad = () => {
        loadedImages++;
        const targetPercent = (loadedImages / totalImages) * 100;

        gsap.to(loadProgress, {
          value: targetPercent,
          duration: 2,
          ease: 'power3.inOut',
          onUpdate: updateLoaderUI,
          onComplete: () => {
            if (loadProgress.value >= 100) {
              revealTl.play();
            }
          }
        });
      };

      if (totalImages === 0) {
        handleImageLoad();
      } else {
        heroImages.forEach((src) => {
          const img = new window.Image();
          img.src = src;
          img.onload = handleImageLoad;
          img.onerror = handleImageLoad;
        });
      }

    }, sectionRef);

    return () => {
      unlockScroll();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-nav-theme="dark"
      className="relative w-full bg-black p-0 m-0"
      style={{ height: '100dvh' }}
    >
      {/* ── PRE-LOADER ─────────────────────────────────────────────── */}
      <div
        ref={loaderRef}
        className="fixed inset-0 z-50 flex flex-col justify-end bg-[#efefef] text-black px-[var(--spacing-margin)]"
        style={{
          paddingBottom: 'max(var(--spacing-margin), env(safe-area-inset-bottom))',
          // Set initial clip-path explicitly so GSAP knows where to animate from
          clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)'
        }}
      >
        <div className="w-full grid grid-cols-4 md:grid-cols-12 gap-[var(--spacing-gutter)]">
          <div className="col-span-4 md:col-start-8 md:col-span-5 flex flex-col justify-end items-end">

            <div className="flex flex-col w-max">
              <div
                className="flex items-center gap-1 font-bold uppercase tracking-tighter"
                style={{ height: DIGIT_H }}
              >
                <p
                  className="text-2xl md:text-2xl xl:text-5xl 2xl:text-6xl mr-4 leading-none"
                  style={{ lineHeight: `${DIGIT_H}px` }}
                >
                  Loading
                </p>

                {[digit1Ref, digit2Ref, digit3Ref].map((ref, colIdx) => {
                  const items = [col1, col2, col3][colIdx];
                  return (
                    <div
                      key={colIdx}
                      style={{ height: DIGIT_H, overflow: 'hidden', position: 'relative' }}
                    >
                      <div ref={ref} style={{ position: 'relative', top: 0 }}>
                        {items.map((num, i) => (
                          <div
                            key={i}
                            style={{
                              height: DIGIT_H,
                              lineHeight: `${DIGIT_H}px`,
                              fontSize: DIGIT_H,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 'bold',
                            }}
                          >
                            {num}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}

                <div
                  style={{
                    height: DIGIT_H,
                    lineHeight: `${DIGIT_H}px`,
                    fontSize: DIGIT_H * 0.7,
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 'bold',
                  }}
                >
                  %
                </div>
              </div>

              <div className="w-full h-1 bg-black/20 mt-4 relative">
                <div ref={progressRef} className="absolute top-0 left-0 h-full bg-black w-0" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── HERO WRAPPER ─────────────────────────────── */}
      <div
        ref={heroWrapperRef}
        className="absolute inset-0 w-full h-full overflow-hidden origin-center z-0"
      >
        {heroImages.map((src, index) => {
          const isLastImage = index === heroImages.length - 1;
          return (
            <div
              key={index}
              ref={isLastImage ? imageRef : null}
              className="hero-img-reveal absolute inset-0 scale-100"
              style={{
                clipPath: index === 0
                  ? 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)'
                  : 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'
              }}
            >
              <Image
                src={src}
                alt={`Hero Image ${index + 1}`}
                fill
                priority={isLastImage || index === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
              {isLastImage && <div className="absolute inset-0 bg-black/20" />}
            </div>
          );
        })}
      </div>

      {/* ── TEXT OVERLAY ── */}
      <div
        className="absolute inset-0 z-10 w-full h-full flex flex-col justify-between pointer-events-none px-[var(--spacing-margin)]"
        style={{
          paddingBottom: 'max(var(--spacing-margin), env(safe-area-inset-bottom))',
        }}
      >
        <div className="w-full grid grid-cols-4 md:grid-cols-12 gap-[var(--spacing-gutter)]">
          <div className="col-span-2 md:col-span-3 flex justify-start pt-6 md:pt-8 overflow-hidden">
            <span
              ref={archTextRef}
              className="text-sm font-medium uppercase tracking-[0.3em] text-white/70 opacity-0"
            >
              Architecture
            </span>
          </div>
        </div>

        <div className="w-full grid grid-cols-4 md:grid-cols-12 gap-[var(--spacing-gutter)]">
          <div className="col-span-4 md:col-span-12">
            <h1
              ref={titleRef}
              aria-label={headingText.join("")}
              className="text-white text-[12vw] font-bold leading-none overflow-hidden flex flex-wrap -ml-1 md:-ml-2"
            >
              {headingText.map((char, index) => (
                <span key={index} aria-hidden="true" className="char relative inline-block whitespace-pre">
                  {char}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;