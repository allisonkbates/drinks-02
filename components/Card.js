import Link from 'next/link';

export default function Card(props) {
	const drink = props.drink.fields;
	const id = props.drink.id;

	return (
		<div className="card">
			<div className="card__img-container">
				<img src={`/${drink.imgpath}.png`} className="card__img"></img>
			</div>
			<div className="card__drink-name">
				<Link href={`/drinks/${id}`}><a className="card__drink-link">{drink.cocktailName}</a></Link>
			</div>
		</div>
	)
}