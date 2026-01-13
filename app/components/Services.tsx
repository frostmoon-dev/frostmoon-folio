import Link from 'next/link';

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1H15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M15 15V1L1 15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const services = [
  { href: '/services#brand-strategy', label: 'Brand Strategy' },
  { href: '/services#brand-design', label: 'Brand Design' },
  { href: '/services#advertising-and-marketing', label: 'Advertising & Marketing' },
  { href: '/services#public-relations', label: 'Public Relations' },
  { href: '/services#media-buying', label: 'Media' },
  { href: '/services#transformation', label: '360 Transformation' },
];

export default function Services() {
  return (
    <section className="bullets">
      <div className="bullets__wrapper">
        <h2 className="bullets__label">Services</h2>

        <div className="bullets__content">
          <ul>
            {services.map((service, index) => (
              <li key={index}>
                <span>
                  <Link href={service.href}>{service.label}</Link>
                </span>
              </li>
            ))}
          </ul>

          <Link className="link bullets__link" href="/services">
            <span className="link__text">View All Services</span>
            <div className="link__icon">
              <ArrowIcon />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
