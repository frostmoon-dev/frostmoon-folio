'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1H15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M15 15V1L1 15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const principles = [
  'We work in outcomes, not hours.',
  'Faster is Better.',
  'AI is a scalpel, not a hammer.',
  'Data-informed, creatively-led.',
  'Services to suit.',
  'Business should be a pleasure.',
];

export default function Principles() {
  const [currentPrinciple, setCurrentPrinciple] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrinciple((prev) => (prev + 1) % principles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="principles">
      <div className="line" style={{ position: 'absolute', top: 0, left: 0, right: 0 }}></div>

      <div className="principles__wrapper">
        <span className="principles__text">
          {principles[currentPrinciple]}
        </span>
      </div>

      <Link className="link principles__link" href="/how-we-work">
        <span className="link__text">See How We Work</span>
        <div className="link__icon">
          <ArrowIcon />
        </div>
      </Link>
    </section>
  );
}
