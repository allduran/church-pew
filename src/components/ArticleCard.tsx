import { Link } from "react-router-dom";
import type { Article } from "../types";

interface Props {
  article: Article;
  index: number;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("es-ES", {
    day: "numeric", month: "long", year: "numeric",
  });
}

function stripHtml(html: string): string {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

export function ArticleCard({ article, index }: Props) {
  return (
    <article className="article-card">
      <div className="article-card-rule" />
      <div className="article-card-body">
        <span className="article-meta">{formatDate(article.pubDate)}</span>
        <h2>
          <Link to={`/articulos/${index}`}>{article.title}</Link>
        </h2>
        <p className="article-excerpt">{stripHtml(article.description)}</p>
        <Link to={`/articulos/${index}`} className="article-read-more">
          Leer artículo →
        </Link>
      </div>
    </article>
  );
}
