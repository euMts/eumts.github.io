"use client";
import { DonatePage } from "@/components/DonatePage";
import { GlobalContextProvider } from "@/context/store";
import GlobalStyle from "@/styles/global";
import consoleMessage from "@/utils/consoleMessage";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    const handleLoad = () => {
      consoleMessage();
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
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
