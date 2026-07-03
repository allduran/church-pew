import { NavLink, type NavLinkRenderProps } from "react-router-dom";

export function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <NavLink to="/" className="site-title">
          <span className="site-title-accent" />
          Desde el banco de la iglesia
        </NavLink>
        <nav>
          <NavLink
            to="/articulos"
            className={({ isActive }: NavLinkRenderProps) => isActive ? "active" : ""}
          >
            Artículos
          </NavLink>
          <NavLink
            to="/suscribirse"
            className={({ isActive }: NavLinkRenderProps) => isActive ? "active" : ""}
          >
            Suscribirse
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
