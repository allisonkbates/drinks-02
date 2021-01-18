function getFilteredDrinks(drinks, tag, count) {
	return drinks
		.filter(drink => drink.fields.tags && drink.fields.tags.includes(tag))
		.map(drink => <Card key={drink.id} drink={drink}></Card>)
		.slice(0, count)
}
