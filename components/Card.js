export default function Card(props) {
	const drink = props.drink.fields;

	return (
		<div className="card">
			<div className="card__img-container">
				<img src={`/${drink.imgpath}.png`} className="card__img"></img>
			</div>
			<div className="card__drink-name">
				<h2>{drink.cocktailName}</h2>
			</div>
		</div>
	)
}