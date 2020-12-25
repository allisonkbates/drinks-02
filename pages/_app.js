/* My Styles */
import '../styles/globals.css';
import '../styles/nav.scss';
import '../styles/hero.scss';
import '../styles/rec.scss';
import '../styles/form.scss';

/* React Slick Styles */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
