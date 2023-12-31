import Navbar from "../components/Navbar";
import "../styles/globals.css";
import SocialMedia from "../components/SocialMedia";
import { Open_Sans } from "next/font/google";
import Script from "next/script";

const bodyFont = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={`container ${bodyFont.className}`}>
        <Navbar />
        <Component {...pageProps} />
        <Script src="https://buttons.github.io/buttons.js" />
        <SocialMedia />
      </main>
    </>
  );
}

export default MyApp;
