"use client";
import { NotFoundPage } from "@/components/NotFoundPage";
import GlobalStyle from "@/styles/global";
import consoleMessage from "@/utils/consoleMessage";

export default function NotFound() {
  consoleMessage()
  return (
    <>
      <GlobalStyle />
      <NotFoundPage />
    </>
  );
}
