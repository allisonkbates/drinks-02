import Card from '../components/Card';

function checkTags(drinks) {
	drinks.filter((drink) => drink.fields.tags);
}

function filterTags(drinks, tag) {
	return drinks.filter(drink => drink.fields.tags && drink.fields.tags.includes(tag));
}

function getFilteredDrinks(drinks, tag, num, width) {
	return drinks
		.filter(drink => drink.fields.allTags && drink.fields.allTags.includes(tag))
		.map(drink => <Card key={drink.id} drink={drink} width={width}></Card>)
		.slice(0, num)
}

function displayDrinks(drinks) {
	drinks.map((drink) => 
		<Card key={drink.id} drink={drink}></Card>
	)
}

export {getFilteredDrinks, filterTags, displayDrinks, checkTags};