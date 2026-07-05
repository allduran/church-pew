export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <span className="footer-copy">
          © {new Date().getFullYear()} — Desde el banco de la iglesia
        </span>
        <div className="footer-links">
          <a href="https://bancodelaiglesia.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
          <a href="https://x.com/fromchurchpew" target="_blank" rel="noopener noreferrer">X</a>
        </div>
      </div>
    </footer>
  );
}
