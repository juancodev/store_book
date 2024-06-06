export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <header>
      <nav>Navigation</nav>
      {children}
    </header>
  );
}
