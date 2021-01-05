import Link from 'next/link';
import { table, prepareRecords } from "../../api/utils/Airtable";
import Rec from '../../../components/Rec';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

function Drink(props) {
	const drink = props.specificDrink.fields;

	return (
			<div>
				<Nav></Nav>
				<div className="drink__page">
				<div className="drink__container">
					<img src={`/${drink.imgpath}.png`} height="200" className="drink__img--mobile"></img>
					<div className="drink__left">
						<h2 className="drink__name">{drink.cocktailName}</h2>
						<Link href={drink.sourceLink || "/"}><a className="drink__source">{`By ${drink.source}`}</a></Link> {/* Change this to conditional based on whether this data is available */}
						<div className="drink__line"></div>
						<p className="drink__editorial">{drink.editorialNotes}</p>
						<h3>Ingredients</h3>
						<p>{drink.ingredients}</p>
						<h3>Preparation</h3>
						<p>{drink.preparation}</p>
					</div>
					<div className="drink__right">
						<img src={`/${drink.imgpath}.png`} height="200" className="drink__img--desktop"></img>
						<h3>Variations</h3>
						<p>{drink.variations}</p>
						<h3>Barware</h3>
						<p>{drink.barware}</p>
						<h3>Tags</h3>
						<p>{drink.tags}</p>
					</div>
				</div>
				</div>
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