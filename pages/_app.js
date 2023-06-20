import Navbar from "../components/Navbar";
import "../styles/globals.css";
import SocialMedia from "../components/SocialMedia";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
