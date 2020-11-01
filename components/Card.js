export default function Card(props) {
	const drink = props.drink.fields;
	return (
		<div>
			<h1>{drink.cocktailName}</h1>
		</div>
	)
}