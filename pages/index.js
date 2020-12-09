import { table, prepareRecords } from './api/utils/Airtable';
import Nav from '../components/Nav/Nav';
import Hero from '../components/Hero/Hero';
import CardLayout from '../components/CardLayout';
import Footer from '../components/Footer';

export default function Home(props) {
  return (
    <div>
      <Nav />
      <Hero />
     {/* <CardLayout drinks={props.drinks} filter={"daniel-recommends"} count={6}/> */}
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
