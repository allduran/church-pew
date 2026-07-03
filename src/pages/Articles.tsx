import { ArticleCard } from "../components/ArticleCard";
import { useFeed } from "../context/useFeed";

export function Articles() {
  const { articles, loading, error } = useFeed();

  return (
    <main>
      <div className="container">
        <header className="page-header">
          <h1>Artículos</h1>
          <p>Todas las reflexiones publicadas.</p>
        </header>
        {loading && <p className="state-message">Cargando artículos...</p>}
        {error   && <p className="state-message">No se pudieron cargar los artículos.</p>}
        {!loading && !error && articles.map((a, i) => (
          <ArticleCard key={a.link} article={a} index={i} />
        ))}
      </div>
    </main>
  );
}
