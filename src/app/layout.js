import { Inter } from "next/font/google";
import "./globals.css";
// import "../styles/global.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RAMA SWAP",
  description: "Greated by Ramaera legal infotech",
};

export default function RootaLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
