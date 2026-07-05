import { Link } from "react-router-dom";
import { ArticleCard } from "../components/ArticleCard";
import { useFeed } from "../context/useFeed";

export function Home() {
  const { articles, loading, error } = useFeed();

  return (
  <main>
    <div className="container">
      <div className="home-main-grid">

        {/* Izquierda: hero + about */}
        <div className="home-left">
          <div className="home-hero-grid">
            <div className="home-hero-rule" />
            <div>
              <blockquote>"Dios no nos llama a ser exitosos, sino a ser fieles."</blockquote>
              — Thomas Merton
            </div>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9375rem", marginTop: "2.5rem", maxWidth: "480px" }}>
            Reflexiones para el creyente ordinario. Teología reformada aplicada
            a la vida que no aparece en los testimonios del domingo.
          </p>
        </div>

        {/* Derecha: últimos artículos */}
        <div className="home-right">
          <p className="section-label">Últimos artículos</p>
          {loading && <p className="state-message">Cargando artículos...</p>}
          {error   && <p className="state-message">No se pudieron cargar los artículos.</p>}
          {!loading && !error && articles.slice(0, 3).map((a, i) => (
            <ArticleCard key={a.link} article={a} index={i} />
          ))}
          {!loading && !error && articles.length > 3 && (
            <Link to="/articulos" className="view-all-link">Ver todos los artículos →</Link>
          )}
        </div>

      </div>
    </div>
  </main>
);
}
