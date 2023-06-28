import Navbar from "../components/Navbar";
import "../styles/globals.css";
import SocialMedia from "../components/SocialMedia";
import { Open_Sans } from "next/font/google";

const bodyFont = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={bodyFont.className}>
        <Navbar />
        <Component {...pageProps} />
        <SocialMedia />
      </main>
    </>
  );
}

export default MyApp;
