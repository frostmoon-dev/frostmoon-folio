import Link from 'next/link';
import Image from 'next/image';

const featuredItems = [
  {
    href: '/project/alessia-cara-live-at-niagara-falls',
    image: 'https://irsnwli1pcdhpkfn.public.blob.vercel-storage.com/assets/image-ca57ceeeadaae3ea2f14cbee5067ccc6d90d4fc7-1650x1050-png.webp',
    title: 'Alessia Cara Live at Niagara Falls',
    tag: 'Advertising',
  },
  {
    href: '/thoughts/slamdance-film-festival',
    image: 'https://irsnwli1pcdhpkfn.public.blob.vercel-storage.com/assets/image-a181caf2021f5d955f8569b9f415c355f704fab6-1650x1050-png.webp',
    title: 'Zerotrillion Pictures\' "Racewalkers" Wins at Slamdance',
    tag: 'Film Production',
  },
  {
    href: '/project/diamonds-that-deserve-you',
    image: 'https://irsnwli1pcdhpkfn.public.blob.vercel-storage.com/assets/image-033f97cf2d7a5422c5df16f827602afb97f00c26-1650x1050-png.webp',
    title: 'Grown Brilliance x Candice Swanepoel',
    tag: 'Brand Collab',
  },
];

export default function Featured() {
  return (
    <section className="featured">
      <div className="featured__wrapper">
        <h2 className="featured__label">
          <span className="featured__label__text">Featured</span>
        </h2>

        <ul className="featured__list">
          {featuredItems.map((item, index) => (
            <li key={index} className="featured__item">
              <Link className="featured__item__link" href={item.href}>
                <figure className="featured__item__media">
                  <Image
                    alt={`${item.title} - Featured Image`}
                    className="featured__item__image"
                    src={item.image}
                    width={550}
                    height={350}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </figure>

                <div className="featured__item__content">
                  <h3 className="featured__item__title">{item.title}</h3>

                  <ul className="tags featured__item__tags">
                    <li className="tags__item">{item.tag}</li>
                  </ul>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
