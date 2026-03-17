'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const observed = document.querySelectorAll('.r');
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('v');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    for (const el of observed) io.observe(el);
    return () => io.disconnect();
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Opening */}
      <section className="opening" id="inicio" aria-label="Abertura">
        <div className="opening-rule" aria-hidden="true" />

        <p className="epigraph">
          Desenvolvedor, empreendedor, e outras coisas que ainda estou descobrindo.
        </p>

        <p className="opening-name">Fernando Lima</p>

        <nav className="opening-nav" role="navigation" aria-label="Navegação principal">
          <a href="#quem-sou" onClick={(e) => scrollTo(e, '#quem-sou')}>quem sou</a>
          <a href="#o-que-construo" onClick={(e) => scrollTo(e, '#o-que-construo')}>projetos</a>
          <a href="#o-caminho" onClick={(e) => scrollTo(e, '#o-caminho')}>o caminho</a>
          <a href="#contato" onClick={(e) => scrollTo(e, '#contato')}>contato</a>
        </nav>

        <div className="scroll-hint" aria-hidden="true"><span /></div>
      </section>

      {/* Quem sou */}
      <div className="divider" aria-hidden="true"><div className="divider-inner" /></div>

      <section className="section" id="quem-sou" aria-label="Quem sou">
        <div className="section-inner">
          <div className="section-rule r" aria-hidden="true" />
          <p className="section-label r r-d1">Quem sou</p>

          <div className="narrative">
            <p className="r r-d2">
              Desenvolvedor fullstack. Trabalho remoto do <em>MS</em>.
            </p>
            <p className="r r-d3">
              Fundei a <span className="hl">Flavum Labs</span> com um amigo. A gente constrói produto próprio.
            </p>
          </div>
        </div>
      </section>

      {/* O que construo */}
      <div className="divider" aria-hidden="true"><div className="divider-inner" /></div>

      <section className="section" id="o-que-construo" aria-label="Projetos">
        <div className="section-inner">
          <div className="section-rule r" aria-hidden="true" />
          <p className="section-label r r-d1">O que construo</p>

          <ol className="works" role="list">
            <li className="work-item r r-d2">
              <div className="work-header">
                <a href="https://flavumlabs.com" target="_blank" rel="noopener noreferrer" className="work-link">
                  <span className="work-name">Flavum Labs</span>
                  <span className="work-arrow" aria-hidden="true">&#8599;</span>
                </a>
              </div>
              <p className="work-desc">Estúdio de produtos digitais &mdash; do conceito ao lançamento.</p>
              <div className="work-tags">
                <span className="work-tag">Hub de Produtos</span>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* O caminho */}
      <div className="divider" aria-hidden="true"><div className="divider-inner" /></div>

      <section className="section" id="o-caminho" aria-label="O Caminho">
        <div className="section-inner">
          <div className="section-rule r" aria-hidden="true" />
          <p className="section-label r r-d1">O caminho</p>

          <p className="caminho-text r r-d2">Em breve.</p>

          <div className="r r-d3">
            <span className="caminho-badge">
              <span className="dot" aria-hidden="true" />
              em construção
            </span>
          </div>
        </div>
      </section>

      {/* Contato */}
      <div className="divider" aria-hidden="true"><div className="divider-inner" /></div>

      <section className="section" id="contato" aria-label="Contato">
        <div className="section-inner">
          <div className="section-rule r" aria-hidden="true" />
          <p className="section-label r r-d1">Contato</p>

          <div className="contato-links r r-d2">
            <a href="https://github.com/lnfernandobr" target="_blank" rel="noopener noreferrer" className="contato-link" aria-label="Perfil no GitHub">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              github.com/lnfernandobr
            </a>
            <a href="https://linkedin.com/in/lnfernandobr" target="_blank" rel="noopener noreferrer" className="contato-link" aria-label="Perfil no LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
              </svg>
              linkedin.com/in/lnfernandobr
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <p className="footer-location">Fernando Lima &middot; MS &middot; 2026</p>
      </footer>
    </>
  );
}
