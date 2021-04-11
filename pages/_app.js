/* React Slick Styles */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* My Styles */
import '../styles/globals.css';
import '../styles/nav.scss';
import '../styles/hero.scss';
import '../styles/rec.scss';
import '../styles/card.scss';
import '../styles/form.scss';
import '../styles/drink.scss';
import '../styles/filter.scss';
import { MenuStateProvider } from "../helpers/menuState";


function MyApp({ Component, pageProps }) {
  return (
    <MenuStateProvider>
      <Component {...pageProps} />
    </MenuStateProvider>
  )
}

export default MyApp;