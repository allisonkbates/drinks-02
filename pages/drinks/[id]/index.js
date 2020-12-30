import { table, prepareRecords } from "../../api/utils/Airtable";

function Drink(props) {
	const drink = props.drinks.fields;

	return (
			<div>
				<h1>{drink.cocktailName}</h1>
				{console.log(props)}
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
      drinks: specificDrink
    }
  }
}

export default Drink;