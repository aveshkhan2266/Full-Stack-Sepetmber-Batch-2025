"use client";

import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../../store/Store";
import { hydrateWishlist, WISHLIST_STORAGE_KEY } from "../../store/Slice/wishlistSlice";

export default function Providers({ children }) {
  useEffect(() => {
    try {
      const savedItems = JSON.parse(
        localStorage.getItem(WISHLIST_STORAGE_KEY) || "[]"
      );
      store.dispatch(hydrateWishlist(savedItems));
    } catch {
      store.dispatch(hydrateWishlist([]));
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
