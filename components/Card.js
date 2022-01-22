import Link from 'next/link';

export default function Card(props) {
	// console.log(props.drink);
	const drink = props.drink.fields;
	const id = props.drink.id;
	let drinkUrl = drink.drinkImg ? drink.drinkImg[0].url : '/alaska.png'; 

	return (
		<Link href={`/drinks/${id}`} className={`card__link`}>
			<div className="card">
				<div className={`card__img-container ${props.width}`}>
					<img src={drinkUrl} className="card__img"></img>
				</div>
				<div className="card__drink-name">
					<Link href={`/drinks/${id}`}><a className="card__drink-link">{drink.cocktailName}</a></Link>
				</div>
			</div>
		</Link>
	)
}