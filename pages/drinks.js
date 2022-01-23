/* This page is largely repetitive from the home page, but only includes the filters for cocktails and loses the "homepage" component feel. */

import { drinksTable, prepareRecords } from './api/utils/Airtable';
import Nav from '../components/Nav';
import DrinksListLayout from '../components/DrinksListLayout';
import Footer from '../components/Footer';

export default function drinks(props) {
	return (
		<div>
			<Nav />
			<DrinksListLayout drinks={props.drinks} presetFilter={'daniel-recommends'}/>
			<Footer />
		</div>
	);
}

/* Note: This is the same query as on the /index page. */
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