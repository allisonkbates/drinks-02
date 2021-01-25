import Link from 'next/link';
import { drinksTable, prepareRecords } from './api/utils/Airtable';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import DrinkSlider from '../components/DrinkSlider';
import Footer from '../components/Footer';

export default function Home(props) {
  return (
    <div className="">
      <Nav />
      <Hero />
      <DrinkSlider drinks={props.drinks} allTags={"all"} count={10} label={"Recently Added"}/>
      <DrinkSlider drinks={props.drinks} allTags={"in-stock"} count={10} label={"Drinks based on your liquor cabinet..."}/>
      <DrinkSlider drinks={props.drinks} allTags={"daniel-recommends"} count={10} label={"Daniel recommends..."}/>
      <DrinkSlider drinks={props.drinks} allTags={"gin"} count={10} label={"Gin-based cocktails"}/>
      <DrinkSlider drinks={props.drinks} allTags={"whiskey"} count={10} label={"Whiskey-based cocktails"}/>
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
