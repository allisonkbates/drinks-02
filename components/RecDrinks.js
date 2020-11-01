import {getFilteredDrinks} from '../helpers/drinkFormat';

function RecDrinks(props) {
	const drinks = props.drinks;
	const recDrinks = getFilteredDrinks(drinks, 'daniel-recommends', 3)
	
	return (
		<div>
			{recDrinks}
		</div>
	)
}

export default RecDrinks;