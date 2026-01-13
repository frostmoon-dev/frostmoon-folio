import Link from 'next/link';
import Image from 'next/image';

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1H15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M15 15V1L1 15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const LogoBox = () => (
  <svg viewBox="0 0 66 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '66px', height: '90px' }}>
    <path d="M65.0869 33.1959C65.0869 15.3695 50.7211 0.918396 33 0.918396C15.2789 0.918396 0.913086 15.3695 0.913086 33.1959V56.8041C0.913086 74.6305 15.2789 89.0817 33 89.0817C50.7211 89.0817 65.0869 74.6305 65.0869 56.8041V33.1959Z" stroke="#FFFBF2" strokeWidth="1.5" strokeMiterlimit="10"/>
    <path d="M34.321 0.918396H31.6912C18.2634 0.918396 7.37799 11.8664 7.37799 25.3715V64.6286C7.37799 78.1337 18.2634 89.0817 31.6912 89.0817H34.321C47.7488 89.0817 58.6342 78.1337 58.6342 64.6286V25.3715C58.6342 11.8664 47.7488 0.918396 34.321 0.918396Z" stroke="#FFFBF2" strokeWidth="1.5" strokeMiterlimit="10"/>
    <path d="M36.0985 0.918396H29.9015C20.4946 0.918396 12.8688 8.58803 12.8688 18.049V71.951C12.8688 81.412 20.4946 89.0817 29.9015 89.0817H36.0985C45.5054 89.0817 53.1311 81.412 53.1311 71.951V18.049C53.1311 8.58803 45.5054 0.918396 36.0985 0.918396Z" stroke="#FFFBF2" strokeWidth="1.5" strokeMiterlimit="10"/>
    <path d="M35.5141 0.918396H30.4737C24.5028 0.918396 19.6624 5.78661 19.6624 11.7919V78.2082C19.6624 84.2134 24.5028 89.0817 30.4737 89.0817H35.5141C41.485 89.0817 46.3254 84.2134 46.3254 78.2082V11.7919C46.3254 5.78661 41.485 0.918396 35.5141 0.918396Z" stroke="#FFFBF2" strokeWidth="1.5" strokeMiterlimit="10"/>
  </svg>
);

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/news', label: 'News' },
  { href: '/how-we-work', label: 'How we work' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__head">
        <div className="footer__head__wrapper">
          <span className="footer__head__title paragraph--active">
            The &apos;All or Nothing&apos; Creative Agency
          </span>

          <div className="footer__head__countries">
            <p>
              <Link href="/contact#new-york">New York</Link> /{' '}
              <Link href="/contact#amsterdam">Amsterdam</Link> /{' '}
              <Link href="/contact#toronto">Toronto</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="footer__content">
        <div className="footer__column">
          <Link className="footer__column__top" href="/contact">
            <div className="footer__media" style={{ marginBottom: '24px' }}>
              <LogoBox />
            </div>

            <p className="footer__description paragraph--active">
              Let&apos;s Create
            </p>
          </Link>

          <div className="footer__column__bottom">
            <div className="footer__links">
              <a
                className="link footer__links__item"
                href="https://www.zerotrillionpictures.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="link__text">Zerotrillion Pictures</span>
                <div className="link__icon">
                  <ArrowIcon />
                </div>
              </a>
              <a
                className="link footer__links__item"
                href="https://zerotrillionpr.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="link__text">Zerotrillion PR</span>
                <div className="link__icon">
                  <ArrowIcon />
                </div>
              </a>
            </div>

            <div className="footer__copyright">
              Copyright 2026
            </div>
          </div>
        </div>

        <div className="footer__column">
          <div className="footer__video">
            <figure className="footer__video__media">
              <Image
                alt=""
                className="footer__video__media__image"
                src="https://irsnwli1pcdhpkfn.public.blob.vercel-storage.com/assets/image-f6d5561d563d54f068faf7725c1690a21992a0ba-2802x4293-png.webp"
                width={280}
                height={430}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </figure>
          </div>

          <ul className="footer__list">
            {footerLinks.map((link, index) => (
              <li key={index} className="footer__list__item">
                <Link className="footer__list__link" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="footer__button__wrapper">
            <a
              className="button footer__button"
              href="mailto:newbusiness@zerotrillion.com"
            >
              <span className="button__text">
                <span className="button__text__line">newbusiness@zerotrillion.com</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
