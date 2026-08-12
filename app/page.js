export const metadata = {
  title: 'Fernando Lima',
  description:
    'Fernando Lima — programador, construindo e compartilhando projetos. Construindo o fazedorismo.com.',
};

const fazedorismo = [
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@fazedorismo',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const linkedinIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

export default function Home() {
  return (
    <main className="shell">
      <div className="wrap">
        <section className="info">
          <img className="avatar" src="/me.jpeg" alt="Fernando Lima" />
          <h1 className="hi">
            Oi, sou o Fernando <span className="wave">👋</span>
          </h1>
          <p className="bio">
            Programador, construindo e compartilhando projetos.
          </p>
        </section>

        <section className="panels">
          <div className="panel">
            <span className="label">O projeto</span>
            <div className="proj-card">
              <a
                className="proj-head"
                href="https://www.fazedorismo.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="pc-dot" aria-hidden="true" />
                <span className="lc-name">fazedorismo.com</span>
                <span className="lc-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <nav className="proj-socials" aria-label="Redes do fazedorismo">
                {fazedorismo.map(({ label, href, icon }) => (
                  <a
                    key={href}
                    className="follow-link"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    {icon}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="panel">
            <span className="label">Contato</span>
            <p className="contact-text">
              Pra conversas e oportunidades profissionais, me chama no LinkedIn.
            </p>
            <a
              className="link-card"
              href="https://www.linkedin.com/in/fernandolimaindie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="lc-icon">{linkedinIcon}</span>
              <span className="lc-name">Falar no LinkedIn</span>
              <span className="lc-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
