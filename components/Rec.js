import Slider from "react-slick";
import Card from '../components/Card';

function getFilteredDrinks(drinks, tag, count) {
	return drinks
		.filter(drink => drink.fields.tags && drink.fields.tags.includes(tag))
		.map(drink => <Card key={drink.id} drink={drink}></Card>)
		.slice(0, count)
}

export default function Rec(props) {
	/* Drink Formatting */
	const Drinks = getFilteredDrinks(props.drinks, props.filter, props.count);
	
	/* Slider Settings */
	let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
		slidesToScroll: 3,
		responsive: [
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1.5,
				slidesToScroll: 2,
				infinite: true,
				dots: true
			}
		}
		]
	};

	return (
		<div className="rec__container">
			<h2 className="rec__heading">{props.label}</h2>
			<Slider {...settings} className="rec__slider">
				{Drinks}
				{console.log(Drinks)}
			</Slider>
		</div>
	)
}