import Link from 'next/link';
import { table, prepareRecords } from "../../api/utils/Airtable";
import Rec from '../../../components/Rec';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

function Drink(props) {
	const drink = props.specificDrink.fields;
	console.log(drink);

	function formatList(text) {
		const textToRows = (text.split('\n'))
		return <ul className="drink__body">{textToRows.map((row) => {
			return <li key={row}>{row}</li>
		})}
		</ul>
	}

	function formatOrderedList(text) {
		const textToRows = (text.split('\n'))
		return <ol className="drink__body">{textToRows.map((row) => {
			return <li key={row}>{row}</li>
		})}
		</ol>
	}

	return (
			<div>
				<Nav></Nav>
				<div className="drink__page">
				<div className="drink__container">
					<img src={`/${drink.imgpath}.png`} height="200" className="drink__img--mobile"></img>
					<div className="drink__left">
						<h2 className="drink__name">{drink.cocktailName}</h2>
						<Link href={drink.sourceLink || "/"}>
							<a className="drink__source">{drink.source ? `By ${drink.source}` : ``}</a>
						</Link>
						<div className="drink__line"></div>
						<p className="drink__editorial">{drink.editorialNotes || ''}</p>
						<div className="drink__line"></div>
						<h3 className="drink__heading">Ingredients</h3>
						{formatList(drink.ingredients)}
						<div className="drink__line"></div>
						<h3 className="drink__heading">Preparation</h3>
						{formatOrderedList(drink.preparation)}
						<div className="drink__line"></div>
					</div>
					<div className="drink__right">
						<img src={`/${drink.imgpath}.png`} height="200" className="drink__img--desktop"></img>
						<h3 className="drink__heading">Variations</h3>
						<p className="drink__body--link">{drink.variations}</p>
						<h3 className="drink__heading">Barware</h3>
						<p>{drink.barware}</p>
						<h3 className="drink__heading">Tags</h3>
						<p className="drink__body--link">{drink.tags}</p>
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