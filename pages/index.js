import { table, prepareRecords } from './api/utils/Airtable';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Rec from '../components/Rec';
import Footer from '../components/Footer';

export default function Home(props) {
  return (
    <div className="">
      <Nav />
      <Hero />
      <Rec drinks={props.drinks} filter={"daniel-recommends"} count={10} label={"Recently Added"}/>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const drinks = await table.select({}).firstPage();
  const preparedDrinks = prepareRecords(drinks);
  return {
    props: {
      drinks: preparedDrinks
    }
  }
}
