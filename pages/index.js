import { drinksTable, prepareRecords } from './api/utils/Airtable';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Rec from '../components/Rec';
import Footer from '../components/Footer';

export default function Home(props) {
  return (
    <div className="">
      <Nav />
      <Hero />
      <Rec drinks={props.drinks} allTags={"all"} count={10} label={"Recently Added"}/>
      <Rec drinks={props.drinks} allTags={"in-stock"} count={10} label={"Drinks based on your liquor cabinet..."}/>
      <Rec drinks={props.drinks} allTags={"daniel-recommends"} count={10} label={"Daniel recommends..."}/>
      <Rec drinks={props.drinks} allTags={"gin"} count={10} label={"Gin-based cocktails"}/>
      <Rec drinks={props.drinks} allTags={"whiskey"} count={10} label={"Whiskey-based cocktails"}/>
      {/* Add a new component here to filter by alcohol - design first :) */}
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const drinks = await drinksTable.select({}).firstPage();
  const preparedDrinks = prepareRecords(drinks);
  return {
    props: {
      drinks: preparedDrinks
    }
  }
}
