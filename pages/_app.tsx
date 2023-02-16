import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway } from "@next/font/google";

const raleway = Raleway({
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["cyrillic", "latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={raleway.className}>
      <Component {...pageProps} />
    </main>
  );
}
