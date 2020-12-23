import Card from '../components/Card';

function getFilteredDrinks(drinks, tag, count) {
	return drinks
		.filter(drink => drink.fields.tags && drink.fields.tags.includes(tag))
		.map(drink => <Card key={drink.id} drink={drink}></Card>)
		.slice(0, count)
}

function CardLayout(props) {
	const Drinks = getFilteredDrinks(props.drinks, props.filter, props.count);
	
	return (
		<div className="card-layout">
			{Drinks}
		</div>
	)
}

export default CardLayout;