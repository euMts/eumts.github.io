import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matheus Pass | Donate",
  description: "Engenheiro de Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1c1c1c" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@100;200&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/images/ico/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
