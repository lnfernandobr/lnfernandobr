export const metadata = {
  title: 'Fernando Lima',
  description: 'Construindo o fazedorismo.com',
};

export default function Home() {
  return (
    <main className="shell">
      <section className="card">
        <span className="kicker">
          <span className="dot" aria-hidden="true" />
          Construindo
        </span>
        <h1 className="brand">
          fazedorismo<span className="tld">.com</span>
        </h1>
        <p className="by">por Fernando Lima</p>
      </section>
    </main>
  );
}
