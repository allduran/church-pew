import { useContext } from "react";
import { FeedContext } from "./FeedContext";

export function useFeed() {
  return useContext(FeedContext);
}