export const metadata = {
  title: 'Fernando Lima',
  description:
    'Fernando Lima — desenvolvedor e builder. Construindo produtos end-to-end com IA e mostrando tudo no caminho.',
};

export default function Home() {
  return (
    <main className="shell">
      <h1 className="name">Fernando Lima</h1>
      <div className="photo-wrap">
        <img className="photo" src="/me.jpeg" alt="Fernando Lima" />
      </div>
      <p className="caption">Construindo produtos end-to-end com IA e mostrando tudo aqui!</p>
    </main>
  );
}
