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

export async function getStaticProps() {
  const drinks = await drinksTable.select({
    sort: [{field: "cocktailName", direction: "asc"}]
  }).firstPage();
  const preparedDrinks = prepareRecords(drinks);
  return {
    props: {
      drinks: preparedDrinks
    }
  }
}