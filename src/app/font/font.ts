import { Inter, Poppins } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200"],
  display: "swap",
  variable: "--font-poppins",
});
