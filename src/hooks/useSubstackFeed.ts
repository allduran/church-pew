import { useState, useEffect } from "react";
import type { Article, RSSResponse } from "../types";

const SUBSTACK_URL = "https://bancodelaiglesia.substack.com/feed";
const RSS2JSON_API = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(SUBSTACK_URL)}`;

interface FeedState {
  articles: Article[];
  loading: boolean;
  error: string | null;
}

export function useSubstackFeed(): FeedState {
  const [state, setState] = useState<FeedState>({
    articles: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch(RSS2JSON_API);
        if (!response.ok) throw new Error("Error al cargar los artículos");

        const data: RSSResponse = await response.json();

        if (data.status !== "ok") throw new Error("Feed no disponible");

        setState({ articles: data.items, loading: false, error: null });
      } catch (err) {
        setState({
          articles: [],
          loading: false,
          error: err instanceof Error ? err.message : "Error desconocido",
        });
      }
    };

    fetchFeed();
  }, []);

  return state;
}
