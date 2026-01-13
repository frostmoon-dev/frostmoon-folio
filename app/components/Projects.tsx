import Link from 'next/link';

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1H15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M15 15V1L1 15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const projects = [
  {
    href: '/project/under-armour-one-more',
    title: 'Under Armour One More',
  },
  {
    href: '/project/amazon-prime-upload',
    title: 'Amazon Prime Upload',
  },
  {
    href: '/project/protopie-free-your-ideas',
    title: 'ProtoPie Free Your Ideas',
  },
  {
    href: '/project/alessia-cara-live-at-niagara-falls',
    title: 'Alessia Cara Live at Niagara Falls',
  },
  {
    href: '/project/airbnb-at-home-in-amsterdam',
    title: 'Airbnb at Home in Amsterdam',
  },
  {
    href: '/project/celebrating-25-years-with-thinkpad',
    title: 'Celebrating 25 Years with ThinkPad',
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <h2 className="projects__label">
        <span className="projects__label__text">Featured Projects</span>
      </h2>

      <ul className="projects__list">
        {projects.map((project, index) => (
          <li key={index} className="projects__item">
            <Link className="projects__item__link" href={project.href}>
              <h3>{project.title}</h3>
            </Link>
          </li>
        ))}
      </ul>

      <Link className="link projects__link" href="/work">
        <span className="link__text">View All Work</span>
        <div className="link__icon">
          <ArrowIcon />
        </div>
      </Link>
    </section>
  );
}
