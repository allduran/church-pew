import type { ReactNode } from "react";
import { useSubstackFeed } from "../hooks/useSubstackFeed";
import { FeedContext } from "./FeedContext";

export function FeedProvider({ children }: { children: ReactNode }) {
  const feed = useSubstackFeed();
  return <FeedContext.Provider value={feed}>{children}</FeedContext.Provider>;
}