'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useLenis } from 'lenis/react';

const Navbar = () => {
    const navRef = useRef(null);
    const lenis = useLenis();

    const [isLogoVisible, setIsLogoVisible] = useState(false);
    const [navColor, setNavColor] = useState('text-white');

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            // Reveal logo only after scrolling past the 100vh hero section
            if (window.scrollY > window.innerHeight * 0.9) {
                setIsLogoVisible(true);
            } else {
                setIsLogoVisible(false);
            }

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const sections = document.querySelectorAll('[data-nav-theme]');
                    let currentTheme = 'dark'; // Default to dark hero

                    // The navbar is roughly at y=0 to y=80. Check what section is behind y=30
                    sections.forEach((section) => {
                        const rect = section.getBoundingClientRect();
                        // If the top of the section is above the nav line, and the bottom is below it
                        if (rect.top <= 40 && rect.bottom >= 40) {
                            currentTheme = section.getAttribute('data-nav-theme');
                        }
                    });

                    setNavColor(currentTheme === 'dark' ? 'text-white' : 'text-black');
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Run once on load to establish correct initial state
        setTimeout(handleScroll, 50);

        // GSAP Animation for navbar links to appear after Hero title (starts around 8.5s)
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.anim-nav-link',
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 8.5 }
            );
        }, navRef);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            ctx.revert();
        };
    }, []);

    // Reusable smooth easing function (Ease-In-Out Cubic)
    const smoothEase = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const handleNavClick = (e, target) => {
        if (target.startsWith('#')) {
            e.preventDefault();
            if (lenis) {
                lenis.scrollTo(target, {
                    offset: 0,
                    duration: 1.5, // Adjusted duration for a more natural feel
                    easing: smoothEase // Much smoother, balanced curve
                });
            } else {
                document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header
            ref={navRef}
            className={`fixed top-0 left-0 w-full z-[100] px-[var(--spacing-margin)] py-6 md:py-8 pointer-events-none transition-colors duration-500 ${navColor}`}
        >
            <div className="w-full grid grid-cols-4 md:grid-cols-12 gap-[var(--spacing-gutter)] items-start pointer-events-auto">
                {/* LOGO - Left aligned, spanning 2 columns on mobile, 3 on desktop */}
                <div className={`col-span-2 md:col-span-3 transition-opacity duration-500 ${isLogoVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <Link
                        href="/"
                        onClick={(e) => {
                            if (window.location.pathname === '/') {
                                e.preventDefault();
                                lenis?.scrollTo(0, {
                                    duration: 1.5,
                                    easing: smoothEase
                                });
                            }
                        }}
                        className="text-sm md:text-base font-bold uppercase tracking-[0.2em] relative group overflow-hidden inline-block"
                    >
                        <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                            Steric Spes
                        </span>
                        <span className={`absolute inset-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0 ${navColor === 'text-black' ? 'text-black/70' : 'text-white/70'}`}>
                            Steric Spes
                        </span>
                    </Link>
                </div>

                {/* NAVIGATION LINKS - Right aligned, pushed to the end columns */}
                <div className="col-span-2 md:col-start-8 md:col-span-5 flex justify-end gap-6 md:gap-12">
                    {['About', 'Gallery', 'Contact'].map((item) => (
                        <div key={item} className="anim-nav-link opacity-0">
                            <Link
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
                                className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] relative group overflow-hidden block"
                            >
                                <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                                    {item}
                                </span>
                                <span className={`absolute inset-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0 ${navColor === 'text-black' ? 'text-black/50' : 'text-white/50'}`}>
                                    {item}
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Navbar;