import Link from 'next/link';
import Slider from "react-slick";
import { getFilteredDrinks } from '../helpers/drinkFormat';

export default function DrinkSlider(props) {	
	const drinks = getFilteredDrinks(props.drinks, props.allTags, props.count);

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
			<div className="inline">
				<h2 className={`rec__heading ${props.size}`}>{props.label}</h2>
				<Link href="/drinks">
					<a className="drink__body--link inline-link">View All</a>
				</Link>
			</div>
			<Slider {...settings} className="rec__slider">
				{drinks}
			</Slider>
		</div>
	)
}