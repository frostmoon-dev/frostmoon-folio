import Link from 'next/link';
import Image from 'next/image';

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1H15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M15 15V1L1 15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const articles = [
  {
    href: '/thoughts/canada-soccer-names-zerotrillion-as-aor',
    image: 'https://irsnwli1pcdhpkfn.public.blob.vercel-storage.com/assets/image-7a969580c81432378800e79e0a7d8200716857d4-1296x1344-png.webp',
    title: 'Canada Soccer names Zerotrillion as AOR ahead of FIFA World Cup 2026',
  },
  {
    href: '/thoughts/zerotrillion-appointed-agency-of-record-for-niagara-falls-tourism',
    image: 'https://irsnwli1pcdhpkfn.public.blob.vercel-storage.com/assets/image-6858e274b1eb6a25fcfa42e19505fc71dd9198af-2001x1230-png.webp',
    title: 'Zerotrillion Appointed Agency of Record for Niagara Falls Tourism',
  },
  {
    href: '/thoughts/slamdance-film-festival-announces-award-winners',
    image: 'https://irsnwli1pcdhpkfn.public.blob.vercel-storage.com/assets/image-36f4dc92ac1c17575d157f6d9489b7670e04d468-1794x990-png.webp',
    title: 'Slamdance Film Festival Announces Award Winners from Inaugural Los Angeles Edition',
  },
];

export default function Articles() {
  return (
    <section className="articles">
      <div className="articles__wrapper">
        <h2 className="articles__label">News</h2>

        <div className="articles__list">
          {articles.map((article, index) => (
            <article key={index} className="articles__item">
              <Link className="articles__item__link" href={article.href}>
                <figure className="articles__item__media">
                  <Image
                    alt=""
                    className="articles__item__image"
                    src={article.image}
                    width={400}
                    height={400}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </figure>

                <h3 className="articles__item__title">{article.title}</h3>
              </Link>
            </article>
          ))}
        </div>

        <Link className="link articles__link" href="/thoughts">
          <span className="link__text">View All News</span>
          <div className="link__icon">
            <ArrowIcon />
          </div>
        </Link>
      </div>
    </section>
  );
}
