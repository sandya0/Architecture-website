'use client';

import React, { useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function SmoothScroll({ children }) {
    // We can still use the hook to sync with GSAP
    const lenis = useLenis(({ scroll }) => {
        // ScrollTrigger.update is handled automatically if syncTouch is true
        // but manually for custom raf loops. ReactLenis handles this well!
    });

    useEffect(() => {
        // Sync GSAP with Lenis
        if (lenis) {
            lenis.on('scroll', ScrollTrigger.update);

            // Sync GSAP with Lenis manual RAF
            const update = (time) => {
                lenis.raf(time * 1000);
            };

            gsap.ticker.add(update);

            // Important for GSAP/Lenis sync to prevent jumps
            gsap.ticker.lagSmoothing(0);

            // Make lenis globally accessible for the Navbar scrollTo
            window.lenis = lenis;
        }

        return () => {
            if (lenis) {
                gsap.ticker.remove(update);
            }
        };
    }, [lenis]);

    return (
        <ReactLenis root autoRaf={false} options={{
            duration: 1.6,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        }}>
            {children}
        </ReactLenis>
    );
}
