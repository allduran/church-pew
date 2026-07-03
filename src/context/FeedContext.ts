import { createContext } from "react";
import type { Article } from "../types";

export interface FeedContextType {
  articles: Article[];
  loading: boolean;
  error: string | null;
}

export const FeedContext = createContext<FeedContextType>({
  articles: [],
  loading: true,
  error: null,
});