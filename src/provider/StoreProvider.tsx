"use client";
import makeStore, { AppStore } from "@/store/store";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ReactNode, useEffect, useRef } from "react";
import { Provider } from "react-redux";

interface CounterStoreProviderProps {
  readonly children: ReactNode;
}

export default function StoreProvider({ children }: CounterStoreProviderProps) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }
  useEffect(() => {
    if (storeRef.current != null) {
      // configure listeners using the provided defaults
      // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
      const unsubscribe = setupListeners(storeRef.current.dispatch);
      return unsubscribe;
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
