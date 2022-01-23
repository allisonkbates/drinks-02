import { drinksTable, prepareRecords } from './api/utils/Airtable';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import DrinkSlider from '../components/DrinkSlider';
import DrinksListLayout from '../components/DrinksListLayout';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { useMenu } from '../helpers/menuState';

const MenuExpandedStyles = styled.div`
  position: absolute;
  background-color: red;
  z-index: 3;
  color: black;
  transform: translateX(-150%);
  ${(props) => props.open && `transform: translateX(0);`}
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

function MenuExpanded() {
  const { menuOpen } = useMenu()
  return (
    <MenuExpandedStyles open={menuOpen}>
      <h1>I'm an expanded menu for mobile!</h1>
    </MenuExpandedStyles>
  )
}

export default function Home(props) {
  return (
    <div className="">
      <Nav />
      <MenuExpanded></MenuExpanded>
      <Hero />
      <DrinkSlider drinks={props.drinks} allTags={"all"} count={10} label={"Recently Added"}/>
      <DrinkSlider drinks={props.drinks} allTags={"in-stock"} count={10} label={"Drinks based on your liquor cabinet..."}/>
      <DrinkSlider drinks={props.drinks} allTags={"daniel-recommends"} count={10} label={"Daniel recommends..."}/>
      <DrinkSlider drinks={props.drinks} allTags={"gin"} count={10} label={"Gin-based cocktails"}/>
      <DrinkSlider drinks={props.drinks} allTags={"whiskey"} count={10} label={"Whiskey-based cocktails"}/>
      <DrinksListLayout drinks={props.drinks} presetFilter={'daniel-recommends'}/>
      <Footer />
    </div>
  )
}

/* Note: This is the same query as on the /drinks page. */
export async function getServerSideProps() {
  const drinks = await drinksTable.select({
    view: "Publish View"
  }).firstPage(); /* This may break down at some point because we're only fetching the first page of drinks */
  const preparedDrinks = prepareRecords(drinks);
  return {
    props: {
      drinks: preparedDrinks
    }
  }
}
