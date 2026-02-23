'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DIGIT_H = 100;

const Hero = () => {
  const sectionRef     = useRef(null);
  const heroWrapperRef = useRef(null);
  const imageRef       = useRef(null);
  const loaderRef      = useRef(null);
  const progressRef    = useRef(null);
  const digit1Ref      = useRef(null);
  const digit2Ref      = useRef(null);
  const digit3Ref      = useRef(null);
  const titleRef       = useRef(null);

  const heroImages = [
    "/images/internal.jpg",
    "/images/M_W_0668-Edit.jpg",
    "/images/M_W_0264-Edit.jpg",
    "/images/M_W_0668-Edit.jpg",
    "/images/M_W_0264-Edit.jpg",
    "/images/internal.jpg",
    "/images/M_W_0107-Edit.jpg",
  ];

  const col1 = [0, 1];
  const col2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const col3 = [...Array(21).keys()].map((i) => i % 10);

  const headingText = "Steric Spes".split("");

  useEffect(() => {
    // ── Scroll lock helpers ───────────────────────────────────────────────────
    //
    // Problem: on mobile, overflow:hidden on <body> is NOT enough to stop
    // scrolling. Touch events still fire and momentum/inertia scroll continues.
    //
    // Solution (three-pronged):
    //   1. position:fixed + top:-scrollY  → freezes the body in place (desktop + mobile)
    //   2. touchmove preventDefault        → blocks native touch scroll (iOS Safari)
    //   3. wheel + keydown preventDefault  → blocks trackpad / keyboard scroll (desktop)
    // ─────────────────────────────────────────────────────────────────────────
    let savedScrollY = 0;
    const SCROLL_KEYS = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];

    const preventTouch = (e) => e.preventDefault();
    const preventWheel = (e) => e.preventDefault();
    const preventKeys  = (e) => { if (SCROLL_KEYS.includes(e.key)) e.preventDefault(); };

    const lockScroll = () => {
      savedScrollY = window.scrollY;

      // Freeze body — restores scroll position after unlock
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top      = `-${savedScrollY}px`;
      document.body.style.width    = '100%';

      // Block touch scroll (iOS Safari needs passive:false to allow preventDefault)
      document.addEventListener('touchmove', preventTouch, { passive: false });
      // Block wheel / trackpad
      document.addEventListener('wheel',     preventWheel, { passive: false });
      // Block keyboard scroll
      document.addEventListener('keydown',   preventKeys);
    };

    const unlockScroll = () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top      = '';
      document.body.style.width    = '';

      // Restore the scroll position that position:fixed reset to 0
      window.scrollTo(0, savedScrollY);

      document.removeEventListener('touchmove', preventTouch);
      document.removeEventListener('wheel',     preventWheel);
      document.removeEventListener('keydown',   preventKeys);
    };
    // ─────────────────────────────────────────────────────────────────────────

    let ctx = gsap.context(() => {

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

      const tl = gsap.timeline({
        onStart:    () => lockScroll(),
        onComplete: () => {
          unlockScroll();
          initScrollTrigger();
        },
      });

      const animateCol = (ref, duration, delay = 0) => {
        const totalDistance = (ref.current.children.length - 1) * DIGIT_H;
        tl.to(ref.current, { y: -totalDistance, duration, ease: 'power2.inOut' }, delay);
      };

      animateCol(digit3Ref, 2.5, 0);
      animateCol(digit2Ref, 3, 0);
      animateCol(digit1Ref, 1, 2);

      tl.to(progressRef.current, { width: '30%', duration: 2, ease: 'power4.inOut' }, 2.5);
      tl.to(progressRef.current, { width: '100%', opacity: 0, duration: 2, ease: 'power3.out' }, 3.5);

      tl.to(loaderRef.current, { autoAlpha: 0, display: 'none', duration: 0.5 }, 4.5);

      tl.to('.hero-img-reveal', {
        clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',
        duration: 1,
        ease: 'power4.inOut',
        stagger: 0.25,
      }, 4);

      tl.fromTo(heroWrapperRef.current,
        { scale: 1.25 },
        { scale: 1, duration: 3, ease: 'power3.inOut' },
        4
      );

      tl.fromTo(
        titleRef.current.querySelectorAll('.char'),
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, stagger: 0.1, duration: 1, ease: 'power3.out' },
        4.8
      );

    }, sectionRef);

    return () => {
      // Always clean up on unmount in case animation is mid-flight
      unlockScroll();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black p-0 m-0"
      style={{ height: '100dvh' }}
    >

      {/* ── PRE-LOADER ─────────────────────────────────────────────── */}
      <div
        ref={loaderRef}
        className="fixed inset-0 z-50 flex flex-col justify-end items-end p-8 bg-[#efefef] text-black"
      >
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

        <div className="w-full max-w-md h-1 bg-black/20 mt-4 relative">
          <div ref={progressRef} className="absolute top-0 left-0 h-full bg-black w-0" />
        </div>
      </div>

      {/* ── HERO WRAPPER (images only) ─────────────────────────────── */}
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
              style={{ clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' }}
            >
              <Image
                src={src}
                alt={`Hero Image ${index + 1}`}
                fill
                priority={isLastImage}
                className="object-cover object-center"
              />
              {isLastImage && <div className="absolute inset-0 bg-black/20" />}
            </div>
          );
        })}
      </div>

      {/* ── TEXT OVERLAY (outside wrapper — never clipped or scaled) ── */}
      <div
        className="absolute inset-0 z-10 w-full h-full flex flex-col justify-between pointer-events-none"
        style={{
          padding: 'max(2rem, env(safe-area-inset-top)) 2rem max(2rem, env(safe-area-inset-bottom)) 2rem',
        }}
      >
        <div>
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-white/70">
            Architecture
          </span>
        </div>

        <h1
          ref={titleRef}
          className="text-white text-[12vw] font-bold leading-none overflow-hidden flex flex-wrap"
        >
          {headingText.map((char, index) => (
            <span key={index} className="char relative inline-block whitespace-pre">
              {char}
            </span>
          ))}
        </h1>
      </div>

    </section>
  );
};

export default Hero;