import { useState } from 'react';
import Card from '../components/Card';
import FilterButton from '../components/FilterButton';

const FILTER_MAP = {
	All: () => true,
	/* Find out if liquors/tags could be abstracted to something like this!
		Tag: drink => drink.fields.allTags && drink.fields.allTags.includes(tag),
	*/
	Whiskey: drink => drink.fields.allTags && drink.fields.allTags.includes('whiskey'),
	Gin: drink => drink.fields.allTags && drink.fields.allTags.includes('gin'),
	Vodka: drink => drink.fields.allTags && drink.fields.allTags.includes('vodka'),
	Rum: drink => drink.fields.allTags && drink.fields.allTags.includes('rum'),
	Tequila: drink => drink.fields.allTags && drink.fields.allTags.includes('tequila'),
	"Your Liquor Cabinet": drink => drink.fields.allTags && drink.fields.allTags.includes('in-stock'),
	"Daniel Recommends": drink => drink.fields.allTags && drink.fields.allTags.includes('daniel-recommends')
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function DrinksListLayout(props) {
	const drinks = props.drinks;
	const [filter, setFilter] = useState('All');

	
	const drinksList = drinks
		.filter(FILTER_MAP[filter])
		.map(drink => (
			<Card key={drink.id} drink={drink} width={'card-width-400'}/>
		))
	
	const filterList = FILTER_NAMES.map(name => (
		<FilterButton
			key={name}
			name={name} 
      isPressed={name === filter}
      setFilter={setFilter}
		/>
	))		

	return (
		<div className="page__container">
			<div className="filter__container">
				{filterList}
			</div>
			<div className="drinksList__container">
				{drinksList}
			</div>
		</div>
		
	
	)
}
