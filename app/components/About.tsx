import Link from 'next/link';

const LogoBox = () => (
  <svg viewBox="0 0 66 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '66px', height: '90px' }}>
    <path d="M65.0869 33.1959C65.0869 15.3695 50.7211 0.918396 33 0.918396C15.2789 0.918396 0.913086 15.3695 0.913086 33.1959V56.8041C0.913086 74.6305 15.2789 89.0817 33 89.0817C50.7211 89.0817 65.0869 74.6305 65.0869 56.8041V33.1959Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
    <path d="M34.321 0.918396H31.6912C18.2634 0.918396 7.37799 11.8664 7.37799 25.3715V64.6286C7.37799 78.1337 18.2634 89.0817 31.6912 89.0817H34.321C47.7488 89.0817 58.6342 78.1337 58.6342 64.6286V25.3715C58.6342 11.8664 47.7488 0.918396 34.321 0.918396Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
    <path d="M36.0985 0.918396H29.9015C20.4946 0.918396 12.8688 8.58803 12.8688 18.049V71.951C12.8688 81.412 20.4946 89.0817 29.9015 89.0817H36.0985C45.5054 89.0817 53.1311 81.412 53.1311 71.951V18.049C53.1311 8.58803 45.5054 0.918396 36.0985 0.918396Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
    <path d="M35.5141 0.918396H30.4737C24.5028 0.918396 19.6624 5.78661 19.6624 11.7919V78.2082C19.6624 84.2134 24.5028 89.0817 30.4737 89.0817H35.5141C41.485 89.0817 46.3254 84.2134 46.3254 78.2082V11.7919C46.3254 5.78661 41.485 0.918396 35.5141 0.918396Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
  </svg>
);

export default function About() {
  return (
    <section className="about">
      <div className="about__wrapper">
        <div className="about__header">
          <h2 className="about__label">
            <span className="about__label__text">Who We Are</span>
          </h2>

          <div className="about__description">
            <p>
              You won&apos;t outdream us.<br />
              We&apos;re here to help brands become the most ambitious version of themselves.<br />
              And we don&apos;t stop until it happens.
            </p>
          </div>

          <div className="about__button__wrapper">
            <Link className="button about__button" href="/contact">
              <span className="button__text">
                <span className="button__text__line">Contact Us</span>
              </span>
            </Link>
          </div>
        </div>

        <aside className="about__box">
          <div className="about__box__wrapper">
            <div className="line" style={{ marginBottom: '40px' }}></div>

            <div className="about__box__icon" style={{ marginBottom: '40px' }}>
              <LogoBox />
            </div>

            <div className="about__box__description">
              <p>
                Zerotrillion is a global creative services company blending strategy, creativity, and production. Our philosophy? Aim for a trillion or don&apos;t even try.
              </p>
            </div>

            <div className="about__box__button__wrapper" style={{ marginTop: '40px' }}>
              <Link className="button button--dark about__box__button" href="/about">
                <span className="button__text">
                  <span className="button__text__line">About Us</span>
                </span>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
