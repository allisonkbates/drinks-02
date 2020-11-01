import { table, prepareRecords } from './api/utils/Airtable';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import RecDrinks from '../components/RecDrinks';
import Footer from '../components/Footer';

export default function Home(props) {
  return (
    <div>
      <Nav />
      <Hero />
      <RecDrinks drinks={props.drinks}/>
      <Footer />
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
