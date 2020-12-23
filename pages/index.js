import { table, prepareRecords } from './api/utils/Airtable';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Rec from '../components/Rec';
import Footer from '../components/Footer';

export default function Home(props) {
  return (
    <div className="home__container">
      <Nav />
      <Hero />
      <Rec drinks={props.drinks} filter={"daniel-recommends"} count={6} label={"Recently Added"}/>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const drinks = await table.select({}).firstPage();
    return {
      props: {
        drinks: prepareRecords(drinks)
      }
    }
  } catch(err) {
    console.error(err);
  }
}
