import { table, prepareRecords, prepareRecord } from '../../api/utils/Airtable';

function Drink(props) {
	return (
		<div>
			<h1>Hello World</h1>
			{console.log(props.fields)}
		</div>
	)
}

export async function getStaticPaths() {
  try {
		const drinks = await table.select({}).firstPage();
		const preparedDrinks = prepareRecords(drinks);
		const paths = preparedDrinks.map((drink) => ({
			params: { id: drink.id },
		}))
		console.log(paths);
		return { paths, fallback: false }
  } catch(err) {
    console.error(err);
  }
}

export async function getStaticProps({ params }) {
	const drinks = await table.select({}).firstPage();
	console.log(`Prepared Drink: ${drinks}`)
	const preparedDrinks = await prepareRecords(drinks);
	//const preparedDrinks = prepareRecord(drinks);
	
  const specificDrink = await preparedDrinks.filter(drink => drink.id === params.id);
	console.log(`Specific Drink: ${preparedDrinks}`);
  return { props: {specificDrink }}
}

export default Drink;