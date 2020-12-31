import { table, prepareRecords } from "../../api/utils/Airtable";
import Rec from '../../../components/Rec';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

function Drink(props) {
	const drink = props.specificDrink.fields;

	return (
			<div>
				<Nav></Nav>
				<h1>{drink.cocktailName}</h1>
				<Rec drinks={props.drinks} filter={"daniel-recommends"} count={10} label={"Drinks you might like..."} size="rec__small"></Rec>
				<Footer />
			</div>
	)
}

// This function gets called at build time
export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	const drinks = await table.select({}).firstPage();
  const preparedDrinks = prepareRecords(drinks);

	// Get the paths we want to pre-render based on posts
	const paths = preparedDrinks.map((drink) => ({
		params: { id: drink.id },
	}))

	return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
	const drinks = await table.select({}).firstPage();
	const preparedDrinks = prepareRecords(drinks);
	const specificDrink = preparedDrinks.find(drink => drink.id === params.id)
  return {
    props: {
			specificDrink: specificDrink,
			drinks: preparedDrinks
    }
  }
}

export default Drink;