import { useParams, Link } from "react-router-dom";
import { useFeed } from "../context/useFeed";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("es-ES", {
    day: "numeric", month: "long", year: "numeric",
  });
}

export function ArticleDetail() {
  const { index } = useParams<{ index: string }>();
  const { articles, loading, error } = useFeed();

  if (loading) return <div className="container"><p className="state-message">Cargando...</p></div>;
  if (error)   return <div className="container"><p className="state-message">Error al cargar el artículo.</p></div>;

  const article = articles[Number(index)];
  if (!article) return <div className="container"><p className="state-message">Artículo no encontrado.</p></div>;

  return (
    <main>
      <div className="container">
        <div className="article-detail">
          <Link to="/articulos" className="article-back">← Todos los artículos</Link>
          <header className="article-detail-header">
            <span className="article-meta">{formatDate(article.pubDate)}</span>
            <h1>{article.title}</h1>
          </header>
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>
    </main>
  );
}
