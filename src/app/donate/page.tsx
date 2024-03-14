"use client";
import { DonatePage } from "@/components/DonatePage";
import { GlobalContextProvider } from "@/context/store";
import GlobalStyle from "@/styles/global";
import consoleMessage from "@/utils/consoleMessage";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    consoleMessage();
  }, []);

  return (
    <>
      <GlobalStyle />
      <GlobalContextProvider>
        <DonatePage />
      </GlobalContextProvider>
    </>
  );
}
