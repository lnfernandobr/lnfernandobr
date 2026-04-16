'use client';

import { useEffect, useState } from 'react';

const LOG = [
  {
    d: '2026-04-16T17:30', p: 'site', type: 'ship',
    title: { pt: 'sobrou o simples', en: 'landed on simple' },
    body: {
      pt: 'Criei várias versões, nada do meu gosto. Fui refinando até chegar no que me agradou: simplicidade absoluta. Vai evoluindo com os dias.',
      en: 'Built several versions, none to my taste. Kept refining until I landed on what I wanted: absolute simplicity. Will keep evolving as the days go.',
    },
  },
];

const COPY = {
  pt: {
    toggle: 'EN',
    header: {
      name: 'Fernando Lima',
      role: 'Mato Grosso do Sul, Brasil',
    },
    sections: {
      log: { n: '01', label: 'Log' },
      about: {
        n: '02',
        label: 'Sobre',
        body: [
          'Programo fullstack desde 2017. Já passei por plataforma de curso, marketplace, SaaS, white-label, sistema de gestão de time. Quase sempre em Node — depois veio React, depois TypeScript, agora IA no meio do dia.',
          'O que me prende é entender o problema do negócio antes de escrever linha. Projeto do zero ou código com dez anos de dívida, tanto faz. A parte importante começa aí.',
          'Remoto desde o começo. Parte por escolha, parte porque moro no interior. Trabalhar com gente de outro fuso virou hábito imposto. Hoje não sei fazer diferente.',
        ],
      },
      projects: {
        n: '03',
        label: 'Projetos',
        items: [
          {
            name: 'Flavum Labs',
            thesis: 'Empresa de projetos que cofundei.',
            meta: 'Cofundador',
            href: 'https://flavumlabs.com',
          },
          {
            name: 'Desconta.ai',
            thesis: 'Vendas e fidelização pelo WhatsApp para o comércio local.',
            meta: 'Cofundador · Em progresso',
            href: 'https://desconta.online/',
          },
        ],
      },
    },
    contact: [
      { k: 'GitHub', href: 'https://github.com/lnfernandobr' },
    ],
    footer: '© Fernando Lima · 2026',
  },
  en: {
    toggle: 'PT',
    header: {
      name: 'Fernando Lima',
      role: 'Mato Grosso do Sul, Brazil',
    },
    sections: {
      log: { n: '01', label: 'Log' },
      about: {
        n: '02',
        label: 'About',
        body: [
          'Fullstack since 2017. Online courses, marketplaces, SaaS, white-label, team management software — been through most of it. Node first, then React, then TypeScript, now AI somewhere in the middle of every day.',
          'What keeps me in is understanding the business problem before writing a line. Greenfield or a codebase with ten years of debt, same thing — the real part of the job starts there.',
          'Remote from day one. Partly by choice, partly because I live far from any office. Working across time zones I don\u2019t share became a habit I didn\u2019t pick. I wouldn\u2019t know how to do it differently now.',
        ],
      },
      projects: {
        n: '03',
        label: 'Projects',
        items: [
          {
            name: 'Flavum Labs',
            thesis: 'Projects company I co-founded.',
            meta: 'Co-founder',
            href: 'https://flavumlabs.com',
          },
          {
            name: 'Desconta.ai',
            thesis: 'Sales and retention over WhatsApp for local businesses.',
            meta: 'Co-founder · In progress',
            href: 'https://desconta.online/',
          },
        ],
      },
    },
    contact: [
      { k: 'GitHub', href: 'https://github.com/lnfernandobr' },
    ],
    footer: '© Fernando Lima · 2026',
  },
};

function groupByMonth(entries) {
  const out = [];
  for (const e of entries) {
    const ym = e.d.slice(0, 7);
    const last = out[out.length - 1];
    if (last && last.ym === ym) last.items.push(e);
    else out.push({ ym, items: [e] });
  }
  return out;
}

function monthLabel(ym, lang) {
  const [y, m] = ym.split('-');
  const d = new Date(Number(y), Number(m) - 1, 1);
  const fmt = new Intl.DateTimeFormat(lang === 'pt' ? 'pt-BR' : 'en-US', {
    month: 'long',
    year: 'numeric',
  });
  return fmt.format(d);
}

export default function Home() {
  const [lang, setLang] = useState('pt');

  useEffect(() => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('lang');
    if (saved === 'pt' || saved === 'en') setLang(saved);
    else {
      const nav = typeof navigator !== 'undefined' ? navigator.language || '' : '';
      if (!nav.toLowerCase().startsWith('pt')) setLang('en');
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    }
  }, [lang]);

  const t = COPY[lang];
  const toggle = () => {
    const next = lang === 'pt' ? 'en' : 'pt';
    setLang(next);
    if (typeof window !== 'undefined') localStorage.setItem('lang', next);
  };

  return (
    <main className="shell">
      <header className="head">
        <div className="head-l">
          <h1 className="head-name" aria-label={t.header.name}>
            {t.header.name.split('').map((ch, i) => (
              <span
                key={i}
                className="name-char"
                style={{ animationDelay: `${i * 0.08}s` }}
                aria-hidden="true"
              >
                {ch === ' ' ? '\u00A0' : ch}
              </span>
            ))}
          </h1>
          <p className="head-role">{t.header.role}</p>
        </div>
        <div className="head-r">
          <button
            className="theme"
            onClick={() => {
              const cur = document.documentElement.getAttribute('data-theme');
              const next = cur === 'dark' ? 'light' : 'dark';
              document.documentElement.setAttribute('data-theme', next);
              try { localStorage.setItem('theme', next); } catch (e) {}
            }}
            aria-label="toggle theme"
          />
          <button className="lang" onClick={toggle} aria-label="toggle language">
            {t.toggle}
          </button>
        </div>
      </header>

      <section className="sec">
        <div className="log">
          {groupByMonth(LOG).map((group) => (
            <div className="log-month" key={group.ym}>
              <div className="log-month-head">
                <span className="log-month-label">{monthLabel(group.ym, lang)}</span>
                <span className="log-month-rule" aria-hidden />
              </div>
              <div className="log-entries">
                {group.items.map((e) => (
                  <article className="log-entry" key={e.d + e.title[lang]}>
                    <div className="log-meta">
                      <time className="log-date" dateTime={e.d}>{e.d.slice(0, 10).replace(/-/g, '/')}</time>
                      {e.d.includes('T') && (
                        <>
                          <span className="log-sep" aria-hidden>·</span>
                          <span className="log-time">{e.d.slice(11, 16)}</span>
                        </>
                      )}
                      <span className="log-sep" aria-hidden>·</span>
                      <span className="log-proj">{e.p}</span>
                      <span className="log-sep" aria-hidden>·</span>
                      <span className={`log-type log-type-${e.type}`}>{e.type}</span>
                    </div>
                    <p className="log-prose">
                      <span className="log-title">{e.title[lang]}.</span>{' '}
                      <span className="log-body">{e.body[lang]}</span>
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="foot">
        <ul className="contact">
          {t.contact.map((c) => (
            <li key={c.k}>
              <a href={c.href} target="_blank" rel="noopener noreferrer">
                {c.k}
              </a>
            </li>
          ))}
        </ul>
        <p className="foot-copy">{t.footer}</p>
      </footer>
    </main>
  );
}
