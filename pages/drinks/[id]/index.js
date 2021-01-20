import Link from 'next/link';
import { drinksTable, prepareRecords } from "../../api/utils/Airtable";
import Rec from '../../../components/Rec';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

// This component is TOO BIG - break out into smaller components.

function Drink(props) {
	const drink = props.specificDrink.fields;
	console.log(drink);

	// for the ingredients
	function formatList(text) {
		const textToRows = (text.split('\n'))
		return <ul className="drink__body">{textToRows.map((row) => {
			return <li className="drink__list-items" key={row}>{row}</li>
		})}
		</ul>
	}

	// for preparation
	function formatOrderedList(text) {
		const textToRows = (text.split('\n'))
		return <ol className="drink__body">{textToRows.map((row) => {
			return <li className="drink__list-items" key={row}>{row}</li>
		})}
		</ol>
	}

	// to determine whether to show editorial styling
	const editorialNotes = drink.editorialNotes;
	let showEditorial;
	if (editorialNotes) {
		showEditorial;	
	/*	<div>
			<p className="drink__editorial">{drink.editorialNotes || ''}</p>
			<div className="drink__line"></div>
		</div>*/
	} else {
		showEditorial;
	}

	function formatVariations(variations) {
		return <ul className="drink__variation">{variations.map(variation => {
			return <li className="drink__body drink__variations" key={variation}>{variation}</li>
		})}</ul>
	}

	const variations = drink.variations;
	let showVariations;
	if (variations) {
		showVariations = 
		<div>
			<h3 className="drink__heading">Variations</h3>
			{formatVariations(drink.variationsLookup)}
		</div>
	} else {
		showVariations;
	}

	const ingNeeded = drink.ingNeededStrict;
	let showIngNeeded;
	if (ingNeeded) {
		showIngNeeded = 
		<div className="drink__ingNeeded">
			<h3 className="drink__heading--accent">Ingredients Needed</h3>
			{formatVariations(ingNeeded)}
		</div>
	} else {
		showIngNeeded;
	}


	return (
			<div>
				<Nav></Nav>
				<div className="drink__page">
				<div className="drink__container">
					<img src={`/${drink.imgPath}.png`} height="200" className="drink__img--mobile"></img>
					<div className="drink__left">
						<h2 className="drink__name">{drink.cocktailName}</h2>
						<Link href={drink.sourceLink || "/"}>
							<a className="drink__source">{drink.source ? `By ${drink.source}` : ``}</a>
						</Link>
						<div className="drink__line"></div>
						{showEditorial}
						<h3 className="drink__heading">Ingredients</h3>
						{formatList(drink.ingredients)}
						<div className="drink__line"></div>
						<h3 className="drink__heading">Preparation</h3>
						{formatOrderedList(drink.preparation)}
					</div>
					<div className="drink__right">
						<img src={`/${drink.imgPath}.png`} height="200" className="drink__img--desktop"></img>
						{showVariations}
						<h3 className="drink__heading">Barware</h3>
						<div className="drink__glassware">
							<img src={`/${drink.glassware}.svg`}></img>
							<p className="drink__body">{drink.glassware}</p>
						</div>
							{showIngNeeded}
						{/*
						<h3 className="drink__heading">Tags</h3>
						<p className="drink__body--link">{drink.allTags}</p>
						*/}
					</div>
				</div>
				</div>
				<Rec drinks={props.drinks} allTags={"daniel-recommends"} count={10} label={"Drinks you might like..."} size="rec__small"></Rec>
				<Footer />
			</div>
	)
}

// This function gets called at build time
export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	const drinks = await drinksTable.select({}).firstPage();
  const preparedDrinks = prepareRecords(drinks);

	// Get the paths we want to pre-render based on posts
	const paths = preparedDrinks.map((drink) => ({
		params: { id: drink.id },
	}))

	return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
	const drinks = await drinksTable.select({}).firstPage();
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