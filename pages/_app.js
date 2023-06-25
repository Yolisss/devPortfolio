import Navbar from "../components/Navbar";
import "../styles/globals.css";
import SocialMedia from "../components/SocialMedia";
import { Playfair_Display } from "next/font/google";

const playfair_Display = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={playfair_Display.className}>
        <Navbar />
        <Component {...pageProps} />
        <SocialMedia />
      </main>
    </>
  );
}

export default MyApp;
